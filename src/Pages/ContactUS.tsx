import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };



  return (
    <div className="min-h-screen font-secondary bg-[#FAF9F6]">
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.p
            className="text-[#E6C9A8] text-lg font-medium mb-4 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GET IN TOUCH
          </motion.p>

          <motion.h1
            className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Create Your
            <br />
            <span className="text-[#E6C9A8]">Dream Space</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <motion.div 
                className="bg-white p-8 shadow-lg rounded-xl text-center hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-[#8B5E3C]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 12345 67890</p>
            </motion.div>

            <motion.div 
                className="bg-white p-8 shadow-lg rounded-xl text-center hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-[#8B5E3C]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Email Us</h3>
                <p className="text-gray-600">contact@vishwaply.com</p>
                <p className="text-gray-600">support@vishwaply.com</p>
            </motion.div>

            <motion.div 
                className="bg-white p-8 shadow-lg rounded-xl text-center hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-[#8B5E3C]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">Visit Us</h3>
                <p className="text-gray-600">123, Industrial Area,</p>
                <p className="text-gray-600">Surat, Gujarat - 395001</p>
            </motion.div>
        </div>
      </div>


      {/* Map and Form Section */}
      <div className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* Left Side - Map */}
            <motion.div
              className="h-[600px] lg:h-auto bg-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/place/VISHWA+PLY+%26+HARDWARE/@21.2464971,72.8278125,12z/data=!4m6!3m5!1s0x3be04f003f86653f:0x1cb72815d8026009!8m2!3d21.246897!4d72.8905239!16s%2Fg%2F11vymzdg87?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className="bg-white p-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2C2C2C] font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border-2 border-transparent focus:border-[#E6C9A8] outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#2C2C2C] font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border-2 border-transparent focus:border-[#E6C9A8] outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#2C2C2C] font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border-2 border-transparent focus:border-[#E6C9A8] outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#2C2C2C] font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border-2 border-transparent focus:border-[#E6C9A8] outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#2C2C2C] font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border-2 border-transparent focus:border-[#E6C9A8] outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  onClick={handleSubmit}
                  className="w-full bg-[#E6C9A8] text-[#2C2C2C] px-8 py-4 text-lg font-semibold hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;