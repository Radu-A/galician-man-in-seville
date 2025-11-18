import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <h2 className="text-3xl text-pretty sm:text-4xl dark:text-white mb-6">
          Términos y Condiciones de Uso
        </h2>

        <p className="mt-2 text-base text-neutral-500 dark:text-gray-300 mb-4">
          Última actualización: Noviembre 2025
        </p>

        <section className="space-y-4 text-neutral-700 dark:text-gray-400">
          <h3 className="text-xl font-semibold dark:text-white pt-3">
            1. Aceptación de los Términos
          </h3>
          <p className="text-base">
            Al acceder y utilizar el sitio web **"Un Gallego por Sevilla"** (en
            adelante, "el Sitio Web"), usted acepta y se compromete a estar
            sujeto a los presentes Términos y Condiciones de Uso. Si no está de
            acuerdo con alguna parte de los términos, debe abstenerse de
            utilizar el Sitio Web.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            2. Propiedad Intelectual
          </h3>
          <p className="text-base">
            Todo el contenido publicado en este Sitio Web, incluyendo textos,
            fotografías, videos, gráficos, diseño y cualquier otro material
            (excepto donde se indique lo contrario), es propiedad exclusiva del
            titular del Sitio Web ("el Autor").
          </p>
          <p className="text-base">
            Queda estrictamente **prohibida la reproducción, distribución,
            comunicación pública y/o transformación**, total o parcial, de los
            contenidos sin la autorización expresa y por escrito del Autor.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            3. Limitación de Responsabilidad
          </h3>
          <p className="text-base">
            El Autor no se hace responsable de los errores u omisiones en el
            contenido del Sitio Web ni de los daños o perjuicios derivados del
            uso de la información aquí contenida. El contenido se proporciona
            únicamente con fines informativos y de entretenimiento personal.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            4. Enlaces a Terceros
          </h3>
          <p className="text-base">
            El Sitio Web puede contener enlaces a sitios web de terceros que no
            son propiedad ni están controlados por el Autor. El Autor no asume
            responsabilidad alguna por el contenido, las políticas de privacidad
            o las prácticas de cualquier sitio web de terceros.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            5. Ley Aplicable y Jurisdicción
          </h3>
          <p className="text-base">
            Estos Términos y Condiciones se rigen por la **legislación
            española**. Para la resolución de cualquier conflicto o
            discrepancia, las partes se someterán a la jurisdicción de los
            Juzgados y Tribunales de Sevilla, salvo que la ley establezca lo
            contrario.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
