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

export default function About() {
  // variante para cada bloque (hijo)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sections = [
    {
      title: "¿QUIÉN SOY?",
      text: `Mi nombre es Víctor y soy de A Coruña. Estoy descubriendo el sur de España y
      disfrutando de su contraste con el entorno y la cultura gallega.
      Después de varios meses viviendo en Cádiz, me he trasladado a
      Sevilla, tanto para conocer una nueva ciudad como para continuar mi formación como desarrollador.`,
    },
    {
      title: "¿POR QUÉ DESARROLLO WEB?",
      text: `Como la mayoría, me acerqué a la programación por la gran oferta laboral del sector y la posibilidad de mejorar profesionalmente. Pero al adentrarme, descubrí la conexión
      entre la programación, el diseño estético y la experiencia del
      usuario. Esa mezcla tiene un componente casi artístico muy disfrutable. También me fascina construir pequeños fragmentos
      de código que se comunican entre sí y acaban formando un sistema
      completo: una máquina viva que funciona gracias a cada pieza.`,
    },
    {
      title: "¿QUÉ HAGO CUANDO NO PROGRAMO?",
      text: `Soy una persona muy curiosa, siempre en busca de nuevas
      experiencias. Me fascina viajar, explorar y guardar
      recuerdos de esos lugares, muchas veces en forma de fotografías
      que, con mayor o menor acierto, reflejan mi forma de ver el
      mundo.`,
    },
    {
      title: "¿POR QUÉ ESTE PROYECTO?",
      text: `Este proyecto une mis dos mundos: lo que estudio y lo que vivo.
      No es solo una práctica de desarrollo, sino un espacio donde
      reflejo mi paso por Sevilla y mi proceso de aprendizaje. Es, en
      cierto modo, un diario visual de esta etapa de mi vida.`,
    },
  ];

  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-start">
        {/* Columna izquierda: texto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-light tracking-tighter text-left pb-3 border-b border-neutral-700"
          >
            SOBRE MÍ
          </motion.h2>

          {/* Contenedor animado: aplica stagger a los hijos */}
          <div className="mt-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-8">
            {sections.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                // 4. --- ¡LA MAGIA ESTÁ AQUÍ! ---
                transition={{
                  duration: 0.5,
                  ease: easeOut,
                }}
                className=""
              >
                <h3 className="text-2xl/7 tracking-tighter font-light sm:text-4xl/9">
                  {s.title}
                </h3>
                <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                  {s.text}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Columna derecha: imagen */}
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            alt="Foto en el CAAC, Sevilla"
            src="images/about-caac.jpeg"
            className="w-full h-full object-cover shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
