import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD79ph2q9CGN2z1Y0QIWBWl57sIuzOntSc",
  authDomain: "autentificador-f9bf4.firebaseapp.com",
  projectId: "autentificador-f9bf4",
  storageBucket: "autentificador-f9bf4.firebasestorage.app",
  messagingSenderId: "90390164706",
  appId: "1:90390164706:web:ce7248218ba7f49ecb1abb",
  measurementId: "G-4YBY7369XW"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

