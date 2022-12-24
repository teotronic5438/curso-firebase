// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAq_oFhAEoL6pOPWmY8V9uyy30YQPYmTDc",
  authDomain: "curso-firebase-f1f55.firebaseapp.com",
  projectId: "curso-firebase-f1f55",
  storageBucket: "curso-firebase-f1f55.appspot.com",
  messagingSenderId: "859658372504",
  appId: "1:859658372504:web:eaffada6671276b7b957ed"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;