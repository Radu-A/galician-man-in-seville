import { Link } from "react-router-dom"; // Enrutamiento
import { Fragment } from "react"; // Hook para TransitionChild
import {
  Dialog,
  DialogPanel,
  Disclosure,
  TransitionChild,
} from "@headlessui/react"; // Componentes Headless UI
import { XMarkIcon } from "@heroicons/react/24/outline"; // Icono de cerrar

import LogoMd from "../assets/logo/logo-dark-md.png"; // Recurso Local

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden relative z-[1001]"
    >
      {/*
          TRANSICIÓN PARA EL FONDO OSCURO (Overlay/Backdrop)
          Se utiliza un TransitionChild para el fondo.
        */}
      <TransitionChild
        as={Fragment}
        enter="ease-in-out duration-500" // Al entrar: transición de 500ms
        enterFrom="opacity-0" // Estado inicial al entrar: opaco 0%
        enterTo="opacity-100" // Estado final al entrar: opaco 100%
        leave="ease-in-out duration-500" // Al salir: transición de 500ms
        leaveFrom="opacity-100" // Estado inicial al salir: opaco 100%
        leaveTo="opacity-0" // Estado final al salir: opaco 0%
      >
        {/* El div que actúa como fondo oscuro (overlay) */}
        <div className="fixed inset-0 bg-gray-900/10" aria-hidden="true" />
      </TransitionChild>
      {/*
          TRANSICIÓN PARA EL PANEL LATERAL DEL MENÚ (DialogPanel)
          Se envuelve el DialogPanel en otro TransitionChild.
        */}
      <TransitionChild
        as={Fragment}
        enter="transition ease-in-out duration-500 sm:duration-700" // Al entrar: 500ms-700ms
        enterFrom="translate-x-full" // Entra desde la derecha (fuera de la vista)
        enterTo="translate-x-0" // Termina en su posición normal (x=0)
        leave="transition ease-in-out duration-500 sm:duration-700" // Al salir: 500ms-700ms
        leaveFrom="translate-x-0" // Sale desde la posición normal (x=0)
        leaveTo="translate-x-full" // Termina moviéndose hacia la derecha (fuera de la vista)
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            {/* Logo, también le agregamos la función para cerrar */}
            <Link
              to="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Your Company</span>
              <img alt="logo" src={LogoMd} className="h-8 w-auto dark:hidden" />
              <img
                alt="logo"
                src={LogoMd}
                className="h-8 w-auto not-dark:hidden"
              />
            </Link>
            {/* Botón de cerrar */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400 cursor-pointer"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3"></Disclosure>

                {/* ENLACE MODIFICADO: Inicio */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)} // ⬅️ AÑADIDO: Cierra el modal
                  className="-mx-3 block px-3 py-2 text-base/7 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span
                    className="relative // Efecto hover: color de texto destacado, ligero subrayado animado
                    hover:text-neutral-900 dark:hover:text-neutral-200 
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                    after:bg-neutral-900 after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    INICIO &rarr;
                  </span>
                </Link>

                {/* ENLACE MODIFICADO: Tablero */}
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)} // ⬅️ AÑADIDO: Cierra el modal
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span
                    className="relative // Efecto hover: color de texto destacado, ligero subrayado animado
                    hover:text-neutral-900 dark:hover:text-neutral-200 
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                    after:bg-neutral-900 after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    TABLERO &rarr;
                  </span>
                </Link>

                {/* ENLACE MODIFICADO: Sobre Mí */}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)} // ⬅️ AÑADIDO: Cierra el modal
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span
                    className="relative // Efecto hover: color de texto destacado, ligero subrayado animado
                    hover:text-neutral-900 dark:hover:text-neutral-200 
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                    after:bg-neutral-900 after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    SOBRE MÍ &rarr;
                  </span>
                </Link>
              </div>
              <div className="py-6">
                {/* ENLACE MODIFICADO: Contacto */}
                <Link
                  to="/Contact"
                  onClick={() => setMobileMenuOpen(false)} // ⬅️ AÑADIDO: Cierra el modal
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  <span
                    className="relative // Efecto hover: color de texto destacado, ligero subrayado animado
                    hover:text-neutral-900 dark:hover:text-neutral-200 
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                    after:bg-neutral-900 after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    CONTACTO &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  );
}
