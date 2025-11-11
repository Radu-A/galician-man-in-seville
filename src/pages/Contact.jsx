import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="grid lg:grid-cols-[300px_1fr] mx-auto max-w-7xl px-6 lg:px-8">
        <h3>CONTACTO</h3>
        <h2 className="text-5xl tracking-tighter font-light sm:text-7xl/15">
          HÁBLAME DE LO QUE SEA
        </h2>
        <p className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500 lg:col-2">
          TANTO SI ME VAS A OFRECER TRABAJO, COMO SI ME QUIERES CONTAR ALGO
        </p>
        <ContactForm></ContactForm>
        <div className="hidden row-3 space-y-3 text-neutral-700 font-light text-lg lg:flex lg:flex-col">
          <a
            href="https://victor-outeiro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Sitio web personal &rarr;
          </a>
          <a
            href="https://github.com/Radu-A"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            GitHub &rarr;
          </a>
          <a
            href="https://www.linkedin.com/in/victor-outeiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            LinkedIn &rarr;
          </a>
          <p className="text-neutral-500">victorouteiro@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
