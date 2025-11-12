import React from "react";
import InputComponent from "../utils/input";
import TextareaComponent from "../utils/textarea";

const VolunteeringForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {" "}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px]">
        <div className="col-span-1 md:col-span-2">
          {" "}
          <InputComponent placeholder="Nombre Completo" type="text"/>
        </div>
        <InputComponent placeholder="Telefono" type="phone"/>
        <InputComponent placeholder="Correo Electronico" type="email"/>
        <div className="col-span-1 md:col-span-2">
          <TextareaComponent placeholder="Contanos por qué te gustaría ser voluntario" />
        </div>
       
      </form>
       <button className="px-[18px] py-[10px] rounded-lg bg-indigo-700 text-white font-medium text-[16px] leading-6 font-inter cursor-pointer hover:scale-105 transition-all duration-300">Enviar mi solicitud</button>
    </div>
  );
};

export default VolunteeringForm;
