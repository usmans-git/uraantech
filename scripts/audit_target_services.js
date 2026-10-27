const fs = require('fs');
const services = JSON.parse(fs.readFileSync('data/servicesData.json', 'utf8'));

const targetSlugs = [
  'cybersecurity',
  'penetration-testing-vapt',
  'custom-web-apps',
  'saas-development',
  'custom-erp-systems',
  'business-websites',
  'mobile-apps',
  'ui-ux-design',
  'logo-design',
  'brand-identity'
];

console.log('=== TARGET SERVICES CURRENT METADATA ===');
targetSlugs.forEach(slug => {
  const s = services[slug];
  if (s) {
    console.log(`[${slug}]`);
    console.log(`  Title (${s.meta.title.length} chars): ${s.meta.title}`);
    console.log(`  Desc (${s.meta.description.length} chars): ${s.meta.description}`);
  }
});
