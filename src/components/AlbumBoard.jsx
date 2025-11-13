import { useEffect, useState } from "react";
import { motion, easeOut } from "framer-motion";
import AlbumCard from "./AlbumCard";
import { getAlbums } from "../firebase/getData";

export default function AlbumBoard() {
  const [albumList, setAlbumList] = useState(null);

  useEffect(() => {
    getAlbums().then((res) => setAlbumList(res));
  }, []);

  if (!albumList) {
    return (
      <p className="text-center text-neutral-500 pt-10">Cargando álbums...</p>
    );
  }

  return (
    // 1. El 'div' contenedor ya no necesita 'variants', 'initial', 'whileInView', etc.
    //    Puede ser un 'div' normal, o un 'motion.div' simple si quieres animarlo
    //    como un todo (por ejemplo, con las variantes del componente padre),
    //    pero NO debe usar 'staggerChildren' en este caso.
    // Para limitar el ancho de la imagen
    <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {albumList.map((album, index) => (
        // 2. Toda la lógica de la animación se mueve AQUÍ, al hijo.
        <motion.div
          // 3. Movemos las variantes 'fadeUp' aquí dentro
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          // 4. --- ¡LA MAGIA ESTÁ AQUÍ! ---
          transition={{
            duration: 0.5,
            ease: easeOut,
            // 'index % 3' nos da la columna (0, 1, o 2)
            // Lo multiplicamos por un pequeño retraso (100ms)
            delay: (index % 3) * 0.1,
          }}
        >
          <AlbumCard album={album} />
        </motion.div>
      ))}
    </div>
  );
}
