"use client";

import React, { useState } from 'react';
import { GalleryData } from '@/types/templates.types';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export const GallerySection = ({ data }: { data?: GalleryData }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!data) return null;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, data.images.length));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % data.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + data.images.length) % data.images.length);
    }
  };

  return (
    <section className="w-full py-16 md:py-12 bg-white relative">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.images.slice(0, visibleCount).map((item, index) => (
            <div
              key={item.id}
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group relative shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-bold bg-[#2b6ffd]/80 px-4 py-2 rounded-full text-sm">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < data.images.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-[var(--color-primary)] text-white hover:bg-[#2b6ffd] font-semibold text-sm px-8 py-3 rounded-md transition-colors duration-300 shadow-md flex items-center gap-2"
            >
              Load More
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center backdrop-blur-sm" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl hover:text-[var(--color-accent)] transition-colors p-2 z-[110]"
            onClick={closeLightbox}
          >
            <FaTimes />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-[var(--color-accent)] transition-colors p-4 bg-black/50 rounded-full z-[110]"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={data.images[lightboxIndex].image}
            alt={data.images[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-[var(--color-accent)] transition-colors p-4 bg-black/50 rounded-full z-[110]"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {data.images.length}
          </div>
        </div>
      )}
    </section>
  );
};
