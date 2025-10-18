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
    title: "A view of a large building with a bridge (1)",
    description: "Toma amplia del edificio con puente al frente.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-2",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    title: "A view of a large building with a bridge (2)",
    description: "Plano detalle del puente y su reflejo.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-3",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    title: "A view of a large building with a bridge (3)",
    description: "Ángulo lateral mostrando la arquitectura.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-4",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    title: "A view of a large building with a bridge (4)",
    description: "Detalle de fachadas y textura.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-5",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    title: "A view of a large building with a bridge (5)",
    description: "Composición con barco y edificio al fondo.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zsg-6",
    postId: "zsgZDg_OwLk",
    datetime: INVENTED_DATE,
    title: "A view of a large building with a bridge (6)",
    description: "Perspectiva amplia del puente y el edificio.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  }, // 6 fotos para post "ZK_v7Uc7sqQ"
  {
    id: "ph-zk-1",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "People around brown building (1)",
    description: "Gente y movimiento frente al edificio marrón.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-2",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "People around brown building (2)",
    description: "Escena callejera con arquitectura característica.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-3",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "People around brown building (3)",
    description: "Texturas y detalles en fachada, con personas paseando.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGavilnfDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-4",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "People around brown building (4)",
    description: "Detalle arquitectónico con transeúntes en primer plano.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-5",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "People around brown building (5)",
    description: "Atardecer y fachadas en tonos cálidos.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-zk-6",
    postId: "ZK_v7Uc7sqQ",
    datetime: INVENTED_DATE,
    title: "People around brown building (6)",
    description: "Escena nocturna temprana con iluminación urbana.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  }, // 6 fotos para post "dMi3pqiqhsw"
  {
    id: "ph-dm-1",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "A large brick building with pillars (1)",
    description: "Vista general del edificio de ladrillo con pilares.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-2",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "A large brick building with pillars (2)",
    description: "Detalle cercano de columna y relieve en la fachada.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-3",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "A large brick building with pillars (3)",
    description: "Composición vertical mostrando la altura del edificio.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-4",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "A large brick building with pillars (4)",
    description: "Juego de luces sobre el ladrillo en la tarde.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-5",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "A large brick building with pillars (5)",
    description: "Detalle de molduras y sombras en la fachada.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-dm-6",
    postId: "dMi3pqiqhsw",
    datetime: INVENTED_DATE,
    title: "A large brick building with pillars (6)",
    description: "Contraste entre cielo y ladrillo al anochecer.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  }, // 6 fotos para post "UeSZNsV7GZE"
  {
    id: "ph-ue-1",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Brown concrete building (1)",
    description: "Perspectiva amplia del edificio de hormigón.",
    url: "https://images.unsplash.com/photo-1542115049-3af45a7e0ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw4fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-2",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Brown concrete building (2)",
    description: "Detalle de placa y relieve en fachada.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-3",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Brown concrete building (3)",
    description: "Composición con sombra y textura.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-4",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Brown concrete building (4)",
    description: "Detalle arquitectónico cercano.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw1fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-5",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Brown concrete building (5)",
    description: "Fachada iluminada al caer la tarde.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-ue-6",
    postId: "UeSZNsV7GZE",
    datetime: INVENTED_DATE,
    title: "Brown concrete building (6)",
    description: "Composición nocturna temprana con iluminación cálida.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  }, // 6 fotos para post "n4z9z2EJlvw"
  {
    id: "ph-n4-1",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "A narrow city street (1)",
    description: "Calle estrecha con edificios altos y luz rasante.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-2",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "A narrow city street (2)",
    description: "Detalles de balcones y ventanas históricas.",
    url: "https://images.unsplash.com/photo-1661442196029-ecc4a8e0a0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw3fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-3",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "A narrow city street (3)",
    description: "Juego de luces entre paredes estrechas.",
    url: "https://images.unsplash.com/photo-1560964598-dee5d2b9dd6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw2fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-4",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "A narrow city street (4)",
    description: "Contraste de texturas y fachadas antiguas.",
    url: "https://images.unsplash.com/photo-1559386081-325882507af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-5",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "A narrow city street (5)",
    description:
      "Perspectiva que sube por la calle con edificios a ambos lados.",
    url: "https://images.unsplash.com/photo-1661442197060-5fce68a9afc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHwxMHx8c2V2aWxsZXxlbnwwfHx8fDE3NjA2NDAwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "ph-n4-6",
    postId: "n4z9z2EJlvw",
    datetime: INVENTED_DATE,
    title: "A narrow city street (6)",
    description: "Última luz del día en la estrecha calle.",
    url: "https://images.unsplash.com/photo-1634048703492-eeded62bb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTc1NTR8MHwxfHNlYXJjaHw5fHxzZXZpbGxlfGVufDB8fHx8MTc2MDY0MDA3NXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];
