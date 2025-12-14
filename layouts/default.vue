<template>
  <div class="layout-container">
    <nav :class="{ 'scrolled': isScrolled }">
      <div class="nav-content">
        <div class="logo">
          <NuxtLink to="/" @click="closeMenu">
            <img src="/public/img/cflmun_logo.png" alt="CFLMUN Logo" class="nav-logo" />
            <span>CFLMUN'26</span>
          </NuxtLink>
        </div>

        <button 
          class="hamburger-btn" 
          @click="toggleMenu" 
          :class="{ 'active': isMenuOpen }"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="links" :class="{ 'nav-active': isMenuOpen }">
          <NuxtLink to="/" @click="closeMenu">Home</NuxtLink>
          <NuxtLink to="/committees" @click="closeMenu">Committees</NuxtLink>
          <NuxtLink to="/schedule" @click="closeMenu">Schedule</NuxtLink>
          <NuxtLink to="/location" @click="closeMenu">Location</NuxtLink>
          <NuxtLink to="/team" @click="closeMenu">Team</NuxtLink>
          <NuxtLink to="/faq" @click="closeMenu">FAQ</NuxtLink>
          <NuxtLink to="/apply" class="apply-btn" @click="closeMenu">Apply Now</NuxtLink>
        </div>
      </div>
    </nav>

    <div class="page-content">
      <slot />
    </div>

    <footer>
      <div class="footer-content">
        <h3>Corlu Borsa Istanbul Science High School Model United Nations</h3>
        <p>No: 35/1, Bülent Ecevit Boulevard, Zafer Neighborhood, Next to the New State Hospital, Çorlu / Tekirdağ, Türkiye</p>
        <div class="socials">
          <a href="https://instagram.com/cflmun" target="_blank" aria-label="Instagram">
            <img src="/public/img/instagram-logo.png" alt="Instagram" />
          </a>
          <a href="mailto:info@cflmun.com" aria-label="Email">
            <img src="/public/img/email-logo.png" alt="Email" />
          </a>
        </div>
        <p class="copyright">© 2026 ÇFLMUN IT Team. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

// Scroll kontrolü
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Menüyü aç/kapa
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  
  // Menü açıldığında arka planda kaydırmayı (scroll) engelle
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

// Menüyü kapat (Linke tıklanınca veya rota değişince)
const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Rota değiştiğinde menüyü izle ve kapat
watch(() => route.path, () => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* --- TEMEL AYARLAR --- */
.layout-container {
  background-color: #050505;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden; /* Yatay taşmayı engeller */
}

/* --- NAVBAR --- */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* En üstte */
  padding: 20px 0;
  transition: all 0.4s ease;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
}

nav.scrolled {
  background: rgba(0, 0, 0, 0.95);
  padding: 15px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #222;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* ÖNEMLİ: Mobilde logo ve butonun sıkışmasını engeller */
  flex-wrap: nowrap; 
}

/* LOGO */
.logo a {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
  position: relative;
  z-index: 10002; /* Hamburger menü açılsa bile logo tıklanabilir kalsın */
}

.nav-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
}

/* --- MASAÜSTÜ LİNKLERİ (Varsayılan) --- */
.links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.links a {
  text-decoration: none;
  color: #ccc;
  font-size: 0.9rem;
  font-weight: 500;
  transition: 0.3s;
  white-space: nowrap; /* Linklerin alt satıra kaymasını engeller */
}

.links a:hover,
.links a.router-link-active {
  color: white;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

.apply-btn {
  border: 1px solid white;
  padding: 8px 20px;
  border-radius: 20px;
}

.apply-btn:hover {
  background: white;
  color: black !important;
}

/* --- HAMBURGER BUTONU (Başlangıçta gizli) --- */
.hamburger-btn {
  display: none; 
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10002; /* Menü perdesinin üstünde olmalı */
  padding: 0;
}

.hamburger-btn span {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* Hamburger Animasyonu */
.hamburger-btn.active span:nth-child(1) {
  transform: translateY(9.5px) rotate(45deg);
}
.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}
.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-9.5px) rotate(-45deg);
}

/* --- FOOTER --- */
footer {
  background: #000;
  border-top: 1px solid #222;
  padding: 3rem 1rem;
  text-align: center;
  margin-top: auto;
}
.footer-content h3 { font-size: 1.2rem; margin-bottom: 1rem; }
.footer-content p { color: #666; font-size: 0.9rem; }
.socials { margin: 1.5rem 0; }
.socials a { margin: 0 10px; }
.copyright { margin-top: 2rem; font-size: 0.8rem; color: #444; }

/* --- RESPONSIVE / TABLET VE MOBİL AYARLARI --- */
/* 1024px: Çoğu tablet ve küçük laptop ekranları için sınır */
@media (max-width: 1024px) {
  
  /* Butonu Göster */
  .hamburger-btn {
    display: flex;
  }

  /* Linkleri Gizle (Mobil Menü Stili) */
  .links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(5, 5, 5, 0.98);
    backdrop-filter: blur(10px); /* Hafif bulanıklık efekti */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    transform: translateX(100%); /* Sağa gizle */
    transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 10001; /* Navbar'ın altında ama her şeyin üstünde */
  }

  /* Menü Aktifken */
  .links.nav-active {
    transform: translateX(0);
  }

  /* Mobildeki Link Stilleri */
  .links a {
    font-size: 1.5rem;
    color: white;
    margin-left: 0;
  }

  .apply-btn {
    margin-top: 20px;
    padding: 15px 40px;
    font-size: 1.2rem;
  }
}

/* --- ÇOK KÜÇÜK EKRANLAR İÇİN (Telefonlar) --- */
@media (max-width: 480px) {
  .logo a {
    font-size: 1.2rem; /* Logo yazısını biraz küçült */
    gap: 8px;
  }
  
  .nav-logo {
    height: 32px; /* Logo resmini biraz küçült */
  }
}
</style>