import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="col-1 mx-auto pb-3 border-b border-neutral-700 lg:mx-0">
          <h3>CONTACTO</h3>
          <h2 className="text-5xl tracking-tighter font-light sm:text-7xl/15">
            ESCRÍBEME LO QUE SEA
          </h2>
          <p className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500">
            TANTO SI ES UNA OFERTA DE EMPLEO, COMO UNA BUENA HISTORIA
          </p>
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
}
