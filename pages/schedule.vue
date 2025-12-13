<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>TAKVİM</h1>
    </div>

    <div class="schedule-container">
      <div class="timeline">
        <div class="day-header">1. GÜN (Cuma)</div>
        <div class="event-row">
          <div class="time">16:00</div>
          <div class="event-details">
            <h3>Kayıt & Karşılama</h3>
            <span>Ana Lobi</span>
          </div>
        </div>
        <div class="event-row">
          <div class="time">17:30</div>
          <div class="event-details">
            <h3>Açılış Seremonisi</h3>
            <span>Konferans Salonu</span>
          </div>
        </div>

        <div class="day-header" style="margin-top: 40px;">2. GÜN (Cumartesi)</div>
        <div class="event-row">
          <div class="time">09:00</div>
          <div class="event-details">
            <h3>Oturum 2</h3>
            <span>Komite Odaları</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper { padding-top: 100px; min-height: 80vh; }
.page-header { text-align: center; margin-bottom: 50px; }

.schedule-container { max-width: 800px; margin: 0 auto; padding: 20px; }
.day-header { 
  font-size: 1.5rem; color: #b91c1c; border-bottom: 1px solid #333; 
  padding-bottom: 10px; margin-bottom: 20px; font-weight: bold; 
}

.event-row { 
  display: flex; align-items: center; padding: 20px 0; 
  border-bottom: 1px solid #1a1a1a; 
}
.event-row:last-child { border-bottom: none; }

.time { width: 120px; font-size: 1.2rem; font-weight: bold; color: white; }
.event-details h3 { margin: 0; font-size: 1.1rem; color: #ddd; }
.event-details span { color: #666; font-size: 0.9rem; }
</style>