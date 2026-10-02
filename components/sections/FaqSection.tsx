"use client";

import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FiChevronDown } from 'react-icons/fi';

export const FaqSection = ({ data }: { data?: FaqData }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!data) return null;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Split FAQs into two columns
  const half = Math.ceil(data.faqs.length / 2);
  const leftFaqs = data.faqs.slice(0, half);
  const rightFaqs = data.faqs.slice(half);

  return (
    <section className="w-full py-16 md:py-12 bg-[#f8fafc] relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
            <h4 className="text-[var(--color-primary)] font-bold text-xs tracking-widest uppercase">
              {data.subtitle}
            </h4>
            <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] leading-tight mb-4">
            {data.title1} <span className="text-[#2b6ffd]">{data.title2}</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* FAQ 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">

          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#2b6ffd] shadow-md' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <h3 className={`font-semibold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-[#2b6ffd]' : 'text-[var(--color-primary)]'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#2b6ffd] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <FiChevronDown className="text-lg" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#2b6ffd] shadow-md' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <h3 className={`font-semibold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-[#2b6ffd]' : 'text-[var(--color-primary)]'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#2b6ffd] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <FiChevronDown className="text-lg" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
