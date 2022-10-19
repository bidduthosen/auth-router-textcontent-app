// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwrHb7mF1x7l3BQIzQ-WEnQ91wL4dVKPM",
  authDomain: "auth-router-textcontent-app.firebaseapp.com",
  projectId: "auth-router-textcontent-app",
  storageBucket: "auth-router-textcontent-app.appspot.com",
  messagingSenderId: "334375587992",
  appId: "1:334375587992:web:3e0d92a79208193db7c0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;