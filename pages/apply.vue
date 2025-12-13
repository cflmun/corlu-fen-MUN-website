<template>
  <div class="apply-page container">
    <div class="header">
      <h1>ÇFLMUN'25 Başvuruları</h1>
      <p>Lütfen başvuru yapmadan önce komite bilgilerini inceleyiniz.</p>
    </div>

    <div class="apply-cards">
      <div class="apply-card">
        <h2>Bireysel Delege</h2>
        <p>Tek başına katılmak isteyen delegeler için.</p>
        <a href="https://forms.google.com/..." target="_blank" class="btn">Başvur</a>
      </div>

      <div class="apply-card dark">
        <h2>Delegasyon</h2>
        <p>Okul veya kulüp olarak (en az 5 kişi) katılmak için.</p>
        <a href="https://forms.google.com/..." target="_blank" class="btn btn-outline">Başvur</a>
      </div>
      
       <div class="apply-card">
        <h2>Akademi & Org</h2>
        <p>Organizasyon veya Akademi ekibinde yer almak için.</p>
        <a href="https://forms.google.com/..." target="_blank" class="btn">Başvur</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container { padding: 4rem 2rem; text-align: center; }
.header { margin-bottom: 3rem; }
.apply-cards { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; }
.apply-card {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 2rem;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.apply-card.dark { background: #1f2937; color: white; border: none; }
.apply-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px rgba(0,0,0,0.1); }
.apply-card h2 { margin-top: 0; }
.btn {
  display: block; width: 100%; padding: 12px; background: #b91c1c; color: white;
  text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 1rem;
}
.btn-outline { background: transparent; border: 2px solid white; }
.btn-outline:hover { background: white; color: #1f2937; }
</style>