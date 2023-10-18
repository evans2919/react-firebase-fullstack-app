// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmQH5u9d_O0aaVjutGm3_-s18CE5oGycc",
    authDomain: "react-firebase-fullstack-64a6f.firebaseapp.com",
    projectId: "react-firebase-fullstack-64a6f",
    storageBucket: "react-firebase-fullstack-64a6f.appspot.com",
    messagingSenderId: "247589366330",
    appId: "1:247589366330:web:1306f7f4f84e394f22e303",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };