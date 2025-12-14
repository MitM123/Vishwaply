import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-secondary text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Hardware Store
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Your trusted partner for premium plywood, hardware, and construction materials since 1995.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="bg-white/10 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-300">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-indigo-600 p-2 rounded-full transition-colors duration-300">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Plywood & Boards
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Laminates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Modular Hardware
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Door Hardware
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    Kitchen Solutions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    123 Hardware Street, Bharuch, Gujarat, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <a href="mailto:info@hardwarestore.com" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                                    info@hardwarestore.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2024 Hardware Store. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;