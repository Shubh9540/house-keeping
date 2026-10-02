import React from 'react';
import { CleanNestTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { MiddleBar } from '@/components/common/MiddleBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: CleanNestTemplateData = rawData as any;
  const sectionData = templateData?.categories?.CleanNest?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.CleanNestTopBar1} />
      <MiddleBar data={sectionData.Header?.variants?.CleanNestHeader1} />
      <Header data={sectionData.Header?.variants?.CleanNestHeader1} />
      <Breadcrumb data={sectionData.aboutBreadcrumb?.variants?.CleanNestAboutBreadcrumb1} />
      
      {/* About Us Section */}
      <AboutUsSection data={sectionData.AboutUs?.variants?.CleanNestAboutUs1} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.CleanNestWhyChooseUs1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
