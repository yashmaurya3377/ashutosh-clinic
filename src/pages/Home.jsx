import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Button component for reuse
const Button = ({ to, children, color = 'blue' }) => (
  <Link
    to={to}
    className={`
      mt-8 px-8 py-3 font-bold rounded-lg shadow-lg
      text-white bg-${color}-600 hover:bg-${color}-700
      transition transform hover:scale-105 active:scale-95 inline-block
    `}
  >
    {children}
  </Link>
);

// Hero Section
const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="w-full bg-blue-600 text-white py-32 px-5 text-center"
  >
    <motion.h1
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold"
    >
      Ashutosh Clinic, Pratapgarh
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="mt-4 text-lg md:text-xl text-gray-100"
    >
      Trusted healthcare • Affordable medicines • Expert doctors
    </motion.p>
    <Button to="/booking" color="white">
      Book Appointment
    </Button>
  </motion.div>
);

// Service Card
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Services Section
const ServicesSection = () => (
  <motion.div
    className="max-w-6xl mx-auto py-20 px-5"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">
      Our Key Services
    </h2>
    <div className="grid md:grid-cols-3 gap-10">
      <ServiceCard icon="🩺" title="General Checkup" description="Routine health checkups & diagnosis for all age groups." />
      <ServiceCard icon="💊" title="Affordable Medicines" description="All essential medicines at best market prices." />
      <ServiceCard icon="❤️" title="Specialist Consultation" description="Consult with experienced and qualified doctors." />
    </div>
  </motion.div>
);

// Doctor Profile
const DoctorProfile = () => (
  <motion.div
    className="max-w-3xl mx-auto py-20 px-5 text-center"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">Meet Our Doctor</h2>
    <div className="bg-white p-10 rounded-xl shadow inline-block">
      <img
        src="https://via.placeholder.com/150"
        alt="Doctor"
        className="w-32 h-32 rounded-full mx-auto mb-5"
      />
      <h3 className="text-2xl font-semibold text-blue-600">Dr. Ashutosh</h3>
      <p className="text-gray-700">MBBS • General Physician</p>
      <p className="mt-3 text-gray-700 text-sm">
        10+ years experience in primary care, diagnosis, and patient treatment.
      </p>
    </div>
  </motion.div>
);

// Testimonial Card
const TestimonialCard = ({ text, author }) => (
  <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
    <p className="text-gray-700">{text}</p>
    <p className="mt-4 font-semibold text-blue-600">{author}</p>
  </div>
);

// Testimonials Section
const TestimonialsSection = () => (
  <motion.div
    className="max-w-5xl mx-auto py-20 px-5"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">
      Patient Testimonials
    </h2>
    <div className="grid md:grid-cols-2 gap-10">
      <TestimonialCard text="Excellent care, friendly staff, and affordable medicines. Highly recommend Ashutosh Clinic!" author="- Ramesh Kumar" />
      <TestimonialCard text="Dr. Ashutosh is very knowledgeable and attentive. My family trusts this clinic completely." author="- Sita Devi" />
    </div>
  </motion.div>
);

// Call To Action
const CallToAction = () => (
  <motion.div
    className="w-full bg-blue-600 text-white py-20 px-5 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Checkup?</h2>
    <p className="text-lg mb-6">Book your appointment today and take the first step towards better health.</p>
    <Button to="/booking" color="white">
      Book Appointment
    </Button>
  </motion.div>
);

// Home Page
const Home = () => (
  <div className="w-full bg-gray-100 overflow-x-hidden">
    <HeroSection />
    <ServicesSection />
    <DoctorProfile />
    <TestimonialsSection />
    <CallToAction />
  </div>
);

export default Home;
