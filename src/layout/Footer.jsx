import ProfileIcon from "../icons/ProfileIcon"; // <-- Cambiado a ProfileIcon
import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon"; // <-- Nuevo componente
import LogoMd from "../assets/logo/logo-dark-md.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          <div className="h-8 w-auto">
            <img
              className="w-full h-full object-contain"
              src={LogoMd}
              alt="logo"
            />
          </div>

          <div className="hidden lg:grid lg:mt-0 lg:grid-cols-5">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Services</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Company</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Helpful Links</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Legal</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900">Downloads</p>
            </div>
          </div>
          {/* ICONOS DE REDES SOCIALES */}
          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-6 lg:justify-end">
            {/* 1. CV / Web Personal (ProfileIcon) */}
            <li>
              <a
                href="[TU_URL_DEL_CV_WEB]"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">CV Web</span>
                <ProfileIcon className="size-6" />
              </a>
            </li>

            {/* 2. GitHub ICON */}
            <li>
              <a
                href="[TU_URL_DE_GITHUB]" // <-- URL de GitHub
                rel="noreferrer" // <-- Añadido el atributo que faltaba
                target="_blank"
                className="text-gray-700 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">GitHub</span>
                <GitHubIcon className="size-6" /> {/* <-- Asegurar el tamaño */}
              </a>
            </li>

            {/* 3. LINKEDIN ICON (El que faltaba) */}
            <li>
              <a
                href="[TU_URL_DE_LINKEDIN]" // <-- URL de LinkedIn
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="size-6" /> {/* <-- Componente usado */}
              </a>
            </li>
          </ul>
        </div>

        {/* SECCIÓN DE COPYRIGHT Y ENLACES LEGALES */}
        <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-6">
          <div className="text-sm/4 sm:flex sm:justify-between">
            {/* Copyright: Usamos el año actual */}
            <p className="text-gray-500 dark:text-gray-400 text-center sm:text-left">
              &copy; 2025. Un Gallego por Sevilla. Todos los derechos
              reservados.
            </p>

            {/* Enlaces Legales */}
            <ul className="mt-3 flex flex-wrap justify-center gap-4 sm:mt-0 lg:justify-end">
              {/* Mantener enlaces legales */}
              <li>
                <a
                  href="/terms" // Cambia a tu ruta real
                  className="text-gray-500 dark:text-gray-400 transition hover:opacity-75"
                >
                  Términos y Condiciones
                </a>
              </li>

              {/* Enlace a la Política de Privacidad (Mantenido) */}
              <li>
                <a
                  href="/privacy" // Cambia a tu ruta real
                  className="text-gray-500 dark:text-gray-400 transition hover:opacity-75"
                >
                  Política de Privacidad
                </a>
              </li>

              {/* Puedes dejar o quitar Cookies si no es relevante */}
              <li>
                <a
                  href="/cookies" // Cambia a tu ruta real
                  className="text-gray-500 dark:text-gray-400 transition hover:opacity-75"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
