import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wgpy9hw",
        "template_qtwg46d",
        form.current,
        "7aKLUOXWf-nIxGGA7"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();

          // 🔥 Redirect to your Thank You Page
          window.location.href = "/thankyou";
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" p-6 md:p-8 h-full w-full order-3 md:mt-0"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Get In Touch
        </h2>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 p-2 mb-4 rounded"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 p-2 mb-4 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          min="0"
          className="w-full border border-gray-300 p-2 mb-4 rounded"
          required
        />

        <input
          type="text"
          name="property_type"
          placeholder="Property Type"
          className="w-full border border-gray-300 p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-900 text-white py-3 rounded-md text-lg font-semibold"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
