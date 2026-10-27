const pages = require('../data/pagesData.json');
['about', 'contact', 'services', 'industries', 'careers', 'insights'].forEach(key => {
  console.log(`=== ${key} ===`);
  console.log(JSON.stringify(pages[key]?.meta?.schemas, null, 2));
});
