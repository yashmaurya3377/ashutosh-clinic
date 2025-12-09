// src/pages/ImportantInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ImportantInfo = () => {
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
          Important Information
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Please find all essential information about Ashutosh Clinic below.
        </p>
      </motion.div>

      {/* Clinic Timings */}
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 mb-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Clinic Timings</h2>
        <ul className="text-gray-700 space-y-2">
          <li>Monday - Saturday: 9:00 AM - 7:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </motion.div>

      {/* Location */}
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 mb-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Location</h2>
        <p className="text-gray-700 mb-4">
          Ashutosh Clinic, Pratapgarh, Uttar Pradesh
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d82.000000!3d25.900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a123456789abc%3A0xabcdef1234567890!2sPratapgarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg border-0"
          title="Clinic Location"
        ></iframe>
      </motion.div>

      {/* Safety Guidelines */}
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Safety Guidelines</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Masks are mandatory inside the clinic.</li>
          <li>Sanitize hands at the entrance.</li>
          <li>Maintain social distancing in waiting areas.</li>
          <li>Appointments preferred to avoid crowding.</li>
        </ul>
      </motion.div>

      {/* Payment Info */}
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Payment & Insurance</h2>
        <p className="text-gray-700">
          We accept cash, UPI, and most insurance providers. Please contact the clinic for insurance verification and coverage details.
        </p>
      </motion.div>
    </div>
  );
};

export default ImportantInfo;
