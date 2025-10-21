export default function DeleteConfirmationModal({ photo, onClose, onConfirm }) {
  // Guard clause: returns null if the photo object is not available.
  if (!photo) return null;

  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Confirmar</h2>

      <p className="text-gray-600 mb-6">
        ¿Seguro de que quieres eliminar la foto de tu álbum? Esta acción es
        irreversible.
        {/* Updated text: reflects real deletion */}
      </p>

      {/* Image Preview */}
      <div className="w-full h-32 mb-6 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={photo.url}
          alt={photo.comment || "Foto a eliminar"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-end gap-3">
        {/* Cancel Button */}
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg 
                     hover:bg-gray-200 transition"
          title="Mantener la foto en el álbum"
        >
          Cancelar
        </button>

        {/* Confirm Button (Destructive action, hence red) */}
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg 
                     shadow-md hover:bg-red-700 transition"
          title="Eliminar la referencia de la foto de la base de datos"
        >
          Eliminar
        </button>
      </div>
    </>
  );
}
