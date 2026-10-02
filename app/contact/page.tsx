import React from 'react';
import { CleanNestTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { MiddleBar } from '@/components/common/MiddleBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const templateData: CleanNestTemplateData = rawData as any;
  const sectionData = templateData?.categories?.CleanNest?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.CleanNestTopBar1} />
      <MiddleBar data={sectionData.Header?.variants?.CleanNestHeader1} />
      <Header data={sectionData.Header?.variants?.CleanNestHeader1} />
      <Breadcrumb data={sectionData.contactBreadcrumb?.variants?.CleanNestContactBreadcrumb1} />
      
      {/* Contact Section */}
      <ContactSection data={sectionData.contact?.variants?.CleanNestContact1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
