'use client'
import React from "react";
import { useRouter } from "next/navigation";


const ResourcesComponent = () => {
  const router = useRouter();

  return (
    <div
      className="relative flex flex-col p-8 gap-24 bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: "url('/images/meet.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#170f40] to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#170f40] to-transparent"></div>
      <div className="relative flex flex-col gap-24 z-10 h-fit justify-center items-center py-28">
        <div className="flex flex-col justify-center items-center gap-10 max-w-[550px]">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl text-white text-center">
            CRECÉ EN TU FE
          </h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="text-lg text-gray-200 text-center">
              Compartimos recursos que inspiran, enseñan y acompañan tu vida
              diaria con la Palabra de Dios, recordándote que Él siempre está
              con vos.
            </h4>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="w-full flex gap-7 flex-col md:flex-row">
            <div className="w-full h-[300px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300"></div>
            <div className="w-full h-[300px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300"></div>
            <div className="w-full h-[300px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300"></div>
          </div>
          <button onClick={() => router?.push('/recursos')} className="cursor-pointer bg-white/10 backdrop-blur-lg rounded-full px-5 py-2 text-white hover:scale-105 transition-all duration-300 w-fit">
            Ver mas recursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesComponent;
