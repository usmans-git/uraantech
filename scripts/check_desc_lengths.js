const services = require('../data/servicesData.json');
Object.keys(services).forEach(s => {
  const d = services[s].meta.description || '';
  if (d.length < 140 || d.length > 165) {
    console.log(`Alert: ${s} description length is ${d.length}: ${d}`);
  }
});
console.log('Description check completed.');
