import { motion } from 'framer-motion';
import newfalcon from '../assets/newfalcon.jpg';
import fwschool from '../assets/fwschool.jpg'
import { ArrowUpRight, Award, Calendar, MapPin } from 'lucide-react';

const OurProjects = () => {
  return (
    <div className="h-[100vh] w-full font-secondary bg-[#FAF9F6]">
      <div className="relative h-[60vh] mb-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <motion.p
              className="text-[#E6C9A8] text-lg font-medium mb-4 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              WHO WE ARE
            </motion.p> */}
            <motion.h1
              className="text-[55px] lg:text-7xl font-bold mt-8 lg:mt-8 text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Explore Our Work and<br />
              Creative Projects
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 font-medium max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Showcasing our visionary interior design creations that inspire you.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top Section - Heading and Description */}
        {/* <div className="flex items-start justify-between p-10 mb-16">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-6xl font-extrabold text-[#2C2C2C] leading-tight">
              Explore Our Work and
              <br />
              <span className="">
                Creative Projects
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-md pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#2C2C2C] text-lg mb-8 leading-relaxed">
              Showcasing our visionary interior design creations that inspire you.
            </p>
          </motion.div>
        </div> */}


        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <motion.h2
              className="text-6xl font-bold text-[#2C2C2C]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              All Project That<br />We've Done
            </motion.h2>
          </div>

          {/* Project 1 - Minimalist (Image on Right) */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-4xl font-Cinzel font-extrabold text-[#2C2C2C] mb-4">Minimalist</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Minimalist style characterized by clean lines. We offer you a simplicity and functionality while embracing the concept of "less is more".
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Location</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">Mota Varachha</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Completed</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2023</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Area</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2000 sq.ft</p>
                </div>
              </div>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-medium rounded-full hover:bg-[#6D4C3D] transition-colors"
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="h-[400px]">
              <img
                src={newfalcon}
                alt="Minimalist Interior"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Project 2 - Scandinavian (Image on Left) */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-[400px] order-2 lg:order-1">
              <img
                src={fwschool}
                alt="Scandinavian Interior"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-Cinzel font-extrabold text-[#2C2C2C] mb-4">Schools</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Scandinavian style is underpinned by three main focuses: easy living, functionality and a penchant for all things natural.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Location</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">Mota Varachha</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Completed</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2023</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Area</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2000 sq.ft</p>
                </div>
              </div>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-medium rounded-full hover:bg-[#6D4C3D] transition-colors"
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>


          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-4xl font-Cinzel font-extrabold text-[#2C2C2C] mb-4">Schools</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Minimalist style characterized by clean lines. We offer you a simplicity and functionality while embracing the concept of "less is more".
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Location</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">Mota Varachha</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Completed</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2023</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Area</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2000 sq.ft</p>
                </div>
              </div>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-medium rounded-full hover:bg-[#6D4C3D] transition-colors"
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80"
                alt="Minimalist Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-[400px] order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Scandinavian Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl font-Cinzel font-extrabold text-[#2C2C2C] mb-4">Hospitals</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Scandinavian style is underpinned by three main focuses: easy living, functionality and a penchant for all things natural.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-xl border border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Location</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">Mota Varachha</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Completed</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2023</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-[#8B5E3C]" />
                    <p className="text-xs font-semibold text-gray-500 uppercase">Area</p>
                  </div>
                  <p className="text-sm font-bold text-[#2C2C2C]">2000 sq.ft</p>
                </div>
              </div>
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white font-medium rounded-full hover:bg-[#6D4C3D] transition-colors"
                whileHover={{ x: 5 }}
              >
                Read More
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default OurProjects;
