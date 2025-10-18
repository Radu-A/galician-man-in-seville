import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import PostsCard from "./PostCard";

export default function PostBoard() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);

    const getPosts = async (db) => {
      const postsCol = collection(db, "posts");
      console.log(postsCol);
      const postsSnapshot = await getDocs(postsCol);
      console.log(postsSnapshot);

      const postsList = postsSnapshot.docs.map((doc) => doc.data());
      setPosts(postsList);
    };

    getPosts(db);
  }, []);

  if (!posts) {
    return <p>Cargando posts...</p>; // o un spinner
  }

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:grid-cols-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
      {posts.map((post) => (
        <PostsCard post={post} />
      ))}
    </div>
  );
}
