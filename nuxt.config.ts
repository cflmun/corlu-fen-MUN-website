// nuxt.config.ts
export default defineNuxtConfig({
  // CSS yolunu buraya eklediğinden emin ol
  css: [
    '/assets/css/main.css' 
  ],

  app: {
    head: {
      title: "ÇFLMUN'25 | Çorlu Fen Lisesi Model United Nations",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Fontları çekmek için bu satır şart
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap' }
      ]
    }
  }
})