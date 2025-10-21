import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig.js";

// Get a list of posts from db
const getAlbums = async () => {
  const albumCol = collection(db, "posts");
  const albumSnapshot = await getDocs(albumCol);
  const albumList = albumSnapshot.docs.map((doc) => doc.data());
  return albumList;
};

// Get a list of photos from db
const getPhotos = async (postId) => {
  const photoCol = collection(db, "photos");
  const photoSnapshot = await getDocs(photoCol);
  const photoList = photoSnapshot.docs.map((doc) => doc.data());
  return photoList.filter((photo) => postId == photo.postId);
};

// getPosts()
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { getAlbums, getPhotos };
