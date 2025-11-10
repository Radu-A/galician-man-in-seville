import PhotoCard from "./PhotoCard";

export default function PhotoBoard({ photos, onDelete }) {
  if (!photos) return <p>Cargando fotos...</p>;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 pt-10 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onDelete={onDelete} />
      ))}
    </div>
  );
}
