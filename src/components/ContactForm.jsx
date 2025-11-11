import React from "react";

/*
  Este componente asume que Tailwind CSS está configurado
  en tu proyecto de React.
*/
export default function ContactForm() {
  return (
    <>
      {/* Formulario:
        - Ocupa todo el ancho (w-full) pero con un max-w-md.
        - Estilos de tarjeta (bg-white, rounded-lg, shadow-md, p-8).
      */}
      <form
        action="#"
        method="POST"
        className="grid gap-4 md:grid-cols-2 w-full p-8"
      >
        {/* --- Campo Nombre --- */}
        <div className="relative mb-6">
          {/*
            INPUT:
            - 'peer' identifica este input para la <label>.
            - 'placeholder=" "' es el truco para que :placeholder-shown funcione.
            - El resto son los estilos para la línea inferior y el foco.
          */}
          <input
            type="text"
            name="name"
            id="name"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          {/*
            LABEL:
            - Usa 'peer-placeholder-shown:*' para el estado "en reposo".
            - Usa 'peer-focus:*' para el estado "activo" (cuando se hace clic).
          */}
          <label
            htmlFor="name"
            className="absolute left-0 top-0 text-neutral-700 text-base pointer-events-none transition-all duration-300 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
                       peer-focus:top-0 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            NOMBRE
          </label>
        </div>

        {/* --- Campo Empresa --- */}
        <div className="relative mb-6">
          {/*
            INPUT:
            - 'peer' identifica este input para la <label>.
            - 'placeholder=" "' es el truco para que :placeholder-shown funcione.
            - El resto son los estilos para la línea inferior y el foco.
          */}
          <input
            type="text"
            name="company"
            id="company"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          {/*
            LABEL:
            - Usa 'peer-placeholder-shown:*' para el estado "en reposo".
            - Usa 'peer-focus:*' para el estado "activo" (cuando se hace clic).
          */}
          <label
            htmlFor="company"
            className="absolute left-0 top-0 text-neutral-700 text-base pointer-events-none transition-all duration-300 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
                       peer-focus:top-0 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            EMPRESA
          </label>
        </div>

        {/* --- Campo Email --- */}
        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            id="email"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-0 text-neutral-700 text-base pointer-events-none transition-all duration-300 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
                       peer-focus:top-0 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            EMAIL
          </label>
        </div>

        {/* --- Campo Asunto --- */}
        <div className="relative mb-6">
          <input
            type="text"
            name="subject"
            id="subject"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900"
            placeholder=" "
            required
          />
          <label
            htmlFor="subject"
            className="absolute left-0 top-0 text-neutral-700 text-base pointer-events-none transition-all duration-300 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
                       peer-focus:top-0 peer-focus:text-sm peer-focus:text-neutral-500"
          >
            ASUNTO
          </label>
        </div>

        {/* --- Campo Mensaje (Textarea) --- */}
        <div className="col-span-2 relative mb-6">
          <textarea
            name="message"
            id="message"
            rows="4"
            className="peer w-full border-0 border-b-1 border-neutral-500 bg-transparent text-neutral-900 pt-4 pb-1 z-10 focus:outline-none focus:ring-0 focus:border-neutral-900 resize-vertical"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 top-0 text-neutral-700 text-base pointer-events-none transition-all duration-300 
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-700 peer-placeholder-shown:top-4
                       peer-focus:top-0 peer-focus:text-sm peer-focus:text-neutral-500"
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
          className="w-full bg-neutral-700 text-white py-3 px-4 rounded-none font-semibold hover:bg-neutral-800 transition-colors duration-300"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
