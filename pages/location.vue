<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>LOCATION</h1>
    </div>

    <div class="location-content">
      <div class="map-box">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24037.61660071583!2d27.837633089316554!3d41.14102928212476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4e1321f9a66c9%3A0xa025da8649180b79!2s%C3%87orlu%20%C4%B0mkb%20Fen%20Lisesi!5e0!3m2!1str!2str!4v1765657898506!5m2!1str!2str" 
          width="100%" height="450" style="border:0;" loading="lazy">
        </iframe>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <h3>Address</h3>
          <p>Corlu Borsa Istanbul Science High School<br>35/1 Bülent Ecevit Boulevard, Zafer Neighborhood, Next to the New State Hospital, Çorlu, Tekirdağ, Türkiye</p>
        </div>
        <div class="info-card">
          <h3>Transportation</h3>
          <p>You can reach the bus stop in front of our school from the bus station using lines 5 and 11. A shuttle service will be available from the hotel area on conference mornings.
		  </p>
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