import React from "react";
import largeImage from "../assets/Img1.png"; // Import your main image
import cornerImage1 from "../assets/Shape.png";
import cornerImage2 from "../assets/Shape7.png";
import cornerImage3 from "../assets/Shape8.png";
import cornerImage4 from "../assets/Shape9.png";

export default function TitleHere2() {
  return (
    <section
      style={{
        backgroundColor: "#ffd17e",
        position: "relative",
      }}
      className="flex flex-col lg:flex-row p-6 lg:p-10 h-auto lg:h-[70vh]"
    >
      {/* Left Side: Title, Paragraph, Button */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left text-[#21243d] font-montserrat px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Title Here
        </h2>
        <p className="mt-4 text-lg sm:text-xl">
          <span>Lorem ipsum dolor sit amet, </span>
          <span>consectetur adipiscing elit.</span>
          <br />
          <span>Vivamus lacinia odio vitae vestibulum vestibulum.</span>
        </p>
        <button
          className="mt-6 text-white rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800"
          style={{
            backgroundColor: "#21243d",
            maxWidth: "150px",
            padding: "10px 25px",
          }}
        >
          Order Now
        </button>
      </div>

      {/* Right Side: Single Image and Corner Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={largeImage}
          alt="Large Image"
          className="rounded-full w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover"
        />
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
      </div>
    </section>
  );
}
