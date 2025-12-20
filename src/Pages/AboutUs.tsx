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
      {/* Hero Section - Our Story */}
      <div className="relative bg-[#1a1a1a] py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold text-white mb-8">Our Story</h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-6 font-light">
              Founded with a passion for transforming spaces, we've grown from a small studio into a leading interior design firm. Our journey has been driven by one simple belief: every space has the potential to inspire.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Over the years, we've honed our craft, blending timeless elegance with contemporary innovation. Each project is a new opportunity to push boundaries and create environments that enrich lives.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <motion.div
              className="relative p-10 bg-[#FAF9F6] border-l-4 border-[#8B5E3C] shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-[#E6C9A8]/20 flex items-center justify-center mb-6 rounded-full">
                <Eye className="w-7 h-7 text-[#8B5E3C]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2C2C2C] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the world's most respected interior design firm, recognized for creating transformative spaces that enhance the human experience and set new standards for design excellence.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="relative p-10 bg-[#FAF9F6] border-l-4 border-[#8B5E3C] shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-[#E6C9A8]/20 flex items-center justify-center mb-6 rounded-full">
                <Target className="w-7 h-7 text-[#8B5E3C]" />
              </div>
              <h3 className="text-3xl font-bold text-[#2C2C2C] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver innovative, sustainable, and personalized interior design solutions that exceed client expectations while fostering creativity, collaboration, and environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-24 px-6 lg:px-12 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-[#2C2C2C] mb-6">Our Core Values</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light">
              The principles that define our culture and guide every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-[#8B5E3C] bg-[#FAF9F6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#8B5E3C] group-hover:text-white transition-colors duration-500">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Deliver Section */}
      <div className="py-24 px-6 lg:px-12 bg-[#2C2C2C] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">What We Deliver</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Comprehensive design services tailored to your unique needs and lifestyle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-[#3d3d3d] hover:bg-[#4a4a4a] rounded-xl transition-all duration-300 group cursor-pointer border border-[#4a4a4a] hover:border-[#8B5E3C]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#8B5E3C] rounded-full"></div>
                  <p className="text-white text-lg font-medium tracking-wide">{service}</p>
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