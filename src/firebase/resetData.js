import { collection, addDoc } from "firebase/firestore";
import { albums, paseoRioPhotos } from "./dataNew.js";
import { db } from "./firebaseConfig.js";

// Add new collections posts and photos
const uploadData = async () => {
  const albumCollection = collection(db, "albums");
  const photoCollection = collection(db, "photos");
  try {
    // Create new album
    console.log(albums[0].title);

    const newAlbumRef = await addDoc(albumCollection, albums[0]);
    const newAlbumId = newAlbumRef.id;
    console.log(
      `✅ Álbum principal creado: ${albums[0].title} con ID: ${newAlbumId}`
    );
    // Inject albumId into photo data
    const photosWithAlbumId = paseoRioPhotos.map((photo) => ({
      ...photo,
      albumId: newAlbumId,
    }));
    // 3. Cargar todas las Fotos a la colección 'photos'
    let successCount = 0;
    for (const photo of photosWithAlbumId) {
      await addDoc(photoCollection, photo);
      successCount++;
    }
    console.log(
      `✅ ${successCount} fotos cargadas correctamente en el álbum '${albums[0].title}'.`
    );
    console.log("✅ Todos los documentos cargados correctamente.");
  } catch (error) {
    console.error("❌ Error durante la carga de datos:", error);
  }
};

// uploadData()
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { uploadData };
