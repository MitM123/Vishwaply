import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, ChevronDown, Shield, Sparkles } from "lucide-react";
import Partner from "@/Components/Partner";
import Company from "@/Components/Company";
import OurProducts from "@/Components/OurProducts";
import Footer from "@/Components/Footer";
import FAQ from "@/Components/FAQ";
import CTASection from "@/Components/CTASection";
import CustomerReviews from "@/Components/CustomerReviews";

/** Hero background — warm architectural interior with natural wood tones */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=85";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      <section className="relative min-h-[100dvh] w-full font-secondary overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          {/* Depth & readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a120c]/95 via-[#2c1810]/78 to-[#1f1410]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,transparent_0%,rgba(0,0,0,0.45)_100%)]" />
          {/* Subtle warm lift on copy side */}
          <div className="absolute inset-y-0 left-0 w-[min(100%,720px)] bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 sm:pt-32 md:px-12 lg:px-16 lg:pt-36">
          <motion.div
            className="max-w-2xl lg:max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#E6C9A8] backdrop-blur-md sm:text-xs">
                <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
                Premium plywood & hardware
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[4rem]"
            >
              Strength you can trust.
              <br />
              <span className="bg-gradient-to-r from-[#E6C9A8] via-[#f0dcc8] to-[#c4a574] bg-clip-text font-semibold text-transparent">
                Quality you can feel.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:mt-7 sm:text-md"
            >
              Premium plywood, laminates, and hardware for homes and projects that need lasting strength,
              clean finishes, and materials you can stand behind.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B5E3C] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6D4C3D] hover:shadow-xl"
              >
                Get a quote
                <ArrowRight className="h-[1.125rem] w-[1.125rem]" strokeWidth={2} aria-hidden />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E6C9A8] hover:bg-white/18"
              >
                View gallery
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-7 sm:mt-10 sm:gap-x-10"
            >
              <div className="flex items-center gap-2 text-sm text-white/75">
                <Shield className="h-5 w-5 shrink-0 text-[#E6C9A8]" aria-hidden />
                <span>Trusted materials · Surat &amp; beyond</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-1 text-white/50">
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
          </div>
        </motion.div>
      </section>

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
        <CustomerReviews />
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
