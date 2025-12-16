import React from "react";

const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.1607363351578!2d-84.15511482962097!3d10.064810681584264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f0e53b2ffbfd%3A0xf2c36fd8e66d478a!2sIglesia%20B%C3%ADblica%20Rios%20de%20Agua%20Viva!5e1!3m2!1ses!2scr!4v1765754353869!5m2!1ses!2scr"
      className="w-full h-[578px]"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapComponent;
