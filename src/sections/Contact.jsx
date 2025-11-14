import { motion, easeOut } from "framer-motion";
import ContactForm from "../components/ContactForm";

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

export default function Contact() {
  return (
    <section id="contact" className="mb-32 pt-30 sm:pt-42">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-[300px_1fr] mx-auto px-4 lg:px-6"
      >
        <motion.h3 variants={itemVariants} className="mb-2">
          CONTACTO
        </motion.h3>
        <motion.h2
          variants={itemVariants}
          className="text-5xl tracking-tighter font-light sm:text-7xl/15"
        >
          HÁBLAME DE LO QUE SEA
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500 md:col-2"
        >
          TANTO SI ME VAS A OFRECER TRABAJO, COMO SI ME QUIERES CONTAR TU VIDA
        </motion.p>
        <ContactForm itemVariants={itemVariants}></ContactForm>
        <motion.div
          variants={itemVariants}
          className="hidden row-3 space-y-3 text-neutral-700 font-light text-lg md:flex md:flex-col"
        >
          <div>
            <a
              href="https://victor-outeiro.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-black transition
                after:absolute after:content-[' '] 
                after:-bottom-1 after:left-0 after:bg-black 
                after:w-0 after:h-[1px]
                after:transition-all duration-300
                hover:after:w-full"
            >
              Sitio web personal &rarr;
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Radu-A"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-black transition
                after:absolute after:content-[' '] 
                after:-bottom-1 after:left-0 after:bg-black 
                after:w-0 after:h-[1px]
                after:transition-all duration-300
                hover:after:w-full"
            >
              GitHub &rarr;
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/victor-outeiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-black transition
                after:absolute after:content-[' '] 
                after:-bottom-1 after:left-0 after:bg-black 
                after:w-0 after:h-[1px]
                after:transition-all duration-300
                hover:after:w-full"
            >
              LinkedIn &rarr;
            </a>
          </div>
          <p className="text-neutral-500">victorouteiro@gmail.com</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
