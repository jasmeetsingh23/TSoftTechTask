import React from "react";
import backgroundImage from "../assets/r.png";
import centerImage from "../assets/Img2.png";

export default function Phoebe() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
      className="relative text-white p-6 sm:p-10 text-center font-montserrat"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="mt-6">
          <img
            src={centerImage}
            alt="Center"
            className="mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full"
          />
        </div>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
          If you are a culinary fan, if you like to spend time
          <br className="hidden sm:block" /> in your kitchen, you likely find
          yourself looking for <br className="hidden sm:block" />
          reliable resources through which you can
        </p>
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
          Phoebe Frazier
        </div>
      </div>
    </section>
  );
}
