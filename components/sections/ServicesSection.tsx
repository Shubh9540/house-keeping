import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const ServicesSection = ({ data, hideButton = false }: { data?: ServicesData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 md:py-12 bg-white relative overflow-hidden">

      <div className="max-w-[1250px] mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <span className="text-[#2b6ffd]">{data.title2}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {data.services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-10">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-[#051024] leading-tight">
                    {service.title}
                  </h3>
                  <Link href={service.url} className="w-10 h-10 flex-shrink-0 rounded-full border border-blue-100 flex items-center justify-center text-[#0057ff] bg-transparent group-hover:bg-[#0057ff] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FiArrowRight className="text-lg" />
                  </Link>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!hideButton && data.button && (
          <div className="flex justify-center mt-12">
            <Link href={data.button.url} className="bg-[#ffcc00] text-[#051024] font-bold px-8 py-3.5 rounded-2xl flex items-center gap-3 hover:bg-[#e6b800] hover:-translate-y-1 transition-all duration-300 shadow-md">
              {data.button.text.replace('->', '')}
              <FiArrowRight className="text-lg" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
