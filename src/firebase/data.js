// posts.js

// Usamos un objeto Date de JavaScript, que Firestore convierte a Timestamp nativo.
const INVENTED_DATE_1 = new Date("2025-10-28T10:00:00Z");
const INVENTED_DATE_2 = new Date("2025-11-01T10:00:00Z");
const INVENTED_DATE_3 = new Date("2025-11-03T10:00:00Z");
const INVENTED_DATE_4 = new Date("2025-11-04T10:00:00Z");
const INVENTED_DATE_5 = new Date("2025-11-09T10:00:00Z");
const INVENTED_DATE_6 = new Date("2025-11-25T10:00:00Z");

const albums = [
  {
    datetime: INVENTED_DATE_1,
    title: "Paseo por el río",
    description:
      "Largo paseo por el margen del río. Pescadores, graffitis y reflejos sobre el agua.",
    cloudinaryPath: "1761163083573_v4ssm2",
    category: "Parque",
  },
  {
    datetime: INVENTED_DATE_2,
    title: "Galería Taberna Ánima",
    description:
      "Taberna clásica andaluza, deconstruida y transformada en bar cultural.",
    cloudinaryPath: "1761280819433_kkvjbg",
    category: "Local",
  },
  {
    datetime: INVENTED_DATE_3,
    title: "Judería",
    description:
      "El corazón de Sevilla. Los rincones más especiales y con más historia de la ciudad.",
    cloudinaryPath: "IMG_20250204_111435_xssnaz",
    category: "Lugar",
  },
  {
    datetime: INVENTED_DATE_4,
    title: "Centro Andaluz De Arte Contemporáneo",
    description:
      "Museo situado construido en una antigua fábrica de cerámica, rodeado de naturaleza y espacios a escala humana.",
    cloudinaryPath: "IMG_20251012_124655_mb7cdh",
    category: "Museo",
  },
  {
    datetime: INVENTED_DATE_5,
    title: "Mercado de Abastos de la Calle Feria",
    description:
      "Mercado del siglo XVIII, rehabilitado para albergar establecimientos modernos, como cervecerías o espacios gourmet.",
    cloudinaryPath: "IMG_20251109_151827_u4ma7l",
    category: "Museo",
  },
  {
    datetime: INVENTED_DATE_6,
    title: "Allegro Ma Non troppo",
    description:
      "Asociación cultural con una sala de conciertos alojada en un antiguo bajo.",
    cloudinaryPath: "IMG_20251116_214203_ylppaw.jpg",
    category: "Museo",
  },
];

// Insertmany en album where title == "Paseo por el río."
const photos0 = [
  {
    datetime: INVENTED_DATE_1,
    comment: "Monumento a la tolerancia.",
    cloudinaryPath: "1761163083559_bqx37n",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de Isabel II (Puente de Triana).",
    cloudinaryPath: "1761163083566_bgwkah",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Jardines de Chapina. Río.",
    cloudinaryPath: "1761163083573_v4ssm2",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Jardines de Chapina. Panorámica.",
    cloudinaryPath: "1761163083580_opgh1s",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Vista general del paseo.",
    cloudinaryPath: "1761163083602_y7cxbp",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Vista de la Torre Sevilla desde Torneo.",
    cloudinaryPath: "1761163083609_apxtjz",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Graffiti con luces y sombras.",
    cloudinaryPath: "1761163083634_ehqpbk",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de la Barqueta - Luz.",
    cloudinaryPath: "1761163083654_ssmjfy",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Puente de la Barqueta - Sombra.",
    cloudinaryPath: "1761163083665_pot6jf",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Pared con graffitis.",
    cloudinaryPath: "1761163083674_v2rvjm",
  },
  {
    datetime: INVENTED_DATE_1,
    comment: "Escalinata con graffitis.",
    cloudinaryPath: "1761163083712_puznff",
  },
];

const photos1 = [
  {
    datetime: INVENTED_DATE_2,
    comment: "Vista del público desde el patio.",
    cloudinaryPath: "1761280819433_kkvjbg",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Detalle de la banda en directo.",
    cloudinaryPath: "1761280819446_g8iz4s",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Detalle de la banda en directo, contraplano.",
    cloudinaryPath: "1761280819460_z7ovnq",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Momentos previos al concierto.",
    cloudinaryPath: "1761280819472_yr7h6j",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Puerta y pósters.",
    cloudinaryPath: "1761280819485_xum07y",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Adentrándose en la taberna.",
    cloudinaryPath: "1761280819506_kgcirn",
  },
  {
    datetime: INVENTED_DATE_2,
    comment: "Puerta de entrada a Galería Taberna Ánima.",
    cloudinaryPath: "1761280819515_fpvdm3",
  },
];

const photos2 = [
  {
    datetime: INVENTED_DATE_3,
    comment: "Muro de pintura desconchada.",
    cloudinaryPath: "IMG_20250203_130243_gx7jbp",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Fuente escondida.",
    cloudinaryPath: "IMG_20250203_130342_kxyi24",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Puerta antigua de madera y metal.",
    cloudinaryPath: "IMG_20250203_130653_fkxlxg",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Plaza con naranjos.",
    cloudinaryPath: "IMG_20250203_133529_f70ml9",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Rincón con puerta de metal y bicicleta.",
    cloudinaryPath: "IMG_20250203_134939_bds9qc",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Ventana sobre pared de estilo regionalista.",
    cloudinaryPath: "IMG_20250203_135438_isvsdh",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Bombardeo de pegatinas sobre placa.",
    cloudinaryPath: "IMG_20250203_140500_msfobx",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Juego de pintura sobre pivote.",
    cloudinaryPath: "IMG_20250204_104215_bbneva",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "El rincón del beso.",
    cloudinaryPath: "IMG_20250204_111435_xssnaz",
  },
  {
    datetime: INVENTED_DATE_3,
    comment: "Ya tú sabes.",
    cloudinaryPath: "IMG_20250204_114641_g0bu4t",
  },
];

const photos3 = [
  {
    datetime: INVENTED_DATE_4,
    comment: "Instalación color bronce en una ala de la capilla.",
    cloudinaryPath: "IMG_20251012_124655_mb7cdh",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Instalación azul en la nave central de la capilla.",
    cloudinaryPath: "IMG_20251012_125010_b4k7q6",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Patio escondido con enredaderas.",
    cloudinaryPath: "IMG_20251012_135701_wvsje9",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Antiguo horno de cerámica.",
    cloudinaryPath: "IMG_20251104_144920_v4otdj",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Estanque de piedra en el jardín.",
    cloudinaryPath: "IMG_20251104_151344_gezdbv",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Calles de arbustos en el jardín.",
    cloudinaryPath: "IMG_20251104_151421_bsqppy",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Reproductor analógico caminando.",
    cloudinaryPath: "IMG_20251104_151735_qmomxm",
  },
  {
    datetime: INVENTED_DATE_4,
    comment: "Puerta sobre muro de azulejos de estilo árabe.",
    cloudinaryPath: "IMG_20251104_153111_wxzm8h",
  },
];

const photos4 = [
  {
    datetime: INVENTED_DATE_5,
    comment: "Puestos separados por una valla.",
    cloudinaryPath: "IMG_20251109_151249_tsofl5",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Pasillo con acceso a puestos.",
    cloudinaryPath: "IMG_20251109_151523_tyzfub",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Ventana a tienda de artesanía.",
    cloudinaryPath: "IMG_20251109_151827_u4ma7l",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "No fumar.",
    cloudinaryPath: "IMG_20251109_152236_pxjxx1",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Plano general de la entrada al mercado.",
    cloudinaryPath: "IMG_20251109_152605_ifdcoi",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Utensilios de limpieza.",
    cloudinaryPath: "IMG_20251109_152639_e7fhqw",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Carteles sobre la puerta de entrada.",
    cloudinaryPath: "IMG_20251109_153943_uxxqgl",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Hasta la cocina del Bar Condendê.",
    cloudinaryPath: "IMG_20251109_155612_q2873d",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Para sentarse un ratito.",
    cloudinaryPath: "IMG_20251109_161101_eahmso",
  },
  {
    datetime: INVENTED_DATE_5,
    comment: "Parte trasera.",
    cloudinaryPath: "IMG_20251109_162440_ckdovp",
  },
];

const photos5 = [
  {
    datetime: INVENTED_DATE_6,
    comment: "Desde dentro.",
    cloudinaryPath: "IMG_20251116_214203_ylppaw.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Entrada a la jam.",
    cloudinaryPath: "IMG_20251123_210046_wbnoyv.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Detalle sobre espejo.",
    cloudinaryPath: "IMG_20251123_214207_atytrj.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Dibujando la escena.",
    cloudinaryPath: "IMG_20251116_231559_abwu2a.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Decoración.",
    cloudinaryPath: "IMG_20251123_210449_fbm7og.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Cartel.",
    cloudinaryPath: "IMG_20251123_231459_itznbb.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Lámpara.",
    cloudinaryPath: "IMG_20251123_214103_cshj1e.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Vista de los músicos.",
    cloudinaryPath: "IMG_20251116_214421_lxemcx.jpg",
  },
  {
    datetime: INVENTED_DATE_6,
    comment: "Envueltos por la música.",
    cloudinaryPath: "IMG_20251123_225400_h2ignw.jpg",
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
  {
    // Quinto álbum
    album: albums[5],
    photos: photos5, // La lista de fotos para "Galería Taberna Ánima"
  },
];

export { albumData, albums, photos0, photos1, photos3 };
