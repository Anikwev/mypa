// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4ya0SADcc3xmHmoX6yv3_nDWLewjMMqs",
  authDomain: "test-5a826.firebaseapp.com",
  databaseURL: "https://test-5a826-default-rtdb.firebaseio.com",
  projectId: "test-5a826",
  storageBucket: "test-5a826.appspot.com",
  messagingSenderId: "1025908562766",
  appId: "1:1025908562766:web:5e7bf0f92da181fb72dc1f",
  measurementId: "G-0N1SBVPY3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database