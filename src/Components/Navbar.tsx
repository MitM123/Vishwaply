import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "Our Projects", path: "/our-projects" },
        { name: "About Us", path: "/about-us" },
    ];

    const navbarClasses = scrolled
        ? "bg-[#faf9f590] backdrop-blur-md"
        : "bg-transparent py-2";

    return (
        <>
            {/* NAVBAR */}
            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses} font-secondary`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={logo}
                            alt="Vishwaply"
                            className={`h-18 w-auto object-contain transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""
                                }`}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`${location.pathname === link.path
                                        ? "text-[#8B5E3C]"
                                        : scrolled
                                            ? "text-gray-700 hover:text-[#8B5E3C]"
                                            : "text-white/90 hover:text-white"
                                    } font-medium transition-colors`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/contact-us"
                            className="px-6 py-2.5 bg-[#8B5E3C] text-white font-bold rounded-full hover:bg-[#6D4C3D] transition-colors shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-gray-800"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1], // premium easing
                        }}
                        className="fixed top-[64px] font-secondary left-0 right-0 bg-white z-40 md:hidden shadow-xl border-t border-gray-100"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08,
                                    },
                                },
                            }}
                            className="flex flex-col px-6 py-8 space-y-6"
                        >
                            {links.map((link) => (
                                <motion.div
                                    key={link.path}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-lg font-medium transition-colors ${location.pathname === link.path
                                                ? "text-[#8B5E3C]"
                                                : "text-gray-800 hover:text-[#8B5E3C]"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* CTA */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link
                                    to="/contact-us"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center px-6 py-3 bg-[#8B5E3C] text-white font-bold rounded-full hover:bg-[#6D4C3D] transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            <Outlet />
        </>
    );
};

export default Navbar;
