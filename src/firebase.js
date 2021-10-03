// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyYG92saRTL1omZpd7sq9i405fjaGzfn0",
  authDomain: "mulatosmovienight.firebaseapp.com",
  projectId: "mulatosmovienight",
  storageBucket: "mulatosmovienight.appspot.com",
  messagingSenderId: "1021226279349",
  appId: "1:1021226279349:web:1a7d5ac7c13d382b52b9fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();