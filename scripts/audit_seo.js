const fs = require('fs');
const pages = JSON.parse(fs.readFileSync('data/pagesData.json', 'utf8'));

console.log('=== CURRENT CORE PAGES METADATA ===');
for (const [k, v] of Object.entries(pages)) {
  const t = v.meta?.title || 'No title';
  const d = v.meta?.description || 'No desc';
  console.log(`[${k}]`);
  console.log(`  Title (${t.length} chars): ${t}`);
  console.log(`  Desc (${d.length} chars): ${d}`);
}
