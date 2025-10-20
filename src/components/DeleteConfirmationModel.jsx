export default function DeleteConfirmationModal({ photo, onClose, onConfirm }) {
  if (!photo) return null; // No renderizar si no hay foto seleccionada

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Confirmar Eliminación
      </h2>

      <p className="text-gray-600 mb-6">
        Estás a punto de eliminar la foto:
        <span className="font-semibold block mt-1 truncate">
          "{photo.comment || photo.title}"
        </span>
        Esta acción es irreversible (aunque por ahora solo se eliminará la
        referencia en Firebase).
      </p>

      {/* Imagen de previsualización (Opcional, pero útil) */}
      <div className="w-full h-32 mb-6 rounded-lg overflow-hidden border border-gray-200">
        <img
          src={photo.url}
          alt={photo.comment || "Foto a eliminar"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-end gap-3">
        {/* Botón Cancelar */}
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg 
                     hover:bg-gray-200 transition"
        >
          Cancelar
        </button>

        {/* Botón Confirmar (Rojo) */}
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg 
                     shadow-md hover:bg-red-700 transition"
        >
          Sí, Eliminar
        </button>
      </div>
    </div>
  );
}
