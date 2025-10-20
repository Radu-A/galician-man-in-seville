import React, { useRef, useEffect, useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

// Componente que recibirá la URL y el Public ID
export default function UploadWidget({ onUploadSuccess }) {
    const cloudinaryWidgetRef = useRef(null);
    const [isWidgetReady, setIsWidgetReady] = useState(false);

    useEffect(() => {
        // La lógica de inicialización (omitida para simplificar, asumiendo que ya funciona)
        if (window.cloudinary) {
            cloudinaryWidgetRef.current = window.cloudinary.createUploadWidget(
                {
                    cloudName: CLOUD_NAME,
                    uploadPreset: UPLOAD_PRESET,
                    sources: ["local"],
                    clientAllowedFormats: ["png", "gif", "jpeg", "jpg"],
                    cropping: true,
                },
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        console.log("¡Subida exitosa! Info de la imagen:", result.info);

                        // 🛑 CAMBIO CLAVE: Crear y devolver un objeto con URL y Public ID
                        const uploadedData = {
                            url: result.info.secure_url,
                            publicId: result.info.public_id, // <-- DATO CLAVE
                        };

                        onUploadSuccess(uploadedData);
                    }
                }
            );
            setIsWidgetReady(true);
        }
    }, [onUploadSuccess]);

    const openWidget = () => {
        if (cloudinaryWidgetRef.current) {
            cloudinaryWidgetRef.current.open();
        } else {
            console.error(
                "ERROR: The Cloudinary widget has not been initialized."
            );
        }
    };

    return (
        <div>
            <button
                type="button"
                onClick={openWidget}
                className="w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 cursor-pointer shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
                {isWidgetReady ? "Seleccionar Imagen" : "Cargando selector..."}
            </button>
        </div>
    );
}