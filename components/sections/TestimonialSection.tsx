'use client';
import React, { useState, useRef, useEffect } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!data) return null;

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const scrollNode = scrollRef.current;
    const cardWidth = scrollNode.scrollWidth / data.testimonials.length;
    scrollNode.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % data.testimonials.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = activeIndex === 0 ? data.testimonials.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  // Optional: update active dot on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollNode = scrollRef.current;
    const cardWidth = scrollNode.scrollWidth / data.testimonials.length;
    const newIndex = Math.round(scrollNode.scrollLeft / cardWidth);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full py-20 bg-gray-50 relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#fadb5f]" />
            <h4 className="text-[#051024] font-bold text-sm tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-8 h-[2px] bg-[#fadb5f]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#051024] mb-4">
            {data.title1} <span className="text-blue-500 font-medium">{data.title2}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            {data.description}
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full max-w-[1100px] mx-auto group">
          
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 lg:gap-8 pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.testimonials.map((testi, index) => (
              <div 
                key={testi.id} 
                className={`snap-center snap-always flex-shrink-0 w-[100%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col ${activeIndex === index ? 'border-2 border-blue-400' : 'border border-gray-100'}`}
              >
                
                {/* Top Image */}
                <div className="w-full h-32 md:h-36 rounded-lg overflow-hidden mb-4">
                  <img src={testi.avatar} alt="Client" className="w-full h-full object-cover" />
                </div>

                {/* Stars */}
                <div className="flex justify-center text-[#ffcc00] mb-5 text-sm gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="flex gap-3 mb-6 flex-grow">
                  <span className="text-5xl font-sans font-bold text-blue-200 leading-none mt-1">“</span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {testi.quote}
                  </p>
                </div>
                
                {/* Bottom Profile */}
                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-4">
                  <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-[#051024] text-sm">{testi.name}</h5>
                    <p className="text-xs text-gray-500">{testi.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0057ff] rounded-full shadow-md flex items-center justify-center text-white hover:bg-blue-700 transition-colors z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <FaChevronLeft className="text-lg mr-1" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0057ff] rounded-full shadow-md flex items-center justify-center text-white hover:bg-blue-700 transition-colors z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <FaChevronRight className="text-lg ml-1" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {data.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-[#0057ff]' : 'bg-blue-200 hover:bg-blue-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
