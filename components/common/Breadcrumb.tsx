import React from 'react';
import Link from 'next/link';

export const Breadcrumb = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <section className="w-full bg-[#002a69] pt-20 md:pt-28 pb-10 md:pb-16 text-center relative z-0">
      <h1 className="text-4xl md:text-[42px] font-extrabold text-white mb-4">
        {data.title}
      </h1>
      <div className="flex items-center justify-center gap-3 text-sm font-medium">
        {data.paths?.map((path: any, index: number) => (
          <React.Fragment key={index}>
            {path.url ? (
              <Link href={path.url} className="text-white hover:text-[var(--color-accent)] transition-colors">
                {path.label}
              </Link>
            ) : (
              <span className="text-[var(--color-accent)]">{path.label}</span>
            )}
            {index < data.paths.length - 1 && (
              <span className="text-gray-400 font-bold text-lg leading-none">&gt;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
