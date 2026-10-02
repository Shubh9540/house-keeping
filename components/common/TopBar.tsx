'use client';
import React from 'react';
import { TopBarData } from '@/types/templates.types';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  return (
    <div className="hidden md:flex bg-[var(--color-primary)] text-white text-sm font-light h-10 w-full">
      <div className="max-w-[1250px] mx-auto w-full flex justify-between items-center px-4 md:px-8">
        
        {/* Left Side - Welcome Text */}
        <div className="flex items-center tracking-wide">
          <span>{data.welcomeTextPart1}</span>
          {data.welcomeTextHighlight && (
            <span className="text-[var(--color-accent)] font-medium mx-1">
              {data.welcomeTextHighlight}
            </span>
          )}
          <span>{data.welcomeTextPart2}</span>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-4">
          {data.socialLinks?.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center justify-center text-sm"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
};
