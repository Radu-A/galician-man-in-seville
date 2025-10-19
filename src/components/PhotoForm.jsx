// PhotoForm.jsx
import React, { useState } from "react";
import { addPhoto } from "../firebase/addData";
import { useLocation } from "react-router-dom";

function PhotoForm({ onClose }) {
  // ----------------------------------------------------
  // 1. REACT HOOKS MUST BE CALLED AT THE TOP LEVEL
  // ----------------------------------------------------
  const { state: post } = useLocation();

  // Initialize state based on the post.id, which may be null initially.
  // We rely on the initial render being complete before the post check.
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
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
        setFormData({
          title: "",
          url: "",
          description: "",
          postId: post.id,
        });
        onClose();
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

    // 1. Validate Title
    if (!data.title.trim()) {
      errors.title = "The photo title is required.";
    } else if (data.title.length < 3) {
      errors.title = "The title must be at least 3 characters long.";
    }

    // 2. Validate URL (Basic check for presence)
    if (!data.url.trim()) {
      errors.url = "The image URL is required.";
    }
    // NOTE: Full URL validation (regex/try/catch) is usually more complex
    // but for simplicity, the browser's type="url" helps with basic format.

    // 3. Validate Description
    if (data.description.length > 500) {
      errors.description = "The description cannot exceed 500 characters.";
    }

    return errors;
  };

  // ----------------------------------------------------
  // 5. RENDER
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
        Upload New Photo for: {post.title}
      </h2>

      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Photo Title
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
        {/* Show specific error message */}
        {fieldErrors.title && (
          <p className="text-red-500 text-xs mt-1">{fieldErrors.title}</p>
        )}
      </div>

      {/* URL Input */}
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Image URL
        </label>
        <input
          id="url"
          name="url"
          type="url"
          required
          value={formData.url}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Description
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

export default PhotoForm;
