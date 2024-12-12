import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCE1THVkswlKzrUsDk0x_ORPTmFToVuG3g",
  authDomain: "mascotasperdidas-55327.firebaseapp.com",
  projectId: "mascotasperdidas-55327",
  storageBucket: "mascotasperdidas-55327.firebasestorage.app",
  messagingSenderId: "188554047897",
  appId: "1:188554047897:web:186b044f532645a30c2308",
  measurementId: "G-XFCS5SZMLY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

