import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIMbgF3s4-Ffa22OkqCAmeclfrzeIo_n8",
  authDomain: "coderhouse-ecommerce-demartino.firebaseapp.com",
  projectId: "coderhouse-ecommerce-demartino",
  storageBucket: "coderhouse-ecommerce-demartino.appspot.com",
  messagingSenderId: "82130524658",
  appId: "1:82130524658:web:4a62308f02a0a4bb05b36b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)