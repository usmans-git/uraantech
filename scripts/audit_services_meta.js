const fs = require('fs');
const services = JSON.parse(fs.readFileSync('data/servicesData.json', 'utf8'));

const keyServiceSlugs = [
  'vapt-penetration-testing',
  'api-security',
  'cloud-security-compliance',
  'custom-software-development',
  'web-app-development',
  'cross-platform-apps',
  'ui-ux-design',
  'brand-identity-systems',
  'custom-erp-development',
  'ai-automation'
];

console.log('=== TARGET SERVICE METADATA AUDIT ===');
keyServiceSlugs.forEach(slug => {
  const s = services[slug];
  if (s) {
    console.log(`[${slug}]`);
    console.log(`  Title (${s.meta.title.length} chars): ${s.meta.title}`);
    console.log(`  Desc (${s.meta.description.length} chars): ${s.meta.description}`);
  }
});
