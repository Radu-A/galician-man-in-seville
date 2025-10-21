import { useState } from "react";
import AlbumBoard from "../components/AlbumBoard";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);
  return (
    <section className="pt-6 sm:pt-12 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header and Upload Button */}
        <div className="grid grid-cols-[1fr_auto] gap-5">
          <div className="col-1 mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl dark:text-white">
              Mis hallazgos por Sevilla
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Una recopilación visual de lugares, detalles y momentos que me
              inspiran a seguir creando. Cada álbum es una parte del camino.
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
        <AlbumBoard></AlbumBoard>
      </div>
      {/* Upload Modal */}
      <Modal open={isUploadModalOpen} onClose={closeUploadModal}></Modal>
    </section>
  );
}
