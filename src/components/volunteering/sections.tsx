import React from "react";
import Image from "next/image";
import VolunteeringForm from "./form";

const SectionsComponent = () => {
  return (
    <div className="w-full bg-[#170f40]  py-24 flex flex-col items-center space-y-32 mt-20">
      <div className="px-6 md:px-20 space-y-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 ">
          <div className="flex-1 space-y-3">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Serví con propósito
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Todos fuimos creados con un propósito. Cada talento, palabra y
              gesto pueden ser usados por Dios para tocar vidas. Servir no se
              trata solo de cumplir una tarea: es participar en lo que Él está
              haciendo en el mundo.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Cuando decidís servir, estás diciendo “sí” al llamado de Jesús a
              amar y a dar. Tal vez pensás que no tenés mucho para ofrecer, pero
              cuando ponés tus manos en las de Dios, Él multiplica todo lo que
              hacés.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              En nuestra iglesia creemos que cada voluntario es una pieza
              esencial del cuerpo de Cristo. Desde el que saluda con una sonrisa
              hasta quien ora o enseña, todos forman parte de la misma misión:
              hacer visible el amor de Dios.
            </p>
            <p className="text-gray-400 italic text-right">
              “Cada uno ponga al servicio de los demás el don que haya
              recibido...” — 1 Pedro 4:10
            </p>
          </div>

          <div className="relative flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/proposito.jpg"
              alt="Serví con propósito"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 hidden md:block"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="flex-1 space-y-3">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Juntos somos iglesia
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              La iglesia no es un edificio, es una familia. Y como toda familia,
              crece cuando cada uno aporta su parte, con alegría, compromiso y
              amor.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Servir te permite conocer personas increíbles, compartir momentos
              de fe y construir amistades que nacen del corazón de Dios.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Cuando servimos juntos, Dios se mueve de maneras poderosas. No hay
              tarea pequeña ni persona invisible. Todo lo que hacemos con amor
              tiene un impacto eterno.
            </p>
            <p className="text-gray-400 italic text-right">
              “Porque donde están dos o tres reunidos en mi nombre...” — Mateo
              18:20
            </p>
          </div>

          <div className="relative flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/juntos.jpg"
              alt="Juntos somos iglesia"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 hidden md:block"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 space-y-3">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Dejá tu huella
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Tu tiempo puede cambiar historias. Tus palabras pueden levantar a
              alguien que ha perdido la esperanza. Tus talentos pueden ser
              herramientas para que otros conozcan a Cristo.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              El servicio voluntario no solo transforma a los demás, también te
              transforma a vos. Cada experiencia, cada sonrisa, cada desafío es
              una oportunidad para crecer en fe, humildad y gratitud.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              No importa tu edad o experiencia. Lo único que necesitás es un
              corazón dispuesto. Dios se encargará del resto.
            </p>
            <p className="text-gray-400 italic text-right">
              “Y todo lo que hagáis, hacedlo de corazón...” — Colosenses 3:23
            </p>
          </div>

          <div className="relative flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/huella.jpg"
              alt="Dejá tu huella"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 hidden md:block"
            />
          </div>
        </div>
      </div>
      <div
        className="relative flex flex-col p-8 gap-24 bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url('/images/volunteering.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#170f40] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#170f40] to-transparent"></div>
        <div className="relative flex flex-col gap-24 z-10 h-fit justify-center items-center py-48">
          <div className="w-full max-w-3xl text-center flex flex-col gap-16 mt-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
                ¡Queremos servir junto a vos!
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Sentís el deseo de poner tus dones al servicio de Dios? Completá
                el formulario y descubrí el lugar donde podés servir, crecer y
                compartir. Juntos podemos hacer que el amor de Dios llegue más
                lejos.
              </p>
            </div>

            <VolunteeringForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsComponent;
