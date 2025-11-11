import { useState } from "react";
import { Link } from "react-router-dom";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import MobileMenu from "../components/MobileMenu";
import LogoDarkMd from "../assets/logo/logo-dark-md.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute w-full z-1000">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
      >
        {/* Logo */}
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Un Gallego por Sevilla</span>
            <img alt="logo" src={LogoDarkMd} className="h-11 w-auto" />
          </Link>
        </div>

        {/* Botón menú móvil */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2.5 bg-white cursor-pointer"
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Menú principal */}
        <PopoverGroup className="hidden md:flex lg:gap-x-12">
          <div className="flex gap-7 bg-white py-3 px-5">
            {/* INICIO */}
            <Link
              to="/"
              className="relative w-12 h-5 overflow-hidden text-md bg-white p-2 group"
            >
              <span className="absolute top-0 left-0 leading-5 duration-300 group-hover:-translate-y-5">
                INICIO
              </span>
              <span className="absolute top-3.5 left-0 leading-5 text-neutral-400 duration-300 group-hover:top-0">
                INICIO
              </span>
            </Link>

            {/* TABLERO */}
            <Link
              to="/dashboard"
              className="relative w-16 h-5 overflow-hidden text-md bg-white p-2 group"
            >
              <span className="absolute top-0 left-0 leading-5 duration-300 group-hover:-translate-y-5">
                TABLERO
              </span>
              <span className="absolute top-3.5 left-0 leading-5 text-neutral-400 duration-300 group-hover:top-0">
                TABLERO
              </span>
            </Link>

            {/* SOBRE MÍ */}
            <Link
              to="/about"
              className="relative w-19 h-5 overflow-hidden text-md bg-white p-2 group"
            >
              <span className="absolute top-0 left-0 leading-5 duration-300 group-hover:-translate-y-5">
                SOBRE MÍ
              </span>
              <span className="absolute top-3.5 left-0 leading-5 text-neutral-400 duration-300 group-hover:top-0">
                SOBRE MÍ
              </span>
            </Link>
          </div>
        </PopoverGroup>

        {/* Enlace de contacto con subrayado */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link
            to="/contact"
            className="text-center text-md relative hover:text-neutral-900 
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:h-[1px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
              hover:after:w-full"
          >
            CONTACTO &rarr;
          </Link>
        </div>
      </nav>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
