import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800 font-secondary">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

                    {/* Company Info */}
                    <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <div className="bg-indigo-600 p-1 rounded">
                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">
                                Vishwa Ply & Hardware
                            </h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm max-w-md mx-auto lg:mx-0">
                            Your trusted partner for premium plywood, hardware, and construction materials since 2023.
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-6 text-center lg:text-left">
                        <h4 className="text-base font-medium mb-4 text-slate-900">
                            Sign up for our newsletter
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2.5 bg-white/50 border-b-2 border-slate-300 focus:outline-none focus:border-indigo-600 text-sm placeholder-slate-400"
                            />
                            <button className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 justify-center lg:justify-end mt-10 pt-10 border-t border-slate-200 text-center lg:text-left">

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-slate-900">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Home</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Our Projects</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-slate-900">Help</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-slate-900">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2 justify-center lg:justify-start">
                                <MapPin className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm leading-relaxed">
                                    17,18,19, First floor, Snehsagar Soc,<br />
                                    Abrama Rd, opp. Sanskartirth School,<br />
                                    Mota Varachha, Surat, Gujarat 394101
                                </span>
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <Phone className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                                <a href="tel:+919527351890" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">
                                    +91 95273 51890
                                </a>
                            </div>
                            <div className="flex items-center gap-2 justify-center lg:justify-start">
                                <Mail className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                                <a href="mailto:vishwaplyandhardware5671@gmail.com" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">
                                    vishwaplyandhardware5671@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex gap-3 justify-center lg:justify-start">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="bg-white/60 hover:bg-indigo-600 hover:text-white p-2 rounded-full transition-all duration-300 text-slate-700"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-slate-200 bg-white/40">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <p className="text-slate-600 text-xs text-center">
                        © 2024 Vishwa Ply & Hardware. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
