<template>
  <div class="apply-page">
    <div class="content">
      <h1>APPLICATIONS</h1>
      <p>Become a part of the CFLMUN'26 family.</p>

      <div class="cards-wrapper">
        <div class="apply-card">
          <h2>Individual Delegate</h2>
          <p>To be announced...</p>
        </div>

        <div class="apply-card highlight">
          <h2>Delegation</h2>
          <p>To be announced...</p>
        </div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeS9F7TMqeKiQTnI_1PiaN0BSFCZL0YYtT95gPsYwHhaxTf9Q/viewform"
          target="_blank" class="apply-card">
          <h2>Chairboard</h2>
          <p>Academy & Organization</p>
          <div class="price-badge">2000 TL</div>
          <span class="arrow">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.apply-page {
  height: 100vh;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 80%);
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: white;
}

p {
  color: #888;
  margin-bottom: 40px;
}

.cards-wrapper {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.apply-card {
  display: block;
  width: 280px;
  padding: 40px 20px;
  background: #111;
  border: 1px solid #333;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

/* Hover efekti sadece link (<a>) olan kartlarda çalışsın */
a.apply-card:hover {
  transform: translateY(-10px);
  border-color: white;
}

.apply-card h2 {
  margin-top: 0;
  font-size: 1.4rem;
}

.apply-card p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
}

/* --- YENİ EKLENEN FİYAT ETİKETİ STİLİ --- */
.price-badge {
  display: inline-block;
  background-color: #1c33b9;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(28, 51, 185, 0.3);
  letter-spacing: 0.5px;
}

.arrow {
  display: block;
  /* Oku alt satıra atıp ortalamak için */
  font-size: 2rem;
  color: #1c33b9;
}

.highlight {
  background: #1c33b9;
  border-color: #1c33b9;
}

.highlight p {
  color: #ffcccc;
}

.highlight .arrow {
  color: white;
}
</style>