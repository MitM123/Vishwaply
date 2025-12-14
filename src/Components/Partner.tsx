import React, { useState, useEffect } from 'react';
import { Hammer, Users, PackageCheck, Globe } from 'lucide-react';

export default function VishwaplyStats() {
  const [counts, setCounts] = useState({
    clients: 0,
    people: 0,
    projects: 0,
    experience: 0
  });

  const finalCounts = {
    clients: 500,
    people: 150,
    projects: 1200,
    experience: 15
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        clients: Math.floor(finalCounts.clients * progress),
        people: Math.floor(finalCounts.people * progress),
        projects: Math.floor(finalCounts.projects * progress),
        experience: Math.floor(finalCounts.experience * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Globe,
      count: counts.clients,
      suffix: '+',
      label: 'Clients Worldwide',
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      icon: Users,
      count: counts.people,
      suffix: '+',
      label: 'Awesome People',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: PackageCheck,
      count: counts.projects,
      suffix: '+',
      label: 'Projects Deliver',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Hammer,
      count: counts.experience,
      suffix: '+',
      label: 'Years of Experiences',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            ⭐ Our Trusted Partnership
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Quality products and exceptional service for your construction needs.
          </p>
        </div>

        {/* Stats Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Background Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-5">
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 text-left">
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl md:text-5xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {stat.count}
                        </span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                          {stat.suffix}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium text-base">
                        {stat.label}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-xl px-6 py-4 shadow-md">
            <p className="text-base font-semibold text-gray-700 mb-1">
              Trusted by Builders Across India
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <div className="h-1.5 w-1.5 bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-600">Quality Products | Expert Guidance | On-Time Delivery</p>
              <div className="h-1.5 w-1.5 bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}