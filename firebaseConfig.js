// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDil6_AEH144bFZClhdgIRmOeWLZ2XJ9Ag",
  authDomain: "fir-prep-cours.firebaseapp.com",
  projectId: "fir-prep-cours",
  storageBucket: "fir-prep-cours.appspot.com",
  messagingSenderId: "784180562458",
  appId: "1:784180562458:web:ca0201adaa3515ea069fa3",
  measurementId: "G-NTK2F8PVTP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const FIREBASE_AUTH = getAuth(app);
export const db = getFirestore(app);