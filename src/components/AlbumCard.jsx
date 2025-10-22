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
      className="relative cursor-pointer overflow-hidden rounded-2xl group transition-all duration-300 hover:shadow-lg"
    >
      {/* Imagen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={album.url}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>
      </div>

      {/* Texto sobre imagen */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-semibold text-white">{album.title}</h3>
        <p className="text-sm text-gray-200 line-clamp-2">
          {album.description}
        </p>
      </div>
    </article>
  );
}
