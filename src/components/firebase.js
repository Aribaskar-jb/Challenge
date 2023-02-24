// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8CcxTq8smi9y88BUcFn8_Xe3aT7IfwI",
  authDomain: "calange-b9112.firebaseapp.com",
  projectId: "calange-b9112",
  storageBucket: "calange-b9112.appspot.com",
  messagingSenderId: "112270562665",
  appId: "1:112270562665:web:2cfdef40bc62486df559f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);