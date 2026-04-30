<template>
  <div class="home-page">
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h4 class="date-badge">1 - 3 MAY 2026</h4>
        <h1 class="main-title">CFLMUN'26</h1>
        <p class="motto">"Shaping the Future in the Light of Diplomacy."</p>

        <div class="countdown">
          <div class="time-box">
            <span class="number">{{ formatTime(timeLeft.days) }}</span>
            <span class="label">Days</span>
          </div>
          <div class="separator">:</div>
          <div class="time-box">
            <span class="number">{{ formatTime(timeLeft.hours) }}</span>
            <span class="label">Hours</span>
          </div>
          <div class="separator">:</div>
          <div class="time-box">
            <span class="number">{{ formatTime(timeLeft.minutes) }}</span>
            <span class="label">Minutes</span>
          </div>
          <div class="separator">:</div>
          <div class="time-box">
            <span class="number">{{ formatTime(timeLeft.seconds) }}</span>
            <span class="label">Seconds</span>
          </div>
        </div>
        <div class="cta-group">
          <NuxtLink to="/apply" class="btn btn-primary">Apply Now!</NuxtLink>
          <NuxtLink to="/committees" class="btn btn-outline">Committees</NuxtLink>

          <div class="calendar-wrapper">
            <button class="btn btn-calendar" @click="toggleCalendar">
              📅 Add to Calendar
            </button>
            <transition name="dropdown">
              <div v-if="showCalendar" class="calendar-dropdown">
                <a :href="googleCalendarUrl" target="_blank" @click="showCalendar = false">
                  🗓️ Google Calendar
                </a>
                <a :href="appleCalendarUrl" download="CFLMUN26.ics" @click="showCalendar = false">
                  🍎 Apple Calendar
                </a>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>


    <section class="welcome container">
      <div class="section-header">
        <h2>WELCOME</h2>
        <div class="red-line"></div>
      </div>

      <div class="slider-wrapper">
        <button class="nav-arrow left-arrow" @click="manualPrev" aria-label="Previous Message">
          &#10094;
        </button>

        <div class="message-box">
          <transition name="fade" mode="out-in">
            <div :key="currentMessageIndex" class="slide-content">
              <p class="message-text">{{ welcomeMessages[currentMessageIndex].text }}</p>

              <div class="sg-sign">
                <strong>{{ welcomeMessages[currentMessageIndex].name }}</strong>
                <span>{{ welcomeMessages[currentMessageIndex].title }}</span>
              </div>
            </div>
          </transition>
        </div>

        <button class="nav-arrow right-arrow" @click="manualNext" aria-label="Next Message">
          &#10095;
        </button>
      </div>

      <div class="slider-dots">
        <span v-for="(msg, index) in welcomeMessages" :key="msg.id" class="dot"
          :class="{ active: index === currentMessageIndex }" @click="goToSlide(index)">
        </span>
      </div>
    </section>

    <div class="section-divider"></div>

    <section class="contact-section">
      <div class="container contact-container">

        <div class="contact-info">
          <div class="contact-header">
            <h2>CONTACT US</h2>
            <div class="red-line left-aligned"></div>
          </div>
          <p class="contact-desc">
            Have questions about the committees, venue, or application process?
            We are here to help! Fill out the form, and our team will get back to you as soon as possible.
          </p>

          <div class="info-items">
            <div class="info-item">
              <span class="icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Çorlu Borsa İstanbul Science High School</p>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">📧</span>
              <div>
                <strong>Email</strong>
                <p>cfl.munn@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <form @submit.prevent="submitContactForm" class="contact-form">
            <div class="form-row">
              <div class="form-group half">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" v-model="contactForm.fullName" required placeholder="John Doe">
              </div>
              <div class="form-group half">
                <label for="email">Email Address</label>
                <input type="email" id="email" v-model="contactForm.email" required placeholder="name@example.com">
              </div>
            </div>

            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" v-model="contactForm.message" rows="5" required
                placeholder="How can we help you?"></textarea>
            </div>

            <div v-if="formStatus.message" :class="['status-message', formStatus.type]">
              {{ formStatus.message }}
            </div>

            <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { useNuxtApp } from '#app'

// --- İLETİŞİM FORMU MANTIĞI ---
const contactForm = ref({
  fullName: '',
  email: '',
  message: ''
})

// --- TAKVİM ---
const showCalendar = ref(false)

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value
}

// Dışarı tıklayınca kapat
const handleOutsideClick = (e) => {
  if (!e.target.closest('.calendar-wrapper')) {
    showCalendar.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

const googleCalendarUrl = computed(() => {
  // Google Calendar çok günlü etkinliği destekler, DTEND bitiş günü +1 alır (exclusive)
  // 1 Mayıs 09:00 → 3 Mayıs 18:30 arası tek etkinlik
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
  const title = encodeURIComponent("CFLMUN'26")
  const details = encodeURIComponent("CFLMUN'26 - Corlu Borsa Istanbul Science High School Model United Nations Conference 2026\n\n1 May: 09:00 - 18:00\n2 May: 10:00 - 18:00\n3 May: 10:00 - 18:30")
  const location = encodeURIComponent("Çorlu Borsa İstanbul Science High School, Çorlu, Tekirdağ")
  const start = '20260501T090000'
  const end = '20260503T183000'
  return `${base}&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`
})

const appleCalendarUrl = computed(() => {
  // ICS formatında 3 ayrı VEVENT (her gün için)
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',

    // 1. Gün
    'BEGIN:VEVENT',
    'DTSTART:20260501T090000',
    'DTEND:20260501T180000',
    "SUMMARY:CFLMUN'26 - Day 1",
    'DESCRIPTION:CFLMUN\'26 Day 1 | Registration & Opening Ceremony',
    'LOCATION:Çorlu Borsa İstanbul Science High School\\, Çorlu\\, Tekirdağ',
    'END:VEVENT',

    // 2. Gün
    'BEGIN:VEVENT',
    'DTSTART:20260502T100000',
    'DTEND:20260502T180000',
    "SUMMARY:CFLMUN'26 - Day 2",
    'DESCRIPTION:CFLMUN\'26 Day 2',
    'LOCATION:Çorlu Borsa İstanbul Science High School\\, Çorlu\\, Tekirdağ',
    'END:VEVENT',

    // 3. Gün
    'BEGIN:VEVENT',
    'DTSTART:20260503T100000',
    'DTEND:20260503T183000',
    "SUMMARY:CFLMUN'26 - Day 3 & Closing",
    'DESCRIPTION:CFLMUN\'26 Day 3 | Closing Ceremony',
    'LOCATION:Çorlu Borsa İstanbul Science High School\\, Çorlu\\, Tekirdağ',
    'END:VEVENT',

    'END:VCALENDAR'
  ].join('\r\n')
  return 'data:text/calendar;charset=utf8,' + encodeURIComponent(ics)
})

const isSubmitting = ref(false)
const formStatus = ref({ type: '', message: '' })

const submitContactForm = async () => {
  isSubmitting.value = true
  formStatus.value = { type: '', message: '' }

  try {
    // Firebase plugin'den db'yi al
    const nuxtApp = useNuxtApp()

    // $firebase.db veya $firestore şeklinde tanımlanmış olabilir,
    // ikisini de dene
    let db = null

    if (nuxtApp.$firebase && nuxtApp.$firebase.db) {
      db = nuxtApp.$firebase.db
    } else if (nuxtApp.$firestore) {
      db = nuxtApp.$firestore
    } else if (nuxtApp.$firebase && nuxtApp.$firebase.firestore) {
      db = nuxtApp.$firebase.firestore
    }

    if (!db) {
      throw new Error('Firestore bağlantısı kurulamadı. Plugin yapılandırmasını kontrol edin.')
    }

    await addDoc(collection(db, 'contact_messages'), {
      fullName: contactForm.value.fullName,
      email: contactForm.value.email,
      message: contactForm.value.message,
      createdAt: new Date()
    })

    formStatus.value = { type: 'success', message: 'Your message has been sent successfully!' }
    contactForm.value = { fullName: '', email: '', message: '' }

    setTimeout(() => {
      formStatus.value = { type: '', message: '' }
    }, 5000)

  } catch (error) {
    console.error('Form gönderim hatası:', error)

    // Hatanın türüne göre kullanıcıya daha açıklayıcı mesaj ver
    if (error.code === 'permission-denied') {
      formStatus.value = { type: 'error', message: 'Permission denied. Please check Firebase rules.' }
    } else if (error.message && error.message.includes('Plugin')) {
      formStatus.value = { type: 'error', message: 'Firebase connection error. Please contact us via email.' }
    } else {
      formStatus.value = { type: 'error', message: 'An error occurred. Please try again later.' }
    }
  } finally {
    isSubmitting.value = false
  }
}

// --- COUNTDOWN MANTIĞI ---
const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timerInterval = null
const targetDate = new Date('2026-05-01T09:00:00').getTime()

const calculateTime = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    clearInterval(timerInterval)
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return
  }

  timeLeft.value = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000)
  }
}

const formatTime = (value) => {
  return value < 10 ? `0${value}` : value
}

// --- SLIDER MANTIĞI ---
const welcomeMessages = [
  {
    id: 1,
    name: 'Sümeyra Gülsüm Çolak',
    title: 'Secretary General',
    text: `Dear delegates,

As Secretary General of the Secretariat, I am delighted to welcome you to CFLMUN'26, the first Model United Nations event at our school.
CFLMUN'26 aims to provide a supportive and dynamic academic environment in which delegates can practise diplomacy, critical thinking and public speaking when discussing global issues. We aim to encourage debate and active participation in all committees throughout the conference.

We hope that CFLMUN'26 will be a valuable and inspiring experience for each of you. We have all worked very hard to create an informative and enjoyable conference.

We look forward to meeting you, listening to your ideas, and taking this great first step with you on the journey of CFLMUN'26.

Best Regards,
`
  },
  {
    id: 2,
    name: 'Murat Efe Eroğlu',
    title: 'Director General',
    text: `Distinguished Delegates,

It's an honour to welcome you all to Corlu İstanbul Science High School Model United Nations Conference 2026 as the Director General.

CFLMUN'26 is not just a conference, it's an environment to connect, debate and find solutions for the future. In this conference you can connect with every MUN lover, debate with other people to find solutions and choose the best option for everyone. In this conference every delegate is just not representing a country or a character, they represent every citizen of their country with thinking out of the box and calculating every point of view from all walks of life.

Our Academy and Organization teams worked hard with dedication to make this conference enjoyable for everyone. Every committee has the latest topics that you can have fun while debating whether your role or country and you can see various details in every inch of our venue from our team.

This was all generations of CFLMUN club members' dream and this year the dream is becoming true. This conference doesn't carry things from the team of 2026, it carries things from the team of 2025, 2024, 2023 and even more… That's why we're working hard about this conference because our main mission is making everyone comfortable and putting something valuable to them in this conference.

If there's a problem or any questions you have, please don't hesitate to send an e-mail. We're very excited to see you in CFLMUN'26. See you there…

Best Regards,
`
  },
  {
    id: 3,
    name: 'Yiğit Demir',
    title: 'Deputy Director General',
    text: `Dear Delegates,

It is with great pleasure and honor that I welcome you to CFLMUN'26 as the Deputy Director General. In this conference, you will engage in meaningful dialogue, share diverse perspectives, and address pressing global issues. Through collaboration, you will enhance  your understanding of international relations, strengthen your communication skills, and build lasting connections while creating unforgettable memories.

We are more than honored to welcome you to this conference. 

Best of Regards,
`
  }
]

const currentMessageIndex = ref(0)
let sliderInterval = null

const nextSlide = () => {
  currentMessageIndex.value = (currentMessageIndex.value + 1) % welcomeMessages.length
}

const prevSlide = () => {
  currentMessageIndex.value = (currentMessageIndex.value - 1 + welcomeMessages.length) % welcomeMessages.length
}

const startSliderTimer = () => {
  sliderInterval = setInterval(nextSlide, 7000)
}

const resetSliderTimer = () => {
  if (sliderInterval) clearInterval(sliderInterval)
  startSliderTimer()
}

const manualNext = () => {
  nextSlide()
  resetSliderTimer()
}

const manualPrev = () => {
  prevSlide()
  resetSliderTimer()
}

const goToSlide = (index) => {
  currentMessageIndex.value = index
  resetSliderTimer()
}

onMounted(() => {
  calculateTime()
  timerInterval = setInterval(calculateTime, 1000)
  startSliderTimer()
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
  if (sliderInterval) clearInterval(sliderInterval)
})
</script>

<style scoped>
/* GLOBAL & HERO STYLES */
.home-page {
  /* Koyu tema varsayılan */
  background-color: #0b0e14;
  color: #fff;
}

.hero {
  height: 100vh;
  background-image: url('/img/okul-anasayfa-foto.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 20px;
}

.main-title {
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 5px;
  margin: 10px 0;
  background: -webkit-linear-gradient(#fff, #ccc);
  -webkit-background-clip: text;
  font-family: 'Times New Roman', Times, serif;
}

.date-badge {
  letter-spacing: 4px;
  font-weight: 800;
  color: #ffffff !important;
  font-size: 1.5rem;
  margin-bottom: 15px;
  animation: candle-flicker 3s infinite linear;
}

@keyframes candle-flicker {

  0%,
  100% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  50% {
    opacity: 0.9;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }
}

.motto {
  font-size: 1.5rem;
  color: #ddd;
  font-weight: 300;
  margin-bottom: 20px;
}

/* COUNTDOWN & BUTTONS */
.countdown {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.time-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  padding: 10px 15px;
  border-radius: 8px;
  min-width: 80px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #ccc;
  margin-top: 5px;
}

.separator {
  font-size: 2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 5px;
}

.btn {
  display: inline-block;
  padding: 15px 35px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  margin: 10px;
  transition: 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #19213a;
  color: white;
  border: 2px solid #19213a;
}

.btn-primary:hover:not(:disabled) {
  background: #101526;
  border-color: #101526;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: black;
}

/* WELCOME SECTION */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.welcome {
  padding: 80px 20px;
  text-align: center;
}

.section-header h2,
.contact-header h2 {
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
}

.red-line {
  width: 60px;
  height: 4px;
  background: #19213a;
  margin: 0 auto 40px;
}

.calendar-wrapper {
  position: relative;
  display: inline-block;
}

.btn-calendar {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-calendar:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

.calendar-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #1a1a2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.calendar-dropdown a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  color: white;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.calendar-dropdown a:hover {
  background: rgba(255, 255, 255, 0.08);
}

.calendar-dropdown a img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

/* Slider Stilleri */
.slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.message-box {
  flex: 1;
  background: rgba(25, 33, 58, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px 50px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}

.slide-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.message-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ddd;
  white-space: pre-line;
  margin-bottom: 20px;
  flex-grow: 1;
}

.sg-sign {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
}

.sg-sign strong {
  display: block;
  color: white;
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.sg-sign span {
  font-style: italic;
  color: #888;
  font-size: 0.95rem;
}

.nav-arrow {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 3rem;
  cursor: pointer;
}

.nav-arrow:hover {
  color: white;
  transform: scale(1.1);
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: #19213a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- AYIRICI ÇİZGİ --- */
.section-divider {
  height: 2px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, #19213a, transparent);
  opacity: 0.6;
}

/* --- CONTACT SECTION --- */
.contact-section {
  background-color: #05080f;
  padding: 80px 0 100px;
  margin-top: 0;
}

.contact-container {
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

.contact-info {
  flex: 1;
  padding-top: 10px;
}

.contact-header {
  text-align: left;
}

.red-line.left-aligned {
  margin: 0 0 30px 0;
}

.contact-desc {
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 40px;
  font-size: 1.05rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.info-item .icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
}

.info-item strong {
  display: block;
  color: white;
  margin-bottom: 2px;
}

.info-item p {
  color: #888;
  margin: 0;
  font-size: 0.9rem;
}

.contact-form-wrapper {
  flex: 1.2;
  background: rgba(255, 255, 255, 0.03);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.form-group label {
  color: #ccc;
  font-size: 0.9rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  color: white;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #19213a;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 3px rgba(25, 33, 58, 0.3);
}

.status-message {
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
}

.status-message.success {
  background: rgba(46, 204, 113, 0.15);
  color: #2ecc71;
}

.status-message.error {
  background: rgba(231, 76, 60, 0.15);
  color: #e74c3c;
}

/* ========================================
   LATE APPLICATIONS SECTION
======================================== */
.late-app-section {
  position: relative;
  background: linear-gradient(135deg, #060d1f 0%, #0c1e3e 50%, #060d1f 100%);
  border-top: 1px solid rgba(83, 142, 214, 0.2);
  border-bottom: 1px solid rgba(83, 142, 214, 0.2);
  overflow: hidden;
  padding: 60px 20px 0;
}

/* Arka plan ripple dalgaları */
.late-app-ripple-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.bg-ripple {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(83, 142, 214, 0.18);
  animation: bgRipple 5s ease-out infinite;
  top: 50%;
  right: 15%;
  transform: translate(50%, -50%) scale(0);
}

.br1 { width: 200px; height: 200px; animation-delay: 0s;   }
.br2 { width: 200px; height: 200px; animation-delay: 1.6s; }
.br3 { width: 200px; height: 200px; animation-delay: 3.2s; }

@keyframes bgRipple {
  0%   { transform: translate(50%, -50%) scale(0);   opacity: 0.8; }
  100% { transform: translate(50%, -50%) scale(7);   opacity: 0;   }
}

/* Sweep border top */
.late-app-section::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 60%; height: 2px;
  background: linear-gradient(90deg, transparent, #538ED6, #a8d0ff, transparent);
  animation: sweep 4s linear infinite;
}

@keyframes sweep {
  0%   { left: -60%; }
  100% { left: 140%;  }
}

/* Content layout */
.late-app-content {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 50px;
  flex-wrap: wrap;
}

.late-app-left {
  flex: 1;
  min-width: 280px;
}

.late-tag {
  display: inline-block;
  background: rgba(83, 142, 214, 0.15);
  border: 1px solid rgba(83, 142, 214, 0.4);
  color: #a8d0ff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  padding: 5px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 16px;
  animation: tagPulse 2.5s ease-in-out infinite;
}

@keyframes tagPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(83, 142, 214, 0.35); }
  50%       { box-shadow: 0 0 0 7px rgba(83, 142, 214, 0);  }
}

.late-app-title {
  font-size: 2.6rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 3px;
  line-height: 1.15;
  margin: 0 0 16px;
  text-shadow: 0 0 40px rgba(83, 142, 214, 0.4);
}

.late-app-title span {
  color: #538ED6;
  display: block;
}

.late-app-desc {
  color: #7aA8d4;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 520px;
  margin: 0;
}

.late-app-right {
  display: flex;
  align-items: center;
}

.late-app-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #1a3d7c, #2a5cbf);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 16px 36px;
  border-radius: 10px;
  border: 1px solid rgba(83, 142, 214, 0.5);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0 25px rgba(83, 142, 214, 0.2);
  white-space: nowrap;
}

.late-app-btn:hover {
  background: linear-gradient(135deg, #2a5cbf, #3a78e8);
  transform: translateY(-3px);
  box-shadow: 0 0 45px rgba(83, 142, 214, 0.45);
}

/* Scrolling ticker band */
.late-app-ticker {
  position: relative;
  z-index: 2;
  background: rgba(83, 142, 214, 0.1);
  border-top: 1px solid rgba(83, 142, 214, 0.2);
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
}

.ticker-track {
  display: inline-block;
  animation: tickerScroll 40s linear infinite;
  color: #5a9ae0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-right: 60px;
  /* İki kopya yan yana koyarak seamless loop sağlanır */
  white-space: nowrap;
}

@keyframes tickerScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* MOBİL UYUMLULUK */
@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }

  .late-app-content {
    flex-direction: column;
    text-align: center;
    padding-bottom: 40px;
    gap: 24px;
  }

  .late-app-left {
    text-align: center;
  }

  .late-app-title {
    font-size: 1.8rem;
  }

  .late-app-desc {
    margin: 0 auto;
  }

  .late-app-right {
    width: 100%;
    justify-content: center;
  }

  .late-app-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .slider-wrapper {
    flex-direction: column;
  }

  .message-box {
    height: 1100px;
    padding: 30px 20px;
  }

  .nav-arrow {
    display: none;
  }

  .contact-container {
    flex-direction: column;
    gap: 40px;
  }

  .form-row {
    flex-direction: column;
    gap: 20px;
  }

  .contact-info {
    text-align: center;
  }

  .contact-header {
    text-align: center;
  }

  .red-line.left-aligned {
    margin: 0 auto 30px;
  }

  .info-items {
    align-items: center;
    text-align: left;
  }
}
</style>