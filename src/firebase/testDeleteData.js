import { doc, deleteDoc, addDoc, getDoc, collection } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2bJj_9Lc3JzVsThK5H4fQZ4WBoHeEiU",
  authDomain: "galician-man-in-seville.firebaseapp.com",
  projectId: "galician-man-in-seville",
  storageBucket: "galician-man-in-seville.firebasestorage.appspot.com",
  messagingSenderId: "528593693645",
  appId: "1:528593693645:web:4ee4294726a0de33253284",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const deletePhoto = async () => {
  const docRef = doc(db, "photos", "ph-dm-2");
  console.log("Intentando eliminar ID:", "ph-dm-2");
  await deleteDoc(docRef);
  console.log("Documento de foto eliminado de Firestore con ID:", "ph-dm-2");
};

const addAndCheck = async () => {
  const ref = await addDoc(collection(db, "photos"), {
    test: true,
    timestamp: Date.now(),
  });
  console.log("✅ Documento creado con ID:", ref.id);
  const downloadedDoc = await getDoc(ref);
  console.log(downloadedDoc);
};

const chatGptTest = async () => {
  const ref = await addDoc(collection(db, "photos"), {
    test: true,
    timestamp: Date.now(),
  });
  console.log("✅ Documento creado con ID:", ref.id);

  const before = await getDoc(ref);
  console.log("Existe antes de borrar:", before.exists());

  await deleteDoc(ref);
  console.log("Intentando eliminar:", ref.path);

  const after = await getDoc(ref);
  console.log("Existe después de borrar:", after.exists());
};

// deletePhoto()
//   .then(() => console.log("Documento eliminado"))
//   .catch(console.error);
addAndCheck()
  .then(() => console.log("Sabe Dios"))
  .catch(console.error);
