// EditPhotoModal.jsx (CÓDIGO COMPLETO)

import React, { useState } from "react";
// Para el botón de eliminar, asumimos que ya tienes esta importación
import DeletePhotoButton from "./DeletePhotoButton";
// Para el icono de cerrar modal, puedes usar uno simple o uno de Heroicons si lo instalas
// import { XMarkIcon } from '@heroicons/react/24/solid'; // Si usas Heroicons

export default function EditPhotoModal({
  photo,
  allPosts,
  onClose,
  onUpdate,
  onDeleteCompleted,
}) {
  // Inicializamos el estado para los campos del formulario, pero aún no tiene lógica de guardado
  const [formData, setFormData] = useState({
    comment: photo.comment,
    postId: photo.postId,
  });
  const [isLoading, setIsLoading] = useState(false); // Para el botón de guardar

  // Solo manejamos el cambio de estado para que los inputs no sean read-only
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // La función handleSubmit no contendrá lógica de guardado por ahora
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de guardado aún no implementada
    console.log("Datos a 'guardar' (solo visual):", formData);
    alert(
      "La lógica de edición para comentario y álbum no está implementada todavía."
    );
    // onClose(); // Podrías cerrarlo aquí si quieres simular el cierre
  };

  // Estilos del modal
  const modalClasses =
    "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center backdrop-blur-sm";
  const contentClasses =
    "bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 md:w-1/3 shadow-2xl max-h-[90vh] overflow-y-auto transform transition-all";

  return (
    <div className={modalClasses}>
      <div className={contentClasses}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold dark:text-white">Editar Foto</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {/* Puedes usar XMarkIcon de Heroicons si lo instalas, o un simple SVG/icono */}
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Visualización de la imagen */}
        <img
          src={photo.url}
          alt="Previsualización"
          className="w-full h-auto rounded-md object-cover mb-4"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Edición: Comentario (Solo UI) */}
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Comentario
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="3"
              value={formData.comment}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          {/* Edición: Reasignar a Álbum/Post (Solo UI) */}
          <div>
            <label
              htmlFor="postId"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Reasignar a Álbum/Post
            </label>
            <select
              id="postId"
              name="postId"
              value={formData.postId}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              {/* Renderizar la lista de posts como opciones (solo si allPosts existe) */}
              {allPosts &&
                allPosts.map((post) => (
                  <option key={post.id} value={post.id}>
                    {post.title}
                  </option>
                ))}
              {!allPosts && (
                <option value={photo.postId}>Cargando álbumes...</option>
              )}
            </select>
          </div>

          {/* Botón de Guardar (sin funcionalidad real de guardado por ahora) */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md text-sm disabled:opacity-50"
            >
              Guardar Cambios (UI solamente)
            </button>
          </div>
        </form>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Funcionalidad de Eliminación (YA FUNCIONAL) */}
        <DeletePhotoButton
          photoId={photo.id}
          photoUrl={photo.url}
          onDeleteCompleted={onDeleteCompleted} // Usa el callback para cerrar y actualizar
        />
      </div>
    </div>
  );
}
