// PhotoForm.jsx
import { useState } from "react";
import { addPhoto } from "../firebase/addData";
import UploadWidget from "./UploadWidget";

function UploadPhotoForm({ onPhotoUploaded, post }) {
  // ----------------------------------------------------
  // 1. REACT HOOKS MUST BE CALLED AT THE TOP LEVEL
  // ----------------------------------------------------

  // Initialize state based on the post.id, which may be null initially.
  // We rely on the initial render being complete before the post check.
  const [formData, setFormData] = useState({
    comment: "",
    // url: "https://raw.githubusercontent.com/Radu-A/cv-web/refs/heads/main/assets/images/about_dog.png",
    url: "",
    // Initialize postId safely, it will be updated by the post check below
    postId: post?.id || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // ----------------------------------------------------
  // 2. CONDITIONAL RENDERING / EARLY EXIT
  // ----------------------------------------------------
  if (!post || !post.id) {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
        <p className="text-red-500 font-semibold">
          Error: Post data could not be loaded.
        </p>
      </div>
    );
  }

  // NOTE: If the post data loads late, you may need a separate useEffect
  // to update formData's postId if it changes, but for useLocation this is usually fine.

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

    // If there are any errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      setIsLoading(false);
      return; // STOP EXECUTION
    }

    const finalPhotoData = {
      ...formData,
      datetime: new Date(),
    };

    try {
      await addPhoto(finalPhotoData);

      setIsSuccess(true);

      setTimeout(() => {
        onPhotoUploaded();
      }, 1500);
      // Reset form fields
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

    // Validación UNIFICADA para 'comment' (Leyenda)
    if (!data.comment.trim()) {
      // Regla 1: El campo no puede estar vacío
      errors.comment = "La leyenda o comentario de la foto es obligatorio.";
    } else if (data.comment.length < 3) {
      // Regla 2: Longitud mínima (adaptada de tu antiguo 'title')
      errors.comment = "El comentario debe tener al menos 3 caracteres.";
    } else if (data.comment.length > 500) {
      // Regla 3: Longitud máxima (adaptada de tu antiguo 'description')
      errors.comment = "El comentario no puede superar los 500 caracteres.";
    }

    // Nota: Al haber eliminado 'title' y 'description',
    // solo devolvemos errores para 'comment'.

    return errors;
  };

  // ----------------------------------------------------
  // 5. CLOUDINARY
  // ----------------------------------------------------

  // Nueva función para manejar la URL de éxito de Cloudinary
  const handleCloudinarySuccess = (url) => {
    setFormData((prev) => ({
      ...prev,
      url: url, // Guarda la URL optimizada aquí
    }));
  };

  // ----------------------------------------------------
  // 6. RENDER
  // ----------------------------------------------------
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg h-64">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          ¡Foto Subida Correctamente!
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Cerrando en un momento...
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h2 className="text-2xl font-medium dark:text-white">
        Subir una nueva foto al álbum
         {/* {post.title} */}
      </h2>
      {/* AÑADE EL WIDGET AQUÍ */}
      <div className="pt-2">
        <UploadWidget onUploadSuccess={handleCloudinarySuccess} />
        {/* Opcional: Mostrar la URL actual para depuración */}
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
          // Nota: Asume que tu estado ahora usa 'comment' en lugar de 'description'
          value={formData.comment}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>

        {/* LÍNEA CLAVE AÑADIDA: */}
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
