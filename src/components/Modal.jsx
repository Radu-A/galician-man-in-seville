import PhotoForm from "./PhotoForm";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    // Overlay fixed
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      {/* Modal container */}
      <div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Avoid to close modal on click
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-white text-3xl font-semibold"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        {/* 3. Contenido del Modal */}
        <div className="pt-4">
          <PhotoForm onClose={onClose}/>
        </div>
      </div>
    </div>
  );
}
