// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmxd2hRdM8O-ZJdz0lKNaEbWN5Qi9UPVE",
  authDomain: "blog-app-coding-ninjas.firebaseapp.com",
  projectId: "blog-app-coding-ninjas",
  storageBucket: "blog-app-coding-ninjas.appspot.com",
  messagingSenderId: "781030504411",
  appId: "1:781030504411:web:7e29ce30e402b3238399fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
