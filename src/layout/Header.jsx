import { useState } from "react";

// 2. Importaciones Terceros
import { Link } from "react-router-dom";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

// 3. Importaciones Componentes Locales
import MobileMenu from "../components/MobileMenu";

// 4. Importaciones Recursos/Assets
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
        {/* Dropdown Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2.5 bg-white cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Menu */}
        <PopoverGroup className="hidden md:flex lg:gap-x-12">
          <div className="flex gap-4 bg-white py-3 px-5">
            <Link
              to="/"
              className="text-center text-md relative 
              transition-colors duration-300 
              /* Solo transiciona el color en el padre */
              hover:text-neutral-900 
              /* El subrayado */
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[2px] after:w-full
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
              className="text-center text-md relative 
              transition-colors duration-300 
              /* Solo transiciona el color en el padre */
              hover:text-neutral-900 
              /* El subrayado */
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[2px] after:w-full
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
              className="text-center text-md relative 
              transition-colors duration-300 
              /* Solo transiciona el color en el padre */
              hover:text-neutral-900 
              /* El subrayado */
              after:content-[''] after:absolute after:bottom-0 after:left-0 
              after:h-[2px] after:w-full
              after:bg-neutral-900 
              after:scale-x-0
              after:origin-center
              after:transition-transform after:duration-300 after:ease-out
              hover:after:scale-x-100"
            >
              SOBRE MÍ
            </Link>
          </div>
        </PopoverGroup>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <Link
            to="/contact"
            className="relative w-22 h-4.5 overflow-hidden text-md bg-white p-2 group"
          >
            <span className="absolute top-0 left-0 leading-5  duration-300 group-hover:-translate-y-4.5">
              CONTACTO
            </span>
            <span className="absolute top-3 left-0 leading-5  text-neutral-400 duration-300 group-hover:top-0">
              CONTACTO
            </span>
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
