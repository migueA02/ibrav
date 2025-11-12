"use client";
import { useRouter } from "next/navigation";
import React from "react";

const EventsComponent = () => {
  const router = useRouter();

  return (
    <div className="bg-[#170f40] py-14 w-full flex justify-center items-center flex-col gap-24 px-8">
      <div className="flex flex-col justify-center items-center gap-10 max-w-[550px]">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl text-white text-center">
          NUESTROS EVENTOS
        </h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <h4 className="text-lg text-gray-200 text-center">
            Cada encuentro es una oportunidad para adorar, crecer en fe y
            compartir con otros lo que Dios está haciendo en nuestras vidas.
          </h4>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex gap-7 flex-col md:flex-row">
          <div className="w-full h-[300px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300"></div>
          <div className="w-full h-[300px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300"></div>
          <div className="w-full h-[300px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300"></div>
        </div>
        <button
          onClick={() => router?.push("/eventos")}
          className="cursor-pointer bg-white/10 backdrop-blur-lg rounded-full px-5 py-2 text-white hover:scale-105 transition-all duration-300 w-fit"
        >
          Ver mas eventos
        </button>
      </div>
    </div>
  );
};

export default EventsComponent;
