import { useEffect, useState } from "react";

import { getPhotoUrl } from "../firebase/getData";

export default function PhotoCard({ photo }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  const fetchUrl = async () => {
    const url = await getPhotoUrl(photo?.thumbnail);
    if (url) {
      setPhotoUrl(url);
    }
  };

  useEffect(() => {
    if (photo?.thumbnail) {
      fetchUrl();
    }
  }, [photo]);

  // Guard clause to prevent rendering if critical data is missing.
  if (!photo?.storagePath) {
    return null;
  }

  return (
    <article className="break-inside-avoid overflow-hidden relative group max-w-[400px] mx-auto mb-4 rounded-sm transition-all duration-500 hover:scale-[1.02]">
      {/* Image Content */}
      <img
        // src is safe because of the initial guard clause
        src={photoUrl}
        alt={photo.title || photo.comment || "Photo"}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay (Appears on Hover) */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

      {/* Text Overlay (Appears on Hover) */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h4 className="text-white tracking-tighter font-light sm:text-lg">
          {photo.comment}
        </h4>
      </div>
    </article>
  );
}
