import React from "react";
import cornerImage1 from "../assets/shape.png";
import cornerImage2 from "../assets/shape (7).png";
import cornerImage3 from "../assets/shape (8).png";
import cornerImage4 from "../assets/shape (9).png";
import cornerImage5 from "../assets/shape.png";
import cornerImage6 from "../assets/shape (7).png";

export default function Subscribe() {
  return (
    <section
      style={{
        backgroundColor: "#ffd17e",
        position: "relative",
        height: "70vh",
      }}
      className="p-10 text-center font-montserrat" // Apply Montserrat font family here
    >
      {/* Background Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner Image 1"
        className="absolute top-0 left-30 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage2}
        alt="Corner Image 2"
        className="absolute top-0 right-20 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage3}
        alt="Corner Image 3"
        className="absolute bottom-0 left-20 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage4}
        alt="Corner Image 4"
        className="absolute bottom-0 right-30 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage5}
        alt="Middle Left"
        className="absolute left-30 top-1/2 transform -translate-y-1/2 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage6}
        alt="Middle Right"
        className="absolute right-20 top-1/2 transform -translate-y-1/2 w-20 h-20 object-cover"
      />
      <h2 className="text-5xl font-bold mb-10" style={{ color: "#21243d" }}>
        Title Here
      </h2>
      <p className="mt-2 text-2xl mb-10" style={{ color: "#21243d" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      {/* Flex container for input and button */}
      <div className="flex justify-center mt-6">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded-l-full text-lg w-80" // Increased width to 80 (adjust as needed)
        />
        <button
          className="bg-dark-blue hover:bg-blue-800 text-white px-6 py-2 rounded-r-full transition duration-300" // Increased padding and added hover effect
          style={{ backgroundColor: "#21243d" }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}
