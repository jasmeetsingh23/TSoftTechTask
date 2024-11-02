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
      }}
      className="text-white p-10 font-montserrat"
    >
      <div className="flex flex-col md:flex-row md:justify-around text-center md:text-left space-y-8 md:space-y-0">
        <div>
          <h3 className="font-bold text-lg">Title Here</h3>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consecte-
            <br />
            tur adipiscing elit. Aliquam at dignis- <br />
            sim nunc, id maximum ex. Etiam nec dignissim elit, dignissim enim.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
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
          <h3 className="font-bold text-lg">About</h3>
          <p className="text-sm">History Team Guidelines</p>
          <p className="text-sm">Our Team</p>
          <p className="text-sm">Brand Guidelines</p>
          <p className="text-sm">Terms & Conditions</p>
          <p className="text-sm">Privacy Policy</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Services</h3>
          <p className="text-sm">How to Order</p>
          <p className="text-sm">Team Guidelines</p>
          <p className="text-sm">Order Status</p>
          <p className="text-sm">Promo</p>
          <p className="text-sm">Payment Method</p>
        </div>
        <div>
          <h3 className="font-bold text-lg">Other</h3>
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Help</p>
          <p className="text-sm">Privacy</p>
        </div>
      </div>
    </footer>
  );
}
