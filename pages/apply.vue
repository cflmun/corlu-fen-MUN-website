<template>
  <div class="apply-page">
    <div class="content">
      <h1>BAŞVURULAR</h1>
      <p>ÇFLMUN'25 ailesinin bir parçası ol.</p>

      <div class="cards-wrapper">
        <a href="https://forms.google.com/..." target="_blank" class="apply-card">
          <h2>Bireysel Delege</h2>
          <p>Bağımsız katılım</p>
          <span class="arrow">→</span>
        </a>

        <a href="https://forms.google.com/..." target="_blank" class="apply-card highlight">
          <h2>Delegasyon</h2>
          <p>En az 5 kişilik gruplar</p>
          <span class="arrow">→</span>
        </a>

        <a href="https://forms.google.com/..." target="_blank" class="apply-card">
          <h2>Ekip Üyesi</h2>
          <p>Akademi & Organizasyon</p>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apply-page {
  height: 100vh; padding-top: 60px;
  display: flex; align-items: center; justify-content: center;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 80%);
  text-align: center;
}
h1 { font-size: 3rem; margin-bottom: 10px; color: white; }
p { color: #888; margin-bottom: 40px; }

.cards-wrapper { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }

.apply-card {
  display: block; width: 280px; padding: 40px 20px;
  background: #111; border: 1px solid #333; border-radius: 12px;
  text-decoration: none; color: white; transition: 0.3s;
}

.apply-card:hover { transform: translateY(-10px); border-color: white; }
.apply-card h2 { margin-top: 0; font-size: 1.4rem; }
.apply-card p { font-size: 0.9rem; color: #666; margin-bottom: 20px; }
.arrow { font-size: 2rem; color: #b91c1c; }

.highlight { background: #b91c1c; border-color: #b91c1c; }
.highlight p { color: #ffcccc; }
.highlight .arrow { color: white; }
</style>