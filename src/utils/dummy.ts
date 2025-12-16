import { ChurchEvent } from "@/types/event";


export const EVENTS: ChurchEvent[] = []
// export const EVENTS: ChurchEvent[] = [
//   {
//     id: 1,
//     name: "Noche de Adoración",
//     image: "/images/hero4.jpg",
//     description:
//       "Una noche para detenernos, alzar nuestras manos y adorar a Dios con todo nuestro corazón. Un tiempo especial de alabanza, oración y encuentro con Su presencia.",
//     date: {
//       start: "2025-03-15T19:00:00",
//       end: "2025-03-15T21:30:00",
//     },
//     location: "Templo",
//     sections: [
//       {
//         title: "Primera Parte de la Noche",
//         text: `Nuestra iglesia se reunió en una noche llena de adoración, entrega y gratitud. Las luces bajaron, las voces se unieron y, entre lágrimas y sonrisas, cada persona abrió su corazón delante de Dios. Fue un tiempo donde las preocupaciones se apagaron y la presencia del Señor llenó el lugar por completo. 
//         Desde el primer acorde, se podía sentir una atmósfera diferente: libertad, gozo, consuelo. Muchos levantaron sus manos como símbolo de rendición, otros simplemente cerraron los ojos y dejaron que el Espíritu Santo los abrazara. 
//         No fue un concierto, fue un encuentro real con Aquel que nos ama sin medida.`,
//         multimedia: [
//           { type: "image", src: "/images/hero4.jpg" },
//           { type: "image", src: "/images/adoracion.jpg" },
//           { type: "image", src: "/images/meet.jpg" },
//         ],
//       },
//       {
//         text: `Durante la segunda parte de la noche, varios compartieron testimonios de cómo Dios había transformado sus vidas. Hubo momentos de silencio profundo, oración en grupos y abrazos sinceros que reflejaban el amor de Cristo en acción. 
//         La música se detuvo por momentos para dejar espacio a la voz del Espíritu. Fue un recordatorio de que no necesitamos perfección para acercarnos a Dios, solo un corazón dispuesto. 
//         Al final, todos salimos con la convicción de que cada vez que adoramos juntos, el cielo toca la tierra.`,
//         multimedia: [
//           { type: "video", src: "https://www.youtube.com/watch?v=DaOCkAdzibM" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Domingo de Servicio",
//     image: "/images/hero4.jpg",
//     description:
//       "Un día para servir juntos como iglesia en diferentes comunidades. Llevamos alimento, oración y esperanza a quienes más lo necesitan.",
//     date: {
//       start: "2025-04-21T08:00:00",
//       end: "2025-04-21T16:00:00",
//     },
//     location: "Templo",
//     sections: [
//       {
//         title: "Comenzando el Servicio",
//         text: `Desde temprano, los voluntarios se reunieron con una sonrisa y manos listas para servir. Equipos de todas las edades salieron a diferentes barrios llevando víveres, ropa y palabras de aliento. 
//         Algunos limpiaban parques, otros compartían alimentos, y otros simplemente escuchaban historias con empatía. Cada encuentro fue una oportunidad para recordar que servir no es solo una acción, sino una forma de amar como Jesús lo haría. 
//         La comunidad se unió y el amor de Dios se reflejó en cada gesto sencillo, en cada mirada y en cada oración compartida.`,
//         multimedia: [
//           { type: "image", src: "/images/events/servicio1.jpg" },
//           { type: "image", src: "/images/events/servicio2.jpg" },
//           { type: "image", src: "/images/events/servicio3.jpg" },
//           { type: "image", src: "/images/events/servicio4.jpg" },
//         ],
//       },
//       {
//         text: `Al final del día, el cansancio físico se mezclaba con una profunda alegría espiritual. Nadie regresó igual. Dios había usado a Su iglesia para tocar vidas, pero también para recordarnos que cuando servimos, Él nos transforma a nosotros primero. 
//         Niños, jóvenes y adultos compartieron cómo experimentaron el gozo de dar sin esperar nada a cambio. Fue un día que nos recordó que el amor se demuestra con acciones, y que el Reino de Dios se construye con manos dispuestas.`,
//         multimedia: [
//           { type: "video", src: "/videos/events/servicio-resumen.mp4" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Encuentro de Jóvenes",
//     image: "/images/hero4.jpg",
//     description:
//       "Un fin de semana donde los jóvenes se conectaron con Dios, compartieron tiempo juntos y descubrieron su propósito en Cristo.",
//     date: {
//       start: "2025-06-07T10:00:00",
//       end: "2025-06-08T18:00:00",
//     },
//     location: "Templo",
//     sections: [
//       {
//         title: "Bienvenida y Dinámicas",
//         text: `El Encuentro de Jóvenes fue un espacio donde la energía, la alegría y la fe se encontraron en un mismo lugar. Entre dinámicas, talleres, juegos y momentos de adoración, los jóvenes descubrieron que Dios tiene planes grandes para cada uno. 
//         En cada charla, se habló de identidad, propósito y fe auténtica. Se rompieron barreras, se construyeron amistades y muchos experimentaron el amor de Cristo por primera vez. 
//         Los tiempos de oración fueron especialmente poderosos: ver a los jóvenes orar unos por otros, sin miedo ni prejuicio, fue testimonio de una generación que quiere vivir con pasión por Jesús.`,
//         multimedia: [
//           { type: "image", src: "/images/events/jovenes1.jpg" },
//           { type: "image", src: "/images/events/jovenes2.jpg" },
//           { type: "image", src: "/images/events/jovenes3.jpg" },
//           { type: "image", src: "/images/events/jovenes4.jpg" },
//         ],
//       },
//       {
//         title: "Noche de Adoración",
//         text: `El retiro cerró con una noche de adoración a la luz de las velas. Se escuchaban voces quebradas por la emoción, lágrimas de gratitud y promesas renovadas de seguir a Cristo. 
//         Muchos jóvenes compartieron testimonios de sanidad emocional, reconciliación familiar y llamados al servicio. 
//         Fue un recordatorio de que los jóvenes no son el futuro de la iglesia, son el presente — y que cuando se levantan con fe, toda la comunidad se fortalece.`,
//         multimedia: [
//           { type: "video", src: "/videos/events/jovenes-adoracion.mp4" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Retiro de Líderes",
//     image: "/images/hero4.jpg",
//     description:
//       "Un tiempo de descanso, reflexión y renovación para todos los que sirven en diferentes ministerios de la iglesia.",
//     date: {
//       start: "2025-07-12T09:00:00",
//       end: "2025-07-14T17:00:00",
//     },
//     location: "Templo",
//     sections: [
//       {
//         title: "Reflexión y Oración",
//         text: `Durante el Retiro de Líderes, tomamos un tiempo para detenernos y escuchar la voz de Dios con calma. Entre montañas y silencio, los líderes reflexionaron sobre el llamado, la humildad y la importancia de servir con corazón. 
//         Hubo enseñanzas profundas, momentos de oración en grupo y espacios de conexión genuina. 
//         Más que un retiro, fue una renovación espiritual: recordamos que liderar no se trata de tener control, sino de amar y guiar como lo hizo Jesús.`,
//         multimedia: [
//           { type: "image", src: "/images/events/lideres1.jpg" },
//           { type: "image", src: "/images/events/lideres2.jpg" },
//           { type: "image", src: "/images/events/lideres3.jpg" },
//           { type: "image", src: "/images/events/lideres4.jpg" },
//         ],
//       },
//       {
//         text: `En la última jornada, compartimos una cena simbólica y un tiempo de adoración al aire libre. Bajo un cielo estrellado, cada líder entregó nuevamente su servicio a Dios. 
//         Las oraciones se elevaron, las lágrimas fluyeron y el Espíritu Santo trajo paz y propósito renovado. 
//         Salimos sabiendo que servir es un privilegio y que la iglesia florece cuando sus líderes sirven con amor y humildad.`,
//         multimedia: [
//           { type: "video", src: "/videos/events/lideres-final.mp4" },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Festival Familiar",
//     image: "/images/hero4.jpg",
//     description:
//       "Una celebración para toda la familia con juegos, música, comida y un mensaje de esperanza. Un día para disfrutar y compartir juntos como iglesia.",
//     date: {
//       start: "2025-09-28T10:00:00",
//       end: "2025-09-28T17:00:00",
//     },
//     location: "Templo",
//     sections: [
//       {
//         title: "Mañana de Actividades",
//         text: `El Festival Familiar fue una jornada llena de vida, risas y comunidad. Desde temprano, las familias llegaron con sus hijos, listos para disfrutar de un día diferente. 
//         Hubo música en vivo, juegos, comida deliciosa y actividades para todas las edades. Los niños corrían entre burbujas y los adultos compartían charlas, mientras la alegría llenaba cada rincón del parque. 
//         Pero más allá de la diversión, el objetivo fue claro: recordar que la familia es un regalo de Dios y que juntos podemos construir hogares donde reine la fe y el amor.`,
//         multimedia: [
//           { type: "image", src: "/images/events/familia1.jpg" },
//           { type: "image", src: "/images/events/familia2.jpg" },
//           { type: "image", src: "/images/events/familia3.jpg" },
//           { type: "image", src: "/images/events/familia4.jpg" },
//         ],
//       },
//       {
//         title: "Cierre y Oración",
//         text: `Al cierre del festival, nos reunimos para orar por las familias. Los pastores compartieron un mensaje inspirador sobre la unidad y el poder del perdón en el hogar. 
//         Ver padres abrazando a sus hijos y matrimonios tomados de la mano fue una imagen hermosa del amor de Dios restaurando corazones. 
//         Nos fuimos con el corazón lleno, sabiendo que en Cristo siempre hay motivos para celebrar la vida y la familia.`,
//         multimedia: [
//           { type: "video", src: "/videos/events/familia-resumen.mp4" },
//         ],
//       },
//     ],
//   },
// ];

export const RESOURCES = [
  {
    id: 1,
    name: "Dar es Adorar - Parte 3: La Ofrenda que Honra a Dios",
    image: "/images/hero4.jpg",
    description:
      "Una enseñanza que nos muestra que nuestras ofrendas y actos de generosidad son una expresión directa de nuestra adoración a Dios.",
    sections: [
      {
        title: "Descripción",
        text: `En esta predicación basada en Génesis 8:20, el Pastor Edwin Molina nos recuerda que dar no es solo una acción externa, sino una expresión profunda de adoración. A través del ejemplo de Noé, aprendemos que nuestras ofrendas y generosidad reflejan el corazón con el que nos acercamos a Dios. Esta enseñanza nos invita a examinar la motivación detrás de lo que damos y a honrar al Señor con una vida que le ofrezca lo mejor.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `Cuando Noé salió del arca después del diluvio, lo primero que hizo no fue construir una casa, buscar alimento o asegurarse de sus propias necesidades. Lo primero que hizo fue levantar un altar al Señor y ofrecer una ofrenda (Génesis 8:20). Ese acto marcó el inicio de una nueva etapa para la humanidad, una etapa que comenzó con un corazón agradecido y adorador.

Esta predicación nos enseña que adorar a Dios no se limita al canto o a estar en un templo, sino que también involucra nuestra disposición a dar. Dar tiempo, recursos, obediencia, y sobre todo, nuestro corazón. Cuando damos con gratitud y reverencia, reconocemos que todo lo que somos y tenemos viene de Él.

A través de esta enseñanza, seremos guiados a comprender que nuestra generosidad es una extensión de nuestra adoración y que, como Noé, podemos agradar a Dios con un espíritu que le ofrece lo mejor.`,
        multimedia: [
          { type: "video", src: "https://www.youtube.com/watch?v=wARXhFv8xyk" },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Dar es Adorar – Parte 1: La Ofrenda que Refleja el Corazón",
    image: "/images/hero4.jpg",
    description:
      "Un llamado a acercarnos a Dios con una ofrenda voluntaria que nace de la obediencia y la entrega",
    sections: [
      {
        title: "Descripción",
        text: `
En esta primera enseñanza de la serie “Dar es Adorar”, el Pastor Edwin Molina nos guía a través de Levítico 1:1-3 para mostrarnos que Dios siempre ha deseado que Su pueblo se acerque a Él con un corazón dispuesto. La ofrenda voluntaria no solo representa un sacrificio material, sino la intención profunda de honrar a Dios con lo mejor. La verdadera adoración no empieza en lo que hacemos públicamente, sino en la entrega de nuestro corazón en lo secreto. Esta predica nos invita a examinar nuestras motivaciones, a entender el valor espiritual de nuestras ofrendas y a desarrollar una vida de adoración completa que incluye dar con amor y reverencia.`,
        multimedia: [],
      },
      {
        title: "Introducción ampliada",
        text: `El libro de Levítico puede parecer, a primera vista, una colección de instrucciones antiguas y rituales, pero en realidad revela el corazón de Dios hacia su pueblo: Él desea cercanía, obediencia y adoración genuina. En Levítico 1:1-3, Dios habla desde el tabernáculo y llama a Moisés, enseñándole cómo las personas debían acercarse al Señor con una ofrenda voluntaria. Esa ofrenda no era obligatoria; era un acto que demostraba el deseo del adorador de honrar a Dios.

El Pastor Edwin Molina nos recuerda que, así como en ese tiempo, hoy también Dios mira más allá del sacrificio y se fija en la actitud del corazón. La adoración verdadera no es solo cantar o asistir a un servicio, sino también dar con un espíritu de gratitud, obediencia y entrega. Dar no es una transacción; es una expresión profunda de adoración.

Cuando ofrecemos a Dios lo mejor de nosotros —nuestro tiempo, recursos, talentos y devoción— estamos diciendo: “Señor, Tú eres digno”. Esta predicación nos desafía a examinar qué tipo de ofrenda estamos llevando al altar y si nuestra adoración refleja realmente nuestro amor por Dios.`,
        multimedia: [
          { type: "video", src: "https://www.youtube.com/watch?v=gs5p6jSOy_4" },
        ],
      },
    ],
  },

  {
    id: 3,
    name: "Dar es Adorar – Parte 2: Ofrecer a Dios lo Mejor",
    image: "/images/hero4.jpg",
    description:
      "Una enseñanza que revela que Dios honra al corazón que le entrega lo mejor y no lo que sobra.",
    sections: [
      {
        title: "Descripción",
        text: `En esta segunda enseñanza de la serie “Dar es Adorar”, el Pastor Edwin Molina profundiza en la historia de Caín y Abel en Génesis 4:4 para mostrarnos la importancia de la actitud con la que nos presentamos ante Dios. Abel ofreció lo mejor de su rebaño, no por obligación, sino por reverencia y fe. A través de este pasaje, aprendemos que Dios mira el corazón del adorador antes que el valor material de la ofrenda. Esta predicación nos desafía a evaluar si nuestras ofrendas —materiales, espirituales y de servicio— reflejan realmente amor, entrega y honra hacia Dios.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `Desde el principio de la humanidad, Dios ha establecido un principio espiritual: la verdadera adoración se expresa a través de lo que ofrecemos y cómo lo ofrecemos. En Génesis 4:4 encontramos a Abel presentándose delante del Señor con “las primicias y lo más selecto” de sus ovejas. No fue una acción impulsiva ni ritual; fue un acto deliberado que revelaba su corazón agradecido y devoto. Su ofrenda agradó a Dios, no por lo que representaba materialmente, sino por el espíritu con el que fue dada.

En contraste, Caín presentó una ofrenda cualquiera, no lo primero ni lo mejor. Esto nos enseña que no es la cantidad lo que mueve a Dios, sino la intención. El Pastor Edwin Molina nos recuerda que el Señor sigue buscando adoradores cuya ofrenda refleje devoción genuina. Dar no se trata de una obligación religiosa, sino de una forma de honrar a Dios con nuestras primicias, nuestros recursos, nuestro tiempo y nuestra vida misma.

Esta predicación nos invita a revisar nuestras prioridades y preguntarnos: ¿Estoy dando a Dios lo mejor de mí o lo que me sobra? Cuando aprendemos a ofrecer a Dios lo mejor, no por presión, sino por amor, descubrimos que dar es una de las expresiones más puras de adoración.`,
        multimedia: [
          { type: "video", src: "https://www.youtube.com/watch?v=u4tiPfe9Np4" },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "La Cena del Señor y las Ofrendas: Un Corazón Consagrado",
    image: "/images/hero4.jpg",
    description:
      "Una enseñanza que nos llama a examinarnos y acercarnos a Dios con un corazón limpio, reverente y generoso.",
    sections: [
      {
        title: "Descripción",
        text: `En esta enseñanza basada en Job 1:5, el Pastor Edwin Molina nos recuerda que tanto la Cena del Señor como nuestras ofrendas deben presentarse con un corazón consagrado delante de Dios. Job intercedía y ofrecía holocaustos por sus hijos para asegurarse de que sus vidas estuvieran en orden espiritual. Este pasaje revela la importancia de acercarnos a Dios con integridad, pureza y devoción. La predicación subraya que nuestras ofrendas y nuestra participación en la mesa del Señor son actos profundamente espirituales que reflejan la condición de nuestro corazón y nuestra relación con Dios.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `Job es descrito como un hombre justo, íntegro y temeroso de Dios. Su vida de devoción incluía no solo orar por su familia, sino también presentar ofrendas con un sentido de responsabilidad espiritual. En Job 1:5 vemos que, después de los días de fiesta de sus hijos, él “se levantaba de mañana” y ofrecía holocaustos por cada uno de ellos, diciendo: “Quizá mis hijos habrán pecado y blasfemado contra Dios en sus corazones”. Esto nos muestra que Job entendía que acercarse a Dios implica siempre preparación y reverencia.

Así como Job se preocupaba por la condición espiritual de su hogar, el Pastor Edwin Molina nos enseña que debemos acercarnos a la Cena del Señor y a las ofrendas con un corazón examinado y consagrado. La Santa Cena no es un ritual más, sino un recordatorio del sacrificio de Cristo y un llamado a revisar nuestra vida. De la misma manera, las ofrendas no son una tradición vacía, sino una expresión de adoración, gratitud y compromiso con Dios.

Esta predicación nos invita a reflexionar sobre cómo nos presentamos delante del Señor:

- **¿Tomamos la Cena con reverencia?
- **¿Ofrecemos a Dios desde un corazón limpio y agradecido?
- **¿Vivimos una vida como la de Job, consciente de la santidad de Dios?
Acercarnos a Dios con un corazón consagrado transforma nuestra adoración y honra verdaderamente al Señor.`,
        multimedia: [
          {
            type: "video",
            src: "https://youtu.be/z1cjbccIyS8?si=8kAmXwprt58nlOHj",
          },
        ],
      },
    ],
  },

  {
    id: 5,
    name: "Restauración del Hombre de Dios: Cuando Él Cambia la Historia",
    image: "/images/hero4.jpg",
    description:
      "Un mensaje que revela cómo Dios restaura, levanta y honra al hombre que permanece fiel en medio de la prueba.",
    sections: [
      {
        title: "Descripción",
        text: `En esta predicación basada en Job 42:7-17, el Pastor Edwin Molina nos muestra que Dios es un Dios de restauración completa. Job pasó por un tiempo de dolor, pérdida y silencio, pero al final el Señor restauró su vida, sanó sus relaciones y le otorgó una doble porción. La restauración de Dios no solo es material, sino también emocional y espiritual. Este mensaje nos recuerda que cuando permanecemos fieles, Dios honra nuestra integridad y cambia nuestra historia.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `A lo largo del libro de Job vemos a un hombre justo viviendo un proceso intenso de sufrimiento. Sin embargo, en Job 42:7-17 encontramos el punto de transformación. Dios vindica a Job, restaura su condición, sana lo que se había roto y le concedió más de lo que tenía antes. El Pastor Edwin Molina nos enseña que la restauración de Dios llega cuando el corazón se rinde, perdona y confía. Este mensaje nos anima a creer que Dios todavía restaura al hombre de Dios: su fe, su familia, sus fuerzas y su destino.`,
        multimedia: [
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=J5bgfFpeuu8",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    name: "Habla Dios, Calla el Hombre: El Encuentro con la Voz del Señor",
    image: "/images/hero4.jpg",
    description:
      "Una enseñanza que nos recuerda que cuando Dios habla, nuestra actitud debe ser de reverencia, silencio y humildad.",
    sections: [
      {
        title: "Descripción",
        text: `Basada en Job 38:1 al 42:6, esta predicación del Pastor Edwin Molina nos muestra el momento en que Dios responde a Job desde el torbellino. Después de preguntas, confusión y sufrimiento, Dios revela Su grandeza y sabiduría. Este mensaje destaca la importancia de someternos a la voz de Dios, reconocer Su soberanía y callar nuestras quejas para escuchar Su dirección.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `Durante gran parte del libro, Job buscó respuestas. Sus amigos hablaron, él razonó, pero finalmente Dios intervino. En Job 38 al 42 vemos cómo Dios manifiesta Su gloria, corrige a Job y lo lleva al arrepentimiento y la restauración. El Pastor Edwin Molina enseña que cuando Dios habla, nuestra reacción debe ser el silencio reverente. Este mensaje nos invita a dejar de debatir con Dios y rendirnos a Su sabiduría.`,
        multimedia: [
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=72rDwCPmd-w",
          },
        ],
      },
    ],
  },

  {
    id: 7,
    name: "Los Falsos Amigos: Consejos que No Provienen de Dios",
    image: "/images/hero4.jpg",
    description:
      "Un mensaje que advierte sobre escuchar voces incorrectas que pueden desviarnos de la verdad y del propósito de Dios.",
    sections: [
      {
        title: "Descripción",
        text: `En esta predicación basada en Job 4:1-6 y 8:1-6, el Pastor Edwin Molina expone cómo los amigos de Job, aunque bien intencionados, hablaron sin conocimiento y sin discernimiento espiritual. Sus palabras no edificaron, sino que lastimaron. Esta enseñanza nos recuerda la importancia de rodearnos de personas guiadas por Dios y de no permitir que voces equivocadas influencien nuestra fe.`,
        multimedia: [
          
        ],
      },
      {
        title: "Introducción",
        text: `Cuando Job atraviesa su peor momento, sus amigos Elifaz y Bildad llegan no para consolarlo, sino para juzgarlo y acusarlo. Este mensaje del Pastor Edwin Molina nos enseña a identificar consejos que parecen sabios, pero que no vienen de Dios. Nos invita a discernir qué voces escuchar y a no permitir que palabras equivocadas contaminen nuestro corazón en los tiempos de crisis.`,
        multimedia: [
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=4f24jelEh0A",
          },
        ],
      },
    ],
  },

  {
    id: 8,
    name: "La Caída del Hombre de Dios: Job en su Momento Más Oscuro",
    image: "/images/hero4.jpg",
    description:
      "Una enseñanza que revela cómo incluso el hombre justo puede llegar a quebrarse, pero Dios permanece fiel.",
    sections: [
      {
        title: "Descripción",
        text: `Basada en Job 3:1-26, esta predicación del Pastor Edwin Molina muestra el momento en que Job, quebrado por el dolor, maldice el día en que nació. A pesar de su rectitud, Job llegó a un punto de desesperación profunda. Este mensaje nos recuerda que incluso los hombres de Dios pueden tener momentos de oscuridad, pero Dios sigue cerca, sosteniendo y guiando hacia la restauración.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `Job había perdido todo. Su dolor era tan grande que expresó palabras de angustia como nunca antes. En Job 3 vemos a un hombre que tocó fondo emocionalmente. El Pastor Edwin Molina nos enseña que la caída emocional no significa el fin, sino un punto donde Dios comienza a tratar el corazón. La predicación invita a confiar en Dios aun cuando el alma está herida.`,
        multimedia: [
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=m_9a0K6D8Gc",
          },
        ],
      },
    ],
  },

  {
    id: 9,
    name: "El Disfraz del Diablo: Cuando la Voz No Viene de Dios",
    image: "/images/hero4.jpg",
    description:
      "Una enseñanza que revela cómo el enemigo puede usar voces cercanas para desviarnos del propósito de Dios.",
    sections: [
      {
        title: "Descripción",
        text: `Basada en Mateo 16:21-23, esta predicación del Pastor Edwin Molina expone cómo Pedro, sin darse cuenta, se convirtió en un instrumento para intentar desviar a Jesús del plan de Dios. Jesús lo confronta diciendo: “Apártate de mí, Satanás”. Este mensaje nos recuerda que el enemigo puede disfrazarse de buenas intenciones y que debemos discernir la voz de Dios de la voz del enemigo.`,
        multimedia: [],
      },
      {
        title: "Introducción",
        text: `Jesús reveló a sus discípulos que debía padecer y morir, pero Pedro lo reprendió, queriendo evitar el sufrimiento. Sin embargo, su consejo no venía de Dios, sino de una influencia equivocada. El Pastor Edwin Molina enseña que no toda voz cercana es voz de Dios. Esta predicación nos llama a discernir, a no seguir palabras que nos alejan del propósito y a reconocer cuándo el enemigo quiere desviar nuestro camino.`,
        multimedia: [
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=3FOlrSvn0EM",
          },
        ],
      },
    ],
  },
];
