import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getPhotos } from "../firebase/getData";
import { deletePhoto } from "../firebase/deleteData";
import PhotoBoard from "../components/PhotoBoard";
import Modal from "../components/Modal";
import UploadPhotoForm from "../components/UploadPhotoForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModel"; // Check file name case

export default function AlbumView() {
  // 1. STATE & HOOKS
  const { state: album } = useLocation();
  const [photos, setPhotos] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false); // Renamed for clarity
  const [deleteModalState, setDeleteModalState] = useState({
    isOpen: false,
    photoToDelete: null,
  });

  // 2. DATA FETCHING
  const fetchPhotos = useCallback(async () => {
    if (!album?.id) return;
    try {
      const res = await getPhotos(album.id);
      console.log(res);

      setPhotos(res);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }, [album?.id]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // 3. HANDLERS

  // --- Upload Modal Handlers ---
  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);
  const handlePhotoUpload = () => {
    closeUploadModal();
    fetchPhotos(); // Refresh photo list after successful upload
  };

  // --- Delete Modal Handlers ---
  const closeDeleteModal = () => {
    setDeleteModalState({ isOpen: false, photoToDelete: null });
  };

  // Called from PhotoCard to initiate deletion
  const handlePhotoDelete = (photo) => {
    setDeleteModalState({ isOpen: true, photoToDelete: photo });
  };

  // Called from DeleteConfirmationModal upon 'Yes, Delete'
  const handleDeleteConfirmed = async () => {
    const { photoToDelete } = deleteModalState;
    if (!photoToDelete) return;

    closeDeleteModal();

    const photoId = photoToDelete.id;

    // OPTIMISTIC UI UPDATE: Remove photo from local state immediately
    setPhotos((prevPhotos) =>
      prevPhotos ? prevPhotos.filter((p) => p.id !== photoId) : null
    );

    try {
      // Execute deletion on Firestore
      await deletePhoto(photoId);

      console.log(
        `Document with ID: ${photoId} successfully deleted from Firestore.`
      );
    } catch (error) {
      console.error(
        `Error deleting photo ID ${photoId} from Firestore:`,
        error
      );
      alert(
        "Error al eliminar la foto. Se está recargando la lista para asegurar la consistencia."
      );

      // CRITICAL: Force full data reload (roll back optimistic update on error)
      fetchPhotos();
    }
  };

  // 4. CONDITIONAL RENDER (Early Exit)
  if (!album || !album.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">
          Error: No se encontró el álbum.
        </h1>
      </div>
    );
  }

  // 5. MAIN RENDER
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
        {/* Header and Upload Button */}
        <div className="grid grid-cols-[1fr_auto] gap-5">
          <div className="col-1 mx-auto max-w-2xl lg:mx-0">
            <h4 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
              {album.title}
            </h4>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              {album.description}
            </p>
          </div>
          <div className="col-2 flex justify-end items-end">
            <button
              onClick={openUploadModal}
              className="size-18 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <img src="icons/add-555.svg" alt="Add photo" />
            </button>
          </div>
        </div>

        {/* Photo Board */}
        <PhotoBoard photos={photos} onDelete={handlePhotoDelete} />
      </section>

      {/* Upload Modal */}
      <Modal open={isUploadModalOpen} onClose={closeUploadModal}>
        <UploadPhotoForm onPhotoUploaded={handlePhotoUpload} album={album} />
      </Modal>

      {/* Delete Confirmation Modal */}
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
