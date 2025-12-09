// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🩺',
    title: 'General Checkup',
    desc: 'Routine health checkups & diagnosis for all age groups.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: '💊',
    title: 'Affordable Medicines',
    desc: 'All essential medicines at best market prices.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: '❤️',
    title: 'Specialist Consultation',
    desc: 'Consult with experienced and qualified doctors.',
    color: 'from-red-400 to-red-600',
  },
  {
    icon: '🧬',
    title: 'Laboratory Tests',
    desc: 'Accurate and quick lab tests with reliable results.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: '🏥',
    title: 'Emergency Services',
    desc: 'Quick response in medical emergencies with care.',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: '🦷',
    title: 'Dental Care',
    desc: 'Professional dental checkups and treatments.',
    color: 'from-pink-400 to-pink-600',
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gray-100 pt-24 pb-16 overflow-x-hidden">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto px-5 text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Our Services
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Ashutosh Clinic offers a wide range of healthcare services to meet your family’s needs.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${service.color} text-white p-8 rounded-xl shadow-lg cursor-pointer hover:scale-105 transform transition`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-800">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
