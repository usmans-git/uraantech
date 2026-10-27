const services = require('../data/servicesData.json');
['cybersecurity', 'custom-web-apps', 'business-websites', 'mobile-apps', 'logo-design', 'ai-automation'].forEach(s => {
  console.log(`=== ${s} ===`);
  console.log(JSON.stringify(services[s]?.meta?.schemas, null, 2));
});
