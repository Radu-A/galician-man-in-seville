import { getFirestore, collection, addDoc } from "firebase/firestore";
import { posts, photos } from "./data.js";
import app from "../firebase/firebaseConfig.js";

const db = getFirestore(app);

const data = {
  posts: posts,
  photos: photos,
};

async function uploadData() {
  const postsCollection = collection(db, "posts");
  for (const post of data.posts) {
    await addDoc(postsCollection, post);
    console.log(`✅ Documento añadido: ${post.title}`);
  }
}

uploadData()
  .then(() => console.log("✅ Todos los documentos cargados"))
  .catch(console.error);
