<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-overlay">
        <h1 class="animate-text">ÇFLMUN'25</h1>
        <p class="subtitle">"Diplomasi Işığında Geleceği Şekillendir"</p>
        <div class="dates">12-14 Mayıs 2025 | Çorlu, Tekirdağ</div>
        <router-link to="/apply" class="cta-button">Başvurunu Yap</router-link>
      </div>
    </section>

    <section class="welcome-section container">
      <div class="letter-preview">
        <h2>Hoş Geldiniz</h2>
        <p>
          Saygıdeğer Katılımcılar, Çorlu Fen Lisesi Model Birleşmiş Milletler konferansının 
          bu yılki edisyonunda sizleri ağırlamaktan onur duyarız. Dünyanın sorunlarına 
          genç bakış açılarıyla çözüm bulacağımız bu platformda...
        </p>
        <router-link to="/team" class="read-more">Ekibimizle Tanışın &rarr;</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Gerekli importlar buraya
</script>

<style scoped>
.hero {
  height: 100vh;
  background-image: url('@/assets/hero-bg.jpg'); /* Okulun veya şehrin havalı bir fotosu */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 3rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
}

.hero h1 { font-size: 5rem; font-weight: 800; letter-spacing: 5px; margin-bottom: 10px; }
.subtitle { font-size: 1.5rem; font-weight: 300; margin-bottom: 2rem; }
.cta-button {
  display: inline-block;
  padding: 15px 40px;
  background-color: #b91c1c; /* ÇFL Kırmızısı/Bordo */
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 50px;
  transition: transform 0.3s;
}
.cta-button:hover { transform: scale(1.05); background-color: #991b1b; }

.welcome-section { padding: 4rem 2rem; text-align: center; }
.read-more { color: #b91c1c; font-weight: bold; text-decoration: none; }
</style>