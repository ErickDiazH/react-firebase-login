import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCpHogsezrqdQbvpDlts2EeYamlWjq5F2E",
  authDomain: "react-firebase-login-aut-3a0b5.firebaseapp.com",
  projectId: "react-firebase-login-aut-3a0b5",
  storageBucket: "react-firebase-login-aut-3a0b5.appspot.com",
  messagingSenderId: "672639497926",
  appId: "1:672639497926:web:a0fdae2b86bad62b5c49c7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)