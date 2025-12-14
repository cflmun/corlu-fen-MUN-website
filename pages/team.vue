<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>Our Team</h1>
      <p>The Power Behind CFLMUN'26</p>
    </div>

    <div class="team-section">
      <h2 class="section-title">Secretariat</h2>
      <div class="team-grid main">
        <div class="member-card">
          <div class="avatar"></div>
          <h3>Öğrenci Adı</h3>
          <span>Secretary General</span>
        </div>
        <div class="member-card">
          <div class="avatar"></div>
          <h3>Öğrenci Adı</h3>
          <span>Director General</span>
        </div>
      </div>
    </div>

    <div class="team-section">
      <h2 class="section-title">Organization Team</h2>
      <div class="team-grid">
        <div v-for="n in 4" :key="n" class="member-card small">
          <div class="avatar"></div>
          <h3>Üye Adı</h3>
          <span>Head of Org.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper { padding-top: 100px; text-align: center; padding-bottom: 60px; }
.section-title { 
  display: inline-block; border-bottom: 2px solid #b91c1c; 
  padding-bottom: 10px; margin: 50px 0 30px; color: #fff; letter-spacing: 2px;
}

.team-grid { 
  display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; 
  max-width: 1200px; margin: 0 auto; 
}

.member-card { width: 250px; }
.avatar { 
  width: 180px; height: 180px; background: #222; border-radius: 50%; 
  margin: 0 auto 20px; transition: 0.3s; border: 3px solid transparent; 
}
.member-card:hover .avatar { border-color: #b91c1c; }

h3 { margin: 5px 0; color: white; }
span { color: #888; font-style: italic; }

.small .avatar { width: 140px; height: 140px; }
</style>