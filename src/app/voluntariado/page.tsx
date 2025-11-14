import React from "react";
import SectionsComponent from "@/components/volunteering/sections";

const VolunteeringPage = () => {
  return (
    <div className="bg-[#170f40]">
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden pl-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/volunteering.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl text-white">
              SERVÍ CON PROPÓSITO
            </h1>
            <p className="mt-8 text-lg text-gray-200">
              Cada persona tiene dones únicos que Dios puede usar para
              transformar vidas. Ser voluntario no se trata solo de ayudar, sino
              de servir con amor, alegría y propósito.
            </p>
          </div>
        </div>
      </div>

     <SectionsComponent/>
    </div>
  );
};

export default VolunteeringPage;
