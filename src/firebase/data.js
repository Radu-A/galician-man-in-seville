// posts.js

// Usamos un objeto Date de JavaScript, que Firestore convierte a Timestamp nativo.
const INVENTED_DATE_1 = new Date("2025-10-28T10:00:00Z");
const INVENTED_DATE_2 = new Date("2025-11-01T10:00:00Z");
const INVENTED_DATE_3 = new Date("2025-11-03T10:00:00Z");
const INVENTED_DATE_4 = new Date("2025-11-04T10:00:00Z");

const albums = [
  {
    datetime: INVENTED_DATE_1,
    title: "Paseo por el río",
    description:
      "Largo paseo por el margen del río. Pescadores, graffitis y reflejos sobre el agua.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083573.jpg",
    category: "Parque",
  },
  {
    datetime: INVENTED_DATE_2,
    title: "Galería Taberna Ánima",
    description:
      "Taberna clásica andaluza, deconstruida y transformada en bar cultural.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819472.jpg",
    category: "Parque",
  },
  {
    datetime: INVENTED_DATE_3,
    title: "Judería",
    description:
      "El corazón de Sevilla. Los rincones más especiales y con más historia de la ciudad.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_111435.jpg",
    category: "Parque",
  },
  {
    datetime: INVENTED_DATE_4,
    title: "Centro Andaluz De Arte Contemporáneo.",
    description:
      "Museo situado construido en una antigua fábrica de cerámica, rodeado de naturaleza y espacios a escala humana.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_124655.jpg",
    category: "Parque",
  },
];

// Insertmany en album where title == "Paseo por el río."
const photos0 = [
  {
    datetime: INVENTED_DATE_1,
    comment: "Monumento a la tolerancia.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083559.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de Isabel II (Puente de Triana).",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083566.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Jardines de Chapina.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083573.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Vista de la Torre Sevilla desde Torneo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083609.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Vista general del paseo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083628.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Graffiti con luces y sombras.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083634.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de la Barqueta - Luz.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083654.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de la Barqueta - Sombra.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083665.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Escalinata con graffitis.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083712.jpg",
  },
];

const photos1 = [
  {
    datetime: INVENTED_DATE_2,
    comment: "Vista del público desde el patio.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819433.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Detalle de la banda en directo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819446.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Detalle de la banda en directo, contraplano.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819460.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Momentos previos al concierto.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819472.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Puerta y pósters.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819485.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Adentrándose en la taberna.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819506.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Puerta de entrada a Galería Taberna Ánima.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819515.jpg",
  },
];

const photos2 = [
  {
    datetime: INVENTED_DATE_3,
    comment: "Muro de pintora desconchada.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130243.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Fuente esondida.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130342.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Puerta antigua de madera y metal.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130653.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Patio de naranjos.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_133529.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Rincón con puerta de metal y bicicleta.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_134939.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Ventana sobre pared de estilo regionalista.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_135438.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Bombardeo de pegatinas sobre placa.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_140500.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Juego de pintura sobre pibote.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_104215.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Naranjo solitario en la esquina de una plaza.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_110928.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "El rincón del beso.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_111435.jpg",
  },
];


const photos3 = [
  {
    datetime: INVENTED_DATE_4,
    comment: "Instalación color bronce en una ala de la capilla.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_124655.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Instalación azul en la nave central de la capilla.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_125010.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Patio escondido con enredaderas.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_135701.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Antiguo horno de cerámica.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_144920.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Estanque de piedra en el jardín.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_151344.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Calles de arbustos en el jardín.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_151421.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Reproductor analógico caminando.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_151735.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Puerta sobre muro de azulejos de estilo árabe.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130243.jpg",
  },
];

// **NUEVO ARRAY que combina álbumes y sus fotos**
const albumData = [
  {
    // Primer álbum
    album: albums[0],
    photos: photos0, // La lista de fotos para "Paseo por el río"
  },
  {
    // Segundo álbum
    album: albums[1],
    photos: photos1, // La lista de fotos para "Galería Taberna Ánima"
  },
  {
    // Tercer álbum
    album: albums[2],
    photos: photos2, // La lista de fotos para "Galería Taberna Ánima"
  },
  {
    // Tercer álbum
    album: albums[3],
    photos: photos3, // La lista de fotos para "Galería Taberna Ánima"
  },
  // Puedes añadir más objetos { album: ..., photos: ... } aquí
];


export { albumData, albums, photos0, photos1, photos3 };
