import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getPhotos } from "../firebase/getData";
import { deletePhoto } from "../firebase/deleteData";
import PhotoBoard from "../components/PhotoBoard";
import Modal from "../components/Modal";
import UploadPhotoForm from "../components/UploadPhotoForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModel"; // Check file name case
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function Album() {
  // 1. STATE & HOOKS
  const { state: album } = useLocation();
  const [photos, setPhotos] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState({
    isOpen: false,
    photoToDelete: null,
  });

  // 2. DATA FETCHING
  const fetchPhotos = useCallback(async () => {
    if (!album?.id) return;
    try {
      const res = await getPhotos(album.id);
      setPhotos(res);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }, [album?.id]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // 3. HANDLERS
  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);
  const handlePhotoUpload = () => {
    closeUploadModal();
    fetchPhotos(); // Refresh photo list after successful upload
  };

  const closeDeleteModal = () => {
    setDeleteModalState({ isOpen: false, photoToDelete: null });
  };

  const handlePhotoDelete = (photo) => {
    setDeleteModalState({ isOpen: true, photoToDelete: photo });
  };

  const handleDeleteConfirmed = async () => {
    const { photoToDelete } = deleteModalState;
    if (!photoToDelete) return;

    closeDeleteModal();

    const photoId = photoToDelete.id;

    // Optimistic UI update
    setPhotos((prevPhotos) =>
      prevPhotos ? prevPhotos.filter((p) => p.id !== photoId) : null
    );

    try {
      await deletePhoto(photoId);
      console.log(
        `Document with ID: ${photoId} successfully deleted from Firestore.`
      );
    } catch (error) {
      console.error(`Error deleting photo ID ${photoId}:`, error);
      alert(
        "Error al eliminar la foto. Se está recargando la lista para asegurar la consistencia."
      );
      fetchPhotos(); // Rollback on error
    }
  };

  // 4. CONDITIONAL RENDER
  if (!album || !album.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">
          Error: No se encontró el álbum.
        </h1>
      </div>
    );
  }

  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-1 mx-auto pb-3 border-b border-neutral-700 lg:mx-0"
        >
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-start mb-4"
          >
            <Link to="/dashboard" className="pt-2 cursor-pointer">
              <span
                className="relative text-xl hover:text-neutral-900 
                after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
                hover:after:w-full"
              >
                &larr; VOLVER
              </span>
            </Link>
          </motion.div>
          <motion.h3 variants={itemVariants} className="mb-2">
            ÁLBUM
          </motion.h3>
          <motion.h2
            variants={itemVariants}
            className="text-5xl tracking-tighter font-light sm:text-7xl/15"
          >
            {album.title.toUpperCase()}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500"
          >
            {album.description}
          </motion.p>
        </motion.div>

        {/* <div className="w-full flex justify-end">
          <button onClick={openUploadModal} className="pt-2 cursor-pointer">
            <span
              className="relative hover:text-neutral-900 
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
              hover:after:w-full"
            >
              SUBIR FOTO &rarr;
            </span>
          </button>
        </div> */}
        <PhotoBoard photos={photos} onDelete={handlePhotoDelete} />
      </div>

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
    </section>
  );
}
