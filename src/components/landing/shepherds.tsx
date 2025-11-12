import React from "react";
import Image from "next/image";

const ShepherdsComponent = () => {
  return (
    <div className="relative h-fit md:h-[400px] w-full bg-[#170f40]">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-20 justify-center h-full max-w-6xl mx-auto px-8">
        <div className="flex-1 flex justify-center">
          <div className="relative mx-auto absolute bottom-0">
            <Image
              src="/images/parner.png"
              alt="hero"
              width={600}
              height={600}
              className="block"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                maskRepeat: "no-repeat",
                maskSize: "cover",
              }}
            />
          </div>
        </div>
        <div className="flex-1 text-white">
          <h2 className="text-4xl font-bold mb-4 text-white font-dancing text-center">
            Conoce a Nuestros Pastores
          </h2>
          <p className="text-lg leading-relaxed text-white text-center">
            Los pastores <span className="font-semibold">Edwin Molina</span> y{" "}
            <span className="font-semibold">Hannia Gamboa</span> sirven con un
            corazón lleno de amor y compromiso hacia Cristo. Su deseo es guiar a
            cada persona a conocer a Jesús y a vivir la esperanza transformadora
            que solo Él puede dar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShepherdsComponent;
