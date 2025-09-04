"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="h-auto  bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 px-6 md:px-16 lg:px-28 font-[Poppins] overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white py-8 md:py-10 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          About <span className="text-red-500">MegaHub</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto">
          Welcome to MegaHub! We provide the best products with excellent
          quality and amazing customer service.
        </p>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 flex flex-col md:flex-row items-center md:space-x-8 lg:space-x-12"
      >
        <div className="w-full md:w-1/2 mb-6 md:mb-0 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/hands.jpg"
              alt="Our Mission"
              width={500}
              height={400}
              className="rounded-lg object-cover shadow-md shadow-slate-300 w-full"
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-blue-600">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
            At MegaHub, our mission is to provide a seamless online shopping
            experience with top-quality products, reliable support, and fast
            delivery. We aim to create a platform where customers can shop with
            confidence and joy.
          </p>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-blue-600">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {["Quality", "Trust", "Innovation"].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                {value}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {value === "Quality" &&
                  "We ensure that every product meets the highest standards."}
                {value === "Trust" &&
                  "We build trust with our customers through transparency and support."}
                {value === "Innovation" &&
                  "We constantly innovate to improve the shopping experience."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 text-white text-center rounded-lg mx-0 sm:mx-6 md:mx-16 lg:mx-24 mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3 sm:mb-4">
          Join <span className="text-red-500">MegaHub</span> Today!
        </h2>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
          Explore our amazing products and enjoy a seamless shopping experience.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition text-sm sm:text-base"
        >
          Shop Now
        </motion.a>
      </motion.section>
    </div>
  );
}
