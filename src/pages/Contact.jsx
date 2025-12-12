import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email sending API or backend
    emailjs
      .send(
        "service_8j5yomx",
        "template_tbqblf5",
        formData,
        "2dJxHSrNb-_t5vDGW"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-gradient-to-r from-[#130428] via-[#38126d] to-[#190634] p-8 rounded-xl shadow-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className=" cursor-pointer bg-purple-700 hover:bg-purple-900 transition px-6 py-3 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
