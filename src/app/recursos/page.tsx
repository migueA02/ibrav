import CardComponent from "@/components/utils/card";
import { RESOURCES } from "@/utils/dummy";
import React from "react";

const ResourcesPage = () => {
  return (
    <>
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat lg:pl-16"
        style={{ backgroundImage: "url('/images/meet.jpg')" }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        {/* Contenido */}
        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center px-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
              CRECÉ EN TU FE
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200">
              Compartimos recursos que inspiran, enseñan y acompañan tu vida
              diaria con la Palabra de Dios, recordándote que Él siempre está
              con vos.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-[#170f40] px-6 md:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {RESOURCES.map((item) => (
            <CardComponent key={item?.id} type="recursos" data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
