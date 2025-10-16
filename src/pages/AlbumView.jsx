import { placesArray } from "../utils/data";
import Board from "../components/Board";

export default function AlbumView() {
  return (
    <section className="bg-white pt-6 sm:pt-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Mis hallazgos por Sevilla
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            Una recopilación visual de lugares, detalles y momentos que me
            inspiran a seguir creando. Cada álbum es una parte del camino.
          </p>
        </div>
        <Board posts={placesArray}></Board>
      </div>
    </section>
  );
}
