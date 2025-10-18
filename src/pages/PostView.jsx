import { useLocation } from "react-router-dom";
import { useState } from "react";
import PhotoBoard from "../components/PhotoBoard";
import Modal from "../components/Modal";

export default function PostView() {
  // Get post from location
  const location = useLocation();
  const post = location.state;
  console.log(post);

  // 1. Definir el estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Función para abrir/cerrar el modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Función para cerrar específicamente (útil para el botón 'X' dentro del modal)
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {" "}
      <section className="mx-auto max-w-7xl px-6 pt-6 sm:pt-12 lg:px-8">
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
            <button
              onClick={toggleModal}
              className="size-18 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <img src="icons/add-555.svg" alt="" />
            </button>
          </div>
        </div>
        <PhotoBoard post={post} />
      </section>
      <Modal open={isModalOpen} onClose={closeModal}></Modal>
    </>
  );
}
