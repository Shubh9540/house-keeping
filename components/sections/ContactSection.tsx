"use client";

import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';

export const ContactSection = ({ data }: { data?: ContactData }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-white relative">

      {/* Top Part: Contact Info & Form */}
      <div className="py-16 md:py-12">
        <div className="max-w-[1250px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Contact Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-accent)]" />
              <h4 className="text-[var(--color-accent)] font-bold text-xs tracking-widest uppercase">
                {data.subtitle}
              </h4>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-6">
              {data.title1} <span className="text-[#2b6ffd]">{data.title2}</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              {data.description}
            </p>

            <div className="flex flex-col gap-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#2b6ffd] flex-shrink-0">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{data.contactInfo.phoneTitle}</p>
                  <p className="text-lg font-bold text-[var(--color-primary)]">{data.contactInfo.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#2b6ffd] flex-shrink-0">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{data.contactInfo.emailTitle}</p>
                  <p className="text-lg font-bold text-[var(--color-primary)]">{data.contactInfo.email}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#2b6ffd] flex-shrink-0">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{data.contactInfo.addressTitle}</p>
                  <p className="text-lg font-bold text-[var(--color-primary)]">{data.contactInfo.address}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#e6f0ff] flex items-center justify-center text-[#2b6ffd] flex-shrink-0">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{data.contactInfo.hoursTitle}</p>
                  <p className="text-lg font-bold text-[var(--color-primary)]">{data.contactInfo.hoursLine1}</p>
                  <p className="text-base font-bold text-[var(--color-primary)]">{data.contactInfo.hoursLine2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
              {data.form.title}
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              {data.form.description}
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2b6ffd] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2b6ffd] transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2b6ffd] transition-colors"
                />
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#2b6ffd] transition-colors appearance-none">
                  <option value="">Choose Service</option>
                  {data.form.servicesList.map((service, idx) => (
                    <option key={idx} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2b6ffd] transition-colors"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#2b6ffd] transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0057ff] hover:bg-[#004ade] text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 mt-2"
              >
                {data.form.buttonText.replace('->', '')}
                <FiArrowRight className="text-lg" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] md:h-[500px] relative px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[1250px] mx-auto w-full h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <iframe
            src={data.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </section>
  );
};
