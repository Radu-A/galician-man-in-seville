import { useState, useEffect, useRef } from "react";
import { easeOut, motion } from "framer-motion";
import { getFileUrl } from "../firebase/getData";

// ---------- Animations ----------
const containerVariants = {
  visible: {
    transition: { delay: 0.5, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const backgroundFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.1 },
  },
};

// ---------- Firebase storage paths ----------
const videoPath = [
  "gs://galician-man-in-seville.firebasestorage.app/video-hero-full/vid-03-sal-3.mp4",
  "gs://galician-man-in-seville.firebasestorage.app/video-hero-full/vid-04-caac-3.mp4",
  "gs://galician-man-in-seville.firebasestorage.app/video-hero-full/vid-05-pasarela-3.mp4",
  "gs://galician-man-in-seville.firebasestorage.app/video-hero-full/vid-06-alcazar-1.mp4",
  "gs://galician-man-in-seville.firebasestorage.app/video-hero-full/vid-07-americano-1.1.mp4",
  "gs://galician-man-in-seville.firebasestorage.app/video-hero-full/vid-08-juderia-1.mp4",
];

// -------- Utility: fetch signed URLs --------
const fetchVideoUrls = async (paths) => {
  const promises = paths.map((p) => getFileUrl(p).catch(() => null));
  const results = await Promise.all(promises);
  return results.filter(Boolean);
};

// ---------------------------------------------------
//                     COMPONENT
// ---------------------------------------------------
const Hero = () => {
  const [videoUrls, setVideoUrls] = useState(null);
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const mainVideoRef = useRef(null);
  const preloadRef = useRef(null);

  const poster = "/videos/vid-dummy.jpg";

  // Load all URLs on mount
  useEffect(() => {
    let ok = true;
    const load = async () => {
      const urls = await fetchVideoUrls(videoPath);
      if (ok) setVideoUrls(urls.length ? urls : null);
    };
    load();
    return () => (ok = false);
  }, []);

  // Whenever current changes, reload the visible video
  useEffect(() => {
    if (!mainVideoRef.current || !videoUrls) return;

    setVideoLoaded(false);
    mainVideoRef.current.load();
    mainVideoRef.current.play().catch(() => {});
  }, [current, videoUrls]);

  // Preload the next video silently offscreen
  useEffect(() => {
    if (!videoUrls || videoUrls.length < 2 || !preloadRef.current) return;

    const nextIndex = (current + 1) % videoUrls.length;
    preloadRef.current.src = videoUrls[nextIndex];
    preloadRef.current.load();
  }, [current, videoUrls]);

  // When a video ends, switch instantly to the preloaded one
  const handleEnded = () => {
    if (!videoUrls || videoUrls.length < 2) return;
    setCurrent((prev) => (prev + 1) % videoUrls.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Poster (solo para fondo inicial) */}
      <motion.img
        src={poster}
        alt=""
        className="absolute inset-0 w-full h-full object-cover brightness-65"
        variants={backgroundFade}
        initial="hidden"
        animate="visible"
      />

      {/* MAIN VIDEO (visible) */}
      {videoUrls && (
        <video
          ref={mainVideoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          poster={poster}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onEnded={handleEnded}
          loop={videoUrls.length === 1}
        >
          <source src={videoUrls[current]} type="video/mp4" />
        </video>
      )}

      {/* PRELOAD VIDEO (oculto) */}
      <video
        ref={preloadRef}
        style={{ display: "none" }}
        preload="auto"
        muted
      ></video>

      {/* TEXT CONTENT */}
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
