import React from "react";
import cornerImage1 from "../assets/Shape.png";
import cornerImage2 from "../assets/Shape7.png";
import cornerImage3 from "../assets/Shape8.png";
import cornerImage4 from "../assets/Shape9.png";
import cornerImage5 from "../assets/Shape.png";
import cornerImage6 from "../assets/Shape7.png";

export default function Subscribe() {
  return (
    <section
      style={{
        backgroundColor: "#ffd17e",
        position: "relative",
      }}
      className="p-6 sm:p-10 text-center font-montserrat h-auto sm:h-[70vh]"
    >
      {/* Background Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner Image 1"
        className="absolute top-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage2}
        alt="Corner Image 2"
        className="absolute top-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage3}
        alt="Corner Image 3"
        className="absolute bottom-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage4}
        alt="Corner Image 4"
        className="absolute bottom-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage5}
        alt="Middle Left"
        className="absolute left-10 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage6}
        alt="Middle Right"
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />

      {/* Title and Paragraph */}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10"
        style={{ color: "#21243d" }}
      >
        Title Here
      </h2>
      <p
        className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-10"
        style={{ color: "#21243d" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br className="hidden sm:block" />
        Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>

      {/* Email Input and Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-6 space-y-4 sm:space-y-0">
        <input
          type="email"
          placeholder="Your Email"
          className="py-3 px-5 rounded-full text-base sm:text-lg w-full sm:w-72 lg:w-96" // Full width on mobile, smaller width on larger screens
        />
        <button
          className="bg-dark-blue hover:bg-blue-800 text-white px-6 py-3 rounded-full sm:rounded-r-full transition duration-300 mt-2 sm:mt-0 sm:ml-[-40px]"
          style={{ backgroundColor: "#21243d" }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}
