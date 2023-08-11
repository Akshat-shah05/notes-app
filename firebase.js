import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPNIyOsM0yjfFKl_Pr1pQyn25yYe5uVTQ",
  authDomain: "notes-app-8269f.firebaseapp.com",
  projectId: "notes-app-8269f",
  storageBucket: "notes-app-8269f.appspot.com",
  messagingSenderId: "301638613182",
  appId: "1:301638613182:web:f6a5f588e4b308a5de86ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

