import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [formState, handleSubmit] = useForm("xanplkgk");
  if (formState.submitting) {
    return (
      <h2 className="mt-10 text-4xl text-neutral-700 text-center">
        Gracias por contactarme!
      </h2>
    );
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 w-full py-8 gap-4 md:grid-cols-2 lg:col-2"
      >
        {/* --- Campo Nombre --- */}
        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            id="name"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-lg text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-3 text-neutral-500 text-sm pointer-events-none transition-all duration-300 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            NOMBRE
          </label>
        </div>
        <ValidationError prefix="Name" field="name" errors={formState.errors} />
        {/* --- Campo Empresa --- */}
        {/* <div className="relative mb-6">
          <input
            type="text"
            name="company"
            id="company"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-lg text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          <label
            htmlFor="company"
            className="absolute left-0 -top-3 text-neutral-500 text-sm pointer-events-none transition-all duration-300 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            EMPRESA
          </label>
        </div> */}

        {/* --- Campo Email --- */}
        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            id="email"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-lg text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-3 text-neutral-500 text-sm pointer-events-none transition-all duration-300 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            EMAIL
          </label>
        </div>
        <ValidationError
          prefix="Email"
          field="email"
          errors={formState.errors}
        />
        {/* --- Campo Asunto --- */}
        {/* <div className="relative mb-6">
          <input
            type="text"
            name="subject"
            id="subject"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-lg text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          <label
            htmlFor="subject"
            className="absolute left-0 -top-3 text-neutral-500 text-sm pointer-events-none transition-all duration-300 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            ASUNTO
          </label>
        </div> */}

        {/* --- Campo Mensaje (Textarea) --- */}
        <div className="md:col-span-2 relative mb-6">
          <textarea
            name="message"
            id="message"
            rows="4"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-lg text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-3 text-neutral-500 text-sm pointer-events-none transition-all duration-300 
              peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
              peer-focus:-top-3 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            MENSAJE
          </label>
        </div>

        {/* BOTÓN:
          - bg-neutral-700 (fondo neutral-700)
          - text-white (texto blanco)
          - rounded-none (esquinas sin redondear)
        */}
        <button
          type="submit"
          className="w-full bg-neutral-700 text-white py-3 px-4 rounded-none font-semibold cursor-pointer hover:bg-neutral-800 transition-colors duration-300"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
