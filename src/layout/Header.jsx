import { useState } from "react";

// 2. Importaciones Terceros
import { Link, useLocation } from "react-router-dom";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

// 3. Importaciones Componentes Locales
import MobileMenu from "../components/MobileMenu";

// 4. Importaciones Recursos/Assets
import LogoSm from "../assets/logo/logo-sm.png";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="absolute w-full z-1000">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="logo" src={LogoSm} className="h-8 w-auto dark:hidden" />
            <img
              alt="logo"
              src={LogoSm}
              className="h-8 w-auto not-dark:hidden"
            />
          </Link>
        </div>
        {/* Dropdown Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 bg-white dark:text-gray-400 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <div className="flex gap-3 bg-white p-2 rounded">
            <Link
              to="/"
              className="w-20 text-center text-md text-gray-900 dark:text-white"
            >
              INICIO
            </Link>
            <Link
              to="/dashboard"
              className="w-20 text-center text-md text-gray-900 dark:text-white"
            >
              TABLERO
            </Link>
            <Link
              to="/about"
              className="w-20 text-center text-md text-gray-900 dark:text-white"
            >
              SOBRE MÍ
            </Link>
          </div>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="text-md text-gray-900 bg-white p-2 rounded dark:text-white"
          >
            CONTACTO <span aria-hidden="true">&rarr;</span>
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
