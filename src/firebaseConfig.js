// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVz5v-TBdeGFAS5w4yES3Bwitc7f0PQMU",
    authDomain: "learnerpath-a2009.firebaseapp.com",
    projectId: "learnerpath-a2009",
    storageBucket: "learnerpath-a2009.appspot.com",
    messagingSenderId: "968803637571",
    appId: "1:968803637571:web:c1b8cc275452b9cc4177f6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
