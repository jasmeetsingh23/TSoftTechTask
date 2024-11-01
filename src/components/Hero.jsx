import React from "react";
import backgroundImage from "../assets/u.png"; // Adjust the path to your image file

export default function Hero() {
  return (
    <section
      className="text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
        backgroundSize: "100% 100%", // Stretch the image to cover the section fully
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent repeating the image
        height: "80vh", // Full height of the viewport
      }}
    >
      <div className="flex flex-col items-start justify-center h-full pl-10">
        <div className="text-[90px] font-bold text-white font-montserrat text-left">
          Title Here
        </div>
        <p className="text-[25px] text-white font-normal font-montserrat mt-4 text-left w-full">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-6">
          <button
            className="text-white px-14 py-4 rounded-full text-[24px] font-montserrat transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
            style={{ backgroundColor: "#21243d" }}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
