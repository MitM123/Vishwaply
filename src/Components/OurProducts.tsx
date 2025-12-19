"use client";
import { Package, Palette, Settings, DoorOpen, Home, Hammer } from "lucide-react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content : any = [
    {
        title: "Plywood & Boards",
        icon: <Package className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Premium quality plywood, boards, and flush doors engineered for durability and strength in Indian conditions.
                </p>
                
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products Include</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Commercial Plywood</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">BWP/Marine Plywood</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">MR Grade Plywood</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Block Board</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Flush Doors</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">MDF & HDHMR</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-[#8B5E3C] font-semibold">Strong. Durable. Tested for Indian Conditions.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1554230253-017daba2b631?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Plywood & Boards"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Laminates & Surface Solutions",
        icon: <Palette className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Premium decorative laminates and surface finishes that transform interiors with elegance and style.
                </p>
                
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products Include</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                         <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Decorative Laminates</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">High Gloss Finish</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Matte Finish</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Textured Finish</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Acrylic Sheets</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">PVC Laminates</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-[#8B5E3C] font-semibold tracking-wide">Premium finishes that elevate interiors.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                    alt="Laminates & Surfaces"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Modular Hardware",
        icon: <Settings className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Premium fittings from Hettich, Blum, Häfele, Ebco & Enox - trusted by architects and carpenters nationwide.
                </p>
                
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products Include</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Soft Close Hinges</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Drawer Channels</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Hydraulic Fittings</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Lift-Up Systems</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Wardrobe Accessories</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Kitchen Baskets</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted Brands</p>
                    <p className="text-base text-slate-900 font-medium">Hettich • Blum • Häfele • Ebco • Enox</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1585128792158-4906e8dc9a39?w=800&q=80"
                    alt="Modular Hardware"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Door & Furniture Hardware",
        icon: <DoorOpen className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    High-quality locks, handles, and door fittings combining security with contemporary design aesthetics.
                </p>
                
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products Include</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                         <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Door Locks</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Handles & Knobs</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Tower Bolts</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Aldrops</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Door Closers</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Mortise Locks</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-[#8B5E3C] font-semibold tracking-wide">Security with style for modern spaces.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                    alt="Door Hardware"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Kitchen & Wardrobe Solutions",
        icon: <Home className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Smart modular storage systems and premium accessories for organized, functional living spaces.
                </p>
                
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products Include</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Kitchen Accessories</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Cutlery Trays</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Corner Units</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Pantry Units</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Wardrobe Storage</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Organizers</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-[#8B5E3C] font-semibold tracking-wide">Smart storage. Smooth living.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80"
                    alt="Kitchen & Wardrobe"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Adhesives & Accessories",
        icon: <Hammer className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Quality adhesives, fasteners, and finishing materials that hold your projects together perfectly.
                </p>
                
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Products Include</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                         <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Fevicol Adhesives</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Wood Glue</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Screws & Fasteners</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Nails & Fittings</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Edge Bands</p>
                        </div>
                        <div className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C] transition-colors"></span>
                            <p className="text-base font-medium">Tapes & Tools</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-[#8B5E3C] font-semibold tracking-wide">The finishing touch that holds everything together.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
                    alt="Adhesives & Accessories"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
];

const OurProducts = () => {
    return (
        <div className="w-full pb-20 font-secondary bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-4 pt-20 mb-10">
                <p className="text-sm font-semibold text-[#8B5E3C] uppercase tracking-wide mb-3 text-center">
                    Our Products
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
                    Recommended Categories
                </h2>
                <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    Discover our comprehensive range of premium products for every construction and interior need
                </p>
            </div>
            <StickyScroll content={content} />
        </div>
    );
}

export default OurProducts;