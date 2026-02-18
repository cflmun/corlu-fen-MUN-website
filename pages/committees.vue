<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>COMMITTEES</h1>
      <p>ACADEMIC BODIES OF CFLMUN'26</p>
    </div>

    <div class="committees-grid container">
      <div v-for="c in committees" :key="c.short" class="c-card">

        <div class="c-img">
          <img :src="c.image" :alt="c.short" class="committee-image" />
        </div>

        <div class="c-info">
          <h3 class="spaced-short-name">
            <span v-for="(char, index) in c.short" :key="index">{{ char }}</span>
          </h3>

          <p class="agenda"><strong>Agenda:</strong> {{ c.agenda }}</p>

          <div class="c-footer">
            <button class="btn-sm pre-doc-btn">Pre-Documents</button>
            <button class="btn-sm study-btn">Study Guide</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const committees = [
  {
    short: 'DISEC',
    image: '/img/disec-logo.png', // Düzeltildi
    agenda: 'The Arms Race and Space Security'
  },
  {
    short: 'UNHCR',
    image: '/img/unhcr-logo.png', // Eğer bu dosya da "img" klasöründeyse böyle olmalı
    agenda: 'To be announced...'
  },
  {
    short: 'UNODC',
    image: '/img/unodc-logo.png',
    agenda: 'To be announced...'
  },
  {
    short: 'INTERPOL',
    image: '/img/interpol-logo.png',
    agenda: 'To be announced...'
  },
  {
    short: 'HCC',
    image: '/img/hcc-logo.png',
    agenda: 'To be announced...'
  },
]
</script>

<style scoped>
.page-wrapper {
  padding-top: 100px;
  padding-bottom: 50px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 10px;
}

.page-header p {
  color: #888;
}

.committees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.c-card {
  background: #121212;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.c-card:hover {
  transform: translateY(-5px);
  border-color: #b91c1c;
  box-shadow: 0 10px 20px rgba(185, 28, 28, 0.15);
}

.c-img {
  height: 180px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #222;
  overflow: hidden;
  /* Taşmaları engellemek için */
}

/* Yeni Eklenen: Fotoğraf Stilleri */
.committee-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Eğer logoları kesilmeden tam sığdırmak istersen 'contain' olarak değiştirebilirsin */
}

.c-info {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Yeni Eklenen: Harfleri Yayan Başlık Stili */
.spaced-short-name {
  margin: 0 0 15px;
  font-size: 1.8rem;
  /* Gözüne daha iyi hitap etmesi için biraz büyütebilirsin */
  color: white;
  display: flex;
  justify-content: space-between;
  /* Sihir burada gerçekleşiyor */
  font-weight: 900;
  letter-spacing: 0;
  /* Ekstra boşluk olmaması için sıfırlıyoruz */
}

.agenda {
  color: #bbb;
  font-size: 0.95rem;
  margin-bottom: 25px;
  line-height: 1.5;
}

.c-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.btn-sm {
  font-size: 0.8rem;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  flex: 1;
  text-align: center;
}

.pre-doc-btn {
  background: #b91c1c;
  color: white;
  border: 1px solid #b91c1c;
}

.pre-doc-btn:hover {
  background: #8f1616;
  border-color: #8f1616;
}

.study-btn {
  background: transparent;
  border: 1px solid #555;
  color: #888;
}

.study-btn:hover {
  border-color: white;
  color: white;
  background: rgba(255, 255, 255, 0.05);
}
</style>