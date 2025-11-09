export default function About() {
  return (
    <section className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-start">
        {/* Columna izquierda: texto */}
        <div>
          <h2 className="text-5xl sm:text-7xl font-light tracking-tighter text-left pb-3 border-b border-neutral-700">
            SOBRE MÍ
          </h2>

          <div className="mt-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-6">
            <div>
              <h3 className="text-2xl/10 tracking-tighter font-light sm:text-4xl/15">
                ¿QUIÉN SOY?
              </h3>
              <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                Me llamo Víctor y soy de A Coruña. Estoy descubriendo el sur de
                España y disfrutando del contraste con el entorno y la cultura
                gallega. Después de varios meses viviendo en Cádiz, me he
                trasladado a Sevilla, tanto para conocer una nueva ciudad como
                para estudiar el Certificado de Profesionalidad en Desarrollo de
                Aplicaciones con Tecnologías Web.
              </p>
            </div>

            <div>
              <h3 className="text-2xl/10 tracking-tighter font-light sm:text-4xl/15">
                ¿POR QUÉ DESARROLLO WEB?
              </h3>
              <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                Como muchos, me acerqué a la programación por la gran oferta
                laboral del sector y la posibilidad de mejorar profesionalmente.
                Pero al adentrarme, descubrí la conexión entre la programación,
                el diseño estético y la experiencia del usuario. Esa mezcla
                tiene un componente casi artístico muy disfrutable.
              </p>
              <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                También me fascina construir pequeños fragmentos de código que
                se comunican entre sí y acaban formando un sistema completo: una
                máquina viva que funciona gracias a cada pieza.
              </p>
            </div>

            <div>
              <h3 className="text-2xl/7 tracking-tighter font-light sm:text-4xl/9">
                ¿QUÉ TIPOS DE PROYECTOS ME INTERESAN?
              </h3>
              <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                Busco proyectos que pongan a prueba mis habilidades y me ayuden
                a mejorar mi sentido estético. Me atrae la idea de crear
                experiencias agradables para el usuario, tanto por su diseño
                como por cómo se sienten al usarlas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl/10 tracking-tighter font-light sm:text-4xl/15">
                ¿QUÉ HAGO CUANDO NO PROGRAMO?
              </h3>
              <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                Soy una persona muy curiosa, siempre en busca de nuevas
                experiencias. Disfruto mucho de viajar, explorar y guardar
                recuerdos de esos lugares, muchas veces en forma de fotografías
                que, con mayor o menor acierto, reflejan mi forma de ver el
                mundo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl/10 tracking-tighter font-light sm:text-4xl/15">
                ¿POR QUÉ ESTE PROYECTO?
              </h3>
              <p className="mt-2 pt-1 text-lg/5.5 tracking-tighter font-light text-neutral-500">
                Este proyecto une mis dos mundos: lo que estudio y lo que vivo.
                No es solo una práctica de desarrollo, sino un espacio donde
                reflejo mi paso por Sevilla y mi proceso de aprendizaje. Es, en
                cierto modo, un diario visual de esta etapa de mi vida.
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="w-full h-full">
          <img
            alt="Foto en el CAAC, Sevilla"
            src="images/about-caac.jpeg"
            className="w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
