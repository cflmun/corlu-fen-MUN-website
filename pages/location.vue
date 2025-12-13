<template>
  <div class="location-page">
    <div class="map-container">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9!2d27.xxxx!3d41.xxxx!..." 
        width="100%" height="450" style="border:0;" loading="lazy">
      </iframe>
    </div>
    
    <div class="transport-info container">
      <div class="info-card">
        <h3>Adres</h3>
        <p>Zafer Mahallesi, Şehit Yüzbaşı Yücel Kenter Cd. No:1, Çorlu/Tekirdağ</p>
      </div>
      <div class="info-card">
        <h3>Ulaşım</h3>
        <p>Çorlu Otogarından 5 ve 11 numaralı otobüsler ile okulumuza ulaşım sağlayabilirsiniz. Şehir dışından gelenler için servis kalkacaktır.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-container { width: 100%; height: 450px; filter: grayscale(80%); /* Haritayı gri yaparak şık durmasını sağlar */ }
.transport-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 4rem 2rem;
}
.info-card { background: #f9fafb; padding: 2rem; border-left: 5px solid #b91c1c; }
@media (max-width: 768px) { .transport-info { grid-template-columns: 1fr; } }
</style>