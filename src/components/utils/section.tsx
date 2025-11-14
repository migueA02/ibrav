"use client";
import React from "react";
import { EventDate, EventSection as EventSectionType } from "@/types/event";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import dayjs from "dayjs";

import "dayjs/locale/es";
dayjs.locale("es");

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  section: any;
  date?: EventDate;
}

const EventSection: React.FC<Props> = ({ section }) => {
  const images = section.multimedia.filter((m: any) => m.type === "image");
  const videos = section.multimedia.filter((m: any) => m.type === "video");

  const renderImages = () => {
    const count = images.length;

    if (count === 1) {
      return (
        <img
          src={images[0].src}
          alt="image-0"
          className="w-full h-auto rounded-2xl object-cover"
        />
      );
    }

    if (count === 2) {
      return (
        <div className="grid grid-cols-2 gap-3">
          {images.map((img:any, idx:any) => (
            <img
              key={idx}
              src={img.src}
              alt={`image-${idx}`}
              className="w-full h-auto rounded-2xl object-cover"
            />
          ))}
        </div>
      );
    }

    if (count === 3) {
      return (
        <div className="grid grid-cols-3 gap-3">
          <img
            src={images[0].src}
            alt="image-0"
            className="col-span-2 row-span-2 w-full h-full object-cover rounded-2xl"
          />
          <div className="flex flex-col gap-3">
            <img
              src={images[1].src}
              alt="image-1"
              className="w-full h-full object-cover rounded-2xl"
            />
            <img
              src={images[2].src}
              alt="image-2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      );
    }

    // 4 o más imágenes: grid flexible
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((img: any, idx: number) => (
          <img
            key={idx}
            src={img.src}
            alt={`image-${idx}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        ))}
      </div>
    );
  };

  console.log("sections");
  return (
    <div className="flex flex-col gap-6 my-10 relative">
      
      {section.title && (
        <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
      )}

      <p className="text-white text-lg leading-relaxed ">{section.text}</p>

      {images.length > 0 && renderImages()}

      {videos.length > 0 &&
        videos.map((video: any, idx:any) => {
          // Extraer ID de YouTube si es una URL
          let videoId = video.src;
          if (
            video.src.includes("youtube.com") ||
            video.src.includes("youtu.be")
          ) {
            try {
              const url = new URL(video.src);
              videoId =
                url.searchParams.get("v") ||
                url.pathname.split("/").pop() ||
                "";
            } catch {}
          }

          return (
            <div
              key={idx}
              className="aspect-video w-full rounded-2xl overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          );
        })}
    </div>
  );
};

export default EventSection;
