import {
  doc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import db from "./firebaseConfig";

const deletePhoto = async (photoId) => {
  if (!photoId) {
    throw new Error("El ID de la foto es obligatorio para eliminarla.");
  }

  // 1️⃣ Creamos una query que busque el documento cuyo campo "id" coincida
  const photosRef = collection(db, "photos");
  const q = query(photosRef, where("id", "==", photoId));

  // 2️⃣ Ejecutamos la query
  const snapshot = await getDocs(q);

  // 3️⃣ Verificamos si encontramos algún documento
  if (snapshot.empty) {
    console.warn("⚠️ No se encontró ningún documento con id =", photoId);
    return;
  }

  // 4️⃣ Tomamos el primer documento que coincida y obtenemos la referencia
  const photoDoc = snapshot.docs[0];
  const photoRef = photoDoc.ref; // Esto es un objeto DocumentReference.

  console.log("🔗 Referencia encontrada:", photoRef.path);

  // 5️⃣ CÓDIGO CORREGIDO: Usar la referencia directamente
  // deleteDoc acepta una DocumentReference.
  await deleteDoc(photoRef);

  console.log(
    "Documento de foto eliminado de Firestore con Ref:",
    photoRef.path
  );
};

export { deletePhoto };
