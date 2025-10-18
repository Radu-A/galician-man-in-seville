// PhotoForm.jsx
import React, { useState } from "react";
import { addPhoto } from "../firebase/uploadData";
import { useLocation } from "react-router-dom";

function PhotoForm({ onClose }) {
  // Get post from location
  const location = useLocation();
  const post = location.state;
  console.log(post);

  // 1. Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    datetime: "2024-11-22T12:10:00Z",
    title: "",
    url: "",
    description: "",
    postId: post.id,
  });

  // Estado para el feedback al usuario
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 2. Manejador de cambios para todos los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Nota: Aquí podrías añadir validación de campos.

    try {
      // Usamos la función de servicio que usa addDoc para generar el ID
      await addPhoto(formData);

      // Éxito: Limpiamos el formulario y cerramos el modal
      setFormData({ title: "", url: "", description: "" });
      //   onClose();
    } catch (err) {
      console.error("Error al subir foto:", err);
      setError("No se pudo subir la foto. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-medium dark:text-white">Subir Nueva Foto</h2>

      {/* Título */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Título de la Foto
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Nombre (Campo de ejemplo para el autor o la ubicación) */}
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Url
        </label>
        <input
          id="url"
          name="url"
          type="text"
          required
          value={formData.url}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Descripción */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          rows="3"
          required
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>
      </div>

      {/* Mensaje de Error */}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isLoading ? "Subiendo..." : "Guardar Foto"}
      </button>
    </form>
  );
}

export default PhotoForm;
