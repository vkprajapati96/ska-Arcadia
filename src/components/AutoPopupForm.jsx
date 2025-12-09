import { useEffect, useState } from "react";

export default function AutoPopupForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-80 md:w-[400px] rounded-2xl p-6 shadow-xl relative animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 cursor-pointer right-3 text-gray-600 text-3xl py-1 px-2 hover:text-red-600 font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Get In Touch</h2>

        <form className="flex flex-col gap-3">
          {/* Now Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded-md"
          />

          {/* ✅ NUMBER FIELD MOVED TO TOP */}
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Phone Number"
            className="border p-2 rounded-md"
            min="0"
          />
          <select className="w-full p-3 border rounded-sm text-gray-600 focus:outline-none">
              <option>Select Property</option>
              <option>Retail Space</option>
              <option>Food Court</option>
              <option>Office Space</option>
            </select>

          {/* Now Email */}

          <button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white p-2 rounded-md mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
