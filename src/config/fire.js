import { initializeApp } from "firebase/app";
import { getFirestore,  addDoc,
  collection,
  doc,

  updateDoc,
  getDocs,
  deleteDoc } from "firebase/firestore";  
import { getAuth } from "firebase/auth";

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
        .map((x) => x.data())
        .find((userD) => userD.email === userObject.email);
  // const snapshot = await getDocs(collection(db, 'users'));
  // const docs = snapshot.docs.map((dd) => ({ ...dd.data(), id: dd.id }));
  // const docsFilter = docs.find((x) => x.email === email);
  // return docsFilter;

  return userData;
}

async function deleteUser(id) {
  const path = "users/"
  await deleteDoc(doc(db, +path + id));
}

async function createSubscribe(data) {
  const docRef = await addDoc(collection(db, 'subscribe_mails'), {
   
    email: data.email,
  
  });
  console.log('Document written with ID: ', docRef.id);
}

export { db, createUser, updateUser, getUserByEmail,deleteUser,createSubscribe };

