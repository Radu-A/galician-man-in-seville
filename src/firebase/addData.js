import { collection, addDoc } from "firebase/firestore";
import db from "./firebaseConfig.js";

// Ass a new document in collection "photos"
// const newPhoto = {
//   id: "px-zsg-5",
//   postId: "zsgZDg_OwLk",
//   date: "2024-10-12",
//   datetime: "2024-10-12T08:00:00Z",
//   title: "Una cosa que no existe",
//   description: "Es alucinante, igualmente.",
//   url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
// };

const addPhoto = async (newPhoto) => {
  // Use of collection and addDoc to Firestore to generate an unique Id
  const photosCollectionRef = collection(db, "photos");
  // If an error happend, the try/catch will catch the error
  const docRef = await addDoc(photosCollectionRef, newPhoto);
  // Return id, just in case
  return docRef.id;
};

// addPhoto(newPhoto)
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { addPhoto };
