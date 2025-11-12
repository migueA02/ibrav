import React from "react";

const ResourcesPage = () => {
  return (
    <>
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden pl-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/meet.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl text-white">
              CRECÉ EN TU FE
            </h1>
            <p className="mt-8 text-lg text-gray-200">
              Compartimos recursos que inspiran, enseñan y acompañan tu vida
              diaria con la Palabra de Dios, recordándote que Él siempre está
              con vos.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-[#170f40] px-10 md:px-20 py-10">
        {/* <input type="text" className="w-full" /> */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 ">
          {" "}
          {[1, 2, 3, 4, 5, 6, 7, 9].map((item) => (
            <div
              key={item}
              className="h-[200px] bg-white/10 backdrop-blur-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
