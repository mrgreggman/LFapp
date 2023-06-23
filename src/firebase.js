import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAj27M7u_0UW3KkTzOnxQf_MqQlp8ujCmo",
  authDomain: "lfapp-76f7c.firebaseapp.com",
  databaseURL: "https://lfapp-76f7c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lfapp-76f7c",
  storageBucket: "lfapp-76f7c.appspot.com",
  messagingSenderId: "607968315817",
  appId: "1:607968315817:web:6eae6e41c59fbfcec85cb8",
  measurementId: "G-RHT3LXRTLK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const postsCollectionRef = collection(db, 'posts');

onSnapshot(postsCollectionRef, (snapshot) => {
  const posts = snapshot.docs.map((doc) => doc.data());
});

export { db, firebaseConfig };