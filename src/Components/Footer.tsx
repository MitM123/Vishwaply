import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#EBE9E4] text-slate-800 font-secondary rounded-t-[3rem]">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Company Info */}
                    <div className="lg:w-1/3 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                             <img src={logo} alt="Vishwa Ply & Hardware" className="h-32 w-auto object-contain" />
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg max-w-md mx-auto lg:mx-0 font-medium">
                            Your trusted partner for premium plywood, hardware, and construction materials since 2023.
                        </p>
                        
                        {/* Social Media moved here for better layout balance */}
                        <div className="flex gap-3 justify-center lg:justify-start pt-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="bg-white/60 hover:bg-[#8B5E3C] hover:text-white p-3 rounded-full transition-all duration-300 text-slate-700 shadow-sm"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="lg:w-2/3 flex flex-col sm:flex-row gap-10 lg:gap-20 justify-center lg:justify-end w-full text-center lg:text-left">

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">Home</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">Our Projects</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">About Us</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">Contact</a></li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-slate-900">Help</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">Privacy Policy</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">Terms of Service</a></li>
                                <li><a href="#" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">Cookie Policy</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-slate-900">Contact Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 justify-center lg:justify-start">
                                    <MapPin className="h-5 w-5 text-[#8B5E3C] mt-1 flex-shrink-0" />
                                    <span className="text-slate-600 text-base leading-relaxed font-medium">
                                        17,18,19, First floor, Snehsagar Soc,<br />
                                        Abrama Rd, opp. Sanskartirth School,<br />
                                        Mota Varachha, Surat, Gujarat 394101
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 justify-center lg:justify-start">
                                    <Phone className="h-5 w-5 text-[#8B5E3C] flex-shrink-0" />
                                    <a href="tel:+919527351890" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">
                                        +91 95273 51890
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 justify-center lg:justify-start">
                                    <Mail className="h-5 w-5 text-[#8B5E3C] flex-shrink-0" />
                                    <a href="mailto:vishwaplyandhardware5671@gmail.com" className="text-slate-600 hover:text-[#8B5E3C] transition-colors text-base font-medium">
                                        vishwaplyandhardware5671@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Bottom Copyright */}
            <div className="border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <p className="text-slate-600 text-sm text-center font-medium">
                        © 2024 Vishwa Ply & Hardware. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
