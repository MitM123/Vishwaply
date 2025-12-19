import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    const linkClasses = scrolled
        ? "text-gray-800 hover:text-[#8B5E3C]"
        : "text-gray-800 hover:text-[#8B5E3C] md:text-white md:hover:text-gray-200"; // White text on transparent (dark hero), dark on white

    // Solid brown button color
    const buttonClass = "px-6 py-2.5 bg-[#8B5E3C] text-white font-bold rounded-full hover:bg-[#6D4C3D] transition-colors shadow-lg";

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
                        {links.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className={`text-sm font-bold tracking-wide transition-colors ${linkClasses}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <Link to="/contactus" className={buttonClass}>
                            CONTACT US
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
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-lg font-bold text-gray-800 hover:text-[#8B5E3C]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contactus"
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
