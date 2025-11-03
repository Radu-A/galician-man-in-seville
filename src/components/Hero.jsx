import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const videos = [
    "/videos/vid-rio-01.mp4",
    "/videos/vid-rio-02.mp4",
    "/videos/vid-rio-03.mp4",
    "/videos/vid-rio-04.mp4",
    "/videos/vid-rio-04.mp5",
  ];
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
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
        key={videos[current]}
        src={videos[current]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-65 transition-opacity duration-500"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className=" max-w-lg text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl dark:text-white">
          Un gallego por Sevilla
        </h1>
        <p className=" max-w-lg mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8 dark:text-gray-400">
          Encontrándome gente, cosas que hacer y lugares interesantes, mientras
          escapo del aburrimiento y practico desarrollo para ser programador.
        </p>
      </div>
    </div>
  );
};

export default Hero;
