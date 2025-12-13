<template>
  <div class="schedule-page container">
    <h1>Konferans Takvimi</h1>
    
    <div class="tabs">
      <button 
        v-for="(day, index) in days" 
        :key="index" 
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ day.title }}
      </button>
    </div>

    <div class="timeline">
      <div v-for="(event, idx) in days[activeTab].events" :key="idx" class="event-item">
        <div class="time">{{ event.time }}</div>
        <div class="details">
          <h3>{{ event.name }}</h3>
          <span class="location-badge">{{ event.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);
const days = [
  {
    title: '1. Gün (Cuma)',
    events: [
      { time: '08:30 - 09:30', name: 'Kayıt & Karşılama', location: 'Lobi' },
      { time: '09:30 - 11:00', name: 'Açılış Seremonisi', location: 'Konferans Salonu' },
      { time: '11:00 - 11:30', name: 'Coffee Break', location: 'Kafeterya' },
      { time: '11:30 - 13:00', name: 'Oturum 1', location: 'Komite Odaları' },
    ]
  },
  { title: '2. Gün (C.tesi)', events: [{ time: '09:00', name: 'Oturum 4', location: 'Sınıflar' }] }, // Örnek
  { title: '3. Gün (Pazar)', events: [{ time: '16:00', name: 'Kapanış', location: 'Konferans Salonu' }] } // Örnek
];
</script>

<style scoped>
.container { padding: 4rem 2rem; max-width: 1000px; margin: 0 auto; }
.tabs { display: flex; justify-content: center; margin-bottom: 2rem; gap: 1rem; }
.tabs button {
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #333;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}
.tabs button.active { background: #333; color: white; }

.event-item {
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 1.5rem 0;
  align-items: center;
}
.time { font-weight: bold; width: 150px; color: #b91c1c; }
.details h3 { margin: 0 0 5px 0; }
.location-badge { font-size: 0.8rem; background: #f3f4f6; padding: 2px 8px; border-radius: 4px; color: #666; }
</style>