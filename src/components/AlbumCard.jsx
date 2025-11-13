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
      className="flex flex-col gap-5 relative max-w-[480px] cursor-pointer overflow-hidden group transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative aspect-[3/4] max-h-[650px] w-full overflow-hidden">
        <img
          src={photoUrl}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Línea animada */}
      <div className="h-[1.5px] bg-neutral-900 scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></div>

      {/* Título */}
      <div>
        <h3 className="text-3xl tracking-tighter font-light group-hover:text-black">
          {album.title.toUpperCase()} &rarr;
        </h3>
      </div>
    </article>
  );
}
