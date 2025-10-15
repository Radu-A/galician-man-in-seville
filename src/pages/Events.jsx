import { eventsArray } from "../utils/data";

import Board from "../components/board";

export default function Events() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            Eventos
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            Os hablo un poquito de los eventos a los que he acudido. Mis
            impresiones, lo más llamativo, lo más mierder...
          </p>
        </div>
        <Board posts={eventsArray}></Board>
      </div>
    </div>
  );
}
