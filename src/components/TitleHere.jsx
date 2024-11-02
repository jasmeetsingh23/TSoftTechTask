import React from "react";
import largeImage from "../assets/Img.png"; // Import your main image
import cornerImage1 from "../assets/Shape.png";
import cornerImage2 from "../assets/Shape7.png";
import cornerImage3 from "../assets/Shape8.png";
import cornerImage4 from "../assets/Shape9.png";

export default function TitleHere() {
  return (
    <section
      style={{
        backgroundColor: "#ffd17e",
        position: "relative",
      }}
      className="flex flex-col lg:flex-row items-center p-6 lg:p-10 h-auto lg:h-[70vh]"
    >
      {/* Left Side: Single Image */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          src={largeImage}
          alt="Large Image"
          className="rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover"
        />
      </div>

      {/* Right Side: Title, Paragraph, Button */}
      <div className="text-center lg:text-left w-full lg:w-1/3 text-[#21243d] font-montserrat px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Title Here
        </h2>
        <p className="mt-4 text-lg sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
        <button
          className="mt-6 text-white px-6 py-2 sm:px-10 sm:py-3 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
          style={{ backgroundColor: "#21243d" }}
        >
          Order Now
        </button>
      </div>

      {/* Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner Image 1"
        className="absolute top-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage2}
        alt="Corner Image 2"
        className="absolute top-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage3}
        alt="Corner Image 3"
        className="absolute bottom-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage4}
        alt="Corner Image 4"
        className="absolute bottom-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
    </section>
  );
}
