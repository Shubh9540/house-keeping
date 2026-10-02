const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data/templates.json', 'utf8'));

let header = data.categories.CleanNest.sections.Header.variants.CleanNestHeader1;

// 1. Remove "Gallery" from left links
header.navLinksLeft = header.navLinksLeft.filter(link => link.id !== 'nl-gallery' && link.url !== '/gallery');

// 2. Remove "Why Choose Us" from right links
header.navLinksRight = header.navLinksRight.filter(link => link.id !== 'nl-why' && link.url !== '/why-choose-us');

// 3. Add "Gallery" to right links (we'll just unshift or insert it where Why Choose Us was, or just add it to the front)
// Let's insert Gallery before FAQ, or just at the start of right menu
header.navLinksRight.unshift({
  id: 'nl-gallery',
  label: 'Gallery',
  url: '/gallery'
});

fs.writeFileSync('data/templates.json', JSON.stringify(data, null, 2));
console.log('Header menu updated successfully.');
