import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { PopoverGroup } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import MobileMenu from "../components/MobileMenu";
import LogoDarkMd from "../assets/logo/logo-dark-md.png";

// Extracted configuration for navigation links
const NAV_ITEMS = [
  { name: "INICIO", to: "/#hero", width: "w-12" },
  { name: "TABLERO", to: "/#dashboard", width: "w-16" },
  { name: "SOBRE MÍ", to: "/#about", width: "w-19" },
];

// Helper component for the animated navigation links to reduce JSX repetition
const AnimatedLink = ({ to, name, width }) => (
  <HashLink
    to={to}
    className={`group relative h-4.5 bg-white p-2 text-md overflow-hidden ${width}`}
  >
    <span className="absolute left-0 top-0 leading-4 duration-300 group-hover:-translate-y-5">
      {name}
    </span>
    <span className="absolute left-0 top-4.5 leading-4 text-neutral-400 duration-300 group-hover:top-0">
      {name}
    </span>
  </HashLink>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-[1000] w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-6"
      >
        {/* Logo Section */}
        <div className="flex md:flex-1">
          <HashLink smooth to="/#hero" className="-m-1.5 p-1.5">
            <span className="sr-only">Un Gallego por Sevilla</span>
            <img
              alt="logo"
              src={LogoDarkMd}
              className="h-11 w-auto transition duration-150 ease-in-out hover:rotate-180"
            />
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex cursor-pointer items-center justify-center bg-white p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Navigation Group */}
        <PopoverGroup className="hidden md:flex lg:gap-x-12">
          <div className="flex gap-7 bg-white px-5 py-3">
            {NAV_ITEMS.map((item) => (
              <AnimatedLink
                key={item.name}
                to={item.to}
                name={item.name}
                width={item.width}
              />
            ))}
          </div>
        </PopoverGroup>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <div className="bg-white px-4 py-2">
            <HashLink
              to="/#contact"
              className="relative text-center text-md hover:text-black 
                after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-black 
                after:transition-all after:duration-300 hover:after:w-full"
            >
              CONTACTO &rarr;
            </HashLink>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
