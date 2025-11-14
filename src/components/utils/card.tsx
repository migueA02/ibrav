"use client";
import React from "react";
import { PiClockBold } from "react-icons/pi";
import "dayjs/locale/es";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";

dayjs.locale("es");

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  type: string;
}

const CardComponent: React.FC<Props> = ({ data, type }) => {
  const router = useRouter();

  const start = dayjs(data?.date?.start)?.format("dddd, D [de] MMMM h:mm A");
  const end = dayjs(data?.date?.end)?.format("h:mm A");

  const handleRedirect = (id: number) => {
    router?.push(`/${type}/${id}`);
  };

  return (
    <div
      className="w-full h-[300px] bg-cover bg-center bg-no-repeat rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden "
      style={{
        backgroundImage: `url(${data?.image})`,
      }}
      onClick={() => handleRedirect(data?.id)}
    >
      <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      <div className="absolute bottom-4 left-4 z-10 text-white space-y-1">
        <h3 className="text-xl font-semibold">{data?.name}</h3>
        {/* <p className="text-lg text-gray-200 text-start line-clamp-2">
          {event?.description}
        </p> */}
        {data?.date ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center capitalize gap-2 ">
              <PiClockBold className="text-lg text-white" />
              <p className="text-white text-md leading-relaxed font-semibold">
                {start} - {end}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardComponent;
