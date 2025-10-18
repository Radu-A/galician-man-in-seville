import { useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import PhotoCard from "./PhotoCard";

export default function PhotoBoard({ post }) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);

    const getPhotos = async () => {
      const photoCol = collection(db, "photos");
      const photoSnapshot = await getDocs(photoCol);
      const photoList = photoSnapshot.docs.map((doc) => doc.data());
      setPhotos(photoList.filter((photo) => post.id == photo.postId));
    };
    getPhotos();
  }, [post]);
  if (!photos) return <p>Cargando fotos...</p>;
  return (
    <div className="columns-2 md:columns-3 mt-10 pt-6 gap-4 border-t border-gray-200 dark:border-gray-700">
      {photos.map((photo) => (
        <PhotoCard photo={photo}/>
      ))}
    </div>
  );
}
