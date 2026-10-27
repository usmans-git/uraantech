const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('data/pagesData.json', 'utf8'));

console.log('=== H1 AND SCHEMA AUDIT ===');
for (const [k, v] of Object.entries(pages)) {
  const html = v.content || '';
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NO H1 FOUND';
  const hasPakistan = (html.match(/pakistan|karachi|lahore|islamabad/gi) || []).length;
  const schemas = v.meta?.schemas ? v.meta.schemas.map(s => s['@type']) : [];
  
  console.log(`[${k}]`);
  console.log(`  H1: "${h1}"`);
  console.log(`  Pakistan/City mentions: ${hasPakistan}`);
  console.log(`  Schemas: ${schemas.join(', ')}`);
}
