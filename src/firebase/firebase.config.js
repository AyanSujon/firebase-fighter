// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWsda6GK7vyzGjuMmjB01WSr0QJOvl4fo",
  authDomain: "fir-fighter-3c26a.firebaseapp.com",
  projectId: "fir-fighter-3c26a",
  storageBucket: "fir-fighter-3c26a.firebasestorage.app",
  messagingSenderId: "583521513319",
  appId: "1:583521513319:web:ffbc01471474795c9309c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);