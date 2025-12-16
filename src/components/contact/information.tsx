import React from "react";
import { IoIosPin } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { RiPhoneFill } from "react-icons/ri";

const InformationComponent = () => {
  return (
    <div className="flex flex-col p-[30px]">
      <div className="flex flex-col gap-2.5 mb-[50px] justify-center items-center">
        <h1 className="font-inter text-[40px] font-bold text-white">
          Contacto
        </h1>
        <p className="text-[16px] font-inter leading-7 text-base sm:text-lg text-gray-200 text-center">
          Contáctanos para cualquier consulta. Estamos disponibles para ayudarte
          con tus necesidades. Nuestro equipo responderá lo antes posible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
        <a
          href="tel:+50687801673"
          className="bg-white/10 backdrop-blur-lg shadow-md group py-[30px] px-[10px] rounded-2xl border flex flex-col justify-center items-center hover:border-blue-400 transition-colors duration-500"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-[#170f40] flex justify-center items-center group-hover:bg-blue-400 transition-colors duration-500">
            <RiPhoneFill className="text-white text-[20px]" />
          </div>
          <h6 className="font-inter text-[18px] leading-7 font-medium text-white mt-5 mb-4 group-hover:text-blue-400 transition-colors duration-500">
            Llamanos
          </h6>
          <p className="font-inter text-[16px] font-light leading-6 text-white break-words text-center w-full max-w-[220px] group-hover:text-blue-400 transition-colors duration-500">
            +506 8780 1673
          </p>
        </a>

        <a
          href="mailto:emolin137@gmail.com"
          className="group py-[30px] px-[20px] rounded-2xl border bg-white/10 backdrop-blur-lg shadow-md  flex flex-col justify-center items-center hover:border-blue-400 transition-colors duration-500 overflow-hidden"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-[#170f40] flex justify-center items-center group-hover:bg-blue-400 transition-colors duration-500">
            <MdEmail className="text-white text-[20px]" />
          </div>
          <h6 className="font-inter text-[18px] leading-7 font-medium text-white mt-5 mb-4 group-hover:text-blue-400 transition-colors duration-500">
            Contáctenos
          </h6>
          <p className="font-inter text-[16px] font-light leading-6 text-white break-words text-center w-full max-w-[220px] group-hover:text-blue-400 transition-colors duration-500">
            emolin137@gmail.com
          </p>
        </a>
        <a
         href="https://wa.me/50688727998"
         target="_blank"
          className="bg-white/10 backdrop-blur-lg shadow-md group py-[30px] px-[10px] rounded-2xl border flex flex-col justify-center items-center hover:border-blue-400 transition-colors duration-500"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-[#170f40] flex justify-center items-center group-hover:bg-blue-400 transition-colors duration-500">
            <PiWhatsappLogoFill className="text-white text-[20px]" />
          </div>
          <h6 className="font-inter text-[18px] leading-7 font-medium text-white mt-5 mb-4 group-hover:text-blue-400 transition-colors duration-500">
            Escribenos
          </h6>
          <p className="font-inter text-[16px] font-light leading-6 text-white break-words text-center w-full max-w-[220px] group-hover:text-blue-400 transition-colors duration-500">
            +506 8872 7998
          </p>
        </a>
        <a
          href="https://maps.app.goo.gl/dfdXcusDj6Srgdim8"
          target="_blank"
          rel="noopener noreferrer"
          className="group py-[30px] px-[10px] rounded-2xl border bg-white/10 backdrop-blur-lg shadow-md  flex flex-col justify-center items-center hover:border-blue-400 transition-colors duration-500"
        >
          <div className="h-[50px] w-[50px] rounded-full bg-[#170f40] flex justify-center items-center group-hover:bg-blue-400 transition-colors duration-500">
            <IoIosPin className="text-white text-[20px]" />
          </div>
          <h6 className="font-inter text-[18px] leading-7 font-medium text-white mt-5 mb-4 group-hover:text-blue-400 transition-colors duration-500">
            Encuéntrenos
          </h6>
          <p className="font-inter text-[16px] font-light leading-6 text-white text-center group-hover:text-blue-400 transition-colors duration-500 max-w-[220px]">
            Del Ebais de San Bosco 325 m sureste, Heredia, Santa Bárbara, 40406
          </p>
        </a>
      </div>
    </div>
  );
};

export default InformationComponent;
