// plugins/firebase.client.js
// Bu dosyayı projenin /plugins/ klasörüne koy.
// Dosya adı .client.js ile bitmeli — bu sayede Nuxt onu yalnızca
// tarayıcıda çalıştırır, sunucu tarafında (SSR) hata vermez.

import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase Console → Project Settings → General → Your apps bölümünden
// aldığın değerleri buraya gir:
const firebaseConfig = {
    apiKey: "AIzaSyBkWZc90fChBBh89-rlxAWJyUT2gZeMqxo",
    authDomain: "fakan-tech.firebaseapp.com",
    projectId: "fakan-tech",
    storageBucket: "fakan-tech.firebasestorage.app",
    messagingSenderId: "617501208709",
    appId: "1:617501208709:web:a58bc52f63e15e2678b9ec",
    measurementId: "G-GT461HYGFY"
}

export default defineNuxtPlugin(() => {
  // Uygulamanın birden fazla kez initialize edilmesini önle
  const app = getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]

  const db = getFirestore(app)

  // index.vue'daki $firebase.db ile eşleşiyor
  return {
    provide: {
      firebase: {
        app,
        db
      }
    }
  }
})
