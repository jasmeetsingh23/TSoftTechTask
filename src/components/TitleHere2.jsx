import React from "react";
import largeImage from "../assets/img1.png"; // Import your main image
import cornerImage1 from "../assets/shape.png";
import cornerImage2 from "../assets/shape7.png";
import cornerImage3 from "../assets/shape8.png";
import cornerImage4 from "../assets/shape9.png";

export default function TitleHere2() {
  return (
    <section
      style={{
        backgroundColor: "#ffd17e",
        position: "relative",
        height: "70vh",
      }} // Set the background color and position
      className="flex p-10"
    >
      {/* Left Side: Title, Paragraph, Button */}
      <div className="flex flex-col justify-center w-1/2 text-left text-[#21243d] font-montserrat">
        <div className="text-5xl font-bold">Title Here</div>
        <p className="mt-4 text-xl">
          <span>Lorem ipsum dolor sit amet, </span>
          <span>consectetur adipiscing elit.</span>
          <br />
          <span>Vivamus lacinia odio vitae vestibulum vestibulum.</span>
        </p>
        <button
          className="mt-6 text-white rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800" // Added hover effects
          style={{
            backgroundColor: "#21243d",
            maxWidth: "150px", // Set a maximum width for the button
            padding: "10px 25px", // Adjust padding if needed
          }}
        >
          Order Now
        </button>
      </div>

      {/* Right Side: Single Image and Corner Images */}
      <div className="relative w-1/2 flex justify-center items-center">
        <img
          src={largeImage}
          alt="Large Image"
          className="rounded-full w-80 h-80 object-cover" // Adjusted size for larger image
        />
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
      </div>
    </section>
  );
}
