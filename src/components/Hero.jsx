import { useState, useEffect, useRef } from "react";
import { easeOut, motion } from "framer-motion";

// --- Definimos nuestras variantes ---

// 1. Variante para el CONTENEDOR (el <motion.div>)
const containerVariants = {
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

// 2. Variante para los HIJOS (el <h1> y el <p>)
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
// 3. Variante para el back-ground
const backgroundFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1, // Una duración un poco más larga para que sea suave
      ease: "easeOut",
      delay: 0.1, // Pequeño retraso para que no aparezca antes que nada
    },
  },
};

const Hero = () => {
  // ... (toda tu lógica de videos y estado se mantiene igual)
  const videos2 = [
    "/videos/vid-rio-02.mp4",
    "/videos/vid-rio-03.mp4",
    "/videos/vid-rio-04.mp4",
    "/videos/vid-rio-05.mp4",
  ];
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos2.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ... Tu <video> o <img> de fondo ... */}
      <motion.img
        src="/videos/vid-dummy.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover brightness-65 transition-opacity duration-500"
        variants={backgroundFade}
        initial="hidden"
        animate="visible"
      />

      {/* --- 3. Aplicamos las variantes --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center"
      >
        <motion.h1
          variants={itemVariants} // <-- El 'h1' es un hijo
          className="max-w-lg text-7xl/17 tracking-tighter font-light text-white sm:text-8xl/22"
        >
          Un Gallego por Sevilla
        </motion.h1>
        <motion.p
          variants={itemVariants} // <-- El 'p' es el segundo hijo
          className="max-w-lg mt-8 text-lg/5 text-white sm:text-xl/6"
        >
          ENCONTRÁNDOME GENTE, COSAS QUE HACER Y LUGARES INTERESANTES, MIENTRAS
          ESCAPO DE LA PANTALLA Y DE LAS LÍNEAS DE CÓDIGO.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
