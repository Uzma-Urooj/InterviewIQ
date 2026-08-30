import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"

// console.log(import.meta.env.VITE_FIREBASE_APIKEY)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-b4ce5.firebaseapp.com",
  projectId: "interviewiq-b4ce5",
  storageBucket: "interviewiq-b4ce5.firebasestorage.app",
  messagingSenderId: "689433142954",
  appId: "1:689433142954:web:806e03f1da0dbe477a92d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}