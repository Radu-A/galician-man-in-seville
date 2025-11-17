import { useState } from "react"; // Ya no necesitas useEffect ni useRef
import { easeOut, motion } from "framer-motion";
import MuxPlayer from "@mux/mux-player-react";

// ---------- Animations (Sin cambios) ----------
const containerVariants = {
  visible: {
    transition: { delay: 0.5, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

// ... (backgroundFade puede quedarse si usas el poster)

// ---------- Mux Playback IDs ----------
// Esta es ahora nuestra única fuente de vídeos
const playbackIds = [
  "J58CW00LnOeT9DUHD9yhyxGLQsh7GvQVcN81w3R00tpVA",
  "NU6CVFq6nY9eFSwMrIonWeJ01eaSTKv1IRq7rOpxirB8",
  "I1SS400ERStPDN2LGsChYTjR00C0201emtcOyIOkk5vgBOw",
  "0100FvP4KQydmiuZ00sHbWjjI3TXdI01kGAICcuVXEx17yo",
  "02H011EPPlfdwHGDOsiitSsi3IrngGbK7ihcz3scczXyk",
  "ffvpYgwHebQAk2kFiVGcBYAaavSa6I2MrUjbwD3E5Qg",
];

// Ya no necesitamos 'videoPathDesktop', 'videoPathMobile' ni 'fetchVideoUrls'

// ---------------------------------------------------
//                     COMPONENT
// ---------------------------------------------------
const Hero = () => {
  // Solo necesitamos un estado: el índice del vídeo actual
  const [current, setCurrent] = useState(0);

  // Esta función se llamará cuando un vídeo termine
  const handleVideoEnded = () => {
    // Avanza al siguiente vídeo, volviendo al principio si es el último
    setCurrent((prevIndex) => (prevIndex + 1) % playbackIds.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Poster (Puedes descomentarlo si quieres un fundido inicial) */}
      {/* ... */}

      {/* Contenedor perfecto para fullscreen */}
      <div className="absolute inset-0 w-full h-full">
        <MuxPlayer
          // 1. Asigna el playbackId actual usando el estado 'current'
          playbackId={playbackIds[current]}
          streamType="on-demand"
          autoPlay
          muted
          playsInline
          controls={false}
          // loop={false}
          onEnded={handleVideoEnded}
          className="w-full h-full brightness-90"
          style={{
            "--media-object-fit": "cover",
          }}
        />
      </div>

      {/* TEXT CONTENT (Sin cambios) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="max-w-lg text-7xl/17 tracking-tighter font-light text-white sm:text-8xl/22"
        >
          Un Gallego por Sevilla
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-lg mt-8 text-lg/5 text-white sm:text-xl/6"
        >
          ENCONTRÁNDOME GENTE, COSAS QUE HACER Y LUGARES INTERESANTES, MIENTRAS
          ESCAPO DE LA PANTALLA Y DE LAS LÍNEAS DE CÓDIGO.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
