<template>
  <div class="faq-page container">
    <h1>Sık Sorulan Sorular</h1>
    
    <div class="faq-list">
      <div 
        v-for="(item, index) in faqs" 
        :key="index" 
        class="faq-item" 
        :class="{ open: openIndex === index }"
        @click="toggle(index)"
      >
        <div class="question">
          {{ item.q }}
          <span class="icon">{{ openIndex === index ? '-' : '+' }}</span>
        </div>
        <div class="answer" v-if="openIndex === index">
          {{ item.a }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const openIndex = ref(null);
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = [
  { q: 'Konferans ücretli mi?', a: 'Evet, bireysel delege ücreti 450 TL, delegasyon ücreti 400 TL dir.' },
  { q: 'Dress Code (Kıyafet Kodu) nedir?', a: 'Konferansımızda "Western Business Attire" (Takım elbise/Resmi kıyafet) zorunludur.' },
  { q: 'Ödül politikası nasıldır?', a: 'Her komitede Best Delegate, Outstanding ve Honorable Mention ödülleri verilecektir.' },
];
</script>

<style scoped>
.container { max-width: 800px; margin: 0 auto; padding: 4rem 2rem; }
.faq-item { border-bottom: 1px solid #ddd; padding: 1rem 0; cursor: pointer; }
.question { display: flex; justify-content: space-between; font-weight: bold; font-size: 1.1rem; }
.answer { padding-top: 1rem; color: #555; line-height: 1.6; animation: fadeIn 0.3s ease; }
.icon { font-weight: bold; color: #b91c1c; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>