// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcgseAcETfvQXw2JJ3lDkYJwlO3FrLO-w",
  authDomain: "nuxt-crud-app-d6e84.firebaseapp.com",
  projectId: "nuxt-crud-app-d6e84",
  storageBucket: "nuxt-crud-app-d6e84.appspot.com",
  messagingSenderId: "839145395559",
  appId: "1:839145395559:web:1c95366417df678b9f4bc2",
  measurementId: "G-CEFD3SHS5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize db
const db = getFirestore(app);
const colRefLaptops = collection(db, "Laptops");

export default colRefLaptops;
