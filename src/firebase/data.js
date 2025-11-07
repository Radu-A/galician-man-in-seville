// posts.js

// Usamos un objeto Date de JavaScript, que Firestore convierte a Timestamp nativo.
const INVENTED_DATE = new Date("2025-10-28T10:00:00Z");

export const albums = [
  {
    datetime: INVENTED_DATE,
    title: "Paseo por el río",
    description:
      "Largo paseo por el margen del río. Pescadores, graffitis y reflejos sobre el agua.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083573.jpg",
    category: "Parque",
  },
  {
    datetime: INVENTED_DATE,
    title: "Galería Taberna Ánima",
    description:
      "Taberna clásica andaluza, deconstruida y transformada en bar cultural.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819472.jpg",
    category: "Parque",
  },
];

// Insertmany en album where title == "Paseo por el río."
export const photos0 = [
  {
    datetime: INVENTED_DATE,
    comment: "Monumento a la tolerancia.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083559.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Puente de Isabel II (Puente de Triana).",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083566.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Jardines de Chapina.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083573.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Vista de la Torre Sevilla desde Torneo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083609.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Vista general del paseo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083628.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Graffiti con luces y sombras.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083634.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Puente de la Barqueta - Luz.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083654.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Puente de la Barqueta - Sombra.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083665.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Escalinata con graffitis.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761163083712.jpg",
  },
];

export const photos1 = [
  {
    datetime: INVENTED_DATE,
    comment: "Vista del público desde el patio.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819433.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Detalle de la banda en directo.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819446.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Detalle de la banda en directo, contraplano.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819460.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Momentos previos al concierto.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819472.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Puerta y pósters.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819485.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Adentrándose en la taberna.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819506.jpg",
  },
  {
    datetime: INVENTED_DATE,
    comment: "Puerta de entrada a Galería Taberna Ánima.",
    storagePath:
      "gs://galician-man-in-seville.firebasestorage.app/1761280819515.jpg",
  },
];

// **NUEVO ARRAY que combina álbumes y sus fotos**
export const albumData = [
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
  // Puedes añadir más objetos { album: ..., photos: ... } aquí
];
