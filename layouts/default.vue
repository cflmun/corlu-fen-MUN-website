<template>
  <div class="layout-container">
    <nav :class="{ 'scrolled': isScrolled }">
      <div class="nav-content">
        <div class="logo">
          <NuxtLink to="/">ÇFLMUN'25</NuxtLink>
        </div>
        <div class="links">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/committees">Committees</NuxtLink>
          <NuxtLink to="/schedule">Schedule</NuxtLink>
          <NuxtLink to="/location">Location</NuxtLink>
          <NuxtLink to="/team">Team</NuxtLink>
          <NuxtLink to="/faq">FAQ</NuxtLink>
          <NuxtLink to="/apply" class="apply-btn">Apply Now</NuxtLink>
        </div>
        </div>
    </nav>

    <div class="page-content">
      <slot />
    </div>

    <footer>
      <div class="footer-content">
        <h3>Çorlu Fen Lisesi Model United Nations</h3>
        <p>Zafer Mahallesi, Şehit Yüzbaşı Yücel Kenter Cd. No:1, Çorlu/Tekirdağ</p>
        <div class="socials">
          <a href="https://instagram.com/cflmun" target="_blank">Instagram</a>
          <a href="mailto:info@cflmun.com">Email</a>
        </div>
        <p class="copyright">© 2025 ÇFLMUN IT Team. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Global Font ve Renkler main.css'ten gelmeli ama burada garantiye alalım */
.layout-container {
  background-color: #050505;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}

/* NAVBAR */
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  padding: 20px 0;
  transition: all 0.4s ease;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
}

nav.scrolled {
  background: rgba(0, 0, 0, 0.95);
  padding: 15px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  border-bottom: 1px solid #222;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
}

.links a {
  margin-left: 20px;
  text-decoration: none;
  color: #ccc;
  font-size: 0.9rem;
  font-weight: 500;
  transition: 0.3s;
}

.links a:hover, .links a.router-link-active {
  color: white;
  text-shadow: 0 0 8px rgba(255,255,255,0.6);
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

/* FOOTER */
footer {
  background: #000;
  border-top: 1px solid #222;
  padding: 3rem 1rem;
  text-align: center;
  margin-top: auto;
}
.footer-content h3 { font-size: 1.2rem; margin-bottom: 1rem; letter-spacing: 1px; }
.footer-content p { color: #666; font-size: 0.9rem; }
.socials { margin: 1.5rem 0; }
.socials a { color: #b91c1c; margin: 0 10px; text-decoration: none; font-weight: bold; }
.copyright { margin-top: 2rem; font-size: 0.8rem; color: #444; }
</style>