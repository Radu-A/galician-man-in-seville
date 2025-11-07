import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getPhotoUrl } from "../firebase/getData";

export default function AlbumCard({ album }) {
  const navigate = useNavigate();
  const [photoUrl, setPhotoUrl] = useState(null);

  const fetchUrl = async () => {
    const url = await getPhotoUrl(album?.storagePath);
    if (url) {
      setPhotoUrl(url);
    }
  };

  const handleClick = (album) => {
    navigate("/album", { state: album });
  };

  useEffect(() => {
    if (album?.storagePath) {
      fetchUrl();
    }
  }, [album]);

  return (
    <article
      onClick={() => handleClick(album)}
      className="flex flex-col gap-5 relative cursor-pointer overflow-hidden group transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={photoUrl}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Texto */}
      <div>
        <h3 className="text-3xl tracking-tighter font-light">
          {album.title.toUpperCase()} &rarr;
        </h3>
        {/* 
        <p className="text-sm text-gray-200 line-clamp-2">
          {album.description}
        </p> 
        */}
      </div>
    </article>
  );
}
