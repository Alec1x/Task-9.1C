import { initializeApp } from  "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC4m6xwFjRTOUKk68vpBFysubmUrqLrrN8",
    authDomain: "task-71p-6d5ef.firebaseapp.com",
    projectId: "task-71p-6d5ef",
    storageBucket: "task-71p-6d5ef.firebasestorage.app",
    messagingSenderId: "489957127485",
    appId: "1:489957127485:web:11a5d66157f38caffe8154",
    measurementId: "G-5E93CSF452"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
        prompt: "select_account"
    });
export const auth = getAuth(firebaseApp);
export const googleSignIn = () => signInWithPopup(auth, provider);