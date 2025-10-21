import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getPhotos } from "../firebase/getData";
import { deletePhoto } from "../firebase/deleteData";
import PhotoBoard from "../components/PhotoBoard";
import Modal from "../components/Modal";
import PhotoForm from "../components/PhotoForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModel";

export default function AlbumView() {
  // --- 1. ALL HOOKS MUST BE CALLED FIRST AND UNCONDITIONALLY ---

  // Get post data passed via react-router location state.
  const { state: post } = useLocation();

  // State to hold the photos fetched from Firestore.
  const [photos, setPhotos] = useState(null);

  // State to control the visibility of the upload modal.
  const [isModalOpen, setIsModalOpen] = useState(false); // NUEVO ESTADO: Gestiona el modal de eliminación.
  const [deleteModalState, setDeleteModalState] = useState({
    isOpen: false,
    photoToDelete: null, // Objeto de la foto que se va a eliminar
  });

  // Function to fetch photos for the current post. Memoized to optimize useEffect dependency.
  const fetchPhotos = useCallback(async () => {
    // Return early if the post ID is unavailable.
    if (!post?.id) return;

    try {
      const res = await getPhotos(post.id);
      setPhotos(res);
    } catch (error) {
      console.error("Error fetching photos:", error);
      // Implement robust error handling here.
    }
  }, [post?.id]); // Dependency on the post ID to refetch only when the post context changes.

  // Initial data load: runs on mount and when fetchPhotos changes (due to post.id change).
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // --- 2. CONDITIONAL RENDERING (EARLY EXIT) ---

  // Safety check: Exit early if essential post data is missing.
  if (!post || !post.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">Error: Post data not found.</h1>
      </div>
    );
  }

  // --- 3. HANDLERS AND LOGIC ---

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Callback executed by PhotoForm upon successful upload.
  const handlePhotoUpload = () => {
    // 1. Close the modal window to remove the form.
    closeModal();
    // 2. Refresh the photo list by calling the fetch function.
    fetchPhotos();
  };

  // NUEVAS FUNCIONES PARA ELIMINACIÓN
  const closeDeleteModal = () => {
    setDeleteModalState({ isOpen: false, photoToDelete: null });
  };

  // Lógica de eliminación (ejecutada dentro del modal)
  const handleDeleteConfirmed = async () => {
    const { photoToDelete } = deleteModalState;
    if (!photoToDelete) return;

    closeDeleteModal(); // Cerrar el modal inmediatamente.

    // OBTENEMOS LOS IDs NECESARIOS
    const postId = post.id;
    const photoId = photoToDelete.id;

    // const publicId = photoToDelete.publicId; // Lo necesitarás para Cloudinary en el futuro

    try {
      // 🚀 IMPLEMENTACIÓN REAL DE LA ELIMINACIÓN DE LA REFERENCIA EN FIREBASE 🚀
      // Si la colección es anidada (posts/photos):
      await deletePhoto(photoId);

      // Si la colección NO es anidada (solo photos):
      // await deletePhoto(photoId);

      console.log(`Foto con ID: ${photoId} eliminada de Firebase.`);

      // 2. Recargar la lista de fotos para actualizar la interfaz.
      fetchPhotos();

      // NOTA: No es necesario un alert si la interfaz se actualiza rápidamente
      // pero puedes añadir uno para confirmar si lo deseas:
      // alert("Referencia de foto eliminada con éxito.");
    } catch (error) {
      console.error("Error al eliminar la foto de Firestore:", error);
      alert("Error al eliminar la foto. Revisa la consola para más detalles.");

      // Vuelve a abrir el modal o muestra un mensaje de error si es necesario
      // setDeleteModalState({ isOpen: true, photoToDelete });
    }
  };

  // Función llamada desde PhotoCard para iniciar el proceso de eliminación
  const handlePhotoDelete = (photo) => {
    // ABRE EL MODAL DE CONFIRMACIÓN
    setDeleteModalState({
      isOpen: true,
      photoToDelete: photo,
    });
  };

  // --- 4. FINAL RENDER ---

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
        {/* ... (Contenido de la cabecera y botón de subida) ... */}
        <div className="grid grid-cols-[1fr_auto] gap-5">
          <div className="col-1 mx-auto max-w-2xl lg:mx-0">
            <h4 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
              {post.title}
            </h4>

            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {post.description}
            </p>
          </div>

          <div className="col-2 flex justify-end items-end">
            {/* Button to open the photo upload modal */}

            <button
              onClick={toggleModal}
              className="size-18 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <img src="icons/add-555.svg" alt="Add photo" />
            </button>
          </div>
        </div>
        {/* PASAR LA FUNCIÓN QUE ABRE EL MODAL AL BOARD */}
        <PhotoBoard photos={photos} onDelete={handlePhotoDelete} />
      </section>

      {/* Modal de Subida (Tu Modal original) */}
      <Modal open={isModalOpen} onClose={closeModal}>
        <PhotoForm onPhotoUploaded={handlePhotoUpload} post={post} />
      </Modal>

      {/* NUEVO MODAL DE CONFIRMACIÓN DE ELIMINACIÓN */}
      <Modal open={deleteModalState.isOpen} onClose={closeDeleteModal}>
        <DeleteConfirmationModal
          photo={deleteModalState.photoToDelete}
          onClose={closeDeleteModal}
          onConfirm={handleDeleteConfirmed}
        />
      </Modal>
    </>
  );
}
