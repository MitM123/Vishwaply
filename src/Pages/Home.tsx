import { motion } from "framer-motion";
import businessHero from "../assets/business_hero.png";
import { Link } from "react-router";
import Partner from "@/Components/Partner";
import Company from "@/Components/Company";
import OurProducts from "@/Components/OurProducts";
import Footer from "@/Components/Footer";
import FAQ from "@/Components/FAQ";
import CTASection from "@/Components/CTASection";

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
      <div className="relative w-full h-screen font-secondary overflow-hidden">
        
        {/* Background Image with Brown Tint Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={businessHero}
            alt="Luxury Wood Interior"
            className="w-full h-full object-cover"
          />
          {/* Brown Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#3E2723]/60 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <motion.div 
            className="max-w-4xl z-10 mt-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-sm font-bold tracking-wider uppercase">
                Premium Interiors
              </span>
            </motion.div> */}

            <motion.h1 className="text-5xl md:text-7xl lg:text-7.5xl font-bold text-white leading-tight mb-8">
              Strength <br />
              You Can Trust. <br />
              <span className="text-[#E6C9A8]">Quality You Can Feel.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-200 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10"
            >
              Delivering premium plywood, laminates, and hardware for homes that demand lasting strength and elegance.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#8B5E3C] rounded-full hover:bg-[#6D4C3D] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Get Quotes
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

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
        <CTASection />
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
