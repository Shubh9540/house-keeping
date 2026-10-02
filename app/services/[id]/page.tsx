import React from 'react';
import { CleanNestTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { MiddleBar } from '@/components/common/MiddleBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { Footer } from '@/components/common/Footer';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: CleanNestTemplateData = rawData as any;
  const sectionData = templateData?.categories?.CleanNest?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  const allServices = sectionData.Services?.variants?.CleanNestServices1?.services || [];
  const currentService = allServices.find(s => s.url.endsWith(`/${id}`));

  if (!currentService) {
    notFound();
  }

  // Create breadcrumb data for the specific service
  const breadcrumbData = {
    title: currentService.title,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: currentService.title }
    ]
  };

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.CleanNestTopBar1} />
      <MiddleBar data={sectionData.Header?.variants?.CleanNestHeader1} />
      <Header data={sectionData.Header?.variants?.CleanNestHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      {/* Service Detail Component */}
      <ServiceDetailContent service={currentService} allServices={allServices} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
