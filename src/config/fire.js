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
  apiKey: "AIzaSyA5XLLxEmDUXxyW_LGr6pNhL-nlwlu4sN4",
  authDomain: "vitality-demo.firebaseapp.com",
  projectId: "vitality-demo",
  storageBucket: "vitality-demo.appspot.com",
  messagingSenderId: "197888380495",
  appId: "1:197888380495:web:4e3328098f18129829643a",
  measurementId: "G-305YHDSLHN"
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

async function getUserByEmail() {

  const user = localStorage.getItem('user');
   
      const userObject = JSON.parse(user);
      const userCol = collection(db, 'users');
      const userSnapshot = await getDocs(userCol);
      const userData = userSnapshot.docs
        .map((x) => ({ ...x.data(), id: x.id }) )
        .find((userD) => userD.email === userObject.email);
  // const snapshot = await getDocs(collection(db, 'users'));
  // const docs = snapshot.docs.map((dd) => ({ ...dd.data(), id: dd.id }));
  // const docsFilter = docs.find((x) => x.email === email);
  // return docsFilter;

  return userData;
}

async function deleteUser(id) {
  console.log(id)
  const path = "users/"
  await deleteDoc(doc(db, path + id));
}

async function createSubscribe(data) {
  const docRef = await addDoc(collection(db, 'subscribe_mails'), {
   
    email: data.email,
  
  });
  console.log('Document written with ID: ', docRef.id);
}

export { db, createUser, updateUser, getUserByEmail,deleteUser,createSubscribe };
