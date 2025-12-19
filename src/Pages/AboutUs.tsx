import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Sparkles } from 'lucide-react';

const AboutUs = () => {


  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Design",
      description: "We pour our heart into every project, creating spaces that reflect your personality and lifestyle."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "Staying ahead with cutting-edge design trends and sustainable solutions for modern living."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every detail, from concept to completion."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with clients to transform their vision into stunning reality."
    }
  ];

  const services = [
    "Residential Interior Design",
    "Commercial Space Planning",
    "Custom Furniture Design",
    "3D Visualization & Rendering",
    "Project Management",
    "Sustainable Design Solutions"
  ];

  return (
    <div className="min-h-screen font-secondary bg-[#FAF9F6]">

      {/* Our Story Section */}
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-[#2C2C2C] mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a passion for transforming spaces, we've grown from a small studio into a leading interior design firm. Our journey has been driven by one simple belief: every space has the potential to inspire.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Over the years, we've honed our craft, blending timeless elegance with contemporary innovation. Each project is a new opportunity to push boundaries and create environments that enrich lives.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80" 
                  alt="Design Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80" 
                  alt="Team Working" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              className="relative p-12 bg-[#FAF9F6]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#E6C9A8] flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-4xl font-bold text-[#2C2C2C] mb-6">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the world's most respected interior design firm, recognized for creating transformative spaces that enhance the human experience and set new standards for design excellence.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="relative p-12 bg-[#FAF9F6]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#E6C9A8] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#2C2C2C]" />
              </div>
              <h3 className="text-4xl font-bold text-[#2C2C2C] mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver innovative, sustainable, and personalized interior design solutions that exceed client expectations while fostering creativity, collaboration, and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-[#2C2C2C] mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white hover:bg-[#E6C9A8] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-[#E6C9A8] group-hover:text-[#2C2C2C] mb-4 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#2C2C2C] mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Deliver Section */}
      <div className="py-24 px-6 lg:px-12 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">What We Deliver</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Comprehensive design services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-[#FAF9F6] hover:bg-[#E6C9A8] transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#E6C9A8] group-hover:bg-[#2C2C2C] transition-colors"></div>
                  <p className="text-[#2C2C2C] text-lg font-semibold">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;