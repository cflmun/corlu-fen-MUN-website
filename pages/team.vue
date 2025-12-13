<template>
  <div class="team-page container">
    <section class="section">
      <h2 class="section-title">Secretariat</h2>
      <div class="team-grid">
        <div class="member-card main-role">
          <!--<img src="@/assets/sg.jpg" alt="Secretary General">-->
          <h3>Ad Soyad</h3>
          <span>Secretary General</span>
        </div>
        <div class="member-card main-role">
          <!--<img src="/assets/dsg.jpg" alt="Director General">-->
          <h3>Ad Soyad</h3>
          <span>Director General</span>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Academic Team</h2>
      <div class="team-grid compact">
        <div v-for="n in 4" :key="n" class="member-card">
          <div class="placeholder-img"></div>
          <h4>Üye Adı</h4>
          <span>Under-Secretary General</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container { padding: 4rem 2rem; text-align: center; }
.section { margin-bottom: 4rem; }
.section-title { font-size: 2rem; margin-bottom: 2rem; border-bottom: 2px solid #b91c1c; display: inline-block; padding-bottom: 10px; }
.team-grid { display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; }
.member-card { text-align: center; width: 250px; }
.member-card img, .placeholder-img { 
  width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; 
  border: 4px solid #f3f4f6; transition: 0.3s; background: #ddd;
}
.member-card:hover img { border-color: #b91c1c; }
.member-card h3 { margin: 0; color: #111; }
.member-card span { color: #666; font-style: italic; }
</style>