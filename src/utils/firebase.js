// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARtIA3ikhcRWXlQQen1aDLedJhXU82B2U",
  authDomain: "netflixgpt-f05cb.firebaseapp.com",
  projectId: "netflixgpt-f05cb",
  storageBucket: "netflixgpt-f05cb.appspot.com",
  messagingSenderId: "900464128017",
  appId: "1:900464128017:web:8387905dd3eedcf96781b0",
  measurementId: "G-KVFLK9LV5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);