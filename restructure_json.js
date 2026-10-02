const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data/templates.json', 'utf8'));

data.common.aboutBreadcrumb = data.categories.CleanNest.sections.aboutBreadcrumb?.variants?.CleanNestAboutBreadcrumb1 || data.common.aboutBreadcrumb;
data.common.servicesBreadcrumb = data.categories.CleanNest.sections.servicesBreadcrumb?.variants?.CleanNestServicesBreadcrumb1 || data.common.servicesBreadcrumb;
data.common.galleryBreadcrumb = data.categories.CleanNest.sections.galleryBreadcrumb?.variants?.CleanNestGalleryBreadcrumb1 || data.common.galleryBreadcrumb;
data.common.faqBreadcrumb = data.categories.CleanNest.sections.faqBreadcrumb?.variants?.CleanNestFaqBreadcrumb1 || data.common.faqBreadcrumb;
data.common.contactBreadcrumb = data.categories.CleanNest.sections.contactBreadcrumb?.variants?.CleanNestContactBreadcrumb1 || data.common.contactBreadcrumb;
data.common.quoteBreadcrumb = data.categories.CleanNest.sections.quoteBreadcrumb?.variants?.CleanNestQuoteBreadcrumb1 || data.common.quoteBreadcrumb;

delete data.categories.CleanNest.sections.aboutBreadcrumb;
delete data.categories.CleanNest.sections.servicesBreadcrumb;
delete data.categories.CleanNest.sections.galleryBreadcrumb;
delete data.categories.CleanNest.sections.faqBreadcrumb;
delete data.categories.CleanNest.sections.contactBreadcrumb;
delete data.categories.CleanNest.sections.quoteBreadcrumb;

data.categories.CleanNest.templateComponents = {
  shared: {
    Topbar: "CleanNestTopBar1",
    Header: "CleanNestHeader1",
    Footer: "CleanNestFooter1"
  },
  pages: {
    home: {
      components: [
        { key: "HeroSection", component: "CleanNestHero1" },
        { key: "AboutUs", component: "CleanNestAboutUs1" },
        { key: "Services", component: "CleanNestServices1" },
        { key: "Testimonials", component: "CleanNestTestimonials1" }
      ]
    },
    about: {
      components: [
        { key: "AboutUs", component: "CleanNestAboutUs1" },
        { key: "WhyChooseUs", component: "CleanNestWhyChooseUs1" }
      ]
    },
    services: {
      components: [
        { key: "Services", component: "CleanNestServices1" },
        { key: "WhyChooseUs", component: "CleanNestWhyChooseUs1" }
      ]
    },
    gallery: {
      components: [
        { key: "Gallery", component: "CleanNestGallery1" },
        { key: "VideoGallery", component: "CleanNestVideoGallery1" }
      ]
    },
    faq: {
      components: [
        { key: "Faq", component: "CleanNestFaq1" }
      ]
    },
    contact: {
      components: [
        { key: "Contact", component: "CleanNestContact1" }
      ]
    },
    quote: {
      components: [
        { key: "Quote", component: "CleanNestQuote1" }
      ]
    }
  }
};

delete data.pages;

fs.writeFileSync('data/templates.json', JSON.stringify(data, null, 2));
console.log('JSON structure updated!');
