// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB174Ee3B8ADjLj2VQdgkN84yRMD4OhC3k",
  authDomain: "ecommerce-b6916.firebaseapp.com",
  projectId: "ecommerce-b6916",
  storageBucket: "ecommerce-b6916.appspot.com",
  messagingSenderId: "358132298516",
  appId: "1:358132298516:web:7b8e6958e06ca0718dc801",
  measurementId: "G-5XY5QFQRTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Hosting
// firebase login
//firebase init
//firebase deploy
