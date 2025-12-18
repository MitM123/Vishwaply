import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Partner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "500+",
      label: "Happy Clients",
      description: "Builders, architects, and homeowners who trust our quality."
    },
    {
      value: "1200+",
      label: "Projects Completed",
      description: "Residential and commercial spaces transformed with our materials."
    },
    {
      value: "100%",
      label: "Quality Assurance",
      description: "Commitment to providing only genuine, premium grade products."
    }
  ];

  return (
    <div ref={ref} className="bg-[#FAF9F6] font-secondary py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-24">
          
          {/* Left Title */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Trusted Partner</span>
              <div className="h-[1px] w-12 bg-gray-400"></div>
            </div>
            <h2 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              For Modern<br />Spaces.
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:w-1/2 lg:pt-16">
            <p 
              className={`text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-1000 delay-300 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              We believe that every structure deserves the best foundation. That's why we collaborate with leading manufacturers to supply premium plywood and hardware that meets the demands of modern architecture—materials that are durable, aesthetically pleasing, and reliable for generations.
            </p>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 border-t border-gray-200 pt-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center md:text-left transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + (index * 200)}ms` }}
            >
              <h3 className="text-6xl md:text-7xl font-light text-gray-900 mb-4">
                {stat.value}
              </h3>
              <p className="text-lg font-bold text-gray-800 mb-2">
                {stat.label}
              </p>
              <p className="text-sm text-gray-500 max-w-xs mx-auto md:mx-0 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}