import React, { useRef, useEffect } from "react";

const CLOUDINARY_CLOUD_NAME = "ds9uwjcs7"; // ¡Cámbialo!
const CLOUDINARY_UPLOAD_PRESET = "galician-seville"; // ¡Cámbialo!

// Componente que recibirá la URL final de la imagen
export default function CloudinaryUploadWidget({ onUploadSuccess }) {
  // Usamos useRef para mantener la instancia del widget
  const cloudinaryWidgetRef = useRef(null);

  // Inicializa el widget cuando el componente se monta
  useEffect(() => {
    // Comprueba si el widget está disponible globalmente
    if (window.cloudinary) {
      cloudinaryWidgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: CLOUDINARY_CLOUD_NAME,
          uploadPreset: CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url", "camera"], // Opciones de subida
          clientAllowedFormats: ["png", "gif", "jpeg", "jpg"],
          // Opciones de estilo/interfaz
          // Aquí puedes añadir más opciones de UI
        },
        (error, result) => {
          // Manejar la respuesta de Cloudinary
          if (!error && result && result.event === "success") {
            // La subida ha sido exitosa. Llamamos al callback con la URL.
            console.log("¡Subida exitosa! Info de la imagen:", result.info);

            // Pasar la URL segura a tu componente padre (donde está tu formulario)
            console.log(result.info.secure_url);

            onUploadSuccess(result.info.secure_url);
          }
        }
      );
    }
  }, [onUploadSuccess]);

  // Función para abrir el widget
  const openWidget = () => {
    if (cloudinaryWidgetRef.current) {
      cloudinaryWidgetRef.current.open();
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Seleccionar Imagen
      </label>
      <button
        type="button" // Importante: 'button' para que NO envíe el formulario
        onClick={openWidget}
        className="w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
      >
        Subir Foto (Arrastrar y Soltar)
      </button>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Haz clic para abrir el cargador o arrastra la imagen aquí.
      </p>
    </div>
  );
}
