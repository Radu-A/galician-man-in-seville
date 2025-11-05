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
      {/* <video
        ref={videoRef}
        key={videos2[current]}
        src={videos2[current]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-500"
      /> */}
      <img
        src="/videos/vid-dummy.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover brightness-65 transition-opacity duration-500"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="max-w-lg text-7xl/17 tracking-tighter font-light text-white sm:text-8xl/22">
          Un Gallego por Sevilla
        </h1>
        <p className="max-w-lg mt-8 text-lg/5 text-white sm:text-xl/6">
          ENCONTRÁNDOME GENTE, COSAS QUE HACER Y LUGARES INTERESANTES, MIENTRAS
          ESCAPO DE LA PANTALLA Y DE LAS LÍNEAS DE CÓDIGO.
        </p>
      </div>
    </div>
  );
};

export default Hero;
