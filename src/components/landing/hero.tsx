"use client";
import React from "react";

const HeroComponent = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat lg:pl-16"
      style={{ backgroundImage: "url('/images/hero4.jpg')" }}
    >
      {/* Capa oscura encima del fondo */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

      {/* Contenido */}
      <div className="relative flex-1 flex items-center justify-center z-10">
        <div className="max-w-2xl text-center px-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
            Iglesia Bíblica Ríos de Agua Viva
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-200">
            Comprometidos con Cristo y su obra para los que no le conocen se
            acerquen a Él por medio de la salvación que solo es en Cristo Jesús.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
