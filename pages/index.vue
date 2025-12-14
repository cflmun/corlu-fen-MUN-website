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
      <div class="welcome-text">
        <h2>WELCOME</h2>
        <div class="red-line"></div>
        <p>
          Welcome to the 2025 edition of the Çorlu Science High School Model United Nations Conference.
          We would be delighted to see you at this event, where we seek solutions to global problems from young
          perspectives and where the heart of diplomacy beats.
        </p>
        <div class="sg-sign">
          <strong>Sümeyra Gülsüm Çolak</strong>
          <span>Secretary General</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
let timerInterval = null

// Hedef Tarih: 1 Mayıs 2026, Saat 09:00
const targetDate = new Date('2026-05-01T09:00:00').getTime()

const calculateTime = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    // Tarih geçtiyse her şeyi sıfırla
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

// Sayı 10'dan küçükse başına 0 ekleyen yardımcı fonksiyon (örn: 9 -> 09)
const formatTime = (value) => {
  return value < 10 ? `0${value}` : value
}

onMounted(() => {
  calculateTime() // İlk açılışta hemen hesapla
  timerInterval = setInterval(calculateTime, 1000) // Her saniye güncelle
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style scoped>
.hero {
  height: 100vh;
  /* Buraya okulun veya şehrin havalı bir fotoğrafını koy */
  background-image: url('/img/okul-anasayfa-foto.png');
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  /* Resmi karartır */
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

/* Işıltı Animasyonu Tanımı */
/* --- YENİ MUM IŞIĞI ANİMASYONU --- */
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
  /* ÖNEMLİ: Bu, rengin global stiller tarafından ezilmesini engeller. */
  color: #ffffff !important;
  font-size: 1.5rem;
  margin-bottom: 15px;

  /* Animasyon kodunuz aynı kalıyor */
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

/* --- END COUNTDOWN STYLES --- */

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

.welcome {
  padding: 100px 20px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.welcome h2 {
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
  margin: 0 auto 30px;
}

.welcome p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
}

.sg-sign {
  margin-top: 40px;
  font-style: italic;
  color: #888;
}

.sg-sign strong {
  display: block;
  color: white;
  font-style: normal;
}

/* Mobil Uyumluluk */
@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }

  /* Mobilde sayıları biraz küçültelim */
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

  /* Mobilde yer kaplamaması için ayraçları gizleyebiliriz */
  .countdown {
    gap: 10px;
  }
}
</style>