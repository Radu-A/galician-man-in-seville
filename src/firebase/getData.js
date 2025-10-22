import { collection, query, where, getDocs } from "firebase/firestore";
import db from "./firebaseConfig.js";

// Get a list of posts from db
const getAlbums = async () => {
  const albumCol = collection(db, "posts");
  const albumSnapshot = await getDocs(albumCol);
  const albumList = albumSnapshot.docs.map((doc) => doc.data());
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
      ...doc.data(),
      id: doc.id, // 💡 IMPORTANT: Ensure the document ID is included here
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

// getPosts()
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { getAlbums, getPhotos };
