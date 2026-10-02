'use client';
import React, { useState } from 'react';
import { AboutUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FiUsers, FiDroplet, FiShield, FiPlay, FiArrowRight, FiX } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiUsers': return <FiUsers />;
    case 'FiDroplet': return <FiDroplet />;
    case 'FiShield': return <FiShield />;
    default: return null;
  }
};

export const AboutUsSection = ({ data, hideButton = false }: { data?: AboutUsData, hideButton?: boolean }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (!data) return null;

  return (
    <>
      <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">

        {/* Background Graphic */}
        <div className="absolute top-0 left-0 w-[120%] md:w-[80%] lg:w-[60%] h-[500px] md:h-[100%] lg:h-[120%] -mt-10 lg:-mt-20 z-0 pointer-events-none">
          <img src={data.bgImage} alt="Background" className="w-full h-full object-contain object-top lg:object-left" />
        </div>

        <div className="max-w-[1250px] mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-10">

          {/* Left Side: Images */}
          <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[350px] lg:min-h-[500px] flex items-center justify-center">

            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[550px] aspect-square z-10">
              {/* Main Center Image */}
              <img
                src={data.imageMain}
                alt="About CleanNest"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* Small Image 1 (Top Left) */}
              <img
                src={data.imageSmall1}
                alt="Cleaning"
                className="absolute -top-8 -left-8 md:-top-10 md:-left-12 w-[35%] h-[35%] object-contain drop-shadow-xl"
              />

              {/* Small Image 2 (Bottom Right) */}
              <img
                src={data.imageSmall2}
                alt="Room"
                className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-6 w-[40%] h-[40%] object-contain drop-shadow-xl"
              />

              {/* Yellow Badge (Top Right) */}
              <div className="absolute top-[8%] right-[8%] md:top-[12%] md:right-[12%] lg:top-[14%] lg:right-[14%] bg-[#fadb5f] w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center text-center shadow-lg transform rotate-3 z-20">
                <FiShield className="text-[#051024] text-2xl md:text-3xl mb-1" />
                <span className="text-[#051024] font-bold leading-tight text-[10px] md:text-xs">
                  {data.badgeText1} <br /> {data.badgeText2.split('\n').join(' ')}
                </span>

                {/* Little decorators (the blue dashes) */}
                <div className="absolute -top-2 -right-2 flex flex-col gap-1 -rotate-45">
                  <div className="w-3 h-1 md:w-4 md:h-1.5 bg-[#0057ff] rounded-full" />
                  <div className="w-4 h-1 md:w-6 md:h-1.5 bg-[#0057ff] rounded-full ml-1 md:ml-2" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-[2px] bg-[#fadb5f]" />
              <h4 className="text-[#3a6bc4] font-bold text-sm tracking-widest uppercase">
                {data.subtitle}
              </h4>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#051024] leading-tight mb-4">
              {data.title1} <br />
              <span className="text-[#0057ff]">{data.title2}</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              {data.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-y-4 gap-x-6 mb-6 border-b border-gray-100 pb-6">
              {data.features.map(feat => (
                <div key={feat.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e8f1ff] rounded-full flex items-center justify-center text-[#0057ff] text-lg flex-shrink-0">
                    {renderIcon(feat.icon)}
                  </div>
                  <span className="text-xs font-semibold text-[#051024] leading-tight max-w-[100px]">
                    {feat.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Row: Video & Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setShowVideo(true)}>
                <div className="w-28 h-16 rounded-xl overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                  <img src={data.videoThumbnail} alt="Video" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                    <div className="w-8 h-8 bg-[#051024] rounded-full flex items-center justify-center">
                      <FiPlay className="text-white text-sm ml-1" />
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-[#051024] text-xs mb-1">{data.videoText.split('\n').join(' ')}</h5>
                  <p className="text-[10px] text-gray-500 max-w-[150px] leading-relaxed">{data.videoSubtext.split('\n').join(' ')}</p>
                </div>
              </div>

              {!hideButton && (
                <Link href="/about" className="bg-[#e2edff] text-[#051024] font-semibold px-6 py-2.5 rounded-full hover:bg-[#0057ff] hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm whitespace-nowrap">
                  {data.button.text.replace('->', '')}
                  <FiArrowRight />
                </Link>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Video Popup Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
            >
              <FiX className="text-xl" />
            </button>
            <div className="aspect-video w-full">
              <iframe 
                src={data.videoUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
