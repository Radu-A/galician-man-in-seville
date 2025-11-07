// En tu archivo de carga de datos (donde está uploadData)

import { collection, addDoc, deleteDoc, getDocs } from "firebase/firestore";
// Importamos la nueva estructura de datos
import { albumData } from "./data.js";
import { db } from "./firebaseConfig.js";

// Función opcional para limpiar colecciones (útil para "resetData")
const clearCollection = async (collectionRef, name) => {
  const snapshot = await getDocs(collectionRef);
  const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
  await Promise.all(deletePromises);
  console.log(
    `🗑️ Colección '${name}' limpiada: ${snapshot.docs.length} documentos eliminados.`
  );
};

const uploadData = async () => {
  const albumCollection = collection(db, "albums");
  const photoCollection = collection(db, "photos");

  try {
    // 💡 PASO 0: (Opcional) Limpiar colecciones antes de cargar
    // Si quieres que funcione como un "reset", descomenta estas líneas
    await clearCollection(albumCollection, "albums");
    await clearCollection(photoCollection, "photos");

    // 💡 PASO 1: Iterar sobre la lista de álbumes y sus fotos
    for (const data of albumData) {
      const { album, photos } = data; // Desestructura el álbum y su lista de fotos

      // 1.1. Crear el Álbum en Firestore y capturar su ID
      const newAlbumRef = await addDoc(albumCollection, album);
      const newAlbumId = newAlbumRef.id;

      console.log(
        `\n✅ Álbum principal creado: ${album.title} con ID: ${newAlbumId}`
      );

      // 1.2. Inyectar el ID del Álbum en los datos de las Fotos
      const photosWithAlbumId = photos.map((photo) => ({
        ...photo,
        albumId: newAlbumId, // Asigna el ID autogenerado
      }));

      // 1.3. Cargar todas las Fotos a la colección 'photos'
      let successCount = 0;
      for (const photo of photosWithAlbumId) {
        await addDoc(photoCollection, photo);
        successCount++;
      }

      console.log(
        `✅ ${successCount} fotos cargadas correctamente en el álbum '${album.title}'.`
      );
    } // Fin del bucle for

    console.log("\n🎉 Todos los documentos cargados correctamente.");
  } catch (error) {
    console.error("❌ Error durante la carga de datos:", error);
  }
};

export { uploadData };
