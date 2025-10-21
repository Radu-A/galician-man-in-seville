<<<<<<< HEAD
// ../firebase/deleteData.js (Adaptado para llamar a Cloud Function)

// ⚠️ IMPORTANTE: Esta URL es la dirección donde Google Cloud Functions desplegará tu función.
// Debes reemplazar este placeholder con la URL real una vez que despliegues la función.
const CLOUD_FUNCTION_DELETE_ENDPOINT =
  "https://TU-REGION-TU-PROYECTO.cloudfunctions.net/deletePhotoAndRecord";
// Ejemplo: "https://europe-west1-mi-app-54321.cloudfunctions.net/deletePhotoAndRecord"

/**
 * Elimina la foto llamando al backend seguro (Cloud Function).
 * La función backend se encargará de:
 * 1. Eliminar el archivo de Cloudinary (usando el API Secret).
 * 2. Eliminar el registro de Firestore.
 * * @param {string} photoId El ID del documento de Firestore.
 * @param {string} publicId El Public ID de Cloudinary para el archivo físico.
 */
const deletePhoto = async (photoId, publicId) => {
  if (!photoId || !publicId) {
    throw new Error(
      "El ID de la foto y el Public ID de Cloudinary son obligatorios."
    );
  }

  try {
    const response = await fetch(CLOUD_FUNCTION_DELETE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Si usas Auth, aquí deberías añadir el token de autenticación
      },
      body: JSON.stringify({
        photoId: photoId,
        publicId: publicId,
      }),
    });

    if (!response.ok) {
      // Lanza un error si el servidor (Cloud Function) responde con un estado HTTP 4xx o 5xx
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          `Fallo la eliminación en el servidor: Estado ${response.status}`
      );
    }

    console.log("Solicitud de eliminación enviada exitosamente al servidor.");
  } catch (error) {
    console.error("Error al comunicarse con la Cloud Function:", error);
    throw new Error(`Fallo la eliminación: ${error.message}`);
  }
};

export { deletePhoto };

// const deletePhoto = async (photoId) => {
//   if (!photoId) {
//     throw new Error("El ID de la foto es obligatorio para eliminarla.");
//   }
//   const docRef = doc(db, "photos", photoId);
//   await deleteDoc(docRef);
//   console.log("Documento de foto eliminado de Firestore con ID:", photoId);
// };
=======
import {
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import db from "./firebaseConfig";

/**
 * Deletes a photo document from Firestore by its custom "id" field.
 * @param {string} photoId - The custom ID stored in the document.
 * @returns {object} - Result object with status and message.
 */
export const deletePhoto = async (photoId) => {
  if (!photoId) {
    return { success: false, message: "Photo ID is required." };
  }

  try {
    // 1️⃣ Query Firestore for a document with the matching custom "id" field
    const photosRef = collection(db, "photos");
    const q = query(photosRef, where("id", "==", photoId));
    const snapshot = await getDocs(q);

    // 2️⃣ Handle empty result
    if (snapshot.empty) {
      console.warn(`⚠️ No document found with id = ${photoId}`);
      return {
        success: false,
        message: `No document found for id: ${photoId}`,
      };
    }

    // 3️⃣ Get document reference and delete it
    const photoRef = snapshot.docs[0].ref;
    await deleteDoc(photoRef);

    console.log(`✅ Photo deleted successfully: ${photoRef.path}`);
    return { success: true, message: `Photo deleted: ${photoRef.path}` };
  } catch (error) {
    console.error("❌ Error deleting photo:", error);
    return {
      success: false,
      message: error.message || "Error deleting photo.",
    };
  }
};
>>>>>>> photo
