<template>
  <div>
    <header id="header">
      <div class="container">
        <NuxtLink to="/" class="logo-area">
          <!--<img src="/img/cflmun-logo.png" alt="ÇFLMUN Logo"> <span class="logo-text">ÇFLMUN'25</span>-->
        </NuxtLink>

        <div class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span></span><span></span><span></span>
        </div>

        <nav :class="{ active: isMenuOpen }">
          <ul>
            <li><NuxtLink to="/" @click="closeMenu">Main Page</NuxtLink></li>
            <li><NuxtLink to="/committees" @click="closeMenu">Committees</NuxtLink></li>
            <li><NuxtLink to="/team" @click="closeMenu">Our Team</NuxtLink></li>
            <li><NuxtLink to="/apply" @click="closeMenu" class="apply-btn">Apply!</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot /> 
    </main>

    <footer>
      <div class="container">
        <p>&copy; 2026 CFLMUN All rights are reserved.</p>
      </div>
    </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Mobil menü mantığı burada çalışacak
const isMenuOpen = ref(false)
function toggleMenu() { isMenuOpen.value = !isMenuOpen.value }
function closeMenu() { isMenuOpen.value = false }
</script>

<style scoped>
/* Header ve Footer için gerekli CSS buraya */
/* Önceki koddan header ve footer stillerini buraya alabilirsin */
</style>