// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLmHgxr_OfVzDIDgHcKvFdvln9ovn25Zs",
  authDomain: "thuandiep-90dee.firebaseapp.com",
  projectId: "thuandiep-90dee",
  storageBucket: "thuandiep-90dee.appspot.com",
  messagingSenderId: "32854204558",
  appId: "1:32854204558:web:d9590865eb0e4207c329df",
  measurementId: "G-H1ZDVBPDH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);