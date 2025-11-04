import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const videos1 = [
    "/videos/vid-alc-01.mp4",
    "/videos/vid-alc-02.mp4",
    "/videos/vid-alc-03.mp4",
    "/videos/vid-alc-04.mp4",
  ];
  const videos2 = [
    // "/videos/vid-rio-01.mp4",
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
      <video
        ref={videoRef}
        key={videos2[current]}
        src={videos2[current]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-500"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="max-w-lg text-7xl tracking-tighter text-white sm:text-8xl dark:text-white">
          Un Gallego por Sevilla
        </h1>
        <p className="max-w-lg mt-8 text-lg leading-super-tight text-white sm:text-xl/8 dark:text-gray-400">
          ENCONTRÁNDOME GENTE, COSAS QUE HACER Y LUGARES INTERESANTES, MIENTRAS
          ESCAPO DEL ABURRIMIENTO Y PROGRAMO SIN PARAR.
        </p>
      </div>
    </div>
  );
};

export default Hero;
