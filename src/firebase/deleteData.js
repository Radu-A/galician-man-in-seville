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
