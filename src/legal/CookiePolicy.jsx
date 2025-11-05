import React from "react";

const CookiePolicy = () => {
  return (
    <div className="mt-16 pt-4 sm:pt-8 min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <h2 className="text-3xl text-pretty sm:text-4xl dark:text-white mb-6">
          Política de Cookies
        </h2>

        <p className="mt-2 text-base text-neutral-500 dark:text-gray-300 mb-4">
          Última actualización: Noviembre 2025
        </p>

        <section className="space-y-4 text-neutral-700 dark:text-gray-400">
          <h3 className="text-xl font-semibold dark:text-white pt-3">
            1. ¿Qué son las Cookies?
          </h3>
          <p className="text-base">
            Una cookie es un pequeño archivo de texto que se almacena en su
            navegador cuando visita casi cualquier página web. Su utilidad es
            que la web sea capaz de recordar su visita cuando vuelva a navegar
            por esa página. Las cookies suelen almacenar información de carácter
            técnico, preferencias personales, personalización de contenidos,
            estadísticas de uso, enlaces a redes sociales, acceso a cuentas de
            usuario, etc.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            2. Cookies Utilizadas en este Sitio Web
          </h3>
          <p className="font-bold dark:text-white text-base">
            Actualmente, el sitio web **"Un Gallego por Sevilla" no utiliza
            cookies de análisis, publicidad o seguimiento** que requieran
            consentimiento previo.
          </p>
          <p className="text-base">
            Podríamos utilizar únicamente las **cookies técnicas o estrictamente
            necesarias** que permiten al usuario la navegación a través de la
            página web y la utilización de las diferentes opciones o servicios
            que en ella existan. Estas cookies son esenciales para el
            funcionamiento básico del sitio y no requieren consentimiento.
          </p>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            3. Posibles Futuras Implementaciones
          </h3>
          <p className="text-base">
            En una fase posterior de desarrollo, podríamos incorporar servicios
            de terceros (como Google Analytics) para medir la audiencia o
            implementar sistemas de autenticación que hagan uso de cookies de
            personalización y/o analíticas. En ese momento:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-base">
            <li>
              Se actualizará esta Política de Cookies para reflejar los cambios.
            </li>
            <li>
              Se implementará un **aviso o banner de cookies** visible para
              solicitar su consentimiento explícito antes de instalar cualquier
              cookie no esencial.
            </li>
          </ul>

          <h3 className="text-xl font-semibold dark:text-white pt-3">
            4. Gestión y Eliminación de Cookies
          </h3>
          <p className="text-base">
            Usted puede permitir, bloquear o eliminar las cookies instaladas en
            su equipo mediante la configuración de las opciones del navegador
            instalado en su ordenador. Para más información, consulte la
            documentación de su navegador:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-base">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Safari
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
