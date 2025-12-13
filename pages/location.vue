<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>KONUM & ULAŞIM</h1>
    </div>

    <div class="location-content">
      <div class="map-box">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.5!2d27.8!3d41.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA5JzQ4LjAiTiAyN8KwNDknMTIuMCJF!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str" 
          width="100%" height="450" style="border:0;" loading="lazy">
        </iframe>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <h3>Adres</h3>
          <p>Çorlu Fen Lisesi<br>Zafer Mahallesi, Şehit Yüzbaşı Yücel Kenter Cd. No:1, 59850 Çorlu/Tekirdağ</p>
        </div>
        <div class="info-card">
          <h3>Ulaşım</h3>
          <p>Otogardan 5 ve 11 numaralı hatlar ile okulumuzun ön durağına ulaşabilirsiniz. Konferans sabahları oteller bölgesinden servis kaldırılacaktır.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper { padding-top: 100px; padding-bottom: 50px; }
.page-header { text-align: center; margin-bottom: 40px; }
.location-content { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

.map-box { 
  border-radius: 12px; overflow: hidden; 
  filter: grayscale(100%) invert(92%) contrast(83%); /* Koyu tema harita efekti */
  margin-bottom: 40px;
  border: 1px solid #333;
}

.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.info-card { 
  background: #111; padding: 30px; border-left: 4px solid #b91c1c; border-radius: 4px; 
}
.info-card h3 { color: white; margin-top: 0; }
.info-card p { color: #999; line-height: 1.6; }

@media (max-width: 768px) { .info-grid { grid-template-columns: 1fr; } }
</style>