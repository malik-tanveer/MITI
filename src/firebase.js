// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBojeIR0AA0Mr-R8YpN9nvGfaqvRk0ddvs",
  authDomain: "memon-12.firebaseapp.com",
  projectId: "memon-12",
  storageBucket: "memon-12.firebasestorage.app",
  messagingSenderId: "1068296155694",
  appId: "1:1068296155694:web:e466a1116f45a8c48d25bf",
  measurementId: "G-1V37CVRDYM",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Optional: Firebase Analytics
const analytics = getAnalytics(app);

// Firebase Auth & Google Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore DB
const db = getFirestore(app);

export { app, analytics, auth, googleProvider, db };
