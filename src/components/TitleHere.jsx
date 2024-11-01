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
        height: "70vh",
      }} // Set the background color and position
      className="flex items-center p-10"
    >
      {/* Left Side: Single Image */}
      <div className="flex justify-center items-center w-1/2">
        <img
          src={largeImage}
          alt="Large Image"
          className="rounded-full w-80 h-80 object-cover" // Adjusted size for larger image
        />
      </div>

      {/* Right Side: Title, Paragraph, Button */}
      <div className="text-left w-1/3 text-[#21243d] font-montserrat">
        {/* Changed to text-left for alignment */}
        <div className="text-5xl font-bold ">Title Here</div>
        <p className="mt-4 text-xl">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.{" "}
        </p>
        <button
          className="mt-6 text-white px-10 py-2 rounded-full text-xl transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105" // Added hover effect
          style={{ backgroundColor: "#21243d" }}
        >
          Order Now
        </button>
      </div>

      {/* Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner Image 1"
        className="absolute top-0 left-20 w-20 h-20" // Top-left corner
      />
      <img
        src={cornerImage2}
        alt="Corner Image 2"
        className="absolute top-0 right-20 w-20 h-20" // Top-right corner
      />
      <img
        src={cornerImage3}
        alt="Corner Image 3"
        className="absolute bottom-0 left-20 w-20 h-20" // Bottom-left corner
      />
      <img
        src={cornerImage4}
        alt="Corner Image 4"
        className="absolute bottom-0 right-20 w-20 h-20" // Bottom-right corner
      />
    </section>
  );
}
