import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAXUP-yTI_iOqRyKqlQY1Fzqk0Ju0J5hZQ",
    authDomain: "petidbeta.firebaseapp.com",
    projectId: "petidbeta",
    storageBucket: "petidbeta.appspot.com",
    messagingSenderId: "465495714683",
    appId: "1:465495714683:web:103810f545e7444e096bde"
}

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);