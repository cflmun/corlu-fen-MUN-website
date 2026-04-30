<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>OUR SPONSORS</h1>
      <p>We thank our generous sponsors for their support.</p>
    </div>

    <div class="sponsors-container container">
      <div class="sponsors-grid">
        <div class="sponsor-card">
          <div class="sponsor-img-wrapper">
            <img src="/img/cflmun_logo.png" alt="Sponsor 1" class="sponsor-image" />
          </div>
          <h3>Sponsor Name 1</h3>
          <p>Main Sponsor</p>
        </div>

        <div class="sponsor-card">
          <div class="sponsor-img-wrapper">
            <img src="/img/cflmun_logo.png" alt="Sponsor 2" class="sponsor-image" />
          </div>
          <h3>Sponsor Name 2</h3>
          <p>Gold Sponsor</p>
        </div>

        <div class="sponsor-card">
          <div class="sponsor-img-wrapper">
            <img src="/img/cflmun_logo.png" alt="Sponsor 3" class="sponsor-image" />
          </div>
          <h3>Sponsor Name 3</h3>
          <p>Silver Sponsor</p>
        </div>

        <div class="sponsor-card">
          <div class="sponsor-img-wrapper">
            <img src="/img/cflmun_logo.png" alt="Sponsor 4" class="sponsor-image" />
          </div>
          <h3>Sponsor Name 4</h3>
          <p>Media Partner</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 80vh;
  background-color: #050505;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.page-header p {
  color: #888;
  letter-spacing: 1px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.sponsor-card {
  background: #121212;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.sponsor-card:hover {
  transform: translateY(-5px);
  border-color: #1c33b9;
  box-shadow: 0 10px 20px rgba(28, 51, 185, 0.15);
}

.sponsor-img-wrapper {
  height: 140px;
  background: rgba(255, 255, 255, 0.05); /* Logolar için hafif aydınlık arkaplan */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 15px;
}

.sponsor-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%); /* Başlangıçta siyah beyaz görünüm (opsiyonel) */
  transition: filter 0.3s ease;
}

.sponsor-card:hover .sponsor-image {
  filter: grayscale(0%); /* Üzerine gelince renkli olsun */
}

.sponsor-card h3 {
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.sponsor-card p {
  color: #1c33b9;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>