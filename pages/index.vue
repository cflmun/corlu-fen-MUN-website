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
                <p>cflmunn@gmail.com</p>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { useNuxtApp } from '#app'

// --- İLETİŞİM FORMU MANTIĞI ---
const contactForm = ref({
  fullName: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const formStatus = ref({ type: '', message: '' })

const submitContactForm = async () => {
  isSubmitting.value = true
  formStatus.value = { type: '', message: '' }

  try {
    // Firebase sadece client tarafında çalıştırılır
    const { $firebase } = useNuxtApp();
    const db = $firebase.db;

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
    console.error('Error submitting contact form:', error)
    formStatus.value = { type: 'error', message: 'An error occurred. Please try again later.' }
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

It’s an honour to welcome you all to Corlu İstanbul Science High School Model United Nations Conference 2026 as the Director General.

CFLMUN’26 is not just a conference, it’s an environment to connect, debate and find solutions for the future. In this conference you can connect with every MUN lover, debate with other people to find solutions and choose the best option for everyone. In this conference every delegate is just not representing a country or a character, they represent every citizen of their country with thinking out of the box and calculating every point of view from all walks of life.

Our Academy and Organization teams worked hard with dedication to make this conference enjoyable for everyone. Every committee has the latest topics that you can have fun while debating whether your role or country and you can see various details in every inch of our venue from our team.

This was all generations of CFLMUN club members' dream and this year the dream is becoming true. This conference doesn’t carry things from the team of 2026, it carries things from the team of 2025, 2024, 2023 and even more… That’s why we’re working hard about this conference because our main mission is making everyone comfortable and putting something valuable to them in this conference.

If there’s a problem or any questions you have, please don’t hesitate to send an e-mail. We’re very excited to see you in CFLMUN’26. See you there…

Best Regards,
`
  },
  {
    id: 3,
    name: 'Yiğit Demir',
    title: 'Deputy Director General',
    text: `Dear Delegates,

It is with great pleasure and honor that I welcome you to CFLMUN’26 as the Deputy Director General. In this conference, you will engage in meaningful dialogue, share diverse perspectives, and address pressing global issues. Through collaboration, you will enhance  your understanding of international relations, strengthen your communication skills, and build lasting connections while creating unforgettable memories.

We are more than honored to welcome you to this conference. 

Best of Regards,
`
  }
]
// Not: Metinleri uzun tutmamak için kısalttım, senin orijinal metinlerin durabilir, sadece kod yapısını gösteriyorum. 
// Orijinal uzun metinlerini buraya yapıştırmayı unutma!

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
  /* Animasyonu senin kodundan aynen korudum */
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

/* Slider Stillleri */
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

  /* SABİT YÜKSEKLİK: Murat Efe'nin metnine göre ayarlandı */
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* Metin her zaman en üstten başlar */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  /* Scroll bar'ı tamamen gizle ve kutu boyunu koru */
  overflow: hidden;
  position: relative;
}

.slide-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Kutu yüksekliğinin tamamını kullan */
}

.message-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ddd;
  white-space: pre-line;
  margin-bottom: 20px;
  /* Metin çok uzun olsa bile kutuyu itmez */
  flex-grow: 1;
}

/* index.vue içindeki ilgili stil alanı */

.sg-sign {
  margin-top: auto;
  /* Metinden sonra en alta iter */
  padding-top: 20px;
  /* Çizgi ile isim arasındaki boşluk */
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  /* İnce, yarı saydam beyaz çizgi */
  width: 100%;
  /* Çizginin kutuyu boydan boya kaplaması için */
}

.sg-sign strong {
  display: block;
  color: white;
  font-size: 1.15rem;
  margin-bottom: 4px;
  /* İsim ile unvan arasına çok hafif boşluk */
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

/* --- YENİ EKLENEN KISIMLAR --- */

/* 1. AYIRACI ÇİZGİ */
.section-divider {
  height: 2px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent, #19213a, transparent);
  opacity: 0.6;
}

/* 2. CONTACT SECTION (YENİLENMİŞ) */
.contact-section {
  background-color: #05080f;
  /* Daha koyu, neredeyse siyah bir lacivert */
  padding: 80px 0 100px;
  margin-top: 0;
}

.contact-container {
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

/* Sol Taraf: Bilgiler */
.contact-info {
  flex: 1;
  padding-top: 10px;
}

.contact-header {
  text-align: left;
}

.red-line.left-aligned {
  margin: 0 0 30px 0;
  /* Sola hizalı çizgi */
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

/* Sağ Taraf: Form */
.contact-form-wrapper {
  flex: 1.2;
  /* Form biraz daha geniş olsun */
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

/* MOBİL UYUMLULUK */
@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }

  .slider-wrapper {
    flex-direction: column;
  }

  .message-box {
    height: 1100px;
    /* Mobilde Murat Efe'nin metni çok uzayacağı için */
    padding: 30px 20px;
  }

  .nav-arrow {
    display: none;
  }

  /* Yeni layout için mobil ayarlar */
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
    /* Mobilde tekrar ortala */
  }

  .info-items {
    align-items: center;
    /* Mobilde ikonları ortala */
    text-align: left;
  }
}
</style>