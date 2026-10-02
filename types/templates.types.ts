export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  contactInfoLeft: HeaderContactItem[];
  contactInfoRight: HeaderContactItem[];
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

export interface TopBarData {
  welcomeTextPart1: string;
  welcomeTextHighlight?: string;
  welcomeTextPart2?: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface HeroData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  button: { text: string; url: string };
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: { id: string; icon: string; title: string }[];
  videoThumbnail: string;
  videoUrl: string;
  videoText: string;
  videoSubtext: string;
  button: { text: string; url: string };
  bgImage: string;
  imageMain: string;
  imageSmall1: string;
  imageSmall2: string;
  badgeText1: string;
  badgeText2: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
  button: { text: string; url: string };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface FooterData {
  description: string;
  hoursTitle: string;
  hours: string;
  hoursDays: string;
  socialLinks: { id: string; icon: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
  instagram: string[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  button: { text: string; url: string };
  imageMain: string;
  badgeTitle: string;
  badgeText: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  images: GalleryItem[];
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  title: string;
}

export interface VideoGalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videos: VideoItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  faqs: FaqItem[];
}

export interface ContactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  contactInfo: {
    phoneTitle: string;
    phone: string;
    emailTitle: string;
    email: string;
    addressTitle: string;
    address: string;
    hoursTitle: string;
    hoursLine1: string;
    hoursLine2: string;
  };
  form: {
    title: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
  mapUrl: string;
}

export interface QuoteData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}

export interface CleanNestTemplateData {
  common: {
    Footer?: FooterData;
  };
  categories: {
    CleanNest: {
      sections: {
        TopBar?: { variants?: { CleanNestTopBar1?: TopBarData } };
        Header?: { variants?: { CleanNestHeader1?: HeaderData } };
        Hero?: { variants?: { CleanNestHero1?: HeroData } };
        AboutUs?: { variants?: { CleanNestAboutUs1?: AboutUsData } };
        Services?: { variants?: { CleanNestServices1?: ServicesData } };
        Testimonials?: { variants?: { CleanNestTestimonials1?: TestimonialsData } };
        whyChooseUs?: { variants?: { CleanNestWhyChooseUs1?: WhyChooseUsData } };
        aboutBreadcrumb?: { variants?: { CleanNestAboutBreadcrumb1?: any } };
        servicesBreadcrumb?: { variants?: { CleanNestServicesBreadcrumb1?: any } };
        gallery?: { variants?: { CleanNestGallery1?: GalleryData } };
        videoGallery?: { variants?: { CleanNestVideoGallery1?: VideoGalleryData } };
        galleryBreadcrumb?: { variants?: { CleanNestGalleryBreadcrumb1?: any } };
        faq?: { variants?: { CleanNestFaq1?: FaqData } };
        faqBreadcrumb?: { variants?: { CleanNestFaqBreadcrumb1?: any } };
        contact?: { variants?: { CleanNestContact1?: ContactData } };
        contactBreadcrumb?: { variants?: { CleanNestContactBreadcrumb1?: any } };
        quote?: { variants?: { CleanNestQuote1?: QuoteData } };
        quoteBreadcrumb?: { variants?: { CleanNestQuoteBreadcrumb1?: any } };
      };
    };
  };
}
