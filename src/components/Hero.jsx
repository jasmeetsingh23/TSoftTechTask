import React from "react";
import backgroundImage from "../assets/u.png"; // Adjust the path to your image file

export default function Hero() {
  return (
    <section
      className="text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div className="flex flex-col items-start justify-center h-full px-6 sm:px-10">
        <div className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-bold font-montserrat text-left">
          Title Here
        </div>
        <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-normal font-montserrat mt-4 text-left max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-6">
          <button
            className="text-white px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 rounded-full text-[16px] sm:text-[20px] md:text-[24px] font-montserrat transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            style={{ backgroundColor: "#21243d" }}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
