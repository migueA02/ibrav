"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  PiMapPinFill,
  PiPhoneFill,
  PiWhatsappLogoFill,
} from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#170f40] text-gray-200 w-full py-16 px-6 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/images/logo.jpg"
          alt="Logo IBRAV"
          width={70}
          height={70}
          className="rounded-full cursor-pointer border-2 border-gray-300"
          onClick={() => router.push("/")}
        />
        <h2 className="text-xl font-semibold text-white mt-4 tracking-wide">
          IBRAV
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 text-center md:text-left">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white mb-1">Contáctanos</h3>

          <a
            href="tel:+50687801673"
            className="flex items-center justify-center md:justify-start gap-3 hover:text-[#38bdf8] transition"
          >
            <PiPhoneFill className="text-xl " />
            <span>+506 8780 1673</span>
          </a>

          <a
            href="https://wa.me/50688727998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 hover:text-green-400 transition"
          >
            <PiWhatsappLogoFill className="text-xl " />
            <span>+506 8872 7998</span>
          </a>
          <a
            href="mailto:emolin137@gmail.com"
            className="flex items-center justify-center md:justify-start gap-3 hover:text-yellow-400 transition"
          >
            <MdEmail className="text-xl" />
            <span>emolin137@gmail.com</span>
          </a>
        </div>

        <div className="flex flex-col gap-3 max-w-[300px]">
          <h3 className="text-lg font-semibold text-white mb-1">Ubicación</h3>
          <div className="flex items-start justify-center md:justify-start gap-3">
            <PiMapPinFill className="text-xl text-white min-w-[20px]" />
            <p>
              Del Ebais de San Bosco 325 m sureste, Heredia, Santa Bárbara, 40406
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-10">
        <a
          href="https://www.facebook.com/ibravcr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1a55] hover:bg-[#38bdf8] transition"
        >
          <FaFacebookF className="text-white text-lg" />
        </a>

        <a
          href="https://www.instagram.com/ibrav_cr/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1a55] hover:bg-pink-500 transition"
        >
          <FaInstagram className="text-white text-lg" />
        </a>
      </div>
      <div className="w-full border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} IBRAV. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default FooterComponent;
