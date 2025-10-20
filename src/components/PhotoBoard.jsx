import PhotoCard from "./PhotoCard";

// Recibimos la nueva prop onDelete
// ... (imports) ...

export default function PhotoBoard({ photos, onDelete }) {
  if (!photos) return <p>Cargando fotos...</p>;
  return (
    <div className="columns-2 md:columns-3 mt-10 pt-6 gap-4 border-t border-gray-200 dark:border-gray-700">
      {photos.map((photo) => (
        // Aseguramos que pasamos la clave (key) y el objeto completo
        <PhotoCard key={photo.id} photo={photo} onDelete={onDelete} />
      ))}
    </div>
  );
}
