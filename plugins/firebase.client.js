import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDLQ3SaxghEf-KZDQnBKorGJxdYg5qOKpg",
    authDomain: "borekci-faris.firebaseapp.com",
    projectId: "borekci-faris",
    storageBucket: "borekci-faris.firebasestorage.app",
    messagingSenderId: "632169496189",
    appId: "1:632169496189:web:258c6559824bf95701bb14",
    measurementId: "G-VGTYG3EBSH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  return {
    provide: {
      firebase: {
        app,
        analytics,
        db
      }
    }
  }
});