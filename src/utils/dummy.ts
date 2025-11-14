import { ChurchEvent } from "@/types/event";

export const EVENTS: ChurchEvent[] = [
  {
    id: 1,
    name: "Noche de Adoración",
    image: "/images/hero4.jpg",
    description:
      "Una noche para detenernos, alzar nuestras manos y adorar a Dios con todo nuestro corazón. Un tiempo especial de alabanza, oración y encuentro con Su presencia.",
    date: {
      start: "2025-03-15T19:00:00",
      end: "2025-03-15T21:30:00",
    },
    location: "Templo",
    sections: [
      {
        title: "Primera Parte de la Noche",
        text: `Nuestra iglesia se reunió en una noche llena de adoración, entrega y gratitud. Las luces bajaron, las voces se unieron y, entre lágrimas y sonrisas, cada persona abrió su corazón delante de Dios. Fue un tiempo donde las preocupaciones se apagaron y la presencia del Señor llenó el lugar por completo. 
        Desde el primer acorde, se podía sentir una atmósfera diferente: libertad, gozo, consuelo. Muchos levantaron sus manos como símbolo de rendición, otros simplemente cerraron los ojos y dejaron que el Espíritu Santo los abrazara. 
        No fue un concierto, fue un encuentro real con Aquel que nos ama sin medida.`,
        multimedia: [
          { type: "image", src: "/images/hero4.jpg" },
          { type: "image", src: "/images/adoracion.jpg" },
          { type: "image", src: "/images/meet.jpg" },
        ],
      },
      {
        text: `Durante la segunda parte de la noche, varios compartieron testimonios de cómo Dios había transformado sus vidas. Hubo momentos de silencio profundo, oración en grupos y abrazos sinceros que reflejaban el amor de Cristo en acción. 
        La música se detuvo por momentos para dejar espacio a la voz del Espíritu. Fue un recordatorio de que no necesitamos perfección para acercarnos a Dios, solo un corazón dispuesto. 
        Al final, todos salimos con la convicción de que cada vez que adoramos juntos, el cielo toca la tierra.`,
        multimedia: [
          { type: "video", src: "https://www.youtube.com/watch?v=DaOCkAdzibM" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Domingo de Servicio",
    image: "/images/hero4.jpg",
    description:
      "Un día para servir juntos como iglesia en diferentes comunidades. Llevamos alimento, oración y esperanza a quienes más lo necesitan.",
    date: {
      start: "2025-04-21T08:00:00",
      end: "2025-04-21T16:00:00",
    },
    location: "Templo",
    sections: [
      {
        title: "Comenzando el Servicio",
        text: `Desde temprano, los voluntarios se reunieron con una sonrisa y manos listas para servir. Equipos de todas las edades salieron a diferentes barrios llevando víveres, ropa y palabras de aliento. 
        Algunos limpiaban parques, otros compartían alimentos, y otros simplemente escuchaban historias con empatía. Cada encuentro fue una oportunidad para recordar que servir no es solo una acción, sino una forma de amar como Jesús lo haría. 
        La comunidad se unió y el amor de Dios se reflejó en cada gesto sencillo, en cada mirada y en cada oración compartida.`,
        multimedia: [
          { type: "image", src: "/images/events/servicio1.jpg" },
          { type: "image", src: "/images/events/servicio2.jpg" },
          { type: "image", src: "/images/events/servicio3.jpg" },
          { type: "image", src: "/images/events/servicio4.jpg" },
        ],
      },
      {
        text: `Al final del día, el cansancio físico se mezclaba con una profunda alegría espiritual. Nadie regresó igual. Dios había usado a Su iglesia para tocar vidas, pero también para recordarnos que cuando servimos, Él nos transforma a nosotros primero. 
        Niños, jóvenes y adultos compartieron cómo experimentaron el gozo de dar sin esperar nada a cambio. Fue un día que nos recordó que el amor se demuestra con acciones, y que el Reino de Dios se construye con manos dispuestas.`,
        multimedia: [
          { type: "video", src: "/videos/events/servicio-resumen.mp4" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Encuentro de Jóvenes",
    image: "/images/hero4.jpg",
    description:
      "Un fin de semana donde los jóvenes se conectaron con Dios, compartieron tiempo juntos y descubrieron su propósito en Cristo.",
    date: {
      start: "2025-06-07T10:00:00",
      end: "2025-06-08T18:00:00",
    },
    location: "Templo",
    sections: [
      {
        title: "Bienvenida y Dinámicas",
        text: `El Encuentro de Jóvenes fue un espacio donde la energía, la alegría y la fe se encontraron en un mismo lugar. Entre dinámicas, talleres, juegos y momentos de adoración, los jóvenes descubrieron que Dios tiene planes grandes para cada uno. 
        En cada charla, se habló de identidad, propósito y fe auténtica. Se rompieron barreras, se construyeron amistades y muchos experimentaron el amor de Cristo por primera vez. 
        Los tiempos de oración fueron especialmente poderosos: ver a los jóvenes orar unos por otros, sin miedo ni prejuicio, fue testimonio de una generación que quiere vivir con pasión por Jesús.`,
        multimedia: [
          { type: "image", src: "/images/events/jovenes1.jpg" },
          { type: "image", src: "/images/events/jovenes2.jpg" },
          { type: "image", src: "/images/events/jovenes3.jpg" },
          { type: "image", src: "/images/events/jovenes4.jpg" },
        ],
      },
      {
        title: "Noche de Adoración",
        text: `El retiro cerró con una noche de adoración a la luz de las velas. Se escuchaban voces quebradas por la emoción, lágrimas de gratitud y promesas renovadas de seguir a Cristo. 
        Muchos jóvenes compartieron testimonios de sanidad emocional, reconciliación familiar y llamados al servicio. 
        Fue un recordatorio de que los jóvenes no son el futuro de la iglesia, son el presente — y que cuando se levantan con fe, toda la comunidad se fortalece.`,
        multimedia: [
          { type: "video", src: "/videos/events/jovenes-adoracion.mp4" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Retiro de Líderes",
    image: "/images/hero4.jpg",
    description:
      "Un tiempo de descanso, reflexión y renovación para todos los que sirven en diferentes ministerios de la iglesia.",
    date: {
      start: "2025-07-12T09:00:00",
      end: "2025-07-14T17:00:00",
    },
    location: "Templo",
    sections: [
      {
        title: "Reflexión y Oración",
        text: `Durante el Retiro de Líderes, tomamos un tiempo para detenernos y escuchar la voz de Dios con calma. Entre montañas y silencio, los líderes reflexionaron sobre el llamado, la humildad y la importancia de servir con corazón. 
        Hubo enseñanzas profundas, momentos de oración en grupo y espacios de conexión genuina. 
        Más que un retiro, fue una renovación espiritual: recordamos que liderar no se trata de tener control, sino de amar y guiar como lo hizo Jesús.`,
        multimedia: [
          { type: "image", src: "/images/events/lideres1.jpg" },
          { type: "image", src: "/images/events/lideres2.jpg" },
          { type: "image", src: "/images/events/lideres3.jpg" },
          { type: "image", src: "/images/events/lideres4.jpg" },
        ],
      },
      {
        text: `En la última jornada, compartimos una cena simbólica y un tiempo de adoración al aire libre. Bajo un cielo estrellado, cada líder entregó nuevamente su servicio a Dios. 
        Las oraciones se elevaron, las lágrimas fluyeron y el Espíritu Santo trajo paz y propósito renovado. 
        Salimos sabiendo que servir es un privilegio y que la iglesia florece cuando sus líderes sirven con amor y humildad.`,
        multimedia: [
          { type: "video", src: "/videos/events/lideres-final.mp4" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Festival Familiar",
    image: "/images/hero4.jpg",
    description:
      "Una celebración para toda la familia con juegos, música, comida y un mensaje de esperanza. Un día para disfrutar y compartir juntos como iglesia.",
    date: {
      start: "2025-09-28T10:00:00",
      end: "2025-09-28T17:00:00",
    },
    location: "Templo",
    sections: [
      {
        title: "Mañana de Actividades",
        text: `El Festival Familiar fue una jornada llena de vida, risas y comunidad. Desde temprano, las familias llegaron con sus hijos, listos para disfrutar de un día diferente. 
        Hubo música en vivo, juegos, comida deliciosa y actividades para todas las edades. Los niños corrían entre burbujas y los adultos compartían charlas, mientras la alegría llenaba cada rincón del parque. 
        Pero más allá de la diversión, el objetivo fue claro: recordar que la familia es un regalo de Dios y que juntos podemos construir hogares donde reine la fe y el amor.`,
        multimedia: [
          { type: "image", src: "/images/events/familia1.jpg" },
          { type: "image", src: "/images/events/familia2.jpg" },
          { type: "image", src: "/images/events/familia3.jpg" },
          { type: "image", src: "/images/events/familia4.jpg" },
        ],
      },
      {
        title: "Cierre y Oración",
        text: `Al cierre del festival, nos reunimos para orar por las familias. Los pastores compartieron un mensaje inspirador sobre la unidad y el poder del perdón en el hogar. 
        Ver padres abrazando a sus hijos y matrimonios tomados de la mano fue una imagen hermosa del amor de Dios restaurando corazones. 
        Nos fuimos con el corazón lleno, sabiendo que en Cristo siempre hay motivos para celebrar la vida y la familia.`,
        multimedia: [
          { type: "video", src: "/videos/events/familia-resumen.mp4" },
        ],
      },
    ],
  },
];

export const RESOURCES = [
  {
    id: 1,
    name: "Cómo Escuchar la Voz de Dios",
    image: "/images/hero4.jpg",
    description:
      "Un recurso profundo para aprender a reconocer la voz de Dios en medio del ruido, las preocupaciones y el día a día.",
    sections: [
      {
        title: "Una Relación que Requiere Tiempo",
        text: `
Escuchar la voz de Dios no es un don exclusivo para unos pocos; es un privilegio para todos Sus hijos. Él habla a través de Su Palabra, de Su Espíritu, de consejos sabios, de la creación y hasta de silencios que nos invitan a reflexionar.

El problema no es que Dios no hable; el problema es que muchas veces nuestro corazón está tan lleno de ruido que nos cuesta percibirlo. Aprender a escuchar a Dios comienza con una decisión: detenernos.

La oración no es un monólogo; es una conversación. Dios anhela hablarnos, guiarnos y revelarnos Su corazón. Y cuando lo buscamos con sinceridad, Él responde. No siempre de la manera que esperamos, pero siempre de la forma que necesitamos.`,
        multimedia: [
          { type: "image", src: "/images/adoracion.jpg" },
          { type: "image", src: "/images/meet.jpg" },
        ],
      },
      {
        title: "Prácticas para Afinar el Oído Espiritual",
        text: `
La voz de Dios generalmente se reconoce por su paz, su claridad y su coherencia con la Palabra. Él nunca te va a dirigir hacia algo que contradiga lo que ya reveló en las Escrituras.

Aquí algunas prácticas clave:
- **Busca momentos diarios de silencio.** No para pedir, sino para escuchar.
- **Lee la Biblia con expectativa**, como si Dios te fuera a hablar directamente (porque lo hará).
- **Anota lo que sientes que Él te dice.** La memoria es frágil.
- **Alinea tu vida con obediencia.** Dios habla más a los que están dispuestos a obedecer antes de escuchar.

Dios sigue hablando. Este recurso es un recordatorio de que tu corazón puede convertirse en un lugar donde Su voz sea clara, firme y constante.`,
        multimedia: [
          { type: "video", src: "https://www.youtube.com/watch?v=DaOCkAdzibM" },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Viviendo una Fe Práctica",
    image: "/images/hero4.jpg",
    description:
      "Herramientas para vivir una fe activa y práctica que transforma tu vida y la de quienes te rodean.",
    sections: [
      {
        title: "La Fe No es Pasiva",
        text: `
La fe no es solo creer; es actuar conforme a lo que creemos. Muchas personas tienen ideas correctas sobre Dios, pero no siempre las llevan a la vida diaria. La fe práctica se ve en decisiones, hábitos, palabras y acciones.

Dios no nos llamó a una fe teórica, sino a una vida que refleje Su carácter en lo cotidiano: en cómo hablamos, cómo manejamos nuestros recursos, cómo tratamos a quienes nos rodean.

Una fe práctica es aquella que se levanta cada día diciendo: “Hoy quiero vivir de una manera que honre a Jesús”.`,
        multimedia: [
          { type: "image", src: "/images/events/servicio1.jpg" },
          { type: "image", src: "/images/events/servicio2.jpg" },
        ],
      },
      {
        title: "Pequeñas Acciones que Construyen una Vida Firme",
        text: `
La fe crece con hábitos simples:
- **Leer la Palabra diariamente**, aunque sea por unos minutos.
- **Orar con sinceridad**, no con frases bonitas.
- **Rodearte de personas que te acerquen a Dios.**
- **Pedir perdón cuando fallas.**
- **Agradecer cada día, incluso cuando es difícil.**

Pequeños pasos construyen grandes cimientos. La fe práctica no nace de un gran momento, sino de miles de decisiones pequeñas alineadas al corazón de Dios.`,
        multimedia: [
          { type: "video", src: "/videos/events/servicio-resumen.mp4" },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Sanidad Emocional en Dios",
    image: "/images/hero4.jpg",
    description:
      "Un recurso para quienes buscan sanidad interior, fortaleza emocional y libertad espiritual por medio de Cristo.",
    sections: [
      {
        title: "Dios También Sana el Corazón",
        text: `
Muchos piensan que Dios solo se ocupa del espíritu, pero la Biblia dice que Él está cercano al quebrantado de corazón. Dios conoce cada herida, cada temor, cada trauma y cada lágrima. No te pide que seas fuerte solo; te invita a entregar todo aquello que te pesa.

La sanidad emocional no es un proceso mágico ni inmediato. Es un camino donde Dios va quitando capas, restaurando pensamientos y renovando la identidad. Él sana no solo lo que duele, sino también lo que creías que no tenía solución.`,
        multimedia: [
          { type: "image", src: "/images/events/jovenes1.jpg" },
          { type: "image", src: "/images/events/jovenes2.jpg" },
        ],
      },
      {
        title: "Pasos para Caminar hacia la Libertad",
        text: `
- **Reconoce que necesitas ayuda.** Dios comienza donde terminas tus fuerzas.
- **Ora con honestidad.** Él no se escandaliza por lo que sientes.
- **Perdona, aunque duela.** El perdón no justifica lo que pasó, libera lo que pesa.
- **Busca acompañamiento espiritual.** Caminar solo es más difícil.
- **Llena tu mente de la Palabra.** Lo que entra a tu mente dirige tu corazón.

Dios te hizo para vivir libre, en paz y con un corazón completo. Este recurso te guía a ese proceso.`,
        multimedia: [
          { type: "video", src: "/videos/events/jovenes-adoracion.mp4" },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Liderazgo con el Corazón de Jesús",
    image: "/images/hero4.jpg",
    description:
      "Un recurso para formar líderes humildes, fuertes, llenos de carácter y capaces de guiar a otros con amor.",
    sections: [
      {
        title: "El Líder que Sirve",
        text: `
Jesús redefinió el liderazgo. Antes se pensaba que el líder era el que mandaba; Jesús enseñó que el verdadero líder es el que sirve. La grandeza del Reino no se mide por cuánto control tienes, sino por cuánto amas.

El liderazgo no se trata de tener un título, sino de influir con tu ejemplo. Un líder que sirve inspira confianza, construye unidad y refleja el carácter de Cristo. El mundo necesita líderes así.`,
        multimedia: [
          { type: "image", src: "/images/events/lideres1.jpg" },
          { type: "image", src: "/images/events/lideres3.jpg" },
        ],
      },
      {
        title: "Carácter Antes que Habilidades",
        text: `
Dios primero forma el corazón, luego usa las manos. El carácter es más importante que los talentos. Un líder confiable es aquel que vive en integridad, que honra su palabra y que se mantiene firme incluso cuando nadie lo ve.

Este recurso enseña que el liderazgo espiritual no se trata de perfección, sino de humildad. Jesús elige líderes dispuestos, no perfectos.

El secreto de un liderazgo transformador es mantenerse cerca de Dios.`,
        multimedia: [
          { type: "video", src: "/videos/events/lideres-final.mp4" },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Familias Fuertes en Cristo",
    image: "/images/hero4.jpg",
    description:
      "Un recurso para fortalecer hogares, matrimonios y relaciones familiares con principios bíblicos prácticos.",
    sections: [
      {
        title: "El Hogar: Primer Lugar de Ministerio",
        text: `
La familia es el primer lugar donde aprendemos amor, perdón, paciencia y fe. Todo comienza en casa. Dios diseñó a la familia como un refugio, un espacio donde se construye carácter, donde se encuentran fuerzas y donde se aprende a amar como Cristo. 

Este recurso enseña que antes de servir afuera, debemos cuidar lo que Dios nos confió en casa. La salud espiritual de una iglesia comienza en los hogares que la forman.`,
        multimedia: [
          { type: "image", src: "/images/events/familia1.jpg" },
          { type: "image", src: "/images/events/familia2.jpg" },
        ],
      },
      {
        title: "Claves para un Hogar Sólido",
        text: `
- **Orar en familia.** La oración une más que las palabras.
- **Perdonar rápido.** No dejes que el enojo se convierta en distancia.
- **Pasar tiempo juntos.** La presencia fortalece vínculos.
- **Hablar con honestidad.** La verdad sana más que el silencio.
- **Poner a Dios en el centro.** Todo gira hacia donde está tu corazón.

Una familia que camina con Cristo es una familia que permanece, crece y se fortalece incluso en medio de las tormentas.`,
        multimedia: [
          { type: "video", src: "/videos/events/familia-resumen.mp4" },
        ],
      },
    ],
  },
];
