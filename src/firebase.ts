// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBL6PyZnlFrjgXoyC-DE5ayJUEIHLcVfOI",
  authDomain: "plantsy-af146.firebaseapp.com",
  projectId: "plantsy-af146",
  storageBucket: "plantsy-af146.appspot.com",
  messagingSenderId: "467543707816",
  appId: "1:467543707816:web:0775c878864db45798f29d",
  measurementId: "G-XGBJDGHE25",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
