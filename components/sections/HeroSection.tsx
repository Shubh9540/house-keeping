import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative w-full bg-white bg-no-repeat bg-right bg-cover py-16 md:py-24"
      style={{ backgroundImage: `url('${data.image1}')` }}
    >
      {/* Overlay for mobile readability only */}
      <div className="absolute inset-0 bg-white/85 md:hidden z-0"></div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-8 relative z-10 flex flex-col justify-center h-full">
        
        {/* Text Content */}
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-[11px] md:text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <br />
            <span className="text-blue-500 font-medium">{data.title2}</span>
          </h1>
          
          <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed max-w-md">
            {data.description}
          </p>
          
          <div className="mt-8 flex gap-4">
            {data.button && (
              <Link href={data.button.url} className="bg-[var(--color-primary)] text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 shadow-md hover:-translate-y-0.5">
                {data.button.text}
              </Link>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
};
