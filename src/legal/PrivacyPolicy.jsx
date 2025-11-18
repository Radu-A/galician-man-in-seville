import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <h2 className="text-3xl text-pretty sm:text-4xl dark:text-white mb-6">
          Política de Privacidad
        </h2>

        <p className="mt-2 text-base text-neutral-500 dark:text-gray-300 mb-4">
          Última actualización: Noviembre 2025
        </p>

        <section className="space-y-4 text-neutral-700 dark:text-gray-400">
          <h3 className="text-xl font-semibold dark:text-white pt-3">
            1. Responsable del Tratamiento
          </h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-base">
            <li>**Identidad:** [Tu Nombre o Nickname] (El Autor)</li>
            <li>**Correo electrónico de contacto:** [Tu Correo Electrónico]</li>
            <li>**Sitio Web:** ungallegoporsevilla.com</li>
          </ul>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            2. Recogida de Datos Personales
          </h3>
          <p className="text-base">
            El Autor del Sitio Web únicamente recaba datos personales de los
            usuarios a través del **formulario de contacto**. Los datos que se
            solicitan son el nombre y la dirección de correo electrónico,
            necesarios para poder responder a su consulta.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            3. Finalidad del Tratamiento
          </h3>
          <p className="text-base">
            La única finalidad del tratamiento de sus datos es **gestionar la
            solicitud o consulta realizada a través del formulario de contacto**
            y poder mantener una comunicación con usted.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            4. Base Legal para el Tratamiento
          </h3>
          <p className="text-base">
            La base legal para el tratamiento de sus datos es el
            **consentimiento** que usted otorga al enviar el formulario de
            contacto.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            5. Conservación de los Datos
          </h3>
          <p className="text-base">
            Los datos proporcionados serán conservados en la bandeja de entrada
            del correo electrónico del Autor durante el tiempo necesario para
            responder a su consulta y hacer un seguimiento posterior. Serán
            eliminados una vez que la conversación haya finalizado y no sean
            necesarios para ninguna otra finalidad legítima.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            6. Derechos del Usuario (Derechos ARSOPL)
          </h3>
          <p className="text-base">Usted tiene derecho a:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-base">
            <li>**Acceso:** Conocer qué datos suyos se están tratando.</li>
            <li>**Rectificación:** Modificar los datos inexactos.</li>
            <li>
              **Supresión (Olvido):** Solicitar la eliminación de sus datos.
            </li>
            <li>**Oposición:** Oponerse al tratamiento.</li>
            <li>
              **Portabilidad:** Recibir sus datos en un formato estructurado y
              de uso común.
            </li>
            <li>**Limitación:** Solicitar la limitación del tratamiento.</li>
          </ul>
          <p className="text-base">
            Podrá ejercer estos derechos enviando un correo electrónico a la
            dirección de contacto ([Tu Correo Electrónico]). También tiene
            derecho a presentar una reclamación ante la Agencia Española de
            Protección de Datos (AEPD).
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            7. Destinatarios de los Datos
          </h3>
          <p className="text-base">
            Sus datos **no serán cedidos a terceros**, a menos que exista una
            obligación legal.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
