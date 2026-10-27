const services = require('../data/servicesData.json');

console.log('SLUG | TITLE LENGTH | TITLE | DESC LENGTH');
Object.keys(services).forEach(slug => {
  const meta = services[slug].meta || {};
  const t = meta.title || '';
  const d = meta.description || '';
  console.log(`${slug.padEnd(26)} | ${t.length.toString().padStart(2)} | ${t} | ${d.length}`);
});
