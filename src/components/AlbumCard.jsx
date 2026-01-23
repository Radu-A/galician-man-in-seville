import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getFileUrl } from "../firebase/getData";

export default function AlbumCard({ album }) {
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState(null);

  // Function to fetch the album image URL from storage
  const fetchUrl = async () => {
    const url = await getFileUrl(album?.storagePath);
    if (url) {
      setPhotoUrl(url);
    }
  };

  // Handler for navigation on card click
  const handleClick = (selectedAlbum) => {
    navigate("/album", { state: selectedAlbum });
  };

  useEffect(() => {
    if (album?.storagePath) {
      fetchUrl();
    } else {
      const cloudinaryBaseUrl = album?.id === 'BZSuJBfJzjUmR1FbnDt5' ? 'https://res.cloudinary.com/ds9uwjcs7/image/upload/w_800/v1764082482/' : 'https://res.cloudinary.com/ds9uwjcs7/image/upload/w_450/v1764082482/'
      setPhotoUrl(`${cloudinaryBaseUrl}${album?.cloudinaryPath}`);
    }
  }, [album]); // Dependency array includes 'album' to re-fetch if the prop changes

  return (
    <article
      onClick={() => handleClick(album)}
      className="group relative mx-auto flex max-w-[400px] cursor-pointer flex-col gap-y-5 overflow-hidden transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={photoUrl}
          alt={album.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Animated Line */}
      <div className="h-[1.5px] origin-center scale-x-0 bg-neutral-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />

      {/* Title */}
      <div>
        <h3 className="text-3xl font-light tracking-tighter group-hover:text-black">
          {album.title.toUpperCase()} &rarr;
        </h3>
      </div>
    </article>
  );
}
