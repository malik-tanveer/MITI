import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sir Makhdoom",
    text: "Sir Makhdoom is a fantastic mentor and developer. His guidance on full-stack development has been invaluable.",
    stars: 5,
  },
  {
    name: "Sir Makhdoom",
    text: "Sir Makhdoom is a fantastic mentor and developer. His guidance on full-stack development has been invaluable.",
    stars: 5,
  },
  {
    name: "Sir Makhdoom",
    text: "Sir Makhdoom is a fantastic mentor and developer. His guidance on full-stack development has been invaluable.",
    stars: 5,
  },
  {
    name: "Sir Ashad Ali Khan",
    text: "Sir Ashad Ali Khan's expertise in AI and Python development is extraordinary. He makes complex concepts simple and actionable.",
    stars: 5,
  },
  {
    name: "Sir Tanveer Malik",
    text: "Sir Tanveer Malik's work on web apps and backend solutions is highly efficient and professional. Always delivers beyond expectations.",
    stars: 5,
  },
  {
    name: "Sir Maroof Ali",
    text: "Sir Maroof Ali is a skilled Python and AI developer. His solutions are innovative, interactive, and automated seamlessly.",
    stars: 5,
  },
  {
    name: "Sir Hassan Raza",
    text: "Sir Hassan Raza's problem-solving skills and data-driven approach improve workflows and results significantly.",
    stars: 5,
  },
];

const Testimonials = () => {
  const carouselRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
      setCurrent(index);
    }
  };

  const scroll = (direction) => {
    const nextIndex =
      direction === "left"
        ? Math.max(current - 1, 0)
        : Math.min(current + 1, testimonials.length - 1);
    scrollToIndex(nextIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        const index = Math.round(carouselRef.current.scrollLeft / width);
        setCurrent(index);
      }
    };
    const ref = carouselRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          What Our Mentors Say
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Hear from our distinguished mentors and their experience guiding students and building innovative solutions.
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/50 hover:bg-slate-700/70 text-white p-3 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-full snap-start p-8 flex flex-col items-center justify-center shadow-xl mx-2"
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold mb-4">
                  {item.name.split(" ")[1][0]}
                </div>
                {/* Name */}
                <h3 className="text-white font-bold text-2xl mb-2">{item.name}</h3>
                {/* Stars */}
                <div className="flex items-center justify-center mb-4">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                {/* Text */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/50 hover:bg-slate-700/70 text-white p-3 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? "bg-indigo-500" : "bg-gray-500"
              }`}
              onClick={() => scrollToIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Tailwind CSS to hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
