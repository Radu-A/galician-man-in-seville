import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="mt-24 mb-18 pt-6 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="col-1 mx-auto pb-3 lg:mx-0">
          <h3>CONTACTO</h3>
          <h2 className="text-5xl tracking-tighter font-light sm:text-7xl/15">
            HÁBLAME DE LO QUE SEA
          </h2>
          <p className="mt-2 pt-1 text-lg/5 tracking-tighter font-light text-neutral-500">
            TANTO SI ME VAS A OFRECER TRABAJO, COMO SI ME QUIERES CONTAR ALGO 
          </p>
        </div>
        <div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </section>
  );
}
