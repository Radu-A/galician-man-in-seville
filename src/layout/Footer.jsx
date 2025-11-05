import { Link } from "react-router-dom";

import WebIcon from "../assets/icons/icon-vo.png"; // <-- Cambiado a ProfileIcon
import GitHubIcon from "../assets/icons/icon-github.png";
import LinkedInIcon from "../assets/icons/icon-linkedin.png"; // <-- Nuevo componente
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
          <div className="hidden sm:flex gap-4 bg-white">
            <Link
              to="/"
              className="col-span-2 sm:col-span-1 text-center text-md dark:text-neutral-200 transition-all duration-300 relative 
             // Efecto hover: color de texto destacado, ligero subrayado animado
             hover:text-neutral-900 dark:hover:text-neutral-200 
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              INICIO
            </Link>
            <Link
              to="/dashboard"
              className="col-span-2 sm:col-span-1 text-center text-md dark:text-neutral-200 transition-all duration-300 relative 
             // Efecto hover: color de texto destacado, ligero subrayado animado
             hover:text-neutral-900 dark:hover:text-neutral-200 
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              TABLERO
            </Link>
            <Link
              to="/about"
              className="col-span-2 sm:col-span-1 text-center text-md dark:text-neutral-200 transition-all duration-300 relative 
             // Efecto hover: color de texto destacado, ligero subrayado animado
             hover:text-neutral-900 dark:hover:text-neutral-200 
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              SOBRE MÍ
            </Link>
          </div>
          {/* ICONOS DE REDES SOCIALES */}
          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-6 lg:justify-end">
            {/* 1. CV / Web Personal (ProfileIcon) */}
            <li>
              <a
                href="https://victor-outeiro.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">CV Web</span>
                <img className="size-6" src={WebIcon} alt="" />
              </a>
            </li>

            {/* 2. GitHub ICON */}
            <li>
              <a
                href="https://github.com/Radu-A" // <-- URL de GitHub
                rel="noreferrer" // <-- Añadido el atributo que faltaba
                target="_blank"
                className="text-gray-700 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">GitHub</span>
                <img className="size-6" src={GitHubIcon} alt="" />
              </a>
            </li>

            {/* 3. LINKEDIN ICON (El que faltaba) */}
            <li>
              <a
                href="https://www.linkedin.com/in/victor-outeiro/" // <-- URL de LinkedIn
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 dark:text-gray-400 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span className="sr-only">LinkedIn</span>
                <img className="size-6" src={LinkedInIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>

        {/* SECCIÓN DE COPYRIGHT Y ENLACES LEGALES */}
        <div className="mt-3 border-t border-gray-100 dark:border-gray-800 pt-3">
          <div className="text-sm/4 md:flex md:justify-between">
            {/* Copyright: Usamos el año actual */}
            <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
              &copy; 2025 | Un Gallego por Sevilla | Todos los derechos
              reservados.
            </p>

            {/* Enlaces Legales */}
            <ul className="mt-3 flex flex-wrap justify-center gap-4 md:mt-0 lg:justify-end">
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
