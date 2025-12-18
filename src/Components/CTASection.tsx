const CTASection = () => {
    return (
        <section className="bg-[#FAF9F6] font-Cabin py-16 px-4 md:px-6">
            <div className="max-w-[95%] mx-auto">
                <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                            alt="Interior Design"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Dark Overlay for text readability */}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-end text-right px-6 md:px-16 lg:px-24">
                        <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl uppercase tracking-wide">
                            Would you like to<br />discuss your project?
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
                            Let's work together and we'll help you create the perfect space with our best interior design solutions.
                        </p>
                        <button className="px-10 py-4 rounded-full border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-[#5D4037] transition-all duration-300 uppercase tracking-wider">
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
