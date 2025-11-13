import PhotoCard from "./PhotoCard";

export default function PhotoBoard({ photos }) {
  if (!photos) return <p>Cargando fotos...</p>;

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 pt-10 gap-4">
      {photos.map((photo) => (
        <div key={photo.id}>
          <PhotoCard photo={photo} />
        </div>
      ))}
    </div>
  );
}
