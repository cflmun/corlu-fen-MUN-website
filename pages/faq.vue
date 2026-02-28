<template>
  <div class="page-wrapper">
    <div class="page-header"><h1>FAQ</h1></div>
    
    <div class="faq-container">
      <div v-for="(item, index) in faqs" :key="index" class="faq-item" @click="toggle(index)">
        <div class="question">
          {{ item.q }}
          <span class="icon">{{ activeIndex === index ? '-' : '+' }}</span>
        </div>
        <div v-if="activeIndex === index" class="answer">
          {{ item.a }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)
const toggle = (i) => {
  activeIndex.value = activeIndex.value === i ? null : i
}

const faqs = [
  { q: 'How can I apply?', a: 'Delegates, delegations and chairboard members can apply through the forms available on our website.' },
  { q: 'Is there a dress code?', a: 'Yes,there is.The dress code is Bussinness Formal.For men,this includes a suit,dress shirt,and tie.For women it includes a business suit,and blouse.' },
  { q: 'How long will the conference last?', a: 'The conference will last for 3 days, between 1-3 May 2026.' },
  { q: 'How can I contact the organizing team?', a: 'You can contact the Director General via Whatsapp by phone number 05013407151.' },
  { q: 'What’s included in the fee?', a: 'The fee includes 3 days of breakfast and lunchs, snacks and a starter pack that will be given on the first day.' },

]
</script>

<style scoped>
.page-wrapper { padding-top: 100px; min-height: 80vh; }
.page-header { text-align: center; margin-bottom: 40px; }
.faq-container { max-width: 800px; margin: 0 auto; padding: 20px; }

.faq-item { 
  background: #111; border-bottom: 1px solid #333; margin-bottom: 10px; 
  border-radius: 8px; overflow: hidden; cursor: pointer; transition: 0.3s;
}
.faq-item:hover { background: #161616; }

.question { 
  padding: 20px; font-weight: bold; display: flex; justify-content: space-between; color: white;
}
.answer { 
  padding: 0 20px 20px; color: #999; line-height: 1.6; border-top: 1px solid #222; margin-top: -5px; padding-top: 15px; 
}
.icon { color: #1c33b9; font-weight: bold; font-size: 1.2rem; }
</style>