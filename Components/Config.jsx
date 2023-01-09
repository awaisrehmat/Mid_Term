// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7KYoPhtX-6Od4AjBNfyQ6akaFlnSiM6M",
  authDomain: "final-term-mad.firebaseapp.com",
  projectId: "final-term-mad",
  storageBucket: "final-term-mad.appspot.com",
  messagingSenderId: "522529083521",
  appId: "1:522529083521:web:d94c377987a20bc0183d80",
  measurementId: "G-N3DPP30SLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//intialize db
export const db = getDatabase(app);