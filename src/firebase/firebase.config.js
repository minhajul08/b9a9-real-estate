// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOKgvFkN2FJPtQZO_NjBzYeVOUBAfEWNk",
  authDomain: "motherland-c11c4.firebaseapp.com",
  projectId: "motherland-c11c4",
  storageBucket: "motherland-c11c4.appspot.com",
  messagingSenderId: "304740556692",
  appId: "1:304740556692:web:a16ec5a18c2ecd0ae57981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;