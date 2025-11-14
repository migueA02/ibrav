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
        className="relative h-[500px] flex items-center justify-center overflow-x-hidden pl-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${event?.image})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#170f40] to-transparent"></div>

        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl text-white">
              {event?.name}
            </h1>
            <p className="mt-8 text-lg text-gray-200">{event?.description}</p>
          </div>
        </div>

        <div className="absolute bottom-12 right-8 md:right-14 flex flex-col gap-2">
          <div className="flex items-center capitalize gap-2 ">
            <PiClockBold className="text-lg text-white" />
            <p className="text-white text-md leading-relaxed font-semibold">
              {start} - {end}
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-[#170f40] px-10 md:px-20 lg:px-50 py-10 ">
        {event?.sections?.map((section, index) => (
          <EventSection key={index} date={event?.date} section={section} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
