import React from "react";
import image1 from "../assets/Img4.png";
import image2 from "../assets/Img3.png";
import image3 from "../assets/t2.png";
import cornerImage1 from "../assets/Shape1.png";
import cornerImage2 from "../assets/Shape2.png";
import cornerImage3 from "../assets/Shape3.png";
import cornerImage4 from "../assets/Shape4.png";
import cornerImage5 from "../assets/Shape5.png";
import cornerImage6 from "../assets/Shape6.png";

export default function PopularMenu() {
  return (
    <section className="text-center p-6 sm:p-10 relative bg-[#21243d] mx-auto">
      {/* Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner 1"
        className="absolute top-5 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage2}
        alt="Corner 2"
        className="absolute top-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage3}
        alt="Corner 3"
        className="absolute bottom-0 left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage4}
        alt="Corner 4"
        className="absolute bottom-0 right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage5}
        alt="Middle Left"
        className="absolute left-10 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />
      <img
        src={cornerImage6}
        alt="Middle Right"
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
      />

      {/* Title and Paragraph */}
      <h2 className="text-white font-bold font-montserrat mb-4 text-3xl sm:text-4xl lg:text-5xl">
        Popular Menu
      </h2>
      <p className="mt-2 font-montserrat text-white mx-auto max-w-2xl text-sm sm:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.
      </p>

      {/* Menu Items */}
      <div className="mt-8 flex flex-wrap justify-center gap-10">
        {[
          {
            image: image1,
            title: "Title Here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            image: image2,
            title: "Title Here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            image: image3,
            title: "Title Here",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center w-40 sm:w-48 lg:w-60"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover mb-4"
            />
            <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl font-montserrat">
              {item.title}
            </h2>
            <p className="text-white font-montserrat text-sm sm:text-base lg:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
