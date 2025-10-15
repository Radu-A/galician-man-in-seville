import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="flex-1 relative isolate px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              No dudes en visitar mi currículum web.{" "}
              <a
                href="https://victor-outeiro.vercel.app/"
                className="font-semibold text-indigo-600 dark:text-indigo-400"
                target="_blank"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Leer más<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
              Un gallego por Sevilla
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              Encontrándome gente, cosas que hacer y lugares interesantes,
              mientras escapo del aburrimiento y practico desarrollo para ser
              programador.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/about"
                className="rounded-md bg-[#38b6ff] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#00bf63] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38b6ff] dark:bg-[#38b6ff] dark:hover:bg-[#00bf63] dark:focus-visible:outline-[#38b6ff]"
              >
                Sobre Mí
              </Link>
              <Link
                to="/contact"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Contacto <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
