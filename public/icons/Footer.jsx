import { useState } from "react";
import { Link } from "react-router-dom";

// Importaciones de recursos
import WebIcon from "../assets/icons/icon-personal-invert.png";
import GitHubIcon from "../assets/icons/icon-github-invert.png";
import LinkedInIcon from "../assets/icons/icon-linkedin-invert.png";
import LogoMd from "../assets/logo/logo-light-md.png";

export default function Footer() {
  const [personalIcon, setPersonalIcon] = useState[WebIcon]
  return (
    <footer className="bg-neutral-700 text-white">
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
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

          {/* NAVEGACIÓN PRINCIPAL */}
          <nav className="hidden sm:flex gap-6">
            {/* INICIO */}
            <Link
              to="/"
              className="relative w-12 h-4.5 overflow-hidden text-md p-2 group"
            >
              <span className="absolute top-0 left-0 leading-4 duration-300 group-hover:-translate-y-5">
                INICIO
              </span>
              <span className="absolute top-4.5 left-0 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                INICIO
              </span>
            </Link>

            {/* TABLERO */}
            <Link
              to="/dashboard"
              className="relative w-16 h-4.5 overflow-hidden text-md p-2 group"
            >
              <span className="absolute top-0 left-0 leading-4 duration-300 group-hover:-translate-y-5">
                TABLERO
              </span>
              <span className="absolute top-4.5 left-0 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                TABLERO
              </span>
            </Link>

            {/* SOBRE MÍ */}
            <Link
              to="/about"
              className="relative w-19 h-4.5 overflow-hidden text-md p-2 group"
            >
              <span className="absolute top-0 left-0 leading-4 duration-300 group-hover:-translate-y-5">
                SOBRE MÍ
              </span>
              <span className="absolute top-4.5 left-0 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                SOBRE MÍ
              </span>
            </Link>
          </nav>

          {/* ICONOS DE REDES SOCIALES */}
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
                  className="h-6"
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* COPYRIGHT Y LEGAL */}
        <div className="mt-3 border-t border-gray-400 pt-3">
          <div className="text-sm/4 md:flex md:justify-between">
            <p className="text-gray-500 text-center md:text-left">
              &copy; 2025 | Un Gallego por Sevilla | Todos los derechos
              reservados.
            </p>

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
