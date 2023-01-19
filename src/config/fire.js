import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCASciJjdWKvdT-SVpgRKCXzwOoQ4EKROo",
  authDomain: "vitality-43d63.firebaseapp.com",
  databaseURL: "https://vitality-43d63-default-rtdb.firebaseio.com",
  projectId: "vitality-43d63",
  storageBucket: "vitality-43d63.appspot.com",
  messagingSenderId: "854106165892",
  appId: "1:854106165892:web:bc4054e7ebeb77e0a8a8d1",
  measurementId: "G-JXHY9S4R5V"

}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)
export { db } 

