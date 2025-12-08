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
    // ✅ BACKGROUND BLUR — black color removed, only blur added
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-80 md:w-[400px] rounded-2xl p-6 shadow-xl relative animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-600 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Enquiry Form</h2>

        <form className="flex flex-col gap-3">

       
          {/* Now Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded-md"
          />

             {/* ✅ NUMBER FIELD MOVED TO TOP */}
          <input
            type="number"
            placeholder="Phone Number"
            className="border p-2 rounded-md"
            min="0"
          />


          {/* Now Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded-md"
          />

          <button className="bg-teal-600 text-white p-2 rounded-md mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
