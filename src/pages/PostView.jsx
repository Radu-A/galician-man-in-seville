import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function PostView() {
  const [photos, setPhotos] = useState(null);
  // Get post from location
  const location = useLocation();
  const post = location.state;
  // Get photos from firebase
  useEffect(() => {
    const db = getFirestore(app);

    const getphotos = async () => {
      const photosCol = collection(db, "photos");
      const photosSnapshot = await getDocs(photosCol);
      const photosList = photosSnapshot.docs.map((doc) => doc.data());
      setPhotos(photosList.filter((photo) => post.id == photo.postId));
    };

    getphotos();
  }, [post]);
  // Condicional render
  if (!photos) {
    return <p>Cargando fotos...</p>; // o un spinner
  }
  return (
    <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h4 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
          Jardines de Maria Luisa
        </h4>
      </div>
      <div className="columns-2 mt-10 pt-6 gap-4 border-t border-gray-200 md:columns-3">
        {photos.map((photo) => (
          <div key={photo.id} className="break-inside-avoid mb-4">
            <img
              src={photo.img}
              alt={photo.title}
              className="w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
