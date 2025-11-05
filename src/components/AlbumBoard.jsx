import { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { getAlbums } from "../firebase/getData";

export default function AlbumBoard() {
  const [albumList, setAlbumList] = useState(null);

  useEffect(() => {
    getAlbums().then((res) => setAlbumList(res));
  }, []);

  if (!albumList) {
    return <p>Cargando álbums...</p>; // o un spinner
  }

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {albumList.map((album) => (
        <AlbumCard album={album} />
      ))}
    </div>
  );
}
