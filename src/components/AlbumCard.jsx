import { useNavigate } from "react-router-dom";

export default function AlbumCard({ album }) {
  // Get albumId from navigate
  const navigate = useNavigate();
  const handleClick = (album) => {
    navigate("/album", { state: album });
  };

  return (
    <article
      onClick={() => handleClick(album)}
      className="flex flex-col gap-5 relative cursor-pointer overflow-hidden group transition-all duration-300"
    >
      {/* Imagen */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={album.url}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay oscuro */}
        {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div> */}
      </div>

      {/* Texto sobre imagen */}
      <div className="">
        <h3 className="text-3xl">{album.title.toUpperCase()}</h3>
        {/* <p className="text-sm text-gray-200 line-clamp-2">
          {album.description}
        </p> */}
      </div>
    </article>
  );
}
