import React from 'react';
import { ServiceItem } from '@/types/templates.types';
import Link from 'next/link';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const ServiceDetailContent = ({ service, allServices }: { service: ServiceItem, allServices: ServiceItem[] }) => {
  return (
    <section className="w-full py-16 md:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-10">

        {/* Left Side: Main Content */}
        <div className="w-full lg:w-2/3">
          <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mb-8">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6">
            {service.title}
          </h2>

          <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
            <p className="leading-relaxed mb-6 font-medium text-lg text-gray-700">
              {service.description}
            </p>
            <p className="leading-relaxed mb-6">
              Our {service.title.toLowerCase()} is designed to provide you with the highest standard of cleanliness. We understand that every space is unique, which is why we tailor our approach to meet your specific requirements. Using eco-friendly products and state-of-the-art equipment, our trained professionals ensure a spotless environment.
            </p>
            <p className="leading-relaxed mb-8">
              Whether it's a routine cleaning or a deep clean, our team is equipped to handle jobs of all sizes. We work around your schedule to minimize disruption and deliver results that exceed your expectations.
            </p>

            <h3 className="text-2xl font-bold text-[var(--color-primary)] mt-10 mb-6">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Deep cleaning of all surfaces',
                'Eco-friendly and safe products',
                'Trained & verified professionals',
                '100% satisfaction guarantee',
                'Flexible scheduling',
                'Transparent pricing'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-[var(--color-primary)] bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                  <FiCheckCircle className="text-[#2b6ffd] text-xl flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Sidebar */}
        <div className="w-full lg:w-1/3">
          {/* Other Services List */}
          <div className="bg-[#f4f8fc] rounded-2xl p-6 md:p-8 mb-8 shadow-sm">
            <h4 className="text-xl font-bold text-[var(--color-primary)] mb-6 pb-4 border-b border-gray-200">
              Other Services
            </h4>
            <ul className="flex flex-col gap-3">
              {allServices.map(s => {
                const isActive = s.id === service.id;
                return (
                  <li key={s.id}>
                    <Link
                      href={s.url}
                      className={`flex items-center justify-between p-4 rounded-xl font-semibold transition-all duration-300 ${isActive ? 'bg-[#2b6ffd] text-white shadow-md' : 'bg-white text-[var(--color-primary)] hover:bg-[#e6f0ff]'}`}
                    >
                      {s.title}
                      <FiArrowRight />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Banner */}
          <div className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-10 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-xl -ml-10 -mb-10" />

            <h4 className="text-2xl font-bold mb-4 relative z-10">Need Help With Cleaning?</h4>
            <p className="text-sm text-gray-300 mb-8 relative z-10">
              Contact us today for a free quote and let us make your space spotless.
            </p>
            <Link href="/contact" className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-8 py-3.5 rounded-full hover:bg-white transition-colors duration-300 relative z-10 shadow-md">
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
