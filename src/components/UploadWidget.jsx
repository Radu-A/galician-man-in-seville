import React, { useRef, useEffect, useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME; // ¡Cámbialo!
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET; // ¡Cámbialo!

// Componente que recibirá la URL final de la imagen
export default function UploadWidget({ onUploadSuccess }) {
  // Usamos useRef para mantener la instancia del widget
  const cloudinaryWidgetRef = useRef(null); // Nuevo estado para rastrear la inicialización
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  // Inicializa el widget cuando el componente se monta
  useEffect(() => {
    // Comprueba si el widget está disponible globalmente
    if (window.cloudinary) {
      cloudinaryWidgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: CLOUD_NAME,
          uploadPreset: UPLOAD_PRESET,
          sources: ["local"], // Opciones de subida
          clientAllowedFormats: ["png", "gif", "jpeg", "jpg"],
          // Opciones de estilo/interfaz
          cropping: true,
          // theme: "dark",
          // styles: {
          //   palette: {
          //     // ✅ CORRECTO: 'window' ahora anula el color de fondo del tema 'dark'
          //     window: "#555555",
          // },
          // },
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
      // 🚀 Marcar como listo después de la inicialización exitosa
      setIsWidgetReady(true);
    }
  }, [onUploadSuccess]);

  // Función para abrir el widget
  const openWidget = () => {
    if (cloudinaryWidgetRef.current) {
      cloudinaryWidgetRef.current.open();
    } else {
      // 🔔 Developer message if the widget failed to initialize
      console.error(
        "ERROR: The Cloudinary widget has not been initialized.",
        "Ensure the Cloudinary script is loaded globally (window.cloudinary)."
      );
    }
  };

  return (
    <div>
      <button
        type="button" // Importante: 'button' para que NO envíe el formulario
        onClick={openWidget}
        className="w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 cursor-pointer shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
      >
        {isWidgetReady ? "Seleccionar Imagen" : "Cargando selector..."}
      </button>
      {/* <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Haz clic para abrir el cargador o arrastra la imagen aquí.
      </p> */}
    </div>
  );
}
