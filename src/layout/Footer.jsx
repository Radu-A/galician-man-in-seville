import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Restored HashLink for your project

// Asset Import (Restored your local import)
import LogoMd from "../assets/logo/logo-light-md.png";

// Configuration for Social Icons (Restored your local paths)
const SOCIAL_LINKS = [
  {
    name: "CV Web",
    href: "https://victor-outeiro.vercel.app/",
    icons: {
      default: "/icons/icon-personal-invert.png",
      hover: "/icons/icon-personal-original.png",
    },
  },
  {
    name: "GitHub",
    href: "https://github.com/Radu-A",
    icons: {
      default: "/icons/icon-github-invert.png",
      hover: "/icons/icon-github-original.png",
    },
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-outeiro/",
    icons: {
      default: "/icons/icon-linkedin-invert.png",
      hover: "/icons/icon-linkedin-original.png",
    },
  },
];

// Navigation Links Configuration
const NAV_LINKS = [
  { name: "INICIO", to: "/#hero", width: "w-12" },
  { name: "TABLERO", to: "/#dashboard", width: "w-16" },
  { name: "SOBRE MÍ", to: "/#about", width: "w-19" },
];

// Helper Component: Handles hover logic for social icons
const SocialIcon = ({ link }) => {
  const [currentIcon, setCurrentIcon] = useState(link.icons.default);

  return (
    <li>
      <a
        href={link.href}
        rel="noreferrer"
        target="_blank"
        className="text-gray-700 transition hover:text-blue-600"
      >
        <span className="sr-only">{link.name}</span>
        <img
          className="size-6" // specific Tailwind class for width/height
          src={currentIcon}
          alt={`${link.name} Icon`}
          onMouseEnter={() => setCurrentIcon(link.icons.hover)}
          onMouseLeave={() => setCurrentIcon(link.icons.default)}
        />
      </a>
    </li>
  );
};

export default function Footer() {
  return (
    <footer className="bg-neutral-700 text-neutral-200">
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div className="flex items-center justify-between gap-8">
          {/* LOGO */}
          <div className="h-8 w-auto cursor-pointer transition duration-150 ease-in-out hover:rotate-180">
            <img
              className="h-full w-full object-contain"
              src={LogoMd}
              alt="logo"
            />
          </div>

          {/* MAIN NAVIGATION */}
          <nav className="hidden gap-6 sm:flex">
            {NAV_LINKS.map((item) => (
              <HashLink
                key={item.name}
                to={item.to}
                className={`group relative h-4.5 overflow-hidden p-2 text-md ${item.width}`}
              >
                {/* Animated text effect */}
                <span className="absolute left-0 top-0 leading-4 duration-300 group-hover:-translate-y-5">
                  {item.name}
                </span>
                <span className="absolute left-0 top-4.5 leading-4 text-neutral-400 duration-300 group-hover:top-0">
                  {item.name}
                </span>
              </HashLink>
            ))}
          </nav>

          {/* SOCIAL ICONS */}
          <ul className="flex justify-end gap-6">
            {SOCIAL_LINKS.map((link) => (
              <SocialIcon key={link.name} link={link} />
            ))}
          </ul>
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div className="mt-3 border-t border-gray-400 pt-3 text-neutral-300">
          <div className="text-sm/4 md:flex md:justify-between">
            <p className="text-center md:text-left">
              &copy; 2025 | Un Gallego por Sevilla | Todos los derechos
              reservados.
            </p>

            <ul className="mt-3 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
              <li>
                <Link to="/terms" className="transition hover:opacity-75">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:opacity-75">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="transition hover:opacity-75">
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
