import React from 'react';
import { HeaderData, HeaderContactItem } from '@/types/templates.types';
import { FiPhoneCall, FiClock, FiMail, FiMapPin } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiPhoneCall': return <FiPhoneCall />;
    case 'FiClock': return <FiClock />;
    case 'FiMail': return <FiMail />;
    case 'FiMapPin': return <FiMapPin />;
    default: return null;
  }
};

const ContactItem = ({ item }: { item: HeaderContactItem }) => (
  <div className="flex items-center gap-3 w-full md:w-auto">
    <div className="text-[var(--color-primary)] text-2xl md:text-3xl font-light flex-shrink-0">
      {renderIcon(item.icon)}
    </div>
    <div className="flex flex-col text-[12px] md:text-[13px] leading-tight">
      <span className="text-gray-500">{item.label}</span>
      <span className="font-semibold text-[var(--color-primary)] text-[14px] md:text-[15px]">{item.value}</span>
    </div>
  </div>
);

export const MiddleBar = ({ data }: { data?: HeaderData }) => {
  if (!data) return null;

  return (
    <div className="w-full bg-white hidden lg:block">
      <div className="max-w-[1250px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          
          {/* Left Contact Info */}
          <div className="flex items-center justify-start gap-4 xl:gap-8 w-[40%]">
            {data.contactInfoLeft?.map((item, idx) => (
              <React.Fragment key={item.id}>
                <ContactItem item={item} />
                {idx < data.contactInfoLeft.length - 1 && (
                  <div className="w-[1px] h-8 md:h-10 bg-gray-200 hidden xl:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Spacer for Center Logo */}
          <div className="w-[20%]"></div>

          {/* Right Contact Info */}
          <div className="flex items-center justify-end gap-4 xl:gap-8 w-[40%]">
            {data.contactInfoRight?.map((item, idx) => (
              <React.Fragment key={item.id}>
                <ContactItem item={item} />
                {idx < data.contactInfoRight.length - 1 && (
                  <div className="w-[1px] h-8 md:h-10 bg-gray-200 hidden xl:block" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
