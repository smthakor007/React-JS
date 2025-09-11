// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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