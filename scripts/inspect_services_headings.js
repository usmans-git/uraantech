const pages = require('../data/pagesData.json');
const html = pages.services.content;
const headings = html.match(/<h[23][^>]*>[\s\S]*?<\/h[23]>/gi) || [];
headings.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
