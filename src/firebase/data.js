// posts.js

// Usamos un objeto Date de JavaScript, que Firestore convierte a Timestamp nativo.
const INVENTED_DATE = new Date("2024-10-18T10:00:00Z");

export const posts = [
  {
    id: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    title: "Puente sobre el Guadalquivir",
    description:
      "Vista del río Guadalquivir con un edificio emblemático al fondo. Una escena clásica de Sevilla al atardecer.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Arquitectura",
  },
  {
    id: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "Vida en el centro histórico",
    description:
      "Personas paseando entre edificios de tonos cálidos en el corazón de la ciudad.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Cultura",
  },
  {
    id: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "Edificio histórico con pilares",
    description:
      "Una construcción monumental que refleja la arquitectura neoclásica sevillana.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Arquitectura",
  },
  {
    id: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Plaza de España",
    description:
      "El emblema de Sevilla, con su mezcla única de arquitectura y reflejos sobre el canal.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080g",
    category: "Monumentos",
  },
  {
    id: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "Callejón sevillano",
    description:
      "Una estrecha calle entre altos edificios donde la luz se filtra con encanto.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Calles",
  },
];

// photos.js

// Asumimos que INVENTED_DATE está definida y exportada/disponible en este archivo.
// const INVENTED_DATE = new Date("2024-10-18T10:00:00Z");

export const photos = [
  // 6 fotos para post "zsgZDg_OwLk"
  {
    id: "ph-zsg-1",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    comment:
      "Toma amplia del edificio moderno con el puente al frente. El reflejo en el agua es increíble.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-2",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    comment:
      "Plano detalle del puente. Me encanta cómo las luces crean este contraste con el cielo.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-3",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    comment:
      "Ángulo lateral capturando la arquitectura del edificio en toda su altura.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-4",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    comment:
      "Detalle de fachadas y la textura metálica. ¡Casi parece un plano de ciencia ficción!",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-5",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    comment:
      "Composición con un pequeño barco pasando y el edificio dominando el fondo.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-6",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    comment:
      "Perspectiva amplia del puente y el edificio. Ideal para una postal de la ciudad. 🌉",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // 6 fotos para post "ZK_v7Uc7sqQ"
  {
    id: "ph-zk-1",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    comment:
      "Gente y movimiento frente al edificio marrón. Capturando el ritmo de la calle.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-2",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    comment:
      "Una típica escena callejera con arquitectura característica andaluza.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-3",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    comment:
      "Texturas y detalles en fachada, con personas paseando. ¡Hay mucha vida aquí!",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-4",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    comment:
      "Detalle arquitectónico con transeúntes en primer plano. Un día cualquiera.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-5",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    comment:
      "Atardecer y fachadas en tonos cálidos. La luz del sur es inigualable. 🌅",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-6",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    comment:
      "Escena nocturna temprana con la iluminación urbana empezando a brillar.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // 6 fotos para post "dMi3pqiqhsw"
  {
    id: "ph-dm-1",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    comment:
      "Vista general de este imponente edificio de ladrillo con pilares.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-2",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    comment:
      "Detalle cercano de una columna y el relieve en la fachada. Mucha historia en estos muros.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-3",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    comment:
      "Composición vertical mostrando la altura y la magnitud de esta construcción.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-4",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    comment:
      "Juego de luces sobre el ladrillo en la tarde. El color es espectacular.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-5",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    comment:
      "Detalle de molduras y sombras en la fachada que le dan tanta profundidad.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-6",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    comment:
      "Contraste entre el cielo azul intenso y el ladrillo al anochecer. 🌃",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // 6 fotos para post "UeSZNsV7GZE"
  {
    id: "ph-ue-1",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    comment:
      "Perspectiva amplia del edificio de hormigón. Un diseño muy sobrio.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-2",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    comment:
      "Detalle de una placa y el relieve en la fachada. La arquitectura es minimalista.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-3",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    comment:
      "Composición con sombra y textura que resalta las formas del hormigón.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-4",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    comment:
      "Un detalle arquitectónico cercano que juega con las líneas geométricas.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-5",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    comment:
      "Fachada iluminada al caer la tarde. Me encanta el toque de luz naranja.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-6",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    comment:
      "Composición nocturna temprana. La iluminación cálida del edificio crea un buen contraste.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  // 6 fotos para post "n4z9z2EJlvw"
  {
    id: "ph-n4-1",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    comment:
      "Calle estrecha con edificios altos y luz rasante. La vida en el centro histórico. 🚶‍♂️",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-2",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    comment:
      "Detalles de balcones y ventanas históricas. Me encanta el color de los marcos.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-3",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    comment: "El juego de luces y sombras entre las paredes estrechas es arte.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-4",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    comment:
      "Contraste de texturas y fachadas antiguas en un rincón con encanto.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-5",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    comment:
      "Perspectiva que sube por la calle. Se siente la verticalidad de los edificios.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-6",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    comment:
      "Última luz del día en la estrecha calle. Una atmósfera mágica al anochecer. ✨",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
