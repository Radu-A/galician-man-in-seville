import { doc, deleteDoc } from "firebase/firestore";
import db from "./firebaseConfig";

const deletePhoto = async (photoId) => {
  if (!photoId) {
    throw new Error("El ID de la foto es obligatorio para eliminarla.");
  }
  const docRef = doc(db, "photos", photoId);
  await deleteDoc(docRef);
  console.log("Documento de foto eliminado de Firestore con ID:", photoId);
};

export { deletePhoto };
