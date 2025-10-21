import PhotoCard from "./PhotoCard";

export default function PhotoBoard({ photos, onDelete }) {
  if (!photos) return <p>Cargando fotos...</p>;
  return (
    <div className="columns-2 md:columns-3 mt-10 pt-6 gap-4 border-t border-gray-200 dark:border-gray-700">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onDelete={onDelete} />
      ))}
    </div>
  );
}
