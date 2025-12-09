// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Clinic Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ashutosh Clinic</h2>
          <p className="text-gray-200 leading-relaxed">
            Providing trusted healthcare in Jagesharganj, Pratapgarh. Affordable medicines, expert doctors, and compassionate care for your family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Booking', 'Important Info', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300 p-2 bg-blue-700 rounded-full shadow-md hover:shadow-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300 p-2 bg-blue-700 rounded-full shadow-md hover:shadow-lg">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300 p-2 bg-blue-700 rounded-full shadow-md hover:shadow-lg">
              <FaTwitter />
            </a>
          </div>
          <p className="text-gray-200 mb-1">📍 Jagesharganj, Pratapgarh, Uttar Pradesh</p>
          <p className="text-gray-200 mb-1">📞 +91 7393975405</p>
          <p className="text-gray-200">✉️ info@ashutoshclinic.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-blue-700 text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Ashutosh Clinic — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
