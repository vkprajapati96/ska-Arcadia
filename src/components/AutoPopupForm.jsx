import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

export default function AutoPopupForm() {
  const [show, setShow] = useState(false);
  const formRef = useRef();
  const location = useLocation();


  useEffect(() => {
      if (location.pathname === "/thankyou") {
    return null;
  }

    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wgpy9hw",
        "template_qtwg46d",
        formRef.current,
        "7aKLUOXWf-nIxGGA7"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setShow(false); // submit ke baad popup close
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-80 md:w-[400px] rounded-2xl p-6 shadow-xl relative animate-scaleIn">
        
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 cursor-pointer text-gray-600 text-3xl py-1 px-2 hover:text-red-600 font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Get In Touch</h2>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="border p-2 rounded-md"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border p-2 rounded-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="border p-2 rounded-md"
          />

          <input
            type="text"
            name="property_type"
            placeholder="Property Type"
            className="border p-2 rounded-md"
          />

          <button 
            type="submit"
            className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white p-2 rounded-md mt-2"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
