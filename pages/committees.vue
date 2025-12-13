<template>
  <div class="committees-page container">
    <h1 class="page-title">Komitelerimiz</h1>
    
    <div class="grid">
      <div v-for="committee in committees" :key="committee.id" class="card">
        <div class="card-image">
          <img :src="committee.image" :alt="committee.name" />
          <div class="level-tag">{{ committee.level }}</div>
        </div>
        <div class="card-content">
          <h2>{{ committee.name }}</h2>
          <p class="agenda"><strong>Agenda:</strong> {{ committee.agenda }}</p>
          <button class="guide-btn">Study Guide İndir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const committees = [
  { id: 1, name: 'DISEC', level: 'Beginner', agenda: 'Cyber Warfare and Global Security', image: '/assets/disec-logo.png' },
  { id: 2, name: 'NATO', level: 'Intermediate', agenda: 'Expansion in the Arctic Region', image: '/assets/nato-logo.png' },
  { id: 3, name: 'JCC (Crisis)', level: 'Advanced', agenda: 'War of 1812', image: '/assets/jcc-logo.png' },
  // Diğer komiteler...
];
</script>

<style scoped>
.container { padding: 4rem 2rem; }
.page-title { text-align: center; margin-bottom: 3rem; font-size: 2.5rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; transition: 0.3s; background: white; }
.card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.1); transform: translateY(-5px); }
.card-image { height: 200px; background: #eee; position: relative; display: flex; align-items: center; justify-content: center; }
.card-image img { max-height: 80%; max-width: 80%; }
.level-tag { position: absolute; top: 10px; right: 10px; background: #b91c1c; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; }
.card-content { padding: 1.5rem; }
.agenda { color: #555; font-size: 0.95rem; margin-bottom: 1rem; }
.guide-btn { width: 100%; padding: 10px; border: 1px solid #333; background: transparent; cursor: pointer; transition: 0.3s; }
.guide-btn:hover { background: #333; color: white; }
</style>