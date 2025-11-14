import { easeOut, motion } from "framer-motion";
import AlbumBoard from "../components/AlbumBoard";

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

export default function Dashboard() {
  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="mx-auto px-4 lg:px-6">
        {/* Cabecera */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pb-3 border-b border-neutral-700"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl/10 tracking-tighter font-light sm:text-7xl/15"
          >
            MIS HALLAZGOS
            <br />
            POR
            <br />
            SEVILLA
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500"
          >
            UNA RECOPILACIÓN VISUAL DE LUGARES, DETALLES Y MOMENTOS QUE ME
            INSPIRAN A SEGUIR BUSCANDO.
          </motion.p>
        </motion.div>

        {/* Botón */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full flex justify-end pt-4"
        >
          <button onClick={openUploadModal} className="pt-2 cursor-pointer">
            <span
              className="relative hover:text-neutral-900 
               after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
               hover:after:w-full"
            >
              CREAR ÁLBUM &rarr;
            </span>
          </button>
        </motion.div> */}

        {/* Tablero de álbumes */}
        <AlbumBoard />
      </div>
    </section>
  );
}
