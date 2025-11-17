'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutUsPage = () => {

  const router = useRouter()
  return (
    <>
      {/* Hero */}
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat lg:pl-16"
        style={{ backgroundImage: "url('/images/hero4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center px-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
              QUIÉNES SOMOS
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200">
              Somos una iglesia que vive para conocer más a Dios y hacerlo
              conocido. En cada encuentro, Él transforma corazones y renueva
              vidas.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Misión y Visión */}
      <section className="h-full w-full bg-[#170f40] px-6 md:px-20 py-16 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#1c144c] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
            <p className="text-gray-200 leading-relaxed">
              Compartir el amor de Dios en cada acción, palabra y gesto. Formar
              discípulos que crezcan en su fe, sirvan con alegría y lleven luz
              y esperanza a cada rincón de nuestra comunidad.
            </p>
          </div>
          <div className="bg-[#1c144c] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Nuestra Visión</h3>
            <p className="text-gray-200 leading-relaxed">
              Ser una iglesia que inspire a vivir una vida llena de fe, amor y
              servicio. Soñamos con una comunidad donde cada persona conozca a
              Jesús, encuentre su lugar y pueda impactar a otros con su testimonio.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-200">
            <div>
              <h4 className="font-bold mb-2">Amor y Compasión</h4>
              <p>Nos preocupamos por cada persona, mostrando empatía y cuidado en todo momento.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Servicio y Generosidad</h4>
              <p>Cada acción de ayuda y cada proyecto refleja nuestro deseo de servir a otros como Jesús lo hizo.</p>
            </div>
            <div>
              <h4 className="font-bold  mb-2">Integridad y Honestidad</h4>
              <p>Vivimos con transparencia, justicia y coherencia entre lo que creemos y lo que hacemos.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Comunidad y Unidad</h4>
              <p>Valoramos el trabajo en equipo, la amistad y el acompañamiento mutuo.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Discipulado y Crecimiento Espiritual</h4>
              <p>Fomentamos el aprendizaje, la oración y la formación de líderes comprometidos con la Palabra de Dios.</p>
            </div>
          </div>
        </div>

        {/* Historia alternando texto e imagen */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nuestra Historia</h3>
            <p className="text-gray-200 leading-relaxed">
              Nuestra iglesia nació con el sueño de ser un espacio donde todos puedan acercarse a Dios y vivir en comunidad. Comenzamos con un pequeño grupo de personas comprometidas y, con el tiempo, Dios nos ha guiado para crecer, expandir nuestros ministerios y tocar más vidas. Cada actividad, proyecto o encuentro refleja nuestra pasión por la Palabra y nuestra convicción de que todos tienen un lugar en esta familia espiritual.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image src="/images/hero4.jpg" alt="Nuestra Historia" fill className="object-cover" />
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Únete a Nuestra Comunidad</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Te invitamos a conocer nuestra comunidad y ser parte de ella. Ven a compartir, aprender, servir y vivir la fe con nosotros. Aquí encontrarás un lugar donde puedes crecer, encontrar apoyo y descubrir tu propósito en Cristo.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => router?.push('/eventos')} className="bg-white text-[#170f40] px-6 py-3 rounded-lg hover:bg-gray-200 transition cursor-pointer hover:scale-105">
              Participá en un Evento
            </button>
            <button onClick={() => router?.push('/')}  className="bg-[#fff]/20 border border-white text-white px-6 py-3 rounded-lg hover:bg-white/30 transition cursor-pointer  hover:scale-105">
              Conocé Más
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
