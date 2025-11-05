import { Link } from "react-router-dom";

// 1. Importaciones de recursos de iconos/logo
import WebIcon from "../assets/icons/icon-vo.png";
import GitHubIcon from "../assets/icons/icon-github.png";
import LinkedInIcon from "../assets/icons/icon-linkedin.png";
import LogoMd from "../assets/logo/logo-dark-md.png";

export default function Footer() {
  return (
    <footer className="border-t-1 bg-white">
      <div className="mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8">
        {/* Contenedor Principal: Logo, Navegación y Iconos */}
        <div className="flex items-center justify-between gap-8">
          {/* LOGO */}
          <div className="h-8 w-auto">
            <img
              className="w-full h-full object-contain"
              src={LogoMd}
              alt="logo"
            />
          </div>

          {/* NAVEGACIÓN PRINCIPAL (Simplificado: ¡Menos divs!) */}
          {/* Se elimina el <div> que envolvía los <Link>s */}
          <nav className="hidden sm:flex gap-6">
            <Link
              to="/"
              // Se eliminan clases innecesarias como col-span-2 y sm:col-span-1
              className="text-center text-md transition-all duration-300 relative 
              /* Solo transiciona el color en el padre */
              hover:text-neutral-900 
              /* El subrayado */
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[1px] after:w-full
              after:bg-neutral-900 
              after:scale-x-0
              after:origin-center
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100"
            >
              INICIO
            </Link>
            <Link
              to="/dashboard"
              className="text-center text-md transition-all duration-300 relative 
              /* Solo transiciona el color en el padre */
              hover:text-neutral-900 
              /* El subrayado */
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[1px] after:w-full
              after:bg-neutral-900 
              after:scale-x-0
              after:origin-center
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100"
            >
              TABLERO
            </Link>
            <Link
              to="/about"
              className="text-center text-md transition-all duration-300 relative 
              /* Solo transiciona el color en el padre */
              hover:text-neutral-900 
              /* El subrayado */
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[1px] after:w-full
              after:bg-neutral-900 
              after:scale-x-0
              after:origin-center
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100"
            >
              SOBRE MÍ
            </Link>
          </nav>

          {/* ICONOS DE REDES SOCIALES (El contenedor <ul> ya es suficiente) */}
          {/* Se eliminan las clases col-span-2 y lg:col-span-6 que no tienen efecto aquí */}
          <ul className="flex justify-end gap-6">
            <li>
              <a
                href="https://victor-outeiro.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-blue-600"
              >
                <span className="sr-only">CV Web</span>
                <img className="size-6" src={WebIcon} alt="CV Web Icon" />
              </a>
            </li>
            {/* ... (Otros iconos de GitHub y LinkedIn) ... */}
            <li>
              <a
                href="https://github.com/Radu-A"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-blue-600"
              >
                <span className="sr-only">GitHub</span>
                <img className="size-6" src={GitHubIcon} alt="GitHub Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victor-outeiro/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-blue-600"
              >
                <span className="sr-only">LinkedIn</span>
                <img
                  className="size-6"
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* SECCIÓN DE COPYRIGHT Y LEGAL */}
        <div className="mt-3 border-t border-gray-100 pt-3">
          <div className="text-sm/4 md:flex md:justify-between">
            {/* Copyright */}
            <p className="text-gray-500 text-center md:text-left">
              &copy; 2025 | Un Gallego por Sevilla | Todos los derechos
              reservados.
            </p>

            {/* Enlaces Legales */}
            {/* Se elimina la clase lg:justify-end ya que justify-end en md es suficiente */}
            <ul className="mt-3 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
              <li>
                <a
                  href="/terms"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-gray-500 transition hover:opacity-75"
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
