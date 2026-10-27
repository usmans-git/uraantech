const fs = require('fs');

console.log('--- Injecting Pakistan SEO Keywords into Services Page ---');

const pages = JSON.parse(fs.readFileSync('data/pagesData.json', 'utf8'));
let services = pages.services.content;

// 1. Update H1 and Subtitle on /services
const oldH1Pattern = /<h1[^>]*class=["']hero-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i;
const newH1 = `<h1 class="hero-title animate-fade-up">
              Software Development, Cybersecurity &amp; <span class="gradient-text">Web Design Services in Pakistan</span>
            </h1>`;
services = services.replace(oldH1Pattern, newH1);

const oldSubtitlePattern = /<p class="hero-subtitle[^"']*["']>[\s\S]*?<\/p>/i;
const newSubtitle = `<p class="hero-subtitle animate-fade-up delay-1">
              Comprehensive engineering and digital creative capabilities for Pakistani enterprises, startups, and tech founders across Karachi, Lahore, and Islamabad—delivered with zero junior outsourcing.
            </p>`;
services = services.replace(oldSubtitlePattern, newSubtitle);

// 2. Update 5 Pillar H2s with explicit primary/secondary keywords
services = services.replace(
  /<h2 class="pillar-title">Design &amp; Branding<\/h2>/g,
  '<h2 class="pillar-title">Logo Design, Brand Identity &amp; UI/UX Design in Pakistan</h2>'
);

services = services.replace(
  /<h2 class="pillar-title">Web &amp; Mobile Apps<\/h2>/g,
  '<h2 class="pillar-title">Web Design, Web Development &amp; Mobile App Development in Pakistan</h2>'
);

services = services.replace(
  /<h2 class="pillar-title">Business Platforms<\/h2>/g,
  '<h2 class="pillar-title">Custom Software Development &amp; Enterprise ERP in Pakistan</h2>'
);

services = services.replace(
  /<h2 class="pillar-title">AI &amp; Automation<\/h2>/g,
  '<h2 class="pillar-title">AI Automation Agency &amp; Custom AI Agent Development in Pakistan</h2>'
);

services = services.replace(
  /<h2 class="pillar-title">Cybersecurity &amp; Audits<\/h2>/g,
  '<h2 class="pillar-title">Best Cybersecurity Services &amp; VAPT Audits in Pakistan</h2>'
);

pages.services.content = services;
fs.writeFileSync('data/pagesData.json', JSON.stringify(pages, null, 2), 'utf8');
console.log('Successfully injected Pakistan SEO keywords into Services Page!');
