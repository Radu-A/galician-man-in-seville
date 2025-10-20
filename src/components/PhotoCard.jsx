export default function PhotoCard({ photo }) {
  return (
    <article
      key={photo.id}
      className="relative group mb-4 break-inside-avoid overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Imagen */}
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

      {/* Texto sobre imagen */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h4 className="text-white text-base font-semibold">{photo.comment}</h4>
      </div>
    </article>
  );
}
