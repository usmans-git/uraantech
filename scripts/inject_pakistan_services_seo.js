const fs = require('fs');

console.log('--- Injecting Pakistan SEO, AEO & GEO Metadata into Services Data ---');

const services = JSON.parse(fs.readFileSync('data/servicesData.json', 'utf8'));

const updates = {
  'cybersecurity': {
    title: "Best Cybersecurity Services in Pakistan | UraanTech", // 51 chars
    description: "UraanTech provides Pakistan's best cybersecurity services, zero-trust cloud hardening, bank-grade network audits & ISO 27001 compliance in Karachi & Lahore.", // 157 chars
    h1: "Best Cybersecurity Services &amp; Defense in Pakistan",
    cityLine: "Delivering bank-grade offensive and defensive cybersecurity across Karachi, Lahore, Islamabad, and nationwide."
  },
  'penetration-testing-vapt': {
    title: "VAPT Services & Penetration Testing Pakistan | Uraan", // 52 chars
    description: "Certified VAPT services and penetration testing in Pakistan. We audit web apps, mobile APIs, and corporate networks with actionable zero-day remediation.", // 155 chars
    h1: "Certified VAPT &amp; Penetration Testing Services in Pakistan",
    cityLine: "Ethical hacking and manual VAPT penetration testing for Pakistani banks, fintechs, and enterprises."
  },
  'custom-web-apps': {
    title: "Custom Software Development Company Pakistan | Uraan", // 52 chars
    description: "Premier custom software development company in Pakistan. We engineer high-performance web apps, client portals, and microservices in Karachi and Lahore.", // 154 chars
    h1: "Custom Software &amp; Full-Stack Web Development in Pakistan",
    cityLine: "Bespoke software systems and high-throughput web applications engineered for Pakistani enterprises."
  },
  'saas-development': {
    title: "B2B SaaS Development Company in Pakistan | UraanTech", // 52 chars
    description: "Scale your venture with Pakistan's top SaaS development studio. Multi-tenant cloud architectures, subscription billing, and bank-grade data isolation.", // 150 chars
    h1: "B2B SaaS Product Development &amp; Cloud Architecture Pakistan",
    cityLine: "Architecting cloud-native multi-tenant SaaS products for Pakistani founders and global markets."
  },
  'custom-erp-systems': {
    title: "Custom ERP Software Development Pakistan | UraanTech", // 52 chars
    description: "Bespoke enterprise ERP software development in Pakistan. Eliminate licensing fees with custom inventory, accounting, and supply chain platforms in Karachi.", // 155 chars
    h1: "Custom Enterprise ERP Software Development in Pakistan",
    cityLine: "Custom ERP platforms tailored for manufacturing, logistics, retail, and corporate operations in Pakistan."
  },
  'business-websites': {
    title: "Web Design & Web Development Company Pakistan | Uraan", // 53 chars
    description: "Top-rated web design and web development company in Pakistan. Sub-second Next.js corporate websites engineered for conversion, search ranking, and speed.", // 154 chars
    h1: "Premier Web Design &amp; Web Development Company in Pakistan",
    cityLine: "Next.js corporate website design and web development for ambitious businesses in Karachi, Lahore, and Islamabad."
  },
  'mobile-apps': {
    title: "Mobile App Development Company in Pakistan | UraanTech", // 54 chars
    description: "Pakistan's leading mobile app development company. We engineer native iOS & Android apps with Flutter & React Native featuring offline sync & biometric UX.", // 154 chars
    h1: "Top Mobile App Design &amp; App Development in Pakistan",
    cityLine: "Production Flutter and React Native mobile app development for Android and iOS across Pakistan."
  },
  'ui-ux-design': {
    title: "Web Design & UI UX App Design in Pakistan | UraanTech", // 53 chars
    description: "Conversion-focused web design, mobile app design, and Figma design token systems in Pakistan for SaaS, fintech, and digital consumer products in Karachi.", // 154 chars
    h1: "Conversion Web Design &amp; Mobile App UI/UX Design in Pakistan",
    cityLine: "Obsessive digital product design and design engineering bridging Figma to production code in Pakistan."
  },
  'logo-design': {
    title: "Best Logo Design & Branding Agency Pakistan | UraanTech", // 55 chars
    description: "Premier logo design company in Pakistan. We craft distinctive vector logos, typography systems, and brand guidelines for tech startups and corporate brands.", // 157 chars
    h1: "Best Corporate Logo Design &amp; Brand Systems in Pakistan",
    cityLine: "Memorable corporate logo design and visual branding for forward-thinking Pakistani businesses."
  },
  'brand-identity': {
    title: "Brand Identity Design & Logo Agency Pakistan | Uraan", // 52 chars
    description: "Corporate brand identity design and visual style systems in Pakistan. We engineer lasting visual authority, design tokens, and guidelines for modern firms.", // 156 chars
    h1: "Corporate Brand Identity &amp; Visual Design Systems Pakistan",
    cityLine: "Comprehensive visual branding, brand identity design, and design token architectures in Pakistan."
  }
};

let count = 0;
for (const [slug, data] of Object.entries(updates)) {
  if (services[slug]) {
    services[slug].meta.title = data.title;
    services[slug].meta.description = data.description;
    services[slug].meta.ogTitle = data.title;
    services[slug].meta.ogDescription = data.description;

    // Update H1 in content
    if (services[slug].content) {
      services[slug].content = services[slug].content.replace(
        /<h1[^>]*class=["']hero-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i,
        `<h1 class="hero-title animate-fade-up">${data.h1}</h1>`
      );
    }
    count++;
  }
}

fs.writeFileSync('data/servicesData.json', JSON.stringify(services, null, 2), 'utf8');
console.log(`Successfully updated ${count} target service pages with calibrated Pakistan SEO metadata and H1s!`);
