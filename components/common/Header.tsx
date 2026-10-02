'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  if (!data) return <div className="p-4 text-red-500">Header Data Missing!</div>;

  return (
    <header className="w-full relative z-50">
      {/* 
        MOBILE HEADER (Visible only on < lg)
      */}
      <div className="lg:hidden w-full bg-white shadow-md px-4 py-3 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center">
          {data.logo ? (
            <img src={data.logo} alt={data.logoAlt} className="h-14 md:h-16 w-auto object-contain" />
          ) : (
            <img src="/main logo/header logo.webp" alt="CleanNest" className="h-14 md:h-16 w-auto object-contain" />
          )}
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="text-[var(--color-primary)] text-2xl p-2 border border-gray-200 rounded-md bg-gray-50"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col p-4 z-40 border-t border-gray-100">
          {[...(data.navLinksLeft || []), ...(data.navLinksRight || [])].map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link 
                key={link.id} 
                href={link.url}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-3 px-2 border-b border-gray-100 ${isActive ? 'text-[var(--color-accent)]' : 'text-gray-700 hover:text-[var(--color-accent)]'}`}
              >
                {link.label}
              </Link>
            );
          })}
          {data.contactButton && (
            <Link 
              href={data.contactButton.url}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[var(--color-accent)] text-white font-bold text-center py-3 rounded-md mt-4 flex items-center justify-center gap-2"
            >
              {data.contactButton.text.replace('->', '')}
              <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>
      )}

      {/* 
        DESKTOP HEADER (Visible only on >= lg) 
      */}
      <div className="hidden lg:block max-w-[1250px] mx-auto px-4 md:px-8 relative -mt-12">
        
        {/* The Blue Pill Navigation */}
        <div className="bg-[var(--color-primary)] rounded-full flex items-center justify-between px-8 py-4 relative shadow-lg mt-16">
          
          {/* Desktop Left Nav Links */}
          <div className="flex-1 flex justify-end pr-14 xl:pr-20">
            <nav className="flex items-center gap-4 xl:gap-6">
              {data.navLinksLeft?.map((link) => {
                const isActive = pathname === link.url;
                return (
                  <Link 
                    key={link.id} 
                    href={link.url}
                    className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 relative ${isActive ? 'text-[var(--color-accent)]' : 'text-white hover:text-[var(--color-accent)]'}`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-accent)]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%] z-20 flex-shrink-0">
            <div className="w-[120px] h-[120px] xl:w-[140px] xl:h-[140px] bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden">
              {data.logo ? (
                <img src={data.logo} alt={data.logoAlt} className="w-[85%] h-auto object-contain" />
              ) : (
                <img src="/main logo/header logo.webp" alt="CleanNest" className="w-[85%] object-contain" />
              )}
            </div>
          </div>

          {/* Desktop Right Nav Links & Button */}
          <div className="flex-1 flex justify-start pl-14 xl:pl-20 items-center gap-4 xl:gap-6">
            <nav className="flex items-center gap-4 xl:gap-6">
              {data.navLinksRight?.map((link) => {
                const isActive = pathname === link.url;
                return (
                  <Link 
                    key={link.id} 
                    href={link.url}
                    className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 relative ${isActive ? 'text-[var(--color-accent)]' : 'text-white hover:text-[var(--color-accent)]'}`}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-accent)]" />
                    )}
                  </Link>
                );
              })}
            </nav>
            
            {data.contactButton && (
              <Link 
                href={data.contactButton.url}
                className="bg-[var(--color-accent)] hover:bg-white hover:text-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-sm px-4 xl:px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md whitespace-nowrap flex-shrink-0 ml-auto"
              >
                {data.contactButton.text.replace('->', '')}
                <FaArrowRight className="text-[12px]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
