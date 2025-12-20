import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const reviews = [
    {
      name: "Mit Monpara",
      role: "Marketing Director",
      content:
        "Working with this team has been transformative for our business. Their attention to detail and commitment to excellence is unmatched.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    },
    {
      name: "Nayan Goyani",
      role: "CEO & Founder",
      content:
        "The level of professionalism and expertise exceeded all our expectations. They delivered on time and the quality was outstanding.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    },
    {
      name: "Dharmesh Goyani",
      role: "Product Manager",
      content:
        "From start to finish, the experience was seamless. Their innovative approach made all the difference.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
    },
    {
      name: "AP Rajput",
      role: "CTO",
      content:
        "Exceptional service and remarkable results. They understood our vision perfectly.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop",
    },
    {
      name: "SS Banna",
      role: "Operations Manager",
      content:
        "Their expertise and commitment to quality is evident in everything they do.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop",
    },
  ];

  /* 🔥 RESPONSIVE ITEMS COUNT */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);       // Mobile
      else if (window.innerWidth < 1024) setItemsToShow(2); // Tablet
      else setItemsToShow(3);                               // Desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviews.length - itemsToShow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] font-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] leading-tight">
            What Our <br />
            Customers Say
          </h2>

          <div className="flex gap-3 self-start md:self-auto">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 cursor-pointer rounded-full border-2 transition-all ${currentIndex === 0
                  ? "border-gray-300 text-gray-300"
                  : "border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white"
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`p-3 cursor-pointer rounded-full border-2 transition-all ${currentIndex >= maxIndex
                  ? "border-gray-300 text-gray-300"
                  : "border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white"
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-3xl p-4 h-full border border-gray-200 hover:shadow-lg transition-shadow">
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    “{review.content}”
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C]">
                        {review.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
