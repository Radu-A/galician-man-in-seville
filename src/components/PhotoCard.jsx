import { useEffect, useState } from "react";

import { getFileUrl } from "../firebase/getData";

export default function PhotoCard({ photo }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  // Function to fetch the image URL from storage
  const fetchUrl = async () => {
    const url = await getFileUrl(photo?.thumbnail);
    if (url) {
      setPhotoUrl(url);
    }
  };

  useEffect(() => {
    // Fetch the URL when the photo object changes
    if (photo?.thumbnail) {
      fetchUrl();
    } else if (photo?.cloudinaryPath) {
      setPhotoUrl(photo?.cloudinaryPath);
      const cloudinaryBaseUrl = 'https://res.cloudinary.com/ds9uwjcs7/image/upload/w_450/v1764082482/'
      setPhotoUrl(`${cloudinaryBaseUrl}${photo?.cloudinaryPath}`);
    }
  }, [photo]);

  // Guard clause: do not render if the essential path is missing
  if (!photo?.storagePath && !photo?.cloudinaryPath) {
    return null;
  }

  return (
    <article className="group relative mx-auto mb-4 max-w-[400px] break-inside-avoid overflow-hidden rounded-sm transition-all duration-500 hover:scale-[1.02]">
      {/* Image Content */}
      <img
        src={photoUrl}
        alt={photo.title || photo.comment || "Photo"}
        className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay (Appears on Hover) */}
      <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/40" />

      {/* Text Overlay (Appears on Hover) */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <h4 className="font-light tracking-tighter text-white sm:text-lg">
          {photo.comment}
        </h4>
      </div>
    </article>
  );
}
