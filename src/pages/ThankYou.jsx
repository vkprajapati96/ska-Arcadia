import React from "react";
import { useNavigate } from "react-router-dom"; // for React Router


const ThankYou = () => {
  const navigate = useNavigate(); 
  const handleBackHome = () => {
    navigate("/"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Thank You!</h1>
      <p className="mt-4 text-gray-700 max-w-xl">
        Our team will connect with you shortly to share all project details and help you choose the best commercial space at <strong>SKA Arcadia</strong>.
      </p>

      <button
        onClick={handleBackHome}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Back to Home
      </button>

      
    </div>
  );
};

export default ThankYou;
