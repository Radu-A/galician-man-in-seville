import React from "react";
import { Trash2 } from "lucide-react";

// Recibimos la prop onDelete
export default function PhotoCard({ photo, onDelete }) {
  // La función handleDelete es ahora mucho más simple
  const handleDelete = (e) => {
    e.stopPropagation(); // Evita que clicks en el botón activen otros eventos de la tarjeta.

    // Llama a la función del componente padre, pasándole el OBJETO foto COMPLETO
    onDelete(photo);
  };

  // Si la foto no existe o no tiene URL, salimos antes de renderizar.
  if (!photo || !photo.url) {
    return null;
  }

  return (
    <article
      key={photo.id}
      className="relative group mb-4 break-inside-avoid overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
    >
      {/* 1. Botón de Eliminar en la esquina superior derecha */}
      {/* CLASES CLAVE: opacity-0 y group-hover:opacity-100 */}
      <button
        onClick={handleDelete}
        // Agregamos opacity-0 para ocultarlo, y group-hover:opacity-100 para mostrarlo
        // También añadimos transition-opacity para una aparición suave.
        className="absolute top-3 right-3 p-1.5 z-20 
                   bg-white rounded-full shadow-lg border border-gray-100
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out
                   cursor-pointer
                   hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label={`Eliminar foto: ${photo.title}`}
        title="Eliminar foto"
      >
        {/* 2. Icono de basura: 24px, color #333 sobre fondo blanco */}
        <Trash2 className="w-4 h-4 text-[#333]" />
      </button>

      {/* Imagen */}
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>

      {/* Texto sobre imagen (ya tenía el efecto hover) */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h4 className="text-white text-base font-semibold">{photo.comment}</h4>
      </div>
    </article>
  );
}
