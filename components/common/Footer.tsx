import React from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  return (
    <footer className="w-full bg-[var(--color-primary)] text-gray-300 relative pt-32 md:pt-40 pb-8 mt-16">
      
      {/* Top Floating Logo */}
      <div className="absolute left-1/2 -top-16 -translate-x-1/2 bg-white w-40 h-40 rounded-full flex items-center justify-center shadow-xl border-4 border-white z-10 overflow-hidden">
        <img src="/main logo/header logo.webp" alt="CleanNest" className="w-32 object-contain" />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">We are <span className="text-blue-500">CleanNest!</span></h3>
            <p className="text-sm leading-relaxed mb-6">
              {data.description}
            </p>
            <div>
              <h5 className="text-white font-bold mb-2 text-sm">{data.hoursTitle}</h5>
              <p className="text-sm">
                {data.hoursDays} {data.hours.split('\n')[0]} <br />
                {data.hours.split('\n')[1]}
              </p>
            </div>
            
            <div className="flex items-center gap-3 mt-6">
              {data.socialLinks.map(social => (
                <Link key={social.id} href={social.url} className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-colors">
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {data.quickLinks.map(link => (
                <li key={link.id}>
                  <Link href={link.url} className="text-sm hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">▶</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {data.servicesLinks.map(link => (
                <li key={link.id}>
                  <Link href={link.url} className="text-sm hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">▶</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Gallery */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Official Info:</h3>
            <ul className="flex flex-col gap-4 mb-8 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                <span>{data.contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500 flex-shrink-0" />
                <span>{data.contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 flex-shrink-0" />
                <span>{data.contactInfo.email}</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-white mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {data.instagram.map((img, i) => (
                <div key={i} className="aspect-square bg-gray-800 rounded-md overflow-hidden">
                  <img src={img} alt="Gallery image" className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-xs text-gray-400">
          © 2026 CleanNest All Rights Reserved. Powered by Lestow
        </div>
      </div>
    </footer>
  );
};
