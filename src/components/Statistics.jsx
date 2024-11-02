import React from "react";
import cornerImage1 from "../assets/Shape10.png";
import cornerImage2 from "../assets/Shape11.png";
import cornerImage3 from "../assets/Shape12.png";
import cornerImage4 from "../assets/Shape13.png";
import cornerImage5 from "../assets/Shape14.png";
import cornerImage6 from "../assets/Shape15.png";

export default function Statistics() {
  return (
    <section
      style={{
        backgroundColor: "#21243d",
        position: "relative",
      }}
      className="text-white p-6 sm:p-10 text-center h-auto sm:h-[80vh]"
    >
      {/* Background Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner 1"
        className="absolute top-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage2}
        alt="Corner 2"
        className="absolute top-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage3}
        alt="Corner 3"
        className="absolute bottom-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover"
      />
      <img
        src={cornerImage4}
        alt="Corner 4"
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

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10">
        Statistics
      </h2>
      <p className="mt-2 text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br className="hidden sm:block" />
        Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>

      {/* Statistics Circles */}
      <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-12 lg:space-x-16">
        {[
          { title: "Store", count: "100" },
          { title: "Menu", count: "100" },
          { title: "Chef", count: "100" },
        ].map((stat, index) => (
          <div
            key={index}
            className="border-4 border-white rounded-full w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800"
          >
            <p className="text-2xl sm:text-3xl font-bold">{stat.count}</p>
            <p className="text-lg sm:text-xl">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
