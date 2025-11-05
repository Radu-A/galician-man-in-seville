import { useState } from "react";
import AlbumBoard from "../components/AlbumBoard";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);

  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="col-1 mx-auto pb-3 border-b border-neutral-700 lg:mx-0">
          <h2 className="text-5xl tracking-tighter font-light sm:text-7xl/15">
            MIS HALLAZGOS
            <br />
            POR
            <br />
            SEVILLA
          </h2>
          <p className="mt-2 text-lg tracking-tighter font-light text-neutral-500">
            UNA RECOPILACIÓN VISUAL DE LUGARES, DETALLES Y MOMENTOS QUE ME
            INSPIRAN A SEGUIR VIAJANDO.
          </p>
        </div>

        <div className="w-full flex justify-end">
          <button onClick={openUploadModal} className="pt-2 cursor-pointer">
            <span
              className="relative hover:text-neutral-900 
             after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              CREAR ÁLBUM &rarr;
            </span>
          </button>
        </div>

        <AlbumBoard />
      </div>

      <Modal open={isUploadModalOpen} onClose={closeUploadModal} />
    </section>
  );
}
