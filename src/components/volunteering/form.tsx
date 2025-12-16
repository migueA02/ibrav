"use client";
import React from "react";
import InputComponent from "../utils/input";
import TextareaComponent from "../utils/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SpinnerComponent from "../utils/spinner";

const VolunteeringForm = () => {
  const form = React.useRef<HTMLFormElement>(null);

  const [loading, setLoading] = React.useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    console.log("form.current", form.current);
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
          console.log("log hola");
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
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      {" "}
      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[700px]"
      >
        {" "}
        <InputComponent
          name="name"
          placeholder="Nombre Completo"
          type="text"
          className="col-span-2"
          required
        />
        <InputComponent
          name="title"
          placeholder="Telefono"
          type="phone"
          className="col-span-2 md:col-span-1"
          required
        />
        <InputComponent
          name="email"
          placeholder="Correo Electronico"
          type="email"
          className="col-span-2 md:col-span-1"
          required
        />
        <div className="col-span-2">
          <TextareaComponent
            name="message"
            placeholder="Contanos por qué te gustaría ser voluntario"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`
          px-[18px] py-[10px] rounded-lg bg-indigo-700 text-white font-medium 
          text-[16px] leading-6 font-inter w-full col-span-2 cursor-pointer
          transition-all duration-300
          ${
            loading
              ? "cursor-not-allowed opacity-70"
              : "cursor-pointer hover:scale-105"
          }
        `}
        >
          {loading ? <SpinnerComponent /> : "Enviar mi solicitud"}
        </button>
      </form>
    </div>
  );
};

export default VolunteeringForm;
