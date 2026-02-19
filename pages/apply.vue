<template>
  <div class="apply-page">
    <div class="content">
      <h1>APPLICATIONS</h1>
      <p>Become a part of the CFLMUN'26 family.</p>

      <div class="cards-wrapper">
        <a href="https://forms.google.com/..." target="_blank" class="apply-card">
          <h2>Individual Delegate</h2>
          <p>Independent Participation</p>
          <span class="arrow">→</span>
        </a>

        <a href="https://forms.google.com/..." target="_blank" class="apply-card highlight">
          <h2>Delegation</h2>
          <p>Groups of at least 5 people</p>
          <span class="arrow">→</span>
        </a>

        <a href="https://forms.google.com/..." target="_blank" class="apply-card">
          <h2>Chairboard</h2>
          <p>Academy & Organization</p>
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
.arrow { font-size: 2rem; color: #1c33b9; }

.highlight { background: #1c33b9; border-color: #1c33b9; }
.highlight p { color: #ffcccc; }
.highlight .arrow { color: white; }
</style>
<!--deneme-->