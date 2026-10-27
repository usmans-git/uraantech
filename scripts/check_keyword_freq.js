const pages = require('../data/pagesData.json');

const keywords = [
  'cybersecurity',
  'software development',
  'custom software',
  'web design',
  'app design',
  'mobile app',
  'logo design',
  'pakistan',
  'karachi',
  'lahore',
  'islamabad'
];

console.log('=== HOME PAGE KEYWORD FREQUENCY ===');
const homeText = (pages.home.content || '').toLowerCase();
keywords.forEach(kw => {
  const count = (homeText.match(new RegExp(kw, 'g')) || []).length;
  console.log(`${kw.padEnd(25)}: ${count}`);
});

console.log('\n=== SERVICES PAGE KEYWORD FREQUENCY ===');
const servicesText = (pages.services.content || '').toLowerCase();
keywords.forEach(kw => {
  const count = (servicesText.match(new RegExp(kw, 'g')) || []).length;
  console.log(`${kw.padEnd(25)}: ${count}`);
});
