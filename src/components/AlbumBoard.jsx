import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AlbumCard from "./AlbumCard";
import { getAlbums } from "../firebase/getData";

export default function AlbumBoard() {
  const [albumList, setAlbumList] = useState(null);

  useEffect(() => {
    getAlbums().then((res) => setAlbumList(res));
  }, []);

  if (!albumList) {
    return <p className="text-center text-neutral-500 pt-10">Cargando álbums...</p>;
  }

  // Variantes para la animación
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      {albumList.map((album) => (
        <motion.div key={album.id} variants={fadeUp}>
          <AlbumCard album={album} />
        </motion.div>
      ))}
    </motion.div>
  );
}
