import { motion, easeOut } from "framer-motion";

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

const imageVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="overflow-hidden mb-18 pt-30 sm:pt-42">
      <div className="mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-start">
        {/* Columna izquierda: texto */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2 pb-3 border-b border-neutral-700"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-light tracking-tighter text-left"
          >
            SOBRE MÍ
          </motion.h2>
        </motion.div>

        {/* Contenedor animado: aplica stagger a los hijos */}
        <div className="text-neutral-700 space-y-8">
          <motion.article
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl/7 tracking-tighter font-light sm:text-4xl/9"
            >
              ¿QUIÉN SOY?
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="mt-2 pt-1 text-lg/5.5 tracking-tight font-light text-neutral-500"
            >
              Mi nombre es Víctor y soy de A Coruña. Estoy descubriendo el sur
              de España y disfrutando de su contraste con el entorno y la
              cultura de Galicia.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-2 pt-1 text-lg/5.5 tracking-tight font-light text-neutral-500"
            >
              Después de varios meses viviendo en Cádiz, me he trasladado a
              Sevilla, tanto para conocer una nueva ciudad como para continuar
              mi formación como desarrollador.
            </motion.p>
          </motion.article>
          <motion.article
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl/7 tracking-tighter font-light sm:text-4xl/9"
            >
              ¿POR QUÉ DESARROLLO WEB?
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="mt-2 pt-1 text-lg/5.5 tracking-tight font-light text-neutral-500"
            >
              Como todos, me acerqué a la programación por la gran oferta
              laboral del sector y la posibilidad de mejorar profesionalmente.
              Pero al adentrarme, descubrí la conexión entre la programación, el
              diseño estético y la experiencia del usuario, un componente casi
              artístico.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-2 pt-1 text-lg/5.5 tracking-tight font-light text-neutral-500"
            >
              También disfruto construyendo fragmentos de código y ver como se
              unen entre sí para formar un sistema: una máquina viva que
              funciona gracias a cada pieza.
            </motion.p>
          </motion.article>
          <motion.article
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl/7 tracking-tighter font-light sm:text-4xl/9"
            >
              ¿POR QUÉ ESTE PROYECTO?
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="mt-2 pt-1 text-lg/5.5 tracking-tight font-light text-neutral-500"
            >
              Me encanta explorar y guardar recuerdos de lo que encuentro,
              muchas veces en forma de fotografías que, con mayor o menor
              acierto, reflejan mi forma de ver el mundo.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-2 pt-1 text-lg/5.5 tracking-tight font-light text-neutral-500"
            >
              Este proyecto une mis dos mundos: lo que estudio y lo que vivo. No
              es solo una práctica de desarrollo, sino un espacio donde reflejo
              mi paso por Sevilla y mi proceso de aprendizaje. Es, en cierto
              modo, un diario visual de esta etapa de mi vida.
            </motion.p>
          </motion.article>
        </div>

        {/* Columna derecha: imagen */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          // CLASES MODIFICADAS: h-80 para móvil, y lg:w-full, lg:h-full para escritorio
          className="w-full h-[675px] mx-auto lg:w-full lg:h-full"
        >
          <img
            alt="Foto en el CAAC, Sevilla"
            src="images/about-bike.jpg"
            // object-cover asegura que se recorte y cubra el área h-80
            className="w-full h-full object-cover shadow-xl ring-1 ring-gray-400/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
