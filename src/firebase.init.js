// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcscQA8z81-aoHSFOkkYHXbE8eBN7zEwY",
  authDomain: "bookstorex-ed083.firebaseapp.com",
  projectId: "bookstorex-ed083",
  storageBucket: "bookstorex-ed083.firebasestorage.app",
  messagingSenderId: "384193841390",
  appId: "1:384193841390:web:e004a19838fdc572a7cbff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
