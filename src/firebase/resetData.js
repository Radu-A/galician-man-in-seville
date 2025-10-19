import { collection, addDoc } from "firebase/firestore";
import { posts, photos } from "./data.js";
import db from "./firebaseConfig.js";

// Add new collections posts and photos
const uploadData = async () => {
  const postsCollection = collection(db, "posts");
  const photoCollection = collection(db, "photos");
  for (const post of posts) {
    await addDoc(postsCollection, post);
    console.log(`✅ Documento añadido: ${post.title}`);
  }
  for (const photo of photos) {
    await addDoc(photoCollection, photo);
    console.log(`✅ Documento añadido: ${photo.title}`);
  }
};

// uploadData()
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { uploadData };
