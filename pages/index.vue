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
      <div class="welcome-header">
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
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

// --- SLIDER (CAROUSEL) MANTIĞI ---

// Buraya istediğin kadar konuşma ekleyebilirsin. Alt satıra geçmek için \n kullan.
const welcomeMessages = [
  {
    id: 1,
    name: 'Sümeyra Gülsüm Çolak',
    title: 'Secretary General',
    text: `Dear delegates,\n\nAs Secretary General of the Secretariat, I am delighted to welcome you to CFLMUN'26, the first Model United Nations event at our school.\nCFLMUN'26 aims to provide a supportive and dynamic academic environment in which delegates can practise diplomacy, critical thinking and public speaking when discussing global issues. We aim to encourage debate and active participation in all committees throughout the conference.\n\nWe hope that CFLMUN'26 will be a valuable and inspiring experience for each of you. We have all worked very hard to create an informative and enjoyable conference.\n\nWe look forward to meeting you, listening to your ideas, and taking this great first step with you on the journey of CFLMUN'26.\n\nBest Regards,`
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

const currentMessageIndex = ref(0)
let sliderInterval = null

const nextSlide = () => {
  currentMessageIndex.value = (currentMessageIndex.value + 1) % welcomeMessages.length
}

const prevSlide = () => {
  currentMessageIndex.value = (currentMessageIndex.value - 1 + welcomeMessages.length) % welcomeMessages.length
}

const startSliderTimer = () => {
  sliderInterval = setInterval(nextSlide, 7000) // 7 Saniyede bir geçiş
}

const resetSliderTimer = () => {
  if (sliderInterval) clearInterval(sliderInterval)
  startSliderTimer()
}

// Ok tuşlarıyla manuel kontrol
const manualNext = () => {
  nextSlide()
  resetSliderTimer()
}

const manualPrev = () => {
  prevSlide()
  resetSliderTimer()
}

// Noktalara tıklayarak geçiş
const goToSlide = (index) => {
  currentMessageIndex.value = index
  resetSliderTimer()
}

onMounted(() => {
  calculateTime()
  timerInterval = setInterval(calculateTime, 1000)

  startSliderTimer() // Slider'ı başlat
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
  if (sliderInterval) clearInterval(sliderInterval)
})
</script>

<style scoped>
/* --- HERO STYLES --- */
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
  font-weight: bold;
}

@keyframes candle-flicker {
  0% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
  }

  5% {
    opacity: 0.95;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }

  10% {
    opacity: 0.8;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2);
  }

  15% {
    opacity: 1;
    text-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
  }

  20% {
    opacity: 0.9;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
  }

  30% {
    opacity: 1;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 35px rgba(255, 255, 255, 0.5);
  }

  40% {
    opacity: 0.85;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.3);
  }

  50% {
    opacity: 0.95;
    text-shadow: 0 0 18px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }

  60% {
    opacity: 0.9;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
  }

  70% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.7);
  }

  80% {
    opacity: 0.8;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2);
  }

  90% {
    opacity: 0.95;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.6), 0 0 25px rgba(255, 255, 255, 0.4);
  }

  100% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
  }
}

.date-badge {
  letter-spacing: 4px;
  font-weight: 800;
  color: #ffffff !important;
  font-size: 1.5rem;
  margin-bottom: 15px;
  animation: candle-flicker 3s infinite linear;
}

.motto {
  font-size: 1.5rem;
  color: #ddd;
  font-weight: 300;
  margin-bottom: 20px;
}

/* --- COUNTDOWN STYLES --- */
.countdown {
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  line-height: 1;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
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
}

.btn-primary {
  background: #19213a;
  color: white;
  border: 2px solid #19213a;
}

.btn-primary:hover {
  background: #19213a;
  border-color: #19213a;
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

/* --- WELCOME & SLIDER STYLES --- */
.welcome {
  padding: 100px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.welcome-header h2 {
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
  /* Projedeki lacivert-bordo konseptinden */
  margin: 0 auto 40px;
}

/* Slider Ana Kapsayıcı */
.slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
}

/* İçine metinlerin yazıldığı şık kutu */
.message-box {
  flex: 1;
  background: rgba(25, 33, 58, 0.15);
  /* Hafif lacivert cam efekti */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px 50px;
  min-height: 400px;
  /* Kutunun zıplamasını engellemek için sabit min yükseklik */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Slayt İçeriği (Yazı ve İmza alanı) */
.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.message-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ddd;
  white-space: pre-line;
  /* \n karakterlerini alt satır yapar */
  text-align: center;
  margin-bottom: 30px;
}

.sg-sign {
  font-style: italic;
  color: #888;
  margin-top: auto;
  /* Kutu büyüse bile imza hep altta durur */
}

.sg-sign strong {
  display: block;
  color: white;
  font-style: normal;
  font-size: 1.15rem;
}

/* Yön Okları */
.nav-arrow {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-arrow:hover {
  color: white;
  transform: scale(1.1);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

/* Alt kısımdaki noktalar */
.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background-color: #19213a;
  /* Aktif nokta rengi */
  box-shadow: 0 0 8px rgba(25, 33, 58, 0.8);
}

/* Vue Transition Fade Animasyonu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* --- Mobil Uyumluluk --- */
@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }

  .number {
    font-size: 1.8rem;
  }

  .time-box {
    min-width: 60px;
    padding: 8px 10px;
  }

  .separator {
    display: none;
  }

  .countdown {
    gap: 10px;
  }

  .hero {
    background-size: cover;
    background-position: top center;
  }

  /* Mobilde oklar ve kutu düzeni */
  .slider-wrapper {
    flex-direction: column;
    gap: 15px;
  }

  .nav-arrow {
    display: none;
    /* Mobilde okları gizleyip noktaları bırakmak genellikle daha iyi bir UI deneyimidir. İstersen kaldırabilirsin. */
  }

  .message-box {
    padding: 30px 20px;
    min-height: 450px;
  }
}
</style>