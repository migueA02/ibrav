import CardComponent from "@/components/utils/card";
import { EVENTS } from "@/utils/dummy";
import React from "react";

const EventsPage = () => {
  return (
    <div>
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden pl-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/adoracion.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl text-white">
              NUESTROS EVENTOS
            </h1>
            <p className="mt-8 text-lg text-gray-200">
              Cada encuentro es una oportunidad para adorar, crecer en fe y
              compartir con otros lo que Dios está haciendo en nuestras vidas.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-[#170f40] px-10 md:px-20 py-10">
        {/* <input type="text" className="w-full" /> */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9 ">
          {" "}
          {EVENTS.map((item, index) => (
            <CardComponent key={index} type="eventos" data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
