import { useState } from 'react';
import { Link, Outlet } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { motion } from "framer-motion";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const links = [
        {
            name: "HOME",
            scrollTo: "hero",
            path: "/",
        },
        {
            name: "OUR PROJECTS",
            scrollTo: "pricing",
            path: "/ourprojects"
        },
        {
            name: "ABOUT US",
            scrollTo: "faqs",
            path: "/aboutus"
        }
    ]



    const MobileMenu = () => (
        <motion.div
            className="md:hidden fixed top-[80px] left-0 right-0 bg-white shadow-lg z-40"
            initial={{ opacity: 0, y: -100 }}
            animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : -100,
            }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex flex-col items-center p-4 space-y-4">
                {links.map((link) => (
                    <Button
                        key={link.name}
                        className="text-gray-700 size-2/4 transition-all duration-300 cursor-pointer bg-white hover:bg-white hover:text-black"
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        {link.name}
                    </Button>
                ))}
                <div className="flex flex-col font-manrope items-center space-y-2">
                    <Link
                        to="/register"
                        className="px-6 py-2 bg-gradient-to-r from-[#8B5E3C] to-[#5D4037] text-white rounded-lg hover:opacity-90 text-center mb-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </motion.div>
    );

    return (
        <>
            <div className="fixed w-full top-0 left-0 right-0 z-50 font-secondary ">
                <nav className="max-w-7xl mx-auto w-[95%] h-[65px] rounded-full mt-5 bg-white/70 border border-[#e5e5e5] backdrop-blur-xl flex items-center justify-between px-4 md:px-3">
                    <div className="flex items-center space-x-2">
                        {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg" /> */}
                        <Link to="/"
                            className="text-3xl">
                            <img src={logo} alt="" className='w-40 h-28' />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex justify-center items-center gap-10`}>
                        {
                            links.map((link) => (
                                <Link to={link.path} key={link.name}>
                                    <Button key={link.name} className={"text-gray-700 hover:cursor-pointer font-bold hover:bg-transparent transition-colors bg-transparent text-md rounded-full"}
                                    >
                                        {link.name}
                                    </Button>
                                </Link>
                            ))
                        }
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6 text-gray-700" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* User Actions */}

                    <div className="hidden md:flex font-manrope items-center gap-6">
                        <Link
                            to="/contactus"
                            className="px-5 py-3 w-34 font-bold text-sm flex items-center justify-center
bg-gradient-to-r from-[#8B5E3C] to-[#5D4037]
  text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                            CONTACT US
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && <MobileMenu />}
            <Outlet />
        </>
    );
};

export default Navbar;
