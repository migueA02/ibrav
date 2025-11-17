"use client";
import React from "react";
import dayjs from "dayjs";
import EventSection from "@/components/utils/section";
import { EVENTS } from "@/utils/dummy";
import { useParams } from "next/navigation";
import { PiClockBold } from "react-icons/pi";
import "dayjs/locale/es";
dayjs.locale("es");

const EventPage = () => {
  const { id } = useParams();

  const event = EVENTS?.find((event) => event?.id == parseInt(id as string));

  const start = dayjs(event?.date?.start)?.format("dddd, D [de] MMMM h:mm A");
  const end = dayjs(event?.date?.end)?.format("h:mm A");


  return (
   <div>
  <div
    className="relative h-[500px] flex items-center justify-center overflow-x-hidden bg-cover bg-center bg-no-repeat lg:pl-16"
    style={{ backgroundImage: `url(${event?.image})` }}
  >
    {/* Overlay oscuro */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Degradado inferior */}
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

    {/* Contenido principal */}
    <div className="relative flex-1 flex items-center justify-center z-10">
      <div className="max-w-2xl text-center px-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
          {event?.name}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-200">
          {event?.description}
        </p>
      </div>
    </div>

    {/* Hora del evento */}
    <div className="absolute bottom-12 right-6 md:right-14 flex flex-col gap-2 z-10">
      <div className="flex items-center capitalize gap-2">
        <PiClockBold className="text-lg text-white" />
        <p className="text-white text-md leading-relaxed font-semibold">
          {start} - {end}
        </p>
      </div>
    </div>
  </div>

  {/* Secciones del evento */}
  <div className="h-full w-full bg-[#170f40] px-6 md:px-20 py-10">
    {event?.sections?.map((section, index) => (
      <EventSection key={index} date={event?.date} section={section} />
    ))}
  </div>
</div>

  );
};

export default EventPage;
