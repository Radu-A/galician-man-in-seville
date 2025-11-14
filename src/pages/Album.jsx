import { useLocation, Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { getPhotos } from "../firebase/getData";
import PhotoBoard from "../components/PhotoBoard";
import { motion, easeOut } from "framer-motion";
import { HashLink } from "react-router-hash-link";

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
    <section className="mb-18 pt-30 sm:pt-42">
      <div className="mx-auto px-4 lg:px-6">
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
            <HashLink to="/#dashboard" className="pt-2 cursor-pointer">
              <span
                className="relative text-xl hover:text-neutral-900 
                after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
                hover:after:w-full"
              >
                &larr; VOLVER
              </span>
            </HashLink>
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
        <PhotoBoard photos={photos} />
      </div>
    </section>
  );
}
