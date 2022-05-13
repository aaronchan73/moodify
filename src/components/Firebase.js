import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZqF4q5SPJ9LEqmfjbCeNrdRDc1clFAu0",
  authDomain: "spotify-app-22924.firebaseapp.com",
  projectId: "spotify-app-22924",
  storageBucket: "spotify-app-22924.appspot.com",
  messagingSenderId: "926720785886",
  appId: "1:926720785886:web:00cc2699239aec24d5f14f",
  measurementId: "G-LVMMRX43J4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);