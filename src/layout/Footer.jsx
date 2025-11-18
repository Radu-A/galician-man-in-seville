import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Importaciones de recursos
import LogoMd from "../assets/logo/logo-light-md.png";

export default function Footer() {
  const [personalIcon, setPersonalIcon] = useState(
    "/icons/icon-personal-invert.png"
  );
  const [githubIcon, setGithubIcon] = useState("/icons/icon-github-invert.png");
  const [linkedinlIcon, setLinkedinIcon] = useState(
    "/icons/icon-linkedin-invert.png"
  );

  const enterPersonalIcon = () => {
    setPersonalIcon("/icons/icon-personal-original.png");
  };
  const leavePersonalIcon = () => {
    setPersonalIcon("/icons/icon-personal-invert.png");
  };
  const enterGithubIcon = () => {
    setGithubIcon("/icons/icon-github-original.png");
  };
  const leaveGithubIcon = () => {
    setGithubIcon("/icons/icon-github-invert.png");
  };
  const enterLinkedinIcon = () => {
    setLinkedinIcon("/icons/icon-linkedin-original.png");
  };
  const leaveLinkedinIcon = () => {
    setLinkedinIcon("/icons/icon-linkedin-invert.png");
  };

  return (
    <footer className="bg-neutral-700 text-neutral-200">
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
        {/* Contenedor Principal: Logo, Navegación y Iconos */}
        <div className="flex items-center justify-between gap-8">
          {/* LOGO */}
          <div className="h-8 w-auto cursor-pointer hover:rotate-180 transition duration-150 ease-in-out">
            <img
              className="w-full h-full object-contain"
              src={LogoMd}
              alt="logo"
            />
          </div>

          {/* NAVEGACIÓN PRINCIPAL */}
          <nav className="hidden sm:flex gap-6">
            {/* INICIO */}
            <HashLink
              to="/#hero"
              className="relative w-12 h-4.5 overflow-hidden text-md p-2 group"
            >
              <span className="absolute top-0 left-0 leading-4 duration-300 group-hover:-translate-y-5">
                INICIO
              </span>
              <span className="absolute top-4.5 left-0 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                INICIO
              </span>
            </HashLink>

            {/* TABLERO */}
            <HashLink
              to="/#dashboard"
              className="relative w-16 h-4.5 overflow-hidden text-md p-2 group"
            >
              <span className="absolute top-0 left-0 leading-4 duration-300 group-hover:-translate-y-5">
                TABLERO
              </span>
              <span className="absolute top-4.5 left-0 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                TABLERO
              </span>
            </HashLink>

            {/* SOBRE MÍ */}
            <HashLink
              to="/#about"
              className="relative w-19 h-4.5 overflow-hidden text-md p-2 group"
            >
              <span className="absolute top-0 left-0 leading-4 duration-300 group-hover:-translate-y-5">
                SOBRE MÍ
              </span>
              <span className="absolute top-4.5 left-0 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                SOBRE MÍ
              </span>
            </HashLink>
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
                <img
                  className="size-6"
                  src={personalIcon}
                  alt="CV Web Icon"
                  onMouseEnter={enterPersonalIcon}
                  onMouseLeave={leavePersonalIcon}
                />
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
                <img
                  className="size-6"
                  src={githubIcon}
                  alt="GitHub Icon"
                  onMouseEnter={enterGithubIcon}
                  onMouseLeave={leaveGithubIcon}
                />
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
                  src={linkedinlIcon}
                  alt="LinkedIn Icon"
                  onMouseEnter={enterLinkedinIcon}
                  onMouseLeave={leaveLinkedinIcon}
                />
              </a>
            </li>
          </ul>
        </div>

        {/* COPYRIGHT Y LEGAL */}
        <div className="mt-3 border-t border-gray-400 pt-3 text-neutral-300">
          <div className="text-sm/4 md:flex md:justify-between">
            <p className=" text-center md:text-left">
              &copy; 2025 | Un Gallego por Sevilla | Todos los derechos
              reservados.
            </p>

            <ul className="mt-3 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
              <li>
                <Link to="/terms" className=" transition hover:opacity-75">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className=" transition hover:opacity-75">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className=" transition hover:opacity-75">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
