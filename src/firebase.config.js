// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC9Bj2_vTLf8dT9CEL9E6l1dnZU8elI-M",
  authDomain: "task-5ddee.firebaseapp.com",
  projectId: "task-5ddee",
  storageBucket: "task-5ddee.firebasestorage.app",
  messagingSenderId: "327378765734",
  appId: "1:327378765734:web:8c3632267b9137e6bff167",
  measurementId: "G-BP9JNKCGW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);