import { useEffect, useRef, useState } from "react";
import { easeOut, motion } from "framer-motion";

// Extracted constant: List of videos for cycling
const VIDEO_LIST = [
  "/videos/vid-rio-02.mp4",
  "/videos/vid-rio-03.mp4",
  "/videos/vid-rio-04.mp4",
  "/videos/vid-rio-05.mp4",
];

// Extracted variant 1: Container for staggering child animations
const CONTAINER_VARIANTS = {
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.15,
    },
  },
};

// Extracted variant 2: Child items (h1 and p) fade-up animation
const ITEM_VARIANTS = {
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

// Extracted variant 3: Background image fade-in
const BACKGROUND_FADE_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  // Cycle to the next video when the current one ends
  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % VIDEO_LIST.length);
  };

  useEffect(() => {
    // Replay video when 'current' index changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Fallback (Uses motion.img for animation) */}
      <motion.img
        src="/videos/vid-dummy.jpg"
        alt="Background image"
        className="absolute inset-0 h-full w-full object-cover brightness-65 transition-opacity duration-500"
        variants={BACKGROUND_FADE_VARIANTS}
        initial="hidden"
        animate="visible"
      />

      {/* Video element for background animation (kept outside the motion context for simplicity) */}
      <video
        ref={videoRef}
        src={VIDEO_LIST[current]}
        onEnded={handleEnded}
        loop={false}
        muted
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-65 opacity-0 transition-opacity duration-500"
        style={{ opacity: 1 }} // Needs dynamic opacity for video crossfade if used
      />

      {/* Content Container (Applies staggering animation to children) */}
      <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center text-center"
      >
        <motion.h1
          variants={ITEM_VARIANTS}
          className="max-w-lg font-light text-white tracking-tighter text-7xl/[17] sm:text-8xl/[22]"
        >
          Un Gallego por Sevilla
        </motion.h1>
        <motion.p
          variants={ITEM_VARIANTS}
          className="mt-8 max-w-lg text-lg/5 text-white sm:text-xl/6"
        >
          ENCONTRÁNDOME GENTE, COSAS QUE HACER Y LUGARES INTERESANTES, MIENTRAS
          ESCAPO DE LA PANTALLA Y DE LAS LÍNEAS DE CÓDIGO.
        </motion.p>
      </motion.div>
    </div>
  );
}
