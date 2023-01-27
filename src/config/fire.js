import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  getDocs,
  deleteDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCASciJjdWKvdT-SVpgRKCXzwOoQ4EKROo',
  authDomain: 'vitality-43d63.firebaseapp.com',
  databaseURL: 'https://vitality-43d63-default-rtdb.firebaseio.com',
  projectId: 'vitality-43d63',
  storageBucket: 'vitality-43d63.appspot.com',
  messagingSenderId: '854106165892',
  appId: '1:854106165892:web:bc4054e7ebeb77e0a8a8d1',
  measurementId: 'G-JXHY9S4R5V',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

async function createUser(data) {
  const docRef = await addDoc(collection(db, 'users'), {
    fullName: data.fullName,
    email: data.email,
    city: data.city,
    licenceNumber: data.licenceNumber,
    password: data.password,
  });
  console.log('Document written with ID: ', docRef.id);
}

async function updateUser(data) {
  const examcollref = doc(db, 'users', data.id);
  updateDoc(examcollref, data);
}

async function getUserByEmail(email) {
  const snapshot = await getDocs(collection(db, 'users'));
  const docs = snapshot.docs.map((dd) => ({ ...dd.data(), id: dd.id }));
  const docsFilter = docs.find((x) => x.email === email);
  return docsFilter;
}

async function deleteUser(id) {
  const path = "users/"
  await deleteDoc(doc(db, +path + id));
}

export { db, createUser, updateUser, getUserByEmail,deleteUser };
