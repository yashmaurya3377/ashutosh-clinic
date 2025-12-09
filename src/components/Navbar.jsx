// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Ashutosh Clinic</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link className="hover:text-gray-200 transition" to="/">Home</Link>
          <Link className="hover:text-gray-200 transition" to="/about">About</Link>
          <Link className="hover:text-gray-200 transition" to="/services">Services</Link>
          <Link className="hover:text-gray-200 transition" to="/booking">Booking</Link>
          <Link className="hover:text-gray-200 transition" to="/important-info">Important Info</Link>
          <Link className="hover:text-gray-200 transition" to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-5 pb-5 flex flex-col space-y-3">
          <Link className="hover:text-gray-200 transition" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="hover:text-gray-200 transition" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="hover:text-gray-200 transition" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link className="hover:text-gray-200 transition" to="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
          <Link className="hover:text-gray-200 transition" to="/important-info" onClick={() => setIsOpen(false)}>Important Info</Link>
          <Link className="hover:text-gray-200 transition" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
