import { Trash2 } from "lucide-react";

export default function PhotoCard({ photo, onDelete }) {
  // Guard clause to prevent rendering if critical data is missing.
  if (!photo?.url || !photo?.id) {
    return null;
  }

  const handleDelete = (e) => {
    // Stops click event from propagating to the parent article (preventing unwanted actions).
    e.stopPropagation();

    // Calls the parent handler, passing the full photo object for modal confirmation.
    onDelete(photo);
  };

  return (
    <article
      key={photo.id}
      className="relative group mb-4 break-inside-avoid overflow-hidden transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Delete Button (Visible on Hover) */}
      {/* <button
        onClick={handleDelete}
        // Tailwind classes for positioning, styling, and hover effect
        className="absolute top-3 right-3 p-1.5 z-20 
                   bg-transparent rounded-lg shadow-lg border border-white // <-- Fondo transparente y borde blanco
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
                   cursor-pointer
                   hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white" // <-- Efecto hover y focus adaptados
        aria-label={`Eliminar foto: ${photo.title}`}
        title="Eliminar foto"
      >
        <Trash2 className="w-5 h-5 text-white" />
      </button> */}
      <button className="absolute top-3 right-3 p-1.5 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
                   cursor-pointer
                   hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
        X
      </button>
      {/* Image Content */}
      <img
        // src is safe because of the initial guard clause
        src={photo.url}
        alt={photo.title || photo.comment || "Photo"}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay (Appears on Hover) */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

      {/* Text Overlay (Appears on Hover) */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h4 className="text-white tracking-tighter font-light leading-5">
          {photo.comment}
        </h4>
      </div>
    </article>
  );
}
