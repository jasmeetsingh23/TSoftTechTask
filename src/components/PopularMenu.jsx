import React from "react";
import image1 from "../assets/img5.png"; // Images for the menu items
import image2 from "../assets/img3.png";
import image3 from "../assets/t2.png";
import cornerImage1 from "../assets/Shape1.png"; // Images for the corners
import cornerImage2 from "../assets/Shape2.png";
import cornerImage3 from "../assets/Shape3.png";
import cornerImage4 from "../assets/Shape4.png";
import cornerImage5 from "../assets/Shape5.png";
import cornerImage6 from "../assets/Shape6.png";

export default function PopularMenu() {
  return (
    <section className="text-center p-10 relative bg-[#21243d] mx-auto">
      {/* Corner Images */}
      <img
        src={cornerImage1}
        alt="Corner 1"
        className="absolute top-5 left-30 w-20 h-20"
      />
      <img
        src={cornerImage2}
        alt="Corner 2"
        className="absolute top-0 right-20 w-20 h-20"
      />
      <img
        src={cornerImage3}
        alt="Corner 3"
        className="absolute bottom-0 left-30 w-20 h-20"
      />
      <img
        src={cornerImage4}
        alt="Corner 4"
        className="absolute bottom-0 right-20 w-20 h-20"
      />
      <img
        src={cornerImage5}
        alt="Middle Left"
        className="absolute left-30 top-1/2 transform -translate-y-1/2 w-20 h-20"
      />
      <img
        src={cornerImage6}
        alt="Middle Right"
        className="absolute right-20 top-1/2 transform -translate-y-1/2 w-20 h-20"
      />

      {/* Title and Paragraph */}
      <h2
        className="text-white font-bold font-montserrat text-center mb-10"
        style={{ fontSize: "64px" }}
      >
        Popular Menu
      </h2>
      <p
        className="mt-2 font-montserrat text-white text-center mb-20"
        style={{ maxWidth: "960px", fontSize: "25px", margin: "0 auto" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.
      </p>

      {/* Menu Items */}
      <div className="mt-8 flex justify-center space-x-16">
        {" "}
        {/* Increased space between items */}
        {[
          {
            image: image1,
            title: "Title Here",
            description:
              "Lorem ipsum dolor sit amet,<br /> consecteur adipicing elit.",
          },
          {
            image: image2,
            title: "Title Here",
            description:
              "Lorem ipsum dolor sit amet,<br /> consecteur adipicing elit.",
          },
          {
            image: image3,
            title: "Title Here",
            description:
              "Lorem ipsum dolor sit amet,<br /> consecteur adipicing elit.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center mr-10"
          >
            {" "}
            {/* Added margin-right */}
            <img
              src={item.image}
              alt={item.title}
              className="rounded-full w-40 h-40 object-cover mb-4" // Increased size of the images
            />
            <h2 className="text-white font-bold text-xl font-montserrat">
              {item.title}
            </h2>
            <p
              className="text-white font-montserrat"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
