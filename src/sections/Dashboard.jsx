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
    <section id="dashboard" className="mb-18 pt-30 sm:pt-42">
      <div className="mx-auto px-4 lg:px-6">
        {/* Cabecera */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
        <AlbumBoard />
      </div>
    </section>
  );
}
