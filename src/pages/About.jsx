// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full bg-gray-100 overflow-x-hidden pt-24">
      {/* About Header */}
      <motion.div
        className="max-w-5xl mx-auto px-5 text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          About Ashutosh Clinic
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Ashutosh Clinic is one of Pratapgarh’s most trusted healthcare centers, offering quality checkups, experienced doctors, and essential medicines at the best market prices.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="max-w-5xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center mb-20"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            Our mission is to provide affordable and reliable healthcare for every family in Pratapgarh. We prioritize patient safety, comfort, and quality medical care.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Clinic Mission"
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Key Highlights */}
      <motion.div
        className="max-w-6xl mx-auto px-5 mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
            <p className="text-gray-600">Experienced professionals providing quality care.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">💊</div>
            <h3 className="text-xl font-semibold mb-2">Affordable Medicines</h3>
            <p className="text-gray-600">Essential medicines at competitive prices.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">Well-equipped clinic for comfortable checkups.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
