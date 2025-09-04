"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate success
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // hide after 3 sec
  };

  return (
    <div className="bg-gray-400 md:px-18 font-[Poppins] overflow-x-auto scrollbar-hide h-auto">
      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-8 pb-12 px-6 md:px-12  md:mt-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          📩 Contact Us
        </h1>

        <p className="text-lg  md:text-xl text-gray-800 leading-relaxed text-center max-w-2xl mx-auto">
          Have questions, feedback, or business inquiries? We’d love to hear
          from you! Fill out the form below or reach us through our contact
          details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Contact Form */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="p-6 rounded-2xl shadow-lg bg-white"
          >
            <h2 className="text-xl text-center font-semibold text-gray-800 mb-4">
              ✍️ Send us a Message
            </h2>

            <form className="space-y-4 mb-10" onSubmit={handleSubmit}>
              {["Your Name", "Email Address", "Phone Number", "Message"].map(
                (field, index) => (
                  <motion.div
                    key={index}
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <label className="block text-gray-700 font-medium">
                      {field}
                    </label>
                    {field !== "Message" ? (
                      <input
                        type={
                          field === "Email Address"
                            ? "email"
                            : field === "Phone Number"
                            ? "number"
                            : "text"
                        }
                        placeholder={`Enter your ${field.toLowerCase()}`}
                        className="w-full mt-1 px-4 py-2 text-gray-500 placeholder:text-gray-500 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:scale-105 outline-none transition-transform"
                        required
                      />
                    ) : (
                      <textarea
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full mt-1 px-4 py-2 text-gray-500 placeholder:text-gray-500 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:scale-105 outline-none transition-transform"
                        required
                      ></textarea>
                    )}
                  </motion.div>
                )
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="p-6 rounded-2xl shadow-lg bg-white"
          >
            <h2 className="text-xl text-center font-semibold text-gray-800 mb-4">
              📞 Get in Touch
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">📍 Address:</span> H536+3Q9, Niz
                Gadhaijhar, Bahabari, Assam, 784115 ,India
              </li>
              <li>
                <span className="font-semibold">📧 Email:</span>{" "}
                megahub@gmail.com
              </li>
              <li>
                <span className="font-semibold">📱 Phone:</span> +91 90850 89464
              </li>
              <li>
                <span className="font-semibold">⏰ Working Hours:</span> Mon -
                Sat, 10:00 AM - 7:00 PM
              </li>
            </ul>

            {/* Map Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6 rounded-xl overflow-hidden shadow"
            >
              <iframe
                className="w-full h-60"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4176.713292337393!2d92.16032352684317!3d26.551924638014565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375b23003d13c4ab%3A0x56c8ae3c0ca808a0!2sJahi%20Enterprise!5e0!3m2!1sen!2sin!4v1756934421987!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>

        {/* Success Toast */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50"
            >
              ✅ Your message has been sent successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
