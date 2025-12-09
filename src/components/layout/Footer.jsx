import React from "react";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#e9edf4]   py-12 px-4">
        <div className="max-w-5xl mx-auto text-center ">
          {/* LOGO */}
          <img src={logo} alt="Omaxe Logo" className="mx-auto w-36 mb-6" />

          {/* MAIN TEXT */}
          <p className="font-semibold text-lg">
            This project is RERA registered. | Project RERA Number :
            UPRERAPRJ228610
          </p>

          <p className=" text-[14px] mt-4 text-gray-700 leading-relaxed">
            <span className="font-semibold">Disclaimer :</span> The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This website is belong to authorized marketing partner.
          </p>


          {/* LINKS ROW */}

  <Link to="/privacypolicy">
    <button className="cursor-pointer text-blue-500 mt-6 hover:underline">Privacy Policy</button>
  </Link>

          {/* BOTTOM LINE */}
          <div className="w-full border-t mt-8 pt-4 text-gray-600 text-sm">
            All Rights Reserved. © 2025 SKA Arcadia | Created By  {" "}
            <a href="/" className="">
              The Star Solution
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
