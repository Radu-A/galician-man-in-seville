import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="grid md:grid-cols-[300px_1fr] mx-auto px-4 lg:px-6">
        <h3 className="mb-2">CONTACTO</h3>
        <h2 className="text-5xl tracking-tighter font-light sm:text-7xl/15">
          HÁBLAME DE LO QUE SEA
        </h2>
        <p className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500 md:col-2">
          TANTO SI ME VAS A OFRECER TRABAJO, COMO SI ME QUIERES CONTAR ALGO
        </p>
        <ContactForm></ContactForm>
        <div className="hidden row-3 space-y-3 text-neutral-700 font-light text-lg md:flex md:flex-col">
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
        </div>
      </div>
    </section>
  );
}
