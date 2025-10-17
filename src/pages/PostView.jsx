import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function PostView() {
  const [photos, setPhotos] = useState(null);
  const location = useLocation();
  const post = location.state;

  useEffect(() => {
    const db = getFirestore(app);

    const getphotos = async () => {
      const photosCol = collection(db, "photos");
      const photosSnapshot = await getDocs(photosCol);
      const photosList = photosSnapshot.docs.map((doc) => doc.data());
      setPhotos(photosList.filter((photo) => post.id === photo.postId));
    };

    getphotos();
  }, [post]);

  if (!photos) return <p>Cargando fotos...</p>;

  return (
    <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h4 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
          {post.title}
        </h4>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          {post.description}
        </p>
      </div>

      {/* Masonry */}
      <div className="columns-2 md:columns-3 mt-10 pt-6 gap-4 border-t border-gray-200 dark:border-gray-700">
        {photos.map((photo) => (
          <article
            key={photo.id}
            className="relative group mb-4 break-inside-avoid overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Imagen */}
            <img
              src={photo.img}
              alt={photo.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

            {/* Texto sobre imagen */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-base font-semibold">
                {photo.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2">
                {photo.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
