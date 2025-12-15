const CTASection = () => {
    return (
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-Cabin px-4 py-12 sm:px-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Main Flex */}
                    <div className="flex flex-col lg:flex-row w-full">

                        {/* Left Content – 60% on desktop */}
                        <div className="w-full lg:w-[60%] p-8 sm:p-12 lg:p-20 flex flex-col justify-center text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                                Would you like to discuss with us about your amazing project?
                            </h2>
                            <p className="text-slate-500 text-base sm:text-lg mb-8">
                                Let's work together and we'll help you by our best interior design
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <button className="bg-slate-900 text-white px-8 py-3.5 rounded font-medium hover:bg-slate-800 transition-colors duration-300">
                                    Contact Us
                                </button>
                            </div>
                        </div>

                        {/* Right Images – 40% on desktop */}
                        <div className="w-full lg:w-[40%] relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-slate-100">

                            {/* Top Small Image */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:top-45 lg:left-[-10%] w-2/3 sm:w-1/2 h-2/5 bg-white rounded-lg overflow-hidden shadow-lg z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                                    alt="Living room interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom Large Image */}
                            <div className="absolute bottom-6 right-1/2 translate-x-1/2 lg:right-6 lg:translate-x-0 w-[85%] sm:w-[80%] h-[70%] lg:w-[90%] lg:h-[90%] bg-white rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                                    alt="Modern living space"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
