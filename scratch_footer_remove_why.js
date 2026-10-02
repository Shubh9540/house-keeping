const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data/templates.json', 'utf8'));

// Remove "Why Choose Us" from quickLinks
let quickLinks = data.common.Footer.quickLinks;
quickLinks = quickLinks.filter(link => link.label !== 'Why Choose Us');
data.common.Footer.quickLinks = quickLinks;

fs.writeFileSync('data/templates.json', JSON.stringify(data, null, 2));
console.log('Removed Why Choose Us from footer quick links.');
