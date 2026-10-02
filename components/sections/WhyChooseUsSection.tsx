import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FiUsers, FiShield, FiThumbsUp, FiClock, FiSettings, FiStar, FiArrowRight } from 'react-icons/fi';
import { BsHouseDoor } from 'react-icons/bs';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiUsers': return <FiUsers />;
    case 'FiShield': return <FiShield />;
    case 'FiThumbsUp': return <FiThumbsUp />;
    case 'FiClock': return <FiClock />;
    case 'FiSettings': return <FiSettings />;
    case 'FiStar': return <FiStar />;
    default: return null;
  }
};

export const WhyChooseUsSection = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-[55%]">
          <div className="flex items-center gap-3 mb-4">
            <h4 className="text-[var(--color-primary)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-10 h-[2px] bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[var(--color-primary)] leading-tight mb-4 tracking-tight">
            {data.title1} <br />
            <span className="text-[#2b6ffd]">{data.title2}</span>
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed text-sm md:text-base max-w-[95%] font-medium">
            {data.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 mb-10">
            {data.features.map(feat => (
              <div key={feat.id} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f1ff] flex items-center justify-center text-[#2b6ffd] text-xl flex-shrink-0">
                  {renderIcon(feat.icon)}
                </div>
                <div>
                  <h5 className="font-bold text-[var(--color-primary)] text-sm mb-1">{feat.title}</h5>
                  <p className="text-xs text-gray-500 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href={data.button.url} className="inline-flex items-center gap-2 bg-[#2b6ffd] hover:bg-[var(--color-primary)] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors duration-300 shadow-md">
            {data.button.text.replace('->', '')}
            <FiArrowRight />
          </Link>
        </div>

        {/* Right Side: Image with Badge */}
        <div className="w-full lg:w-[45%] relative min-h-[400px] md:min-h-[500px] flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Background Vector Graphics (The light blue circles) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0 pointer-events-none">
            <div className="absolute top-[5%] right-[5%] w-[70%] aspect-square rounded-full bg-[#e6f0ff]"></div>
            <div className="absolute bottom-[5%] left-[5%] w-[60%] aspect-square rounded-full bg-[#dae9ff]"></div>
          </div>

          {/* Main Image */}
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[480px] z-10">
            {/* Displaying the original image without artificial cropping */}
            <div className="w-full aspect-square relative z-10">
              <img src={data.imageMain} alt="Why Choose Us" className="w-full h-full object-contain" />
            </div>

            {/* Blue Badge */}
            <div className="absolute -left-4 md:-left-8 top-[8%] w-32 h-32 md:w-36 md:h-36 rounded-full bg-[#2b6ffd] border-4 border-white shadow-xl flex flex-col items-center justify-center text-center text-white p-4 z-20">
              <BsHouseDoor className="text-3xl md:text-4xl mb-2" />
              <span className="font-bold text-xs md:text-sm leading-tight">
                {data.badgeTitle} <br /> {data.badgeText}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
