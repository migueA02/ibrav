"use client";
import React from "react";

const HeroComponent = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-x-hidden pl-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

      <div className="relative flex-1 flex items-center justify-center z-10">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl text-white">
            Iglesia Bíblica Ríos de Agua Viva
          </h1>
          <p className="mt-8 text-lg text-gray-200">
            Comprometidos con Cristo y su obra para los que no le conocen se
            acerquen a Él por medio de la salvación que solo es en Cristo Jesús.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
