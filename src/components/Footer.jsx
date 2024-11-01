import React from "react";
import facebookIcon from "../assets/Facebook1.png";
import twitterIcon from "../assets/Twitter1.png";
import instagramIcon from "../assets/Instagram1.png";
import linkedinIcon from "../assets/WhatsApp.png";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111111",
        position: "relative",
        height: "40vh",
      }}
      className="text-white p-10 font-montserrat"
    >
      <div className="flex justify-around">
        <div>
          <h3 className="font-bold">Title Here</h3>
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consecte-
            <br />
            tur adipiscing elit. Aliquam at dignis- <br />
            sim nunc, id maximum ex. Etiam nec dignissim elit, dignissim enim.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-6 h-6 transition-transform transform hover:scale-110"
            />
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-6 h-6 transition-transform transform hover:scale-110"
            />
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-6 h-6 transition-transform transform hover:scale-110"
            />
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-6 h-6 transition-transform transform hover:scale-110"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold">About</h3>
          <p>History Team Guidelines</p>
          <p>Our Team</p>
          <p>Brand Guidelines</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <p>How to Order</p>
          <p>Team Guidelines</p>
          <p>Order Status</p>
          <p>Promo</p>
          <p>Payment Method</p>
        </div>
        <div>
          <h3 className="font-bold">Other</h3>
          <p>Contact Us</p>
          <p>Help</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
}

// Footer
