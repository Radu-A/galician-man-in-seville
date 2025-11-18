import { Fragment } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Dialog, DialogPanel, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import LogoDarkMd from "../assets/logo/logo-dark-md.png";

// Extracted constant: Navigation links data
const NAVIGATION_LINKS = [
  { name: "INICIO", href: "/#hero" },
  { name: "TABLERO", href: "/#dashboard" },
  { name: "SOBRE MÍ", href: "/#about" },
];

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  /**
   * Helper component for the animated menu items (Home, Dashboard, About).
   * Uses standard Link component instead of HashLink to resolve dependency issue.
   */
  const AnimatedMenuItem = ({ to, name }) => (
    <HashLink
      to={to}
      onClick={() => setMobileMenuOpen(false)}
      className="group relative h-[18px] overflow-hidden p-2"
    >
      {/* Upper Span (Default State) */}
      <span className="absolute left-0 top-0 leading-4 duration-300 group-hover:-translate-y-5">
        {name}
      </span>
      {/* Lower Span (Hover State) */}
      <span className="absolute left-0 top-[18px] leading-4 text-neutral-400 duration-300 group-hover:top-0">
        {name}
      </span>
    </HashLink>
  );
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="relative z-[1001] lg:hidden"
    >
      {/* OVERLAY TRANSITION */}
      <TransitionChild
        as={Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* Dark overlay backdrop */}
        <div className="fixed inset-0 bg-gray-900/10" aria-hidden="true" />
      </TransitionChild>
      {/* PANEL TRANSITION */}
      <TransitionChild
        as={Fragment}
        enter="transition ease-in-out duration-500 sm:duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-500 sm:duration-700"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo and Home Link */}
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Un Gallego por Sevilla</span>
              <img
                alt="logo"
                src={LogoDarkMd}
                className="h-11 w-auto transition duration-150 ease-in-out hover:rotate-180"
              />
            </Link>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 cursor-pointer rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Main Navigation Links */}
              <div className="flex flex-col gap-y-9 pt-12 pb-9">
                {NAVIGATION_LINKS.map((item) => (
                  <AnimatedMenuItem
                    key={item.name}
                    to={item.href}
                    name={item.name}
                  />
                ))}
              </div>
              <div className="py-6">
                {/* Contact Link */}
                <HashLink
                  to="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50"
                >
                  <span
                    className="relative transition-all duration-300 hover:text-neutral-900 
                      after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-neutral-900 
                      after:transition-all after:duration-300 hover:after:w-full"
                  >
                    CONTACTO &rarr;
                  </span>
                </HashLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  );
}
