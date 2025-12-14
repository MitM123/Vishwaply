import { motion } from "framer-motion";
import falcon from "../assets/falcon.jpg";
import { Link } from "react-router";
import Partner from "@/Components/Partner";
import Company from "@/Components/Company";
import OurProducts from "@/Components/OurProducts";
import Footer from "@/Components/Footer";
import FAQ from "@/Components/FAQ";

const Home = () => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const badgeVariants: any = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="relative  flex w-full h-screen justify-center font-secondary items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={falcon}
            alt="falcon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/75"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 mt-12 flex flex-col items-center justify-center px-6 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants} className="mb-3">
            <span className="inline-block px-5 py-2 font-Cinzel rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-semibold tracking-wider shadow-lg">
              Your Trust is Our Success
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white font-Cabin text-center mb-8 leading-tight tracking-tight">

            <motion.div variants={wordVariants} custom={0} className="mb-3">
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-extrabold">
                Strength
              </span>
              <span className="text-gray-100"> You Can Trust.</span>
            </motion.div>

            <motion.div variants={wordVariants} custom={1}>
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-300 bg-clip-text text-transparent font-extrabold">
                Quality
              </span>
              <span className="text-gray-100"> You Can Feel.</span>
            </motion.div>

          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl lg:text-lg text-center mb-7 font-semibold max-w-3xl leading-relaxed"
          >
            Delivering premium plywood, laminates, and hardware for homes that demand lasting strength.
          </motion.p>

          {/* Button */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="px-5 py-3 w-48 font-bold text-md flex items-center justify-center 
            bg-gradient-to-r from-[#182f4f] to-[#2f578c] 
            text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Quotes
            </Link>
          </motion.div>

        </motion.div>
      </div>
      <div>
        <Company />
      </div>
      <div>
        <Partner />
      </div>
      <div>
        <OurProducts />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>

  );
};

export default Home;
