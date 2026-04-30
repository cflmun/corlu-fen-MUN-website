<template>
  <div class="apply-page">
    <div class="content">
      <h1>APPLICATIONS</h1>
      <p>Become a part of the CFLMUN'26 family.</p>

      <div class="late-card closed">
        <div class="late-inner">
          <div class="late-left">
            <div class="late-badge">🚫 APPLICATIONS CLOSED</div>
            <h2 class="late-title">LATE APPLICATIONS<br><span>CLOSED :(</span></h2>
            <p class="late-sub">Unfortunately, the late application period has ended. We have reached our maximum
              capacity. Thank you for your interest in CFLMUN'26!</p>
          </div>
        </div>
      </div>

      <div class="cards-wrapper">
        <a href="https://forms.gle/V4GqrvTbDx5vn8SB7" target="_blank" class="apply-card">
          <h2>Individual Delegate</h2>
          <p>Independent Participant</p>
          <div class="price-badge">2000 TL</div>
          <span class="arrow">→</span>
        </a>
        <a href="https://forms.gle/HtFrydxYzGuqXh8Q9" target="_blank" class="apply-card">
          <h2>Delegation</h2>
          <p>School & Club Delegations</p>
          <div class="price-badge">2000 TL</div>
          <span class="arrow">→</span>
        </a>
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
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 80%);
  text-align: center;
}

.content {
  width: 100%;
  max-width: 960px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: white;
}

h1+p {
  color: #888;
  margin-bottom: 40px;
}

/* ========================================
   CLOSED APPLICATIONS CARD
======================================== */
.late-card.closed {
  display: block;
  width: 100%;
  padding: 40px 44px;
  margin-bottom: 30px;
  border-radius: 16px;
  /* Tamamen gri, cansız bir arkaplan */
  background: linear-gradient(135deg, #111 0%, #181818 50%, #111 100%);
  border: 1px solid #333;
  color: white;
  pointer-events: none;
  /* Tıklanabilirliği tamamen kapatır */
  user-select: none;
}

.late-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.late-left {
  width: 100%;
}

.late-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #444;
  color: #888;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 6px 16px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.late-title {
  font-size: 2rem;
  font-weight: 900;
  color: #555;
  /* Karartılmış başlık */
  letter-spacing: 2px;
  line-height: 1.2;
  margin: 0 0 12px;
}

.late-title span {
  color: #777;
}

.late-sub {
  color: #666;
  font-size: 0.95rem;
  margin: 0 auto;
  line-height: 1.6;
  max-width: 600px;
}

/* ========================================
   NORMAL CARDS
======================================== */
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
  font-size: 2rem;
  color: #1c33b9;
}

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 900px) {
  .content {
    max-width: 100%;
    padding: 0 10px;
  }

  .late-card.closed {
    padding: 36px 20px;
  }

  .late-title {
    font-size: 1.7rem;
  }

  .cards-wrapper {
    gap: 20px;
  }

  .apply-card {
    width: 240px;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2.2rem;
  }

  .late-title {
    font-size: 1.45rem;
    letter-spacing: 1px;
  }

  .cards-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .apply-card {
    width: 100%;
    max-width: 340px;
  }
}
</style>