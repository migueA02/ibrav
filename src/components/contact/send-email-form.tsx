"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Input from "@/components/utils/input";
import SpinnerComponent from "../utils/spinner";
import { toast } from "react-toastify";

// import { toast } from "react-toastify";

const SendEmailForm = () => {
  const form = React.useRef<HTMLFormElement>(null);

  const [loading, setLoading] = React.useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_hgiyxui",
        "template_k0kedxm",
        form.current,
        "naMHuEGWrintpWElV"
      )
      .then(
        (result) => {
          form.current?.reset();
          setLoading(false);
          toast.success("Mensaje enviado correctamente!");
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          toast.error("Algo salió mal");
        }
      );
  };


  return (
    <div className="flex flex-col p-[30px] bg-white/10 backdrop-blur-lg shadow-md rounded-2xl">
      <div className="flex flex-col gap-2.5 mb-[50px] justify-center items-center">
        <h1 className="font-inter text-[40px] font-bold text-white text-center">
          ¿Necesitás asistencia?
        </h1>
        <p className="text-[16px] text-base sm:text-lg text-gray-200 font-light text-center">
          Nuestro equipo está listo para escucharte. Completá el formulario y
          nos pondremos en contacto contigo lo más pronto posible para brindarte
          la solución que buscás.
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-5"
      >
        <Input name="name" placeholder="Nombre" required />
        <Input
          name="email"
          placeholder="Correo electronico"
          type="email"
          required
        />
        <Input name="title" placeholder="Asunto" required />
        <textarea
          required
          name="message"
          id="message"
          placeholder="Mensaje"
          className="w-full h-[158px] resize-none p-[13px] rounded-[10px] border border-[#e4e4e4] outline-0 focus:outline-0 ring-0 font-inter font-light text-[#4e4e4e] bg-white"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full px-6 py-3.5 rounded-[8px] bg-[#170f40] text-white font-inter text-[18px] leading-7 font-medium mt-8 hover:scale-[101%] transition-transform duration-300 ease-in-out h-[56px]"
        >
          {loading ? <SpinnerComponent /> : "Contactenos"}
        </button>
      </form>
    </div>
  );
};

export default SendEmailForm;
