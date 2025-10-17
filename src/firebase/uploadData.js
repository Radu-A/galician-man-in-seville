import { getFirestore, collection, addDoc } from "firebase/firestore";
import { posts, photos } from "./data.js";
import app from "./firebaseConfig.js";

const db = getFirestore(app);

const data = {
  posts: posts,
  photos: photos,
};

async function uploadData() {
  const postsCollection = collection(db, "posts");
  const photoCollection = collection(db, "photos");
  for (const post of data.posts) {
    await addDoc(postsCollection, post);
    console.log(`✅ Documento añadido: ${post.title}`);
  }
  for (const photo of data.photos) {
    await addDoc(photoCollection, photo);
    console.log(`✅ Documento añadido: ${photo.title}`);
  }
}

uploadData()
  .then(() => console.log("✅ Todos los documentos cargados"))
  .catch(console.error);
