// PhotoForm.jsx (ADAPTADO)

import { useState } from "react";
import { addPhoto } from "../firebase/addData";
import UploadWidget from "./UploadWidget";

function UploadPhotoForm({ onPhotoUploaded, album }) {
  // ----------------------------------------------------
  // 1. REACT HOOKS MUST BE CALLED AT THE TOP LEVEL
  // ----------------------------------------------------

  const [formData, setFormData] = useState({
    comment: "",
    url: "",
    publicId: "", // 🛑 NUEVO CAMPO DE ESTADO
    albumId: album?.id || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // ----------------------------------------------------
  // 2. CONDITIONAL RENDERING / EARLY EXIT
  // ----------------------------------------------------
  if (!album || !album.id) {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
        <p className="text-red-500 font-semibold">
          Error: El álbum no ha podido ser cargado.
        </p>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3. LOGIC (Handlers)
  // ----------------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setIsLoading(true);

    // Validation
    const validationErrors = validateForm(formData);
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsLoading(false);
      return;
    }

    const finalPhotoData = {
      ...formData, // 🛑 Ahora incluye publicId
      datetime: new Date(),
    };

    try {
      // Nota: addPhoto debe usar setDoc(docRef, data) con publicId si usas el publicId como photoId.
      // Si no, addPhoto debe guardar el campo publicId que está en finalPhotoData.
      await addPhoto(finalPhotoData);

      setIsSuccess(true);

      setTimeout(() => {
        onPhotoUploaded();
      }, 1500);
    } catch (err) {
      console.error("Error uploading photo:", err);
      setError("Failed to upload photo. Please try again.");
      setIsLoading(false);
    }
  };

  // ----------------------------------------------------
  // 4. VALIDATE
  // ----------------------------------------------------

  const validateForm = (data) => {
    const errors = {};

    // Validación 1: Comentario
    if (!data.comment.trim()) {
      errors.comment = "La leyenda o comentario de la foto es obligatorio.";
    } else if (data.comment.length < 3) {
      errors.comment = "El comentario debe tener al menos 3 caracteres.";
    } else if (data.comment.length > 500) {
      errors.comment = "El comentario no puede superar los 500 caracteres.";
    }

    // 🛑 Validación 2: Imagen subida (usando el publicId limpio)
    if (!data.publicId) {
      errors.url = "Debes subir una imagen antes de guardar.";
    }

    return errors;
  };

  // ----------------------------------------------------
  // 5. CLOUDINARY
  // ----------------------------------------------------

  // Nueva función para manejar el objeto {url, publicId} de éxito de Cloudinary
  const handleCloudinarySuccess = (data) => {
    // 🛑 AHORA RECIBE EL OBJETO
    setFormData((prev) => ({
      ...prev,
      url: data.url,
      publicId: data.publicId, // 🛑 GUARDAMOS EL DATO LIMPIO
    }));
  };

  // ----------------------------------------------------
  // 6. RENDER
  // ----------------------------------------------------
  if (isSuccess) {
    // ... (Success render) ...
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h2 className="text-2xl font-medium dark:text-white">
        Subir una nueva foto al álbum
      </h2>

      {/* WIDGET */}
      <div className="pt-2">
        <UploadWidget onUploadSuccess={handleCloudinarySuccess} />

        {/* Muestra el error de validación de URL/publicId */}
        {fieldErrors.url && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors.url}</p>
        )}

        {/* Muestra la URL actual para depuración */}
        {formData.url && (
          <p className="mt-2 text-xs text-green-600 truncate">
            Imagen subida: {formData.url}
          </p>
        )}
      </div>

      {/* Comment (Unified Leyend/Description Field) */}
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
          required
          value={formData.comment}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>

        {fieldErrors.comment && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors.comment}</p>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Submission Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isLoading ? "Submitting..." : "Save Photo"}
      </button>
    </form>
  );
}

export default UploadPhotoForm;
