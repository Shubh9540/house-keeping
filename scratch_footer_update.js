const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data/templates.json', 'utf8'));

// 1. Get the exact 6 services from Services section
const allServices = data.categories.CleanNest.sections.Services.variants.CleanNestServices1.services;

// Update footer servicesLinks with these 6 services
data.common.Footer.servicesLinks = allServices.map((service, index) => ({
  id: `sl${index + 1}`,
  label: service.title,
  url: service.url
}));

// 2. Remove "Blog" from quickLinks and fix "Get a Quote" url to "/quote"
let quickLinks = data.common.Footer.quickLinks;
quickLinks = quickLinks.filter(link => link.label !== 'Blog');
const quoteLink = quickLinks.find(link => link.label === 'Get a Quote');
if (quoteLink) {
  quoteLink.url = '/quote';
}
data.common.Footer.quickLinks = quickLinks;

fs.writeFileSync('data/templates.json', JSON.stringify(data, null, 2));
console.log('Footer updated successfully.');
