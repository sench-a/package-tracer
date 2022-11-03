import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLEHFixqS1H7gehnQl0alNsFXY37-ShXA",
    authDomain: "package-tracker-718fe.firebaseapp.com",
    projectId: "package-tracker-718fe",
    storageBucket: "package-tracker-718fe.appspot.com",
    messagingSenderId: "349954927099",
    appId: "1:349954927099:web:a387a3b8b1586e49d5435e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

