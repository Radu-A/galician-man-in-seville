import PhotoCard from "./PhotoCard";

export default function PhotoBoard({ photos, onDelete }) {
  if (!photos) return <p>Cargando fotos...</p>;
  console.log(photos[0]);

  return (
    <div className="columns-2 md:columns-3 pt-10 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onDelete={onDelete} />
      ))}
    </div>
  );
}
