import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { posts, photos } from "./data.js";
import db from "./firebaseConfig.js";

const data = {
  posts: posts,
  photos: photos,
};

// Add new collections posts and photos
const uploadData = async () => {
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
};

// Ass a new document in collection "photos"
const newPhoto = {
  id: "px-zsg-5",
  postId: "zsgZDg_OwLk",
  date: "2024-10-12",
  datetime: "2024-10-12T08:00:00Z",
  title: "Una cosa que no existe",
  description: "Es alucinante, igualmente.",
  url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
};

const addPhoto = async (newPhoto) => {
  await setDoc(doc(db, "photos", "LA"), newPhoto);
};

// uploadData()
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);
// addPhoto(newPhoto)
//   .then(() => console.log("✅ Todos los documentos cargados"))
//   .catch(console.error);

export { addPhoto };
