import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from '../assets/Vishwalogo.png';
import logoOnLight from '../assets/logo.png';

const SCROLL_SOLID_THRESHOLD = 72;

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === "/";
    const isOverDarkHero = isHome && !scrolled;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > SCROLL_SOLID_THRESHOLD);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const links = [
        { name: "Home", path: "/" },
        { name: "Gallery", path: "/gallery" },
        { name: "Our Projects", path: "/our-projects" },
        { name: "About Us", path: "/about-us" },
    ];

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 font-secondary transition-all duration-500 ease-out ${isOverDarkHero
                    ? "bg-transparent py-3 md:py-4"
                    : "bg-[#FAF9F6]/93 backdrop-blur-xl backdrop-saturate-150 py-3 md:py-3.5 border-b border-[#8B5E3C]/10 shadow-[0_4px_24px_-4px_rgba(62,39,35,0.12)]"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
                    <Link
                        to="/"
                        className="flex-shrink-0 relative block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6C9A8] focus-visible:ring-offset-2"
                    >
                        <img
                            src={isOverDarkHero ? logoWhite : logoOnLight}
                            alt="Vishwaply"
                            className="h-11 w-auto sm:h-12 md:h-[3.25rem] object-contain object-left transition-opacity duration-300"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium text-[15px] transition-colors relative py-1 ${location.pathname === link.path
                                    ? isOverDarkHero ? "text-[#E6C9A8]" : "text-[#8B5E3C]"
                                    : isOverDarkHero
                                        ? "text-white/90 hover:text-white"
                                        : "text-[#2C2C2C]/85 hover:text-[#8B5E3C]"
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <span
                                        className={`absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full ${isOverDarkHero ? "bg-[#E6C9A8]" : "bg-[#8B5E3C]"
                                            }`}
                                        aria-hidden
                                    />
                                )}
                            </Link>
                        ))}

                        <Link
                            to="/contact-us"
                            className={`ml-1 px-6 py-2.5 font-bold rounded-full transition-all duration-300 shadow-lg ${isOverDarkHero
                                ? "bg-[#8B5E3C] text-white hover:bg-[#6D4C3D] shadow-black/20"
                                : "bg-[#8B5E3C] text-white hover:bg-[#6D4C3D] shadow-[#8B5E3C]/25"
                                }`}
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2.5 rounded-xl transition-colors ${isOverDarkHero
                                ? "text-white hover:bg-white/10"
                                : "text-[#2C2C2C] hover:bg-[#8B5E3C]/8"
                                }`}
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="fixed top-[4.25rem] left-0 right-0 z-40 md:hidden shadow-2xl border-t border-[#8B5E3C]/10 font-secondary bg-[#FFFCFA]/98 backdrop-blur-xl"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.06 },
                                },
                            }}
                            className="flex flex-col px-6 py-6 space-y-1"
                        >
                            {links.map((link) => (
                                <motion.div
                                    key={link.path}
                                    variants={{
                                        hidden: { opacity: 0, x: -8 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`block py-3 px-3 rounded-xl text-lg font-medium transition-colors ${location.pathname === link.path
                                            ? "text-[#8B5E3C] bg-[#8B5E3C]/08"
                                            : "text-[#2C2C2C] hover:bg-[#8B5E3C]/06 hover:text-[#8B5E3C]"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -8 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="pt-4"
                            >
                                <Link
                                    to="/contact-us"
                                    className="block w-full text-center px-6 py-3.5 bg-[#8B5E3C] text-white font-bold rounded-2xl hover:bg-[#6D4C3D] transition-colors shadow-md"
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
