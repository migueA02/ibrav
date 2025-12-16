import InformationComponent from "@/components/contact/information";
import MapComponent from "@/components/contact/map";
import SendEmailForm from "@/components/contact/send-email-form";
import React from "react";

const ContactPage = () => {
  return (
    <div  className="bg-[#170f40]">
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat lg:pl-16 "
        style={{ backgroundImage: "url('/images/hero4.jpg')" }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        {/* Contenido */}
        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center px-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
              Contactenos
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200">
              Cada encuentro es una oportunidad para adorar, crecer en fe y
              compartir con otros lo que Dios está haciendo en nuestras vidas.
            </p>
          </div>
        </div>
      </div>

      <MapComponent />
      <div className="max-w-[1300px] mx-auto px-4 flex-col flex lg:flex-row gap-[30px] mt-[90px] ">
        <InformationComponent />
        <SendEmailForm />
      </div>
    </div>
  );
};

export default ContactPage;
