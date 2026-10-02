"use client";

import React, { useState } from 'react';
import { VideoGalleryData } from '@/types/templates.types';
import { FaPlay, FaTimes } from 'react-icons/fa';

export const VideoGallerySection = ({ data }: { data?: VideoGalleryData }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  if (!data) return null;

  const openVideo = (youtubeId: string) => {
    setActiveVideo(youtubeId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="w-full py-16 md:py-12 bg-[#f4f8fc] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <span className="text-[#2b6ffd]">{data.title2}</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.videos.map((item) => (
            <div key={item.id} className="w-full flex flex-col group cursor-pointer" onClick={() => openVideo(item.youtubeId)}>
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-4 group-hover:shadow-xl transition-all duration-300">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="text-[#0057ff] text-xl ml-1" />
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {item.duration}
                </div>
              </div>

              {/* Title */}
              <h5 className="font-bold text-[var(--color-primary)] text-center text-sm md:text-base group-hover:text-[#2b6ffd] transition-colors duration-300">
                {item.title}
              </h5>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal (Lightbox) */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={closeVideo}>
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl hover:text-[var(--color-accent)] transition-colors p-2 z-[110]"
            onClick={closeVideo}
          >
            <FaTimes />
          </button>

          <div className="w-full max-w-5xl px-4 aspect-video relative" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-xl shadow-2xl bg-black"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
