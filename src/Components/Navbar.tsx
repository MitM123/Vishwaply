import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: "HOME", path: "/" },
        { name: "OUR PROJECTS", path: "/ourprojects" },
        { name: "ABOUT US", path: "/aboutus" }
    ];
    const navbarClasses = scrolled
        ? "bg-[#faf9f590] backdrop-blur-md"
        : "bg-transparent py-2";

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses} font-secondary`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img src={logo} alt="Vishwaply" className={`h-18 w-auto object-contain transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`} /> 
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link 
                            to="/" 
                            className={`${location.pathname === '/' ? 'text-[#8B5E3C]' : (scrolled ? 'text-gray-700 hover:text-[#8B5E3C]' : 'text-white/90 hover:text-white')} font-medium transition-colors`}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/our-projects" 
                            className={`${location.pathname === '/our-projects' ? 'text-[#8B5E3C]' : (scrolled ? 'text-gray-700 hover:text-[#8B5E3C]' : 'text-white/90 hover:text-white')} font-medium transition-colors`}
                        >
                            Our Projects
                        </Link>
                        <Link 
                            to="/about-us" 
                            className={`${location.pathname === '/about-us' ? 'text-[#8B5E3C]' : (scrolled ? 'text-gray-700 hover:text-[#8B5E3C]' : 'text-white/90 hover:text-white')} font-medium transition-colors`}
                        >
                            About Us
                        </Link>
                        <Link 
                            to="/contact-us" 
                            className="px-6 py-2.5 bg-[#8B5E3C] text-white font-bold rounded-full hover:bg-[#6D4C3D] transition-colors shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 focus:outline-none ${scrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[60px] left-0 right-0 bg-white shadow-xl z-40 md:hidden border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            <Link
                                to="/contact-us"
                                className={`text-center ${buttonClass} w-full`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Outlet />
        </>
    );
};

export default Navbar;
