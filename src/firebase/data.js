// posts.js

// Usamos un objeto Date de JavaScript, que Firestore convierte a Timestamp nativo.
const INVENTED_DATE_1 = new Date("2025-10-28T10:00:00Z");
const INVENTED_DATE_2 = new Date("2025-11-01T10:00:00Z");
const INVENTED_DATE_3 = new Date("2025-11-03T10:00:00Z");
const INVENTED_DATE_4 = new Date("2025-11-04T10:00:00Z");
const INVENTED_DATE_5 = new Date("2025-11-09T10:00:00Z");

const albums = [
  {
    datetime: INVENTED_DATE_1,
    title: "Paseo por el río",
    description:
      "Largo paseo por el margen del río. Pescadores, graffitis y reflejos sobre el agua.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083573.jpg",
    category: "Parque",
  },
  {
    datetime: INVENTED_DATE_2,
    title: "Galería Taberna Ánima",
    description:
      "Taberna clásica andaluza, deconstruida y transformada en bar cultural.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819472.jpg",
    category: "Local",
  },
  {
    datetime: INVENTED_DATE_3,
    title: "Judería",
    description:
      "El corazón de Sevilla. Los rincones más especiales y con más historia de la ciudad.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250204_111435.jpg",
    category: "Lugar",
  },
  {
    datetime: INVENTED_DATE_4,
    title: "Centro Andaluz De Arte Contemporáneo",
    description:
      "Museo situado construido en una antigua fábrica de cerámica, rodeado de naturaleza y espacios a escala humana.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251012_124655.jpg",
    category: "Museo",
  },
  {
    datetime: INVENTED_DATE_5,
    title: "Mercado de Abastos de la Calle Feria",
    description:
      "Mercado del siglo XVIII, rehabilitado para albergar establecimientos modernos, como cervecerías o espacios gourmet.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_151827.jpg",
    category: "Museo",
  },
];

// Insertmany en album where title == "Paseo por el río."
const photos0 = [
  {
    datetime: INVENTED_DATE_1,
    comment: "Monumento a la tolerancia.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083559.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083559.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de Isabel II (Puente de Triana).",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083566.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083566.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Jardines de Chapina. Río.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083573.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083573.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Jardines de Chapina. Panorámica.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083573.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083580.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Vista general del paseo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083628.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083602.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Vista de la Torre Sevilla desde Torneo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083609.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083609.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Graffiti con luces y sombras.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083634.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083634.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de la Barqueta - Luz.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083654.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083654.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de la Barqueta - Sombra.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083665.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083665.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Pared con graffitis.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083712.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083674.jpg",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Escalinata con graffitis.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-original/1761163083712.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-paseo-thumbnail/1761163083712.jpg",
  },
];

const photos1 = [
  {
    datetime: INVENTED_DATE_2,
    comment: "Vista del público desde el patio.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819433.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819433.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Detalle de la banda en directo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819446.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819446.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Detalle de la banda en directo, contraplano.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819460.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819460.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Momentos previos al concierto.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819472.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819472.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Puerta y pósters.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819485.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819485.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Adentrándose en la taberna.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819506.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819506.jpg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Puerta de entrada a Galería Taberna Ánima.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819515.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-galeria-thumbnail/1761280819515.jpg",
  },
];

const photos2 = [
  {
    datetime: INVENTED_DATE_3,
    comment: "Muro de pintura desconchada.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130243.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_130243.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Fuente esondida.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130342.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_130342.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Puerta antigua de madera y metal.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_130653.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_130653.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Patio de naranjos.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_133529.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_133529.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Rincón con puerta de metal y bicicleta.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_134939.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_134939.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Ventana sobre pared de estilo regionalista.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_135438.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_135438.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Bombardeo de pegatinas sobre placa.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250203_140500.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250203_140500.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Juego de pintura sobre pibote.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_104215.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250204_104215.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "El rincón del beso.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_111435.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250204_111435.jpg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Ya tu sabes.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20250204_111435.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-juderia-thumbnail/IMG_20250204_114641.jpg",
  },
];

const photos3 = [
  {
    datetime: INVENTED_DATE_4,
    comment: "Instalación color bronce en una ala de la capilla.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_124655.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251012_124655.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Instalación azul en la nave central de la capilla.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_125010.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251012_125010.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Patio escondido con enredaderas.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251012_135701.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251012_135701.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Antiguo horno de cerámica.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_144920.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251104_144920.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Estanque de piedra en el jardín.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_151344.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251104_151344.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Calles de arbustos en el jardín.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_151421.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251104_151421.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Reproductor analógico caminando.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_151735.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251104_151735.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Puerta sobre muro de azulejos de estilo árabe.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251104_153111.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photo-caac-thumbnail/IMG_20251104_153111.jpg",
  },
];

const photos4 = [
  {
    datetime: INVENTED_DATE_4,
    comment: "Puestos separados por una valla.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_151249-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_151249.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Pasillo con acceso a puestos.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_151523-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_151523.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Ventana a tienda de artesanía.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_151827.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_151827.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "No fumar.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_152236 (1).jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_152236.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Plano general de la entrada al mercado.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_152605-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_152605.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Utensilios de limpieza.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_152639-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_152639.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Carteles sobre la puerta de entrada.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_153943-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_153943.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Hasta la cocina del Bar Condendê.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_155612-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_155612.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Para sentarse un ratito.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_161101.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_161101.jpg",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Parte trasera.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/IMG_20251109_162440-EDIT.jpg",
    thumbnail:
      "gs://galician-man-in-seville.firebasestorage.app/photos-mercado-thumbnail/IMG_20251109_162440.jpg",
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
    // Cuarto álbum
    album: albums[3],
    photos: photos3, // La lista de fotos para "Galería Taberna Ánima"
  },
  {
    // Quinto álbum
    album: albums[4],
    photos: photos4, // La lista de fotos para "Galería Taberna Ánima"
  },
];

export { albumData, albums, photos0, photos1, photos3 };
