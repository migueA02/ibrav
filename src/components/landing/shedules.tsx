import React from "react";

const SchedulesComponent = () => {
  return (
    <div
      className="relative flex flex-col p-8 gap-24 bg-cover bg-center bg-no-repeat w-full"
      style={{ backgroundImage: "url('/images/adoracion.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#170f40] to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#170f40] to-transparent"></div>
      <div className="relative flex flex-col gap-24 z-10 h-fit justify-center items-center py-48">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl text-white text-center">
            UNITE A NOSOTROS
          </h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-lg text-white font-medium text-center">
              ESTAMOS LISTOS PARA RECIBIRTE
            </h3>
            <h4 className="text-lg text-gray-200 text-center">
              Te brindamos información de nuestros eventos principales
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-around gap-10 ">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md w-full max-w-[300px]"
            >
              <h3 className="text-white font-extrabold font-inter text-2xl">
                Miércoles
              </h3>
              <p className="text-white font-normal text-lg">Templo</p>
              <p className="text-white font-normal text-lg">
                Noches de culto
              </p>
              <p className="text-white font-medium text-lg">7 PM</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulesComponent;
