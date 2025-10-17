import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebaseConfig.js";

const db = getFirestore(app);

// Get a list of cities from your database
const getPosts = async () => {
  const postsCol = collection(db, "posts");
  const postsSnapshot = await getDocs(postsCol);
  const postsList = postsSnapshot.docs.map((doc) => doc.data());
  postsList.forEach((post) => console.log(post));

  return postsList;
};

getPosts()
  .then(() => console.log("✅ Todos los documentos cargados"))
  .catch(console.error);
