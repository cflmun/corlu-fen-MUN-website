<template>
  <div class="apply-page">
    <div class="content">
      <h1>APPLICATIONS</h1>
      <p>Become a part of the CFLMUN'26 family.</p>

      <!-- LATE APPLICATIONS BANNER -->
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScppuL-XIGFkGnut5_gef5TvNEiyAtLx629tTF0F7IoV9eJjw/viewform?usp=header" target="_blank" class="late-card">

        <!-- Ripple dalgaları + logo tam ortada -->
        <div class="ripple-container">
          <span class="ripple r1"></span>
          <span class="ripple r2"></span>
          <span class="ripple r3"></span>
          <img src="/img/cflmun_logo.png" alt="CFLMUN Logo" class="ripple-logo" />
        </div>

        <div class="late-inner">
          <div class="late-left">
            <div class="late-badge">⏰ LIMITED SPOTS REMAINING</div>
            <h2 class="late-title">LATE APPLICATIONS<br><span>ARE NOW OPEN</span></h2>
            <p class="late-sub">Missed the regular deadline? You still have a chance to be part of CFLMUN'26. Submit before spots run out.</p>
          </div>
          <div class="late-right">
            <span class="late-arrow">
              Apply Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </div>

      </a>

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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeS9F7TMqeKiQTnI_1PiaN0BSFCZL0YYtT95gPsYwHhaxTf9Q/viewform" target="_blank" class="apply-card">
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
  padding: 80px 20px 60px;
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

h1 + p {
  color: #888;
  margin-bottom: 40px;
}

/* ========================================
   LATE APPLICATIONS CARD
======================================== */
.late-card {
  position: relative;
  display: block;
  width: 100%;
  padding: 48px 44px;
  margin-bottom: 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0a1628 0%, #0d2045 50%, #0a1628 100%);
  border: 1.5px solid #2a6dd9;
  text-decoration: none;
  color: white;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow:
    0 0 30px rgba(83, 142, 214, 0.15),
    inset 0 0 60px rgba(83, 142, 214, 0.05);
}

.late-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 55px rgba(83, 142, 214, 0.35),
    inset 0 0 60px rgba(83, 142, 214, 0.1);
}

/* Glowing top border sweep */
.late-card::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, transparent, #538ED6, #a8d0ff, #538ED6, transparent);
  animation: borderSweep 3s linear infinite;
}

@keyframes borderSweep {
  0%   { left: -100%; }
  100% { left:  100%; }
}

/* ── Ripple dalgaları + logo ── */
.ripple-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(83, 142, 214, 0.35);
  animation: rippleOut 3.5s ease-out infinite;
  width: 120px;
  height: 120px;
}

.r1 { animation-delay: 0s;   }
.r2 { animation-delay: 1.1s; }
.r3 { animation-delay: 2.2s; }

@keyframes rippleOut {
  0%   { transform: scale(0);  opacity: 0.7; }
  100% { transform: scale(9);  opacity: 0;   }
}

/* Logo tam dalgaların merkezinde */
.ripple-logo {
  position: absolute;
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(83, 142, 214, 0.8))
          drop-shadow(0 0 20px rgba(83, 142, 214, 0.4));
  animation: logoGlow 3s ease-in-out infinite;
  z-index: 3;
}

@keyframes logoGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px rgba(83, 142, 214, 0.7))
            drop-shadow(0 0 18px rgba(83, 142, 214, 0.35));
  }
  50% {
    filter: drop-shadow(0 0 16px rgba(168, 208, 255, 0.9))
            drop-shadow(0 0 32px rgba(83, 142, 214, 0.6));
  }
}

/* ── İçerik ── */
.late-inner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

.late-left {
  flex: 1;
  min-width: 240px;
  text-align: left;
}

.late-badge {
  display: inline-block;
  background: rgba(83, 142, 214, 0.15);
  border: 1px solid rgba(83, 142, 214, 0.5);
  color: #a8d0ff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  padding: 5px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 14px;
  animation: tagPulse 2.5s ease-in-out infinite;
}

@keyframes tagPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(83, 142, 214, 0.4); }
  50%       { box-shadow: 0 0 0 7px rgba(83, 142, 214, 0);  }
}

.late-title {
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 3px;
  line-height: 1.15;
  margin: 0 0 12px;
  text-shadow: 0 0 30px rgba(83, 142, 214, 0.5);
}

.late-title span {
  color: #538ED6;
  display: block;
}

.late-sub {
  color: #7aA8d4;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.6;
}

.late-right {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.late-arrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: white;
  border: 1px solid rgba(83, 142, 214, 0.5);
  padding: 16px 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, #1a3d7c, #2a5cbf);
  transition: all 0.3s;
  white-space: nowrap;
  box-shadow: 0 0 25px rgba(83, 142, 214, 0.2);
}

.late-card:hover .late-arrow {
  background: linear-gradient(135deg, #2a5cbf, #3a78e8);
  box-shadow: 0 0 40px rgba(83, 142, 214, 0.45);
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
  .content { max-width: 100%; padding: 0 10px; }
  .late-card { padding: 36px 28px; }
  .late-title { font-size: 1.7rem; }
  .cards-wrapper { gap: 20px; }
  .apply-card { width: 240px; }
}

@media (max-width: 640px) {
  h1 { font-size: 2.2rem; }
  .late-card { padding: 28px 20px; }

  .late-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .late-left {
    text-align: center;
    width: 100%;
  }

  .late-title { font-size: 1.45rem; letter-spacing: 2px; }

  .ripple-logo { width: 40px; height: 40px; }

  .late-right { width: 100%; justify-content: center; }

  .late-arrow {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
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