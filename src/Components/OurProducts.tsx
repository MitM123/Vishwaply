"use client";
import { Package, Palette, Settings, DoorOpen, Home, Hammer } from "lucide-react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content: any = [
    {
        title: "Plywood & Boards",
        icon: <Package className="h-10 w-10 text-[#8B5E3C]" strokeWidth={1.5} />,
        description: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Premium quality plywood, boards, and flush doors engineered for durability and strength in Indian conditions.
                </p>

                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Products Include
                    </h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        {[
                            "Commercial Plywood",
                            "BWP/Marine Plywood",
                            "MR Grade Plywood",
                            "Block Board",
                            "Flush Doors",
                            "MDF & HDHMR",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C] transition-colors"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C]" />
                                <p className="text-base font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-[#8B5E3C] font-semibold">
                        Strong. Durable. Tested for Indian Conditions.
                    </p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1554230253-017daba2b631?q=80&w=1184&auto=format&fit=crop"
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

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                        "Decorative Laminates",
                        "High Gloss Finish",
                        "Matte Finish",
                        "Textured Finish",
                        "Acrylic Sheets",
                        "PVC Laminates",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C]" />
                            <p className="text-base font-medium">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-[#8B5E3C] font-semibold">
                        Premium finishes that elevate interiors.
                    </p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
                    alt="Laminates"
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
                    Premium modular fittings trusted by architects and carpenters for smooth performance and long-lasting reliability.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                        "Soft Close Hinges",
                        "Drawer Channels",
                        "Hydraulic Fittings",
                        "Lift-Up Systems",
                        "Wardrobe Accessories",
                        "Kitchen Baskets",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C]" />
                            <p className="text-base font-medium">{item}</p>
                        </div>
                    ))}
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
                    src="https://www.makwanaworld.com/images/modular-furniture-for-home-working-room-wardrobe-desk-chair-desktop.webp"
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
                    Durable and stylish door hardware designed to deliver security, functionality, and modern aesthetics.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                        "Door Locks",
                        "Handles & Knobs",
                        "Tower Bolts",
                        "Aldrops",
                        "Door Closers",
                        "Mortise Locks",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C]" />
                            <p className="text-base font-medium">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-[#8B5E3C] font-semibold tracking-wide">Security with style for modern spaces.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://media.istockphoto.com/id/1370675492/photo/fixing-door-lock-master.jpg?s=612x612&w=0&k=20&c=MdTzDR_ObGvpqFIY_B0g9-o6r1D46CkEmA68g5hdMOY="
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
                    Smart modular solutions designed to maximize storage, organization, and everyday convenience.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                        "Kitchen Accessories",
                        "Cutlery Trays",
                        "Corner Units",
                        "Pantry Units",
                        "Wardrobe Storage",
                        "Organizers",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C]" />
                            <p className="text-base font-medium">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                    <p className="text-base text-[#8B5E3C] font-semibold">
                        Strong. Durable. Tested for Indian Conditions.
                    </p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://img.freepik.com/premium-photo/3d-rendering-minimalist-kitchen-interior-design_674881-1059.jpg"
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
                    Reliable adhesives, fasteners, and finishing materials designed to deliver strength, durability, and precision.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {[
                        "Fevicol Adhesives",
                        "Wood Glue",
                        "Screws & Fasteners",
                        "Nails & Fittings",
                        "Edge Bands",
                        "Tapes & Tools",
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-2 text-slate-700 hover:text-[#8B5E3C]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#8B5E3C]" />
                            <p className="text-base font-medium">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm text-[#8B5E3C] font-semibold tracking-wide">The finishing touch that holds everything together.</p>
                </div>
            </div>
        ),
        content: (
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                    src="https://thumbs.dreamstime.com/b/furniture-fittings-wooden-background-copy-space-laminated-229745720.jpg"
                    alt="Adhesives & Accessories"
                    className="h-full w-full object-cover"
                />
            </div>
        ),
    },

];

const OurProducts = () => {
    return (
        <div className="w-full font-secondary bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-4 pt-20 mb-10 text-center">
                <p className="text-sm font-semibold text-[#8B5E3C] uppercase mb-3">
                    Our Products
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Recommended Categories
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our comprehensive range of premium products for every
                    construction and interior need
                </p>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
                <StickyScroll content={content} />
            </div>

            {/* Mobile */}
            <div className="md:hidden px-4 space-y-16">
                {content.map((item: any, index: number) => (
                    <div key={index} className="space-y-6">
                        <div className="h-[240px] rounded-2xl overflow-hidden shadow-lg">
                            {item.content}
                        </div>

                        <div className="flex items-center gap-4">
                            {item.icon}
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>

                        {item.description}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;



