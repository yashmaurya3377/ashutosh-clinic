// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

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
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Have questions or need assistance? Send us a message.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-xl shadow p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {submitted && (
            <motion.div
              className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your message has been sent successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow hover:bg-blue-500 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Clinic Info & Map */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2">📍 Pratapgarh, Uttar Pradesh</p>
            <p className="text-gray-700 mb-2">📞 +91 7393975405</p>
            <p className="text-gray-700 mb-2">✉️ info@ashutoshclinic.com</p>
            <p className="text-gray-700">🕒 Mon – Sat: 9 AM – 7 PM</p>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d82.000000!3d25.900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a123456789abc%3A0xabcdef1234567890!2sPratapgarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
              title="Clinic Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
