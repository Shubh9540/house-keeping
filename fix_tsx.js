const fs = require('fs');
const glob = require('glob'); // Need a way to loop through files

const paths = [
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/faq/page.tsx',
  'app/gallery/page.tsx',
  'app/quote/page.tsx',
  'app/services/page.tsx'
];

paths.forEach(p => {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Replace aboutBreadcrumb
    content = content.replace(/sectionData\.aboutBreadcrumb\?\.variants\?\.CleanNestAboutBreadcrumb1/g, 'commonData.aboutBreadcrumb');
    // Replace contactBreadcrumb
    content = content.replace(/sectionData\.contactBreadcrumb\?\.variants\?\.CleanNestContactBreadcrumb1/g, 'commonData.contactBreadcrumb');
    // Replace faqBreadcrumb
    content = content.replace(/sectionData\.faqBreadcrumb\?\.variants\?\.CleanNestFaqBreadcrumb1/g, 'commonData.faqBreadcrumb');
    // Replace galleryBreadcrumb
    content = content.replace(/sectionData\.galleryBreadcrumb\?\.variants\?\.CleanNestGalleryBreadcrumb1/g, 'commonData.galleryBreadcrumb');
    // Replace quoteBreadcrumb
    content = content.replace(/sectionData\.quoteBreadcrumb\?\.variants\?\.CleanNestQuoteBreadcrumb1/g, 'commonData.quoteBreadcrumb');
    // Replace servicesBreadcrumb
    content = content.replace(/sectionData\.servicesBreadcrumb\?\.variants\?\.CleanNestServicesBreadcrumb1/g, 'commonData.servicesBreadcrumb');

    fs.writeFileSync(p, content);
  }
});

// Update types
let typesContent = fs.readFileSync('types/templates.types.ts', 'utf8');

// Move breadcrumbs from sections to common
typesContent = typesContent.replace(/aboutBreadcrumb\?\: \{ variants\?\: \{ CleanNestAboutBreadcrumb1\?\: any \} \};/, '');
typesContent = typesContent.replace(/servicesBreadcrumb\?\: \{ variants\?\: \{ CleanNestServicesBreadcrumb1\?\: any \} \};/, '');
typesContent = typesContent.replace(/galleryBreadcrumb\?\: \{ variants\?\: \{ CleanNestGalleryBreadcrumb1\?\: any \} \};/, '');
typesContent = typesContent.replace(/faqBreadcrumb\?\: \{ variants\?\: \{ CleanNestFaqBreadcrumb1\?\: any \} \};/, '');
typesContent = typesContent.replace(/contactBreadcrumb\?\: \{ variants\?\: \{ CleanNestContactBreadcrumb1\?\: any \} \};/, '');
typesContent = typesContent.replace(/quoteBreadcrumb\?\: \{ variants\?\: \{ CleanNestQuoteBreadcrumb1\?\: any \} \};/, '');

// Add breadcrumbs to common
typesContent = typesContent.replace(/common: \{/, 'common: {\n    aboutBreadcrumb?: any;\n    servicesBreadcrumb?: any;\n    galleryBreadcrumb?: any;\n    faqBreadcrumb?: any;\n    contactBreadcrumb?: any;\n    quoteBreadcrumb?: any;');

// Add templateComponents
typesContent = typesContent.replace(/sections: \{/, 'templateComponents?: any;\n        sections: {');

fs.writeFileSync('types/templates.types.ts', typesContent);
console.log('App code updated to support new JSON structure!');
