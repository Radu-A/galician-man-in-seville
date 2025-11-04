import { useState } from "react";

// 2. Importaciones Terceros
import { Link } from "react-router-dom";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

// 3. Importaciones Componentes Locales
import MobileMenu from "../components/MobileMenu";

// 4. Importaciones Recursos/Assets
import LogoMd from "../assets/logo/logo-dark-md.png";
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
            <span className="sr-only">Your Company</span>
            <img alt="logo" src={LogoMd} className="h-11 w-auto dark:hidden" />
            <img
              alt="logo"
              src={LogoMd}
              className="h-8 w-auto not-dark:hidden"
            />
          </Link>
        </div>
        {/* Dropdown Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2.5 bg-white dark:text-gray-400 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Menu */}
        <PopoverGroup className="hidden md:flex lg:gap-x-12">
          <div className="flex gap-4 bg-white p-3">
            <Link
              to="/"
              className="text-center text-md dark:text-neutral-200 transition-all duration-300 relative 
             // Efecto hover: color de texto destacado, ligero subrayado animado
             hover:text-neutral-900 dark:hover:text-neutral-200 
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              INICIO
            </Link>
            <Link
              to="/dashboard"
              className="text-center text-md dark:text-neutral-200 transition-all duration-300 relative 
             // Efecto hover: color de texto destacado, ligero subrayado animado
             hover:text-neutral-900 dark:hover:text-neutral-200 
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              TABLERO
            </Link>
            <Link
              to="/about"
              className="text-center text-md dark:text-neutral-200 transition-all duration-300 relative 
             // Efecto hover: color de texto destacado, ligero subrayado animado
             hover:text-neutral-900 dark:hover:text-neutral-200 
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300
             hover:after:w-full"
            >
              SOBRE MÍ
            </Link>
          </div>
        </PopoverGroup>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link to="/contact" className="text-md bg-white p-2 dark:text-white">
            <span>CONTACTO &rarr;</span>
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
