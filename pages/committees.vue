<template>
  <div class="page-wrapper">
    <div class="page-header">
      <h1>COMMITTEES</h1>
      <p>ACADEMIC BODIES OF CFLMUN'26</p>
    </div>

    <div v-if="!selectedCommittee" class="committees-grid container">
      <div v-for="c in committees" :key="c.short" class="c-card" @click="selectCommittee(c)">
        <div class="c-img">
          <img :src="c.image" :alt="c.short" class="committee-image" />
        </div>

        <div class="c-info">
          <h3 class="spaced-short-name">
            <span v-for="(char, index) in c.short" :key="index">{{ char }}</span>
          </h3>
          <p class="agenda"><strong>Agenda:</strong> {{ c.agenda }}</p>
          <p class="click-hint">Click to read more...</p>
        </div>
      </div>
    </div>

    <div v-else class="committee-detail container">
      <button class="back-btn" @click="clearSelection">
        &#8592; Back to Committees
      </button>

      <div class="detail-card">
        <div class="detail-img-wrapper">
          <img :src="selectedCommittee.image" :alt="selectedCommittee.short" class="detail-image-full" />
        </div>

        <div class="detail-info">
          <h2 class="spaced-short-name detail-title">
            <span v-for="(char, index) in selectedCommittee.short" :key="index">{{ char }}</span>
          </h2>

          <p class="agenda-large"><strong>Agenda:</strong> {{ selectedCommittee.agenda }}</p>

          <div class="information-text">
            {{ selectedCommittee.info }}
          </div>

          <div class="c-footer detail-footer">
            <button class="action-btn pre-doc-btn">
              <span class="icon">📄</span> Pre-Documents
            </button>
            <button class="action-btn study-btn">
              <span class="icon">📖</span> Study Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCommittee = ref(null)

const selectCommittee = (committee) => {
  selectedCommittee.value = committee
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const clearSelection = () => {
  selectedCommittee.value = null
}

const committees = [
  {
    short: 'DISEC',
    image: '/img/disec-logo.png',
    agenda: 'Addressing the Usage of Advanced Tech and Chemical Weapons in Ongoing and Recent Histories Armed Conflicts',
    info: `Since addressing the usage of advanced technologies and chemical weapons in ongoing and recent armed conflicts brings a critical issue for the international community, it's a subject that we must address. In these three days delegates will talk about modern warfare's new Advanced technologies in autonomous weapons systems, drones, cyber capabilities, and artificial intelligence, which can escalate to conflicts and bigger damages than usual.\n\nAt the same time, the use of chemical weapons remains a grave violation of international law, causing indiscriminate suffering and long-term environmental and health consequences.\n\nThe ongoing wars and recent wars like Palestine, Ukraine-Russia, Syrian civil war and many others that have ongoing effects will be addressed in the committee since advanced tech and Chemical weapons are a big part of our developing world.`
  },
  {
    short: 'UNODC',
    image: '/img/unodc-logo.png',
    agenda: 'Addressing the Role of Organized Crime in Drug Trafficking',
    info: `The United Nations Office on Drugs and Crime (UNODC) stands at the forefront of the global fight against illicit drugs, transnational organized crime, corruption, and terrorism. As drug trafficking networks grow increasingly sophisticated and interconnected, the role of organized crime has become one of the most pressing challenges facing the international community today.\n\nDrug trafficking is no longer a localized or isolated issue; it is a transnational enterprise driven by powerful criminal organizations that exploit weak governance, conflict zones, economic inequality, and technological advancements. These groups fuel violence, destabilize states, undermine the rule of law, and generate immense profits at the expense of public health, security, and human rights. From production and transportation to money laundering and distribution, organized crime permeates every stage of the global drug trade.\n\nIn this committee, delegates will examine how organized criminal networks operate within drug trafficking systems and assess their impact on societies, economies, and governments worldwide. The UNODC calls upon delegates to explore strategies that strengthen international cooperation, enhance law enforcement and judicial mechanisms, disrupt financial flows, and promote preventive measures addressing the root causes of drug-related crime.\n\nAs representatives of the international community, delegates are expected to engage in constructive debate, balance security with human rights, and propose innovative, realistic, and collaborative solutions. The challenge before them is not only to combat organized crime, but also to protect communities, uphold justice, and reinforce global stability.`
  },
  {
    short: 'UNHCR',
    image: '/img/unhcr-logo.png',
    agenda: 'Strengthening the Protection and Reception of Refugees Worldwide',
    info: `The United Nations High Commissioner for Refugees (UNHCR) is responsible for protecting the rights and well-being of refugees and forcibly displaced persons worldwide. Today, millions are forced to flee due to conflict, persecution, and humanitarian crises, often facing inadequate protection and difficult reception conditions.\n\nIn this committee, delegates will discuss strengthening international protection mechanisms, improving reception systems in host countries, and enhancing global cooperation and responsibility-sharing. Through collaborative solutions, UNHCR aims to ensure safety, dignity, and protection for refugees across the world.`
  },
  {
    short: 'INTERPOL',
    image: '/img/interpol-logo.png',
    agenda: 'Combating against Italian mafias',
    info: `The International Criminal Police Organization (INTERPOL), is a global organization that helps police from different countries cooperate to fight international crime for a safer world. Founded on September 7, 1923, its headquarters is located in Lyon, France. With 196 member states, it stands as the largest international police organization in the world. In this conference, the INTERPOL committee will focus on taking action against the famous Italian mafias and criminal organizations, whose origins date back to the 19th century. For decades, these groups have established deep-rooted criminal networks, infiltrating economies, governments, and societies with activities such as drug and arms trafficking, money laundering, extortion, and corruption. Delegates will work to develop solutions to combat the widespread crimes committed by Italy’s most powerful criminal organizations: Camorra, ’Ndrangheta, and the Sicilian Mafia. Furthermore, the delegates will discuss potential ways to prevent continuation of these criminal activities.`
  },
  {
    short: 'HCC',
    image: '/img/hcc-logo.png',
    agenda: 'Society of Motherland and Liberty',
    info: `The Committee of Motherland and Liberty places delegates at the heart of the late Ottoman struggle for sovereignty, reform, and national awakening. Established by young Ottoman intellectuals and officers, this clandestine organization sought to challenge absolutism, resist foreign influence, and lay the ideological foundations of a free and constitutional homeland.\n\nIn this Historical Crisis Committee, delegates will step into a period where secrecy, loyalty, and decisive action determine the fate of the Empire. Operating under constant surveillance and political pressure, members must navigate internal divisions, revolutionary strategies, and external threats while preserving the spirit of liberty and national unity.\n\nThis committee demands strategic thinking, historical awareness, and bold decision-making. Every choice may accelerate reform—or trigger irreversible consequences.`
  },
]
</script>

<style scoped>
.page-wrapper {
  padding-top: 100px;
  padding-bottom: 50px;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 3rem;
  color: #fff;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.page-header p {
  color: #888;
  letter-spacing: 1px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* --- GRID STYLES --- */
.committees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.c-card {
  background: #121212;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.c-card:hover {
  transform: translateY(-5px);
  border-color: #1c33b9;
  box-shadow: 0 10px 20px rgba(28, 51, 185, 0.2);
}

.c-img {
  height: 180px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #222;
  overflow: hidden;
}

.committee-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.c-info {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.spaced-short-name {
  margin: 0 0 15px;
  font-size: 1.8rem;
  color: white;
  display: flex;
  justify-content: space-between;
  font-weight: 900;
  letter-spacing: 0;
}

.agenda {
  color: #bbb;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;
}

.click-hint {
  font-size: 0.8rem;
  color: #1c33b9;
  font-style: italic;
  text-align: right;
  margin-top: 10px;
}

/* --- DETAIL VIEW STYLES --- */
.committee-detail {
  animation: fadeIn 0.4s ease-out;
}

.back-btn {
  background: transparent;
  color: #888;
  border: 1px solid #333;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  display: inline-block;
}

.back-btn:hover {
  color: #fff;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.05);
}

.detail-card {
  background: #121212;
  border: 1px solid #333;
  border-radius: 16px;
  /* Biraz daha yuvarlatıldı */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  /* Derinlik eklendi */
}

@media (min-width: 768px) {
  .detail-card {
    flex-direction: row;
    min-height: 500px;
    /* Büyük ekranlarda minimum yükseklik */
  }
}

.detail-img-wrapper {
  flex: 1;
  background: #000;
  position: relative;
  min-height: 300px;
  border-bottom: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-image-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Resmi doldurur */
}

@media (min-width: 768px) {
  .detail-img-wrapper {
    border-bottom: none;
    border-right: 1px solid #222;
  }
}

.detail-info {
  flex: 2;
  padding: 50px;
  /* İç boşluk artırıldı */
  display: flex;
  flex-direction: column;
}

.detail-title {
  font-size: 2.5rem;
  /* Başlık büyütüldü */
  margin-bottom: 20px;
  justify-content: flex-start;
  gap: 15px;
  /* Harfler arası boşluk yerine kelime boşluğu gibi */
}

.agenda-large {
  color: #ccc;
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  border-bottom: 1px solid #333;
  padding-bottom: 25px;
}

.information-text {
  color: #ddd;
  line-height: 1.9;
  /* Satır aralığı okuma kolaylığı için artırıldı */
  font-size: 1rem;
  white-space: pre-wrap;
  margin-bottom: 40px;
}

/* --- YENİLENMİŞ BUTON ALANI --- */
.detail-footer {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  /* Mobilde alt alta geçsin */
  gap: 25px;
  /* Butonlar arası boşluk açıldı */
}

.action-btn {
  font-size: 1rem;
  /* Yazı büyütüldü */
  padding: 14px 28px;
  /* Buton boyutları artırıldı */
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 180px;
  /* Butonun çok dar olmaması için */
  flex: 1;
  /* Mobilde tüm genişliği kaplasın, desktopta eşit paylaşsın */
  max-width: 300px;
  /* Çok geniş ekranlarda devasa olmasın */
}

.pre-doc-btn {
  background: linear-gradient(135deg, #1c33b9 0%, #15268c 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(28, 51, 185, 0.3);
  /* Mavi gölge */
}

.pre-doc-btn:hover {
  transform: translateY(-3px);
  /* Yukarı kalkma efekti */
  box-shadow: 0 8px 25px rgba(28, 51, 185, 0.5);
  background: linear-gradient(135deg, #2540e0 0%, #1a2fb0 100%);
}

.study-btn {
  background: transparent;
  border: 2px solid #555;
  /* Çerçeve kalınlaştırıldı */
  color: #ccc;
}

.study-btn:hover {
  border-color: #fff;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
}

.icon {
  font-size: 1.2rem;
}

/* --- ANIMATIONS --- */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>