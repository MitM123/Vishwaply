"use client";
import React from "react";
import { Package, Palette, Settings, DoorOpen, Home, Hammer } from "lucide-react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content : any = [
    {
        title: "Plywood & Boards",
        description: (
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-3 shadow-lg">
                        <Package className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Plywood & Boards</h3>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                    Premium quality plywood, boards, and flush doors engineered for durability and strength in Indian conditions.
                </p>
                
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Products Include</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Commercial Plywood</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">BWP/Marine Plywood</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">MR Grade Plywood</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Block Board</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Flush Doors</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">MDF & HDHMR</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-indigo-600 font-semibold">Strong. Durable. Tested for Indian Conditions.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1614267118556-5c1c999f0f0b?w=800&q=80"
                    alt="Plywood & Boards"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },
    {
        title: "Laminates & Surface Solutions",
        description: (
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-3 shadow-lg">
                        <Palette className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Laminates & Surfaces</h3>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                    Premium decorative laminates and surface finishes that transform interiors with elegance and style.
                </p>
                
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Products Include</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Decorative Laminates</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">High Gloss Finish</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Matte Finish</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Textured Finish</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Acrylic Sheets</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">PVC Laminates</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-indigo-600 font-semibold">Premium finishes that elevate interiors.</p>
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
        description: (
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 shadow-lg">
                        <Settings className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Modular Hardware</h3>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                    Premium fittings from Hettich, Blum, Häfele, Ebco & Enox - trusted by architects and carpenters nationwide.
                </p>
                
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Products Include</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Soft Close Hinges</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Drawer Channels</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Hydraulic Fittings</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Lift-Up Systems</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Wardrobe Accessories</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Kitchen Baskets</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-2">
                    <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Trusted Brands</p>
                    <p className="text-base text-gray-900 font-medium">Hettich • Blum • Häfele • Ebco • Enox</p>
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
        description: (
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 shadow-lg">
                        <DoorOpen className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Door & Furniture Hardware</h3>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                    High-quality locks, handles, and door fittings combining security with contemporary design aesthetics.
                </p>
                
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Products Include</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Door Locks</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Handles & Knobs</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Tower Bolts</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Aldrops</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Door Closers</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Mortise Locks</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-indigo-600 font-semibold">Security with style for modern spaces.</p>
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
        description: (
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 p-3 shadow-lg">
                        <Home className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Kitchen & Wardrobe</h3>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                    Smart modular storage systems and premium accessories for organized, functional living spaces.
                </p>
                
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Products Include</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Kitchen Accessories</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Cutlery Trays</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Corner Units</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Pantry Units</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Wardrobe Storage</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Organizers</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-indigo-600 font-semibold">Smart storage. Smooth living.</p>
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
        description: (
            <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-3 shadow-lg">
                        <Hammer className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Adhesives & Accessories</h3>
                </div>
                
                <p className="text-base text-gray-700 leading-relaxed">
                    Quality adhesives, fasteners, and finishing materials that hold your projects together perfectly.
                </p>
                
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Products Include</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Fevicol Adhesives</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Wood Glue</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Screws & Fasteners</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Nails & Fittings</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Edge Bands</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                            <p className="text-sm text-gray-800 font-medium">Tapes & Tools</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-indigo-600 font-semibold">The finishing touch that holds everything together.</p>
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
        <div className="w-full py-20 font-secondary ">
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-3 text-center">
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