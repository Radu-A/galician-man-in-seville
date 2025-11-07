import { collection, query, where, getDocs } from "firebase/firestore";
import { db, storage } from "./firebaseConfig.js";
import { ref, getDownloadURL } from "firebase/storage";

// Get a list of posts from db
const getAlbums = async () => {
  const albumCol = collection(db, "albums");
  const albumSnapshot = await getDocs(albumCol);
  const albumList = albumSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(albumList);

  return albumList;
};

// Get a list of photos from db for a specific album
const getPhotos = async (albumId) => {
  // 1. Create a query reference
  const q = query(
    collection(db, "photos"),
    where("albumId", "==", albumId) // 2. Apply the filter in Firestore
  );

  try {
    // 3. Execute the filtered query
    const photoSnapshot = await getDocs(q);

    // 4. Map the documents to a list, including the document ID
    const photoList = photoSnapshot.docs.map((doc) => ({
      id: doc.id, // 💡 IMPORTANT: Ensure the document ID is included here
      ...doc.data(),
    }));

    console.log(
      `[Firestore] Fetched ${photoList.length} photos for Album ID: ${albumId}`
    );

    return photoList;
  } catch (error) {
    console.error(
      `[Firestore Error] Failed to fetch photos for album ${albumId}:`,
      error
    );
    // Throw error for frontend to handle
    throw new Error(
      "🚨 Error al cargar las fotos del álbum. Por favor, recarga la página."
    );
  }
};

/**
 * Obtiene la URL de descarga pública de una foto en Firebase Storage.
 * * @param {string} storagePath - La ruta interna del archivo en el bucket (ej: 'fotos/ID/foto.jpg').
 * @returns {Promise<string|null>} La URL de descarga o null si hay un error.
 */
const getPhotoUrl = async (storagePath) => {
  if (!storagePath) {
    console.error("❌ ERROR: El storagePath está vacío o nulo.");
    return null;
  }

  try {
    // 1. Crear la referencia al archivo usando el storagePath
    const photoRef = ref(storage, storagePath);

    // 2. Obtener la URL de descarga con el token de acceso
    const downloadUrl = await getDownloadURL(photoRef);

    return downloadUrl;
  } catch (error) {
    // Es buena práctica devolver null o lanzar el error para que el llamador lo maneje.
    console.error("❌ Error descargando la foto con path:", storagePath, error);
    return null;
  }
};

// getPosts()
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { getAlbums, getPhotos, getPhotoUrl };
