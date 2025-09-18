// File: Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXEGbsURH4S_G3I9WQgUsEbwigVRVTFfk",
  authDomain: "myproject-733e2.firebaseapp.com",
  databaseURL: "https://myproject-733e2-default-rtdb.firebaseio.com",
  projectId: "myproject-733e2",
  storageBucket: "myproject-733e2.firebasestorage.app",
  messagingSenderId: "1091182789012",
  appId: "1:1091182789012:web:fbee7f79a1e4c47f8b0f81",
  measurementId: "G-7V55BW1RD8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
