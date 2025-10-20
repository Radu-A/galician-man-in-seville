import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deletePhotoFromFirestore } from "../firebase/deleteData";

// Asume que la función deletePhotoFromFirestore está definida en '../firebase/deleteData'
// y que manejas la llamada al backend para Cloudinary.

const getCloudinaryPublicId = (secureUrl) => {
  if (!secureUrl || typeof secureUrl !== "string") return null;

  // Divide la URL después de '/upload/'
  const uploadIndex = secureUrl.indexOf("/upload/");
  if (uploadIndex === -1) return null;

  let path = secureUrl.substring(uploadIndex + 8); // +8 para saltar '/upload/'

  // Quita la información de transformación (ej: '/c_fill,w_100/') si existe
  // Buscamos la primera barra que aparece DESPUÉS de un 'v' seguido de números (versión/timestamp)
  const versionMatch = path.match(/v\d+\/(.*)/);
  if (versionMatch && versionMatch[1]) {
    path = versionMatch[1];
  }

  // Quita la extensión al final (ej: '.jpg')
  const publicIdWithExt = path.split(".");
  return publicIdWithExt[0];
};

export default function DeletePhotoButton({
  photoId,
  photoUrl,
  onDeleteCompleted,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    // 1. Confirmación de seguridad
    if (
      !window.confirm(
        "¿CONFIRMAR ELIMINACIÓN? Esta acción es permanente y eliminará la foto de la base de datos y de Cloudinary."
      )
    ) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      const publicId = getCloudinaryPublicId(photoUrl);

      if (publicId) {
        // ------------------------------------------------
        // PASO A: ELIMINAR EL ARCHIVO FÍSICO DE CLOUDINARY (Llamada al BACKEND SEGURO)
        // ------------------------------------------------
        console.log(
          `Intentando eliminar de Cloudinary (Server-Side) Public ID: ${publicId}`
        );

        // ⚠️ Aquí es donde llamarías a tu Cloud Function/Endpoint seguro
        // que usa la API Secret de Cloudinary para el borrado.
        /*
                await fetch('URL_DE_TU_CLOUD_FUNCTION_O_BACKEND', { 
                    method: 'POST', 
                    body: JSON.stringify({ publicId }),
                    headers: { 'Content-Type': 'application/json' }
                });
                */
      } else {
        console.warn(
          "ADVERTENCIA: No se pudo extraer el Public ID. Solo se eliminará el registro de Firebase."
        );
      }

      // ------------------------------------------------
      // PASO B: ELIMINAR EL REGISTRO DE FIREBASE
      // ------------------------------------------------
      await deletePhotoFromFirestore(photoId);

      // ------------------------------------------------
      // PASO C: FINALIZAR
      // ------------------------------------------------
      onDeleteCompleted(); // Llama al callback para cerrar el modal y actualizar la UI
    } catch (err) {
      console.error("Error al eliminar la foto:", err);
      // Mostrar un error amigable al usuario
      setError(
        "Error al eliminar. Intenta de nuevo. (El registro en DB podría seguir intacto)"
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="mt-4">
      {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        La eliminación borra la foto de la base de datos y de Cloudinary.
      </p>

      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
        className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 disabled:opacity-50"
      >
        <TrashIcon className="w-5 h-5" />
        <span>
          {isDeleting ? "Eliminando..." : "Eliminar Foto Permanentemente"}
        </span>
      </button>
    </div>
  );
}
