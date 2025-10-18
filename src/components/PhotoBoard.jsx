import { useEffect, useState } from "react";
import { getPhotos } from "../firebase/getData";
import PhotoCard from "./PhotoCard";

export default function PhotoBoard({ post }) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    getPhotos(post.id).then((res) => setPhotos(res));
  }, [post]);
  if (!photos) return <p>Cargando fotos...</p>;
  return (
    <div className="columns-2 md:columns-3 mt-10 pt-6 gap-4 border-t border-gray-200 dark:border-gray-700">
      {photos.map((photo) => (
        <PhotoCard photo={photo} />
      ))}
    </div>
  );
}
