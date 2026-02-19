import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBkWZc90fChBBh89-rlxAWJyUT2gZeMqxo",
    authDomain: "fakan-tech.firebaseapp.com",
    projectId: "fakan-tech",
    storageBucket: "fakan-tech.firebasestorage.app",
    messagingSenderId: "617501208709",
    appId: "1:617501208709:web:a58bc52f63e15e2678b9ec",
    measurementId: "G-GT461HYGFY"
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