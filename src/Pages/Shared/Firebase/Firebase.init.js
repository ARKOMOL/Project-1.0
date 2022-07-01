// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVz91r3JT3iNF8p87bVob-kDN85MHYLeE",
  authDomain: "project-1-bb0a8.firebaseapp.com",
  projectId: "project-1-bb0a8",
  storageBucket: "project-1-bb0a8.appspot.com",
  messagingSenderId: "643061364545",
  appId: "1:643061364545:web:5f499516fe9450b18913c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;