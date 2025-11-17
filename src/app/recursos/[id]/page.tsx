"use client";
import React from "react";
import dayjs from "dayjs";
import EventSection from "@/components/utils/section";
import { EVENTS, RESOURCES } from "@/utils/dummy";
import { useParams } from "next/navigation";
import { PiClockBold } from "react-icons/pi";
import "dayjs/locale/es";
dayjs.locale("es");

const ResourcesPage = () => {
  const { id } = useParams();

  const resource = RESOURCES?.find(
    (item) => item?.id == parseInt(id as string)
  );

  return (
    <div>
      <div
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat lg:pl-16"
        style={{ backgroundImage: `url(${resource?.image})` }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        {/* Contenido */}
        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center px-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
              {resource?.name}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200">
              {resource?.description}
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-[#170f40] px-6 md:px-20 py-10">
        {resource?.sections?.map((section, index) => (
          <EventSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
