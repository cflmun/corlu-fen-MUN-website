<template>
  <div class="home-page">
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content">
        <h4 class="date-badge">12 - 14 MAYIS 2025</h4>
        <h1 class="main-title">ÇFLMUN'25</h1>
        <p class="motto">"Diplomasi Işığında Geleceği Şekillendir"</p>
        
        <div class="cta-group">
          <NuxtLink to="/apply" class="btn btn-primary">Şimdi Başvur</NuxtLink>
          <NuxtLink to="/committees" class="btn btn-outline">Komiteler</NuxtLink>
        </div>
      </div>
    </section>

    <section class="welcome container">
      <div class="welcome-text">
        <h2>HOŞ GELDİNİZ</h2>
        <div class="red-line"></div>
        <p>
          Çorlu Fen Lisesi Model Birleşmiş Milletler Konferansı'nın 2025 edisyonuna hoş geldiniz.
          Dünya sorunlarına genç bakış açılarıyla çözüm aradığımız, diplomasinin kalbinin attığı
          bu organizasyonda sizleri aramızda görmekten mutluluk duyarız.
        </p>
        <div class="sg-sign">
          <strong>Ad Soyad</strong>
          <span>Genel Sekreter</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  /* Buraya okulun veya şehrin havalı bir fotoğrafını koy */
  background: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80') center/cover fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute; top:0; left:0; width:100%; height:100%;
  background: rgba(0,0,0,0.6); /* Resmi karartır */
}

.hero-content { position: relative; z-index: 2; color: white; padding: 20px; }

.main-title {
  font-size: 5rem;
  font-weight: 800;
  letter-spacing: 5px;
  margin: 10px 0;
  background: -webkit-linear-gradient(#fff, #ccc);
  -webkit-background-clip: text;
}

.date-badge { letter-spacing: 4px; font-weight: 300; color: #b91c1c; font-size: 1.2rem; }
.motto { font-size: 1.5rem; color: #ddd; font-weight: 300; margin-bottom: 30px; }

.btn {
  display: inline-block; padding: 15px 35px; border-radius: 50px; 
  text-decoration: none; font-weight: bold; margin: 10px; transition: 0.3s;
}
.btn-primary { background: #b91c1c; color: white; border: 2px solid #b91c1c; }
.btn-primary:hover { background: #991b1b; border-color: #991b1b; }

.btn-outline { background: transparent; color: white; border: 2px solid white; }
.btn-outline:hover { background: white; color: black; }

.welcome { padding: 100px 20px; max-width: 900px; margin: 0 auto; text-align: center; }
.welcome h2 { font-size: 2.5rem; letter-spacing: 2px; margin-bottom: 10px; }
.red-line { width: 60px; height: 4px; background: #b91c1c; margin: 0 auto 30px; }
.welcome p { font-size: 1.1rem; line-height: 1.8; color: #ccc; }
.sg-sign { margin-top: 40px; font-style: italic; color: #888; }
.sg-sign strong { display: block; color: white; font-style: normal; }

/* Mobil Uyumluluk */
@media (max-width: 768px) {
  .main-title { font-size: 3rem; }
}
</style>