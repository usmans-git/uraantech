const fs = require('fs');

console.log('--- Applying Comprehensive Pakistan SEO, AEO & GEO Architecture ---');

const pages = JSON.parse(fs.readFileSync('data/pagesData.json', 'utf8'));

// 1. HOME PAGE METADATA & SCHEMA
pages.home.meta.title = "Cybersecurity & Software Development Pakistan | UraanTech"; // 58 chars
pages.home.meta.description = "UraanTech is Pakistan's premier studio for bank-grade cybersecurity, custom software development, Next.js web design, mobile apps & logo branding."; // 149 chars
pages.home.meta.ogTitle = pages.home.meta.title;
pages.home.meta.ogDescription = pages.home.meta.description;

// Rich Geo & Local Business Schema for Pakistan
pages.home.meta.schemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://uraantech.online/#organization",
    "name": "UraanTech",
    "alternateName": [
      "UraanTech Pakistan",
      "UraanTech Software Development & Cybersecurity",
      "Uraan Labs"
    ],
    "url": "https://uraantech.online",
    "logo": "https://uraantech.online/images/uraantech-logo.svg",
    "image": "https://uraantech.online/images/og-card.png",
    "description": "Pakistan's leading studio for bank-grade cybersecurity services, custom software development, responsive web design, mobile app development, and corporate logo branding.",
    "telephone": "+923170128047",
    "email": "info@uraantech.online",
    "priceRange": "$$$",
    "currenciesAccepted": "PKR, USD, AED, GBP",
    "paymentAccepted": "Bank Transfer, Wire, Credit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Shahrah-e-Faisal",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75500",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8607,
      "longitude": 67.0011
    },
    "areaServed": [
      { "@type": "Country", "name": "Pakistan" },
      { "@type": "City", "name": "Karachi" },
      { "@type": "City", "name": "Lahore" },
      { "@type": "City", "name": "Islamabad" },
      { "@type": "City", "name": "Rawalpindi" },
      { "@type": "City", "name": "Faisalabad" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Engineering & Cybersecurity Services in Pakistan",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity & VAPT Services in Pakistan",
            "description": "Comprehensive vulnerability assessment, penetration testing, network security audits, and ISO 27001 / SOC 2 compliance for Pakistani enterprises and banks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development in Pakistan",
            "description": "Bespoke enterprise ERP, CRM, microservices backends, and scalable SaaS product engineering for ambitious companies in Karachi, Lahore, and Islamabad."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design & Web Development in Pakistan",
            "description": "Sub-second Next.js web application design, high-converting corporate portals, and headless CMS development optimized for search performance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Design & Development in Pakistan",
            "description": "Production Flutter and React Native cross-platform apps for iOS and Android with offline-first resilience, biometric security, and fluid 60fps UX."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logo Design & Brand Identity Systems in Pakistan",
            "description": "Corporate logo design, visual design tokens, brand identity systems, and conversion-focused UI/UX design."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best cybersecurity services company in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UraanTech is widely recognized as one of the best cybersecurity companies in Pakistan, delivering certified VAPT (Vulnerability Assessment and Penetration Testing), zero-trust cloud security, ISO 27001 audit preparation, and bank-grade application hardening for financial institutions, fintechs, and enterprises across Karachi, Lahore, and Islamabad."
        }
      },
      {
        "@type": "Question",
        "name": "What custom software development services are offered in Pakistan by UraanTech?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UraanTech delivers end-to-end custom software development in Pakistan, including bespoke ERP and CRM systems, scalable B2B SaaS platforms, Next.js web applications, and autonomous AI workflow integrations engineered with zero technical debt and 100% client code ownership."
        }
      },
      {
        "@type": "Question",
        "name": "Does UraanTech offer professional web design, app design, and logo design in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, UraanTech provides comprehensive creative and digital design services across Pakistan, including corporate logo design, brand identity systems, Figma design tokens, high-conversion web design, and iOS/Android mobile app UI/UX design."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom software development cost in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom software development costs in Pakistan vary based on complexity, architecture, and scope. UraanTech works on transparent, fixed-scope 2-to-4 week milestones, eliminating agency overhead and providing up to 60% cost efficiency compared to US and UK agency rates while maintaining Silicon Valley engineering standards."
        }
      }
    ]
  }
];

// 2. SERVICES PAGE METADATA & SCHEMA
pages.services.meta.title = "Software, Cyber & Web Design Services Pakistan | UraanTech"; // 58 chars
pages.services.meta.description = "Explore custom software development, VAPT cybersecurity, mobile app design, Next.js web engineering, and corporate logo branding across Pakistan."; // 149 chars
pages.services.meta.ogTitle = pages.services.meta.title;
pages.services.meta.ogDescription = pages.services.meta.description;

// 3. ABOUT PAGE METADATA
pages.about.meta.title = "About UraanTech | Leading Software & Cyber Studio Pakistan"; // 58 chars
pages.about.meta.description = "UraanTech is a senior multidisciplinary engineering studio in Pakistan uniting enterprise software development, zero-trust cybersecurity, and brand design."; // 156 chars
pages.about.meta.ogTitle = pages.about.meta.title;
pages.about.meta.ogDescription = pages.about.meta.description;

// 4. CONTACT PAGE METADATA
pages.contact.meta.title = "Contact Top Software & Cyber Studio in Pakistan | UraanTech"; // 59 chars
pages.contact.meta.description = "Connect directly with senior engineers in Karachi, Lahore, and Islamabad for custom software development, cybersecurity VAPT, and web app design."; // 151 chars
pages.contact.meta.ogTitle = pages.contact.meta.title;
pages.contact.meta.ogDescription = pages.contact.meta.description;

// 5. INDUSTRIES PAGE METADATA
pages.industries.meta.title = "Industry Software & Cybersecurity Solutions Pakistan | Uraan"; // 59 chars
pages.industries.meta.description = "Tailored custom software development and cybersecurity audits for Pakistani FinTech, Healthcare, Logistics, E-Commerce, and Enterprise SaaS sectors."; // 150 chars
pages.industries.meta.ogTitle = pages.industries.meta.title;
pages.industries.meta.ogDescription = pages.industries.meta.description;

// 6. INSIGHTS PAGE METADATA
pages.insights.meta.title = "Software, AI & Cybersecurity Insights Pakistan | UraanTech"; // 58 chars
pages.insights.meta.description = "Technical blueprints, VAPT security audits, Next.js web design guides, and custom software architecture analysis from UraanTech engineers in Pakistan."; // 152 chars
pages.insights.meta.ogTitle = pages.insights.meta.title;
pages.insights.meta.ogDescription = pages.insights.meta.description;

fs.writeFileSync('data/pagesData.json', JSON.stringify(pages, null, 2), 'utf8');
console.log('Saved updated metadata and schemas in data/pagesData.json!');
