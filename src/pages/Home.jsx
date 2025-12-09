import React, { useState } from "react";
// import home from "../image/homeImg/home.jpg";
import gallary1 from "../image/homeImg/gallary1.jpg";
import gallary2 from "../image/homeImg/gallary2.jpg";
import gallary3 from "../image/homeImg/gallary3.jpg";
import gallary4 from "../image/homeImg/gallary4.jpg";
import gallary5 from "../image/homeImg/gallary5.jpg";
import gallary6 from "../image/homeImg/gallary6.jpg";

import h1 from "../image/homeImg/h1.jpg";
import floor2 from "../image/homeImg/floor2.jpg";
import floor3 from "../image/homeImg/floor3.jpg";
import floor4 from "../image/homeImg/floor4.jpg";
import map from "../image/homeImg/map.jpg";
import about from "../image/homeImg/about.jpg";

import { FaHamburger, FaParking, FaVideo, FaBolt } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";

import { FaUsers } from "react-icons/fa";
import { MdFireExtinguisher } from "react-icons/md";

import { GoDotFill } from "react-icons/go";

const data = [
  { icon: <FaHamburger />, title: "Food Courts" },
  { icon: <MdSecurity />, title: "24×7 Security & CCTV" },
  { icon: <FaParking />, title: "Parking Space" },
  { icon: <MdFireExtinguisher />, title: "Fire Safety Systems" },
  { icon: <FaUsers />, title: "High Footfall Location" },
  { icon: <FaBolt />, title: "Power Backup" },
];

const galleryImages = [
  gallary1,
  gallary2,
  gallary3,
  gallary4,
  gallary5,
  gallary6,
];

const cards = [
  {
    title: "Retail Shops",
    typology: "Retail shop",
    size: "64- 470 Sq.Ft",
  },
  {
    title: "Office Spaces",
    typology: "Office Space",
    size: "64- 470 Sq.Ft",
  },
  {
    title: "Food Courts",
    typology: "Food Court",
    size: "64- 470 Sq.Ft",
  },
];

const Home = () => {
  const [openForm, setOpenForm] = useState(false);

  const plans = [
    {
      id: 1,
      img: floor2,
      title: "Site Plan",
    },
    {
      id: 2,
      img: floor3,
      title: "Floor Plan 1",
    },
    {
      id: 3,
      img: floor4,
      title: "Floor Plan 2",
    },
  ];

  return (
    <>
      {/* part 1 */}
      <div className="w-full bg-gray-100  md:pt-20">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-[70%_30%]">
          {/* ---------------- IMAGE SECTION ---------------- */}
          <div
            className="relative w-full h-[300px] md:h-[750px] overflow-hidden shadow-lg order-1"
            style={{
              backgroundImage: `url(${h1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* DESKTOP ABSOLUTE CONTENT */}
            <div
              className="
              hidden md:block
              absolute top-1/2 left-5 -translate-y-1/2 
              w-[60%]
              bg-white p-8 rounded-lg shadow-xl
            "
            >
              <Content setOpenForm={setOpenForm} />
            </div>
          </div>

          {/* ---------------- MOBILE CONTENT (NOT ABSOLUTE) ---------------- */}
          <div className="block md:hidden order-2 px-5 bg-white p-6 rounded-lg shadow-xl">
            <Content />
          </div>

          {/* ---------------- RIGHT FORM ---------------- */}
          <div className=" shadow-md p-6 md:p-8  h-full w-full order-3  md:mt-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
              Get In Touch
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-2 mb-4 rounded"
            />

            <input
              type="email"
              placeholder="Email Id"
              className="w-full border border-gray-300 p-2 mb-4 rounded"
            />

            <input
              type="number"
              placeholder="Phone Number"
              min="0"
              className="w-full border border-gray-300 p-2 mb-4 rounded"
            />

            <select className="w-full border border-gray-300 p-2 mb-4 rounded">
              <option>Select Property</option>
              <option>Retail Space</option>
              <option>Food Court</option>
              <option>Office Space</option>
            </select>

            <button className="w-full bg-blue-900 text-white py-3 rounded-md text-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* part 2 SKA ARCADIA*/}

      <div
        id="about"
        className="w-full  max-w-7xl mx-auto  py-8 md:py-16 px-5 md:px-16"
      >
        <h1 className="text-3xl text-center mx-auto mb-8 md:text-4xl font-bold text-[#0d1a3a]">
          SKA ARCADIA
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="w-full ">
            <img
              src={about}
              alt="Omaxe Dwarka"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">
            <h2 className="text-[18px] font-semibold mt-2 text-[#0d1a3a] tracking-wide">
              Where Your Business Finds Its Perfect Space
            </h2>

            <p className="text-gray-700 mt-5 leading-7 text-[16px]">
              Step into SKA Arcadia, a premium commercial hub designed for
              brands that aspire to grow, scale, and stand out. Strategically
              located and thoughtfully planned, SKA Arcadia offers modern,
              move-in ready commercial spaces crafted for retail, offices, and
              high-visibility businesses. With excellent connectivity, superior
              build quality, and a thriving neighbourhood, it’s the ideal
              destination to elevate your business and attract customers
              effortlessly. Your next big business move begins here.{" "}
            </p>

            <button
              onClick={() => setOpenForm(true)}
              className="bg-[#0d4da3] cursor-pointer text-white px-6 py-3 mt-6 font-semibold rounded"
            >
              REQUEST DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </div>
      {/*part 3 AMENITIES */}

      <div
        id="amenities"
        className="w-full  py-8  max-w-7xl mx-auto md:py-12 bg-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          AMENITIES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="
              bg-[#f5f5f5] 
              py-12
              px-10 
              rounded-lg 
              flex 
              flex-col 
              items-center 
              text-center 
              transition 
              hover:bg-white 
              shadow-sm 
              hover:shadow-lg
              group
            "
            >
              {/* ICON */}
              <div className="text-[60px] text-[#0d1a3a] group-hover:text-blue-600 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <p className="mt-4 text-xl font-semibold text-[#0d1a3a] group-hover:text-blue-600 transition">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* part 4 location Advantage */}
      <div className="bg-[#f4f7fc]">
        <div className="max-w-7xl mx-auto  px-4 py-10">
          <h2 className="text-3xl font-bold mb-6 text-center">
            LOCATION ADVANTAGES
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={map}
                alt="Location"
                className="w-full rounded-xl shadow-md"
              />
            </div>

            {/* RIGHT POINTS */}
            <div className="w-full md:w-1/2 space-y-3">
              <p className="pb-3 border-b border-gray-300 font-medium">
                1 min from Delhi–Meerut Expressway
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                5 mins to Proposed Metro
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                10 mins to Eastern Peripheral Expressway
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                20 mins to Greater Noida West & Noida Sec-62
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                25 mins to Raj Nagar Extension
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                35 mins to Anand Vihar
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                35 mins to Akshardham
              </p>

              <p className="pb-3 border-b border-gray-300 font-medium">
                35 mins to Noida Sec-18
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* part 5 PRICE */}
      <div
        id="price"
        className="w-full bg-white py-16 px-4 flex flex-col items-center relative overflow-hidden"
      >
        {/* ANGLED BACKGROUND */}

        <h2 className="text-3xl font-bold  mb-12 relative z-10">PRICE LIST</h2>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {cards.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200"
            >
              {/* TOP TAB */}
              <div className="absolute -top-6 bg-blue-500 text-white px-8 py-2 rounded-lg text-sm font-semibold shadow-md">
                {item.title}
              </div>

              <h3 className="text-xl font-bold mt-6">₹ On Request</h3>
              <div className="w-full my-4 border-b border-gray-300" />

              <div className="flex w-full justify-between">
                <p className="text-gray-600 text-sm">Type :</p>
                <p className="font-semibold mb-3">{item.typology}</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-gray-600 text-sm">Size :</p>
                <p className="font-semibold">{item.size}</p>
              </div>

              <button
                onClick={() => setOpenForm(true)}
                className="mt-6 bg-blue-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-500 transition"
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* part -6 SITE & FLOOR PLAN */}

      <div id="floors" className="w-full py-16 bg-[#f4f7fc]">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">SITE & FLOOR PLAN</h2>
          <p className="text-gray-600 mt-2">
            Explore opportunities designed for growth.{" "}
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {plans.map((item) => (
            <div
              key={item.id}
              className="border border-dashed border-gray-300 p-2 rounded-lg"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded"
                />

                <button
                  onClick={() => setOpenForm(true)}
                  className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-blue-400 hover:bg-blue-500  text-white px-6 py-2 rounded-md font-semibold shadow"
                >
                  VIEW PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP FORM OVERLAY */}
      {openForm && (
        <form className="fixed inset-0 bg-black/40 flex justify-center items-start z-50">
          {/* FORM BOX WITH SLIDE-DOWN ANIMATION */}
          <div
            className="relative bg-white w-full max-w-md rounded-lg shadow-xl p-6 mt-10 
            animate-[slideDown_0.4s_ease-out]"
          >
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-0 right-1 cursor-pointer px-4 py-1 text-end text-black hover:text-red-600  text-[24px] font-semibold"
            >
              x
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">Get In Touch</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded mb-3"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded mb-3"
            />
            <select className="w-full p-3 border rounded-sm text-gray-600 focus:outline-none">
              <option>Select Property</option>
              <option>Retail Space</option>
              <option>Food Court</option>
              <option>Office Space</option>
            </select>

            <button className="cursor-pointer w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded mt-2">
              Submit
            </button>

            {/* Close Button */}
          </div>
        </form>
      )}

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes slideDown {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0px); opacity: 1; }
          }
        `}
      </style>

      {/* part 7 PROPERTY GALLERY  */}

      <div className="w-full py-16 bg-white">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          GALLERY
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="w-full">
              <img
                src={img}
                alt="Gallery"
                className="w-full h-72 object-cover rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* part 8 map and form */}

      <div id="contact" className="w-full bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* LEFT MAP (EXACT SAME WIDTH & HEIGHT) */}
          <div className="w-full md:w-[65%] h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.9355167135323!2d77.48452278167333!3d28.65461261372219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf31e874eb2b7%3A0xb65f0175feec00e4!2sSKA%20Arcadia!5e1!3m2!1sen!2sin!4v1765266087413!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* RIGHT FORM BOX EXACT SAME LOOK */}
          <div className="w-full md:w-[35%] bg-[#f8fafc]  p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-sm focus:outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Id"
                className="w-full p-3 border rounded-sm focus:outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-sm focus:outline-none focus:border-blue-600"
              />

              <select className="w-full p-3 border rounded-sm text-gray-600 focus:outline-none focus:border-blue-600">
                <option>Select Property</option>
                <option>Retail Space</option>
                <option>Food Court</option>
                <option>Office Space</option>
              </select>

              <button
                type="submit"
                className="cursor-pointer w-full bg-blue-400 text-white py-3 rounded-sm hover:bg-blue-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* /////// */}
    </>
  );
};

const Content = ({ setOpenForm }) => (
  <>
    <div className="bg-blue-900 text-white text-center py-2 font-semibold rounded">
      MOVE - IN READY{" "}
    </div>

    <h1 className="text-3xl md:text-4xl font-bold text-center mt-4">
      Premium Commercial Spaces{" "}
    </h1>

    <p className="text-center text-lg font-medium mt-1">
      At Wave City, NH-24, Ghaziabad
    </p>

    <ul className="mt-8 mb-8 flex flex-wrap justify-center gap-3 text-gray-700 text-[16px]">
      <li className="text-center min-w-[120px] bg-blue-900 text-white rounded-lg px-3 py-2 font-semibold">
        Retail Spaces
      </li>

      <li className="text-center min-w-[120px] bg-blue-900 text-white rounded-lg px-3 py-2 font-semibold">
        Food Courts
      </li>

      <li className="text-center min-w-[120px] bg-blue-900 text-white rounded-lg px-3 py-2 font-semibold">
        Office Spaces
      </li>
    </ul>

    <div className="text-center mb-4 flex justify-around text-[18px]">
      <p className="flex items-center gap-2">
        <GoDotFill size={15} className="text-[10px]" />
        RERA Approved
      </p>

      <p className="flex items-center gap-2">
        <GoDotFill size={15} className="text-[10px]" />
        Payment Plan 40:60
      </p>
    </div>

    <div className="border border-blue-800 bg-blue-900 text-white text-center py-2 mt-6 rounded">
      <p className="font-semibold text-lg">Contact Now +91 836 860 4905</p>
    </div>

    <p className="text-center mt-6 text-gray-700 text-lg font-medium">
      Premium Commercial Space Investment Starts From
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mt-2">
      ₹ 50 Lacs* Onwards
    </h2>

    <div className="text-center mt-6">
      <button
        onClick={() => setOpenForm(true)}
        className="cursor-pointer bg-blue-900 hover:bg-blue-800 text-white py-2 px-6 rounded-md text-lg"
      >
        ENQUIRY NOW
      </button>
    </div>
  </>
);

export default Home;
