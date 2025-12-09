import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function AutoPopupForm() {
  const [show, setShow] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ======================
  //  EMAIL JS FUNCTION
  // ======================
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wgpy9hw",      // ✅ Tumhara Service ID  
        "template_qtwg46d",     // ✅ Tumhara Template ID  
        formRef.current,        // Form Ref
        "7aKLUOXWf-nIxGGA7"     // ✅ Tumhara Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
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
        
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 cursor-pointer text-gray-600 text-3xl py-1 px-2 hover:text-red-600 font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Get In Touch</h2>

        {/* Form with EmailJS */}
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">

          <input
            type="text"
            name="user_name"                // ⭐ EMAILJS NAME
            placeholder="Your Name"
            className="border p-2 rounded-md"
            required
          />

          <input
            type="email"
            name="user_email"              // ⭐ EMAILJS NAME
            placeholder="Your Email"
            className="border p-2 rounded-md"
            required
          />

          <input
            type="number"
            name="user_phone"              // ⭐ EMAILJS NAME
            placeholder="Phone Number"
            className="border p-2 rounded-md"
            min="0"
            required
          />

          <input
            type="text"
            name="property_type"          // ⭐ EMAILJS NAME
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
