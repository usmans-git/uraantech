const services = require('../data/servicesData.json');

console.log('=== 39 SERVICES BREAKDOWN ===');
Object.keys(services).forEach((slug, i) => {
  const s = services[slug];
  const meta = s.meta || {};
  const hasPak = /pakistan|karachi|lahore|islamabad/i.test((meta.title || '') + ' ' + (meta.description || ''));
  console.log(`${(i+1).toString().padStart(2, ' ')}. [${hasPak ? 'PK' : '  '}] ${slug.padEnd(30, ' ')} | Title (${(meta.title||'').length}): ${meta.title}`);
});
