import React from 'react'
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ivet7hv", //service id from EmailJS
        "template_32gnb4p", // template of Email Js
        form.current,
        "S0UKbbznx1h7ROyk1" //public key of Email JS in account settings
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); //form reset fields after sending message
          toast.success("Message sent successfully! ✅", {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark'
          });
        },
        (error) => {
          console.log("error sending message ", error);
          toast.error("Failed to send Message. Please try Again! ❌", {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark'
          });
        }
      )

  }

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 sm:px-[6vw] font-sans bg-gradient-to-b from-[#0a071a] to-[#120d25]"
    >
      <ToastContainer />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Let’s Work Together
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          I’d be happy to connect — feel free to reach out for opportunities, jobs.
        </p>
      </div>

      {/* Contact Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Info Card */}
        <div className="w-full bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_rgba(130,69,236,0.15)] border border-white/10">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Contact Information
          </h3>
          <p className="text-gray-300 mb-5 leading-relaxed text-sm sm:text-base">
            Feel free to reach out directly via email or phone. I’ll get back to you
            as soon as possible.
          </p>

          <div className="space-y-4 text-gray-200 text-base sm:text-lg">
            <p className="flex items-center gap-3">
              📍 <span>Nashik, Maharashtra, India</span>
            </p>
            <p className="flex items-center gap-3">
              📧 <span>er.vmwani2022@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              📱 <span>+91 8625937813</span>
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative w-full">
          {/* Subtle Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-500/5 rounded-2xl blur-2xl"></div>

          <div className="relative w-full bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.2)] border border-white/10">
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-5">
              Send Me a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4 w-full"
            >
              {/* Name & Email Row */}
              <div className="flex gap-4 flex-col md:flex-row">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full md:flex-1 p-3 rounded-lg bg-white/10 text-white border border-white/20 
                         focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full md:flex-1 p-3 rounded-lg bg-white/10 text-white border border-white/20 
                         focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 
                       focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-sm sm:text-base"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 
                       focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-sm sm:text-base"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="5"
                className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 
                       focus:border-purple-500 transition-all outline-none placeholder-gray-400 text-sm sm:text-base"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
                       text-white shadow-lg hover:scale-[1.02] hover:shadow-[0_6px_18px_rgba(236,72,153,0.25)] 
                       transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>



  )




}

export default Contact