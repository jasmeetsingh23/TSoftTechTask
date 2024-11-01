import React from "react";
import cornerImage1 from "../assets/Shape10.png"; // Import your corner images
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
        height: "80vh",
      }} // Set the background color and relative positioning
      className="text-white p-10 text-center"
    >
      {/* Background Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner 1"
        className="absolute top-0 left-30 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage2}
        alt="Corner 2"
        className="absolute top-0 right-20 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage3}
        alt="Corner 3"
        className="absolute bottom-0 left-30 w-20 h-20 object-cover"
      />
      <img
        src={cornerImage4}
        alt="Corner 4"
        className="absolute bottom-0 right-20 w-20 h-20 object-cover"
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

      <h2 className="text-5xl font-bold mb-10">Statistics</h2>
      <p className="mt-2 text-2xl mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <div className="mt-8 flex justify-center space-x-16">
        {/* Circle for Store */}
        <div className="border-4 border-white rounded-full w-40 h-40 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          <p className="text-3xl font-bold">100</p>
          <p className="text-xl">Store</p>
        </div>

        {/* Circle for Menu */}
        <div className="border-4 border-white rounded-full w-40 h-40 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          <p className="text-3xl font-bold">100</p>
          <p className="text-xl">Menu</p>
        </div>

        {/* Circle for Chef */}
        <div className="border-4 border-white rounded-full w-40 h-40 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
          <p className="text-3xl font-bold">100</p>
          <p className="text-xl">Chef</p>
        </div>
      </div>
    </section>
  );
}
