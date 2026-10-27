const fs = require('fs');
const path = require('path');

const servicesDataPath = path.join(__dirname, '../data/servicesData.json');
const pagesDataPath = path.join(__dirname, '../data/pagesData.json');

const services = JSON.parse(fs.readFileSync(servicesDataPath, 'utf8'));
const pages = JSON.parse(fs.readFileSync(pagesDataPath, 'utf8'));

const serviceKeywordsMap = {
  // === PILLAR 01: DESIGN & BRANDING ===
  'logo-design': {
    title: 'Best Logo Design & Branding Agency Pakistan | UraanTech',
    description: 'Pakistan\'s premier corporate logo design agency. Bespoke vector brand identity, typography systems, and trademarks for startups and enterprises in Karachi.',
    h1: 'Best Corporate Logo Design & Brand Systems in Pakistan',
    faqQuestion: 'Who provides the best corporate logo design and branding in Pakistan?',
    faqAnswer: 'UraanTech provides industry-leading logo design and brand identity systems in Pakistan, delivering bespoke vector assets, comprehensive style guides, and trademark-defensible brandmarks with 100% intellectual property ownership.'
  },
  'brand-identity': {
    title: 'Brand Identity Design & Logo Agency Pakistan | UraanTech',
    description: 'Corporate brand identity design in Pakistan. Full design systems, typography guidelines, and executive brand collateral engineered for modern market leaders.',
    h1: 'Corporate Brand Identity & Visual Design Systems Pakistan',
    faqQuestion: 'What does a complete corporate brand identity package include in Pakistan?',
    faqAnswer: 'Our Pakistan brand identity package includes primary and secondary logo marks, bespoke typography hierarchies, color token palettes, executive stationery, digital social guidelines, and complete master vector source files.'
  },
  'design-branding': {
    title: 'Design Systems, Branding & UI/UX Studio Pakistan | UraanTech',
    description: 'Top design agency in Pakistan delivering high-conversion design systems, digital product branding, and accessible UI/UX interfaces for fast-growing ventures.',
    h1: 'Enterprise Brand Design Systems & UI/UX Studio Pakistan',
    faqQuestion: 'Why hire a dedicated design studio like UraanTech in Pakistan?',
    faqAnswer: 'UraanTech unifies engineering rigor with world-class visual aesthetics, eliminating the disconnect between creative design and production frontend code for companies in Karachi, Lahore, and Islamabad.'
  },
  'ui-ux-design': {
    title: 'Web Design & UI UX App Design in Pakistan | UraanTech',
    description: 'Premier UI/UX and web design agency in Pakistan. Conversion-focused Figma design systems, iOS/Android mobile app UX, and modern SaaS product interfaces.',
    h1: 'Conversion Web Design & Mobile App UI/UX Design in Pakistan',
    faqQuestion: 'How does UraanTech approach UI/UX design for web and mobile apps in Pakistan?',
    faqAnswer: 'We conduct comprehensive user research, customer journey mapping, interactive Figma wireframing, and 60fps design systems tailored to maximize user retention and conversion rates in Pakistan and global markets.'
  },
  'product-prototyping': {
    title: 'Rapid Product Prototyping & MVP Design Pakistan | UraanTech',
    description: 'Interactive MVP app prototyping and product design in Pakistan. Validate enterprise workflows, pitch investors, and de-risk software engineering sprints.',
    h1: 'Interactive MVP App Prototyping & Product Design Pakistan',
    faqQuestion: 'How quickly can UraanTech deliver an interactive MVP prototype in Pakistan?',
    faqAnswer: 'Our product prototyping sprint delivers high-fidelity clickable Figma prototypes and technical architecture validation within 7 to 14 days for startups and enterprises across Pakistan.'
  },
  'print-stationery': {
    title: 'Corporate Stationery & Print Collateral Pakistan | UraanTech',
    description: 'Premium corporate stationery and print design in Pakistan. Business cards, executive letterheads, packaging, and annual reports calibrated for prepress.',
    h1: 'Corporate Print Collateral & Executive Stationery Pakistan',
    faqQuestion: 'Do you deliver prepress-ready print design files in Pakistan?',
    faqAnswer: 'Yes, all print collateral assets are engineered in CMYK color space with exact bleed margins, vector typography, and spot UV finishing specifications ready for high-end offset printing in Pakistan.'
  },
  'social-media-creatives': {
    title: 'Social Media Design & Creative Agency Pakistan | UraanTech',
    description: 'High-converting social media creatives and performance ad design in Pakistan. Engineered for Meta, LinkedIn, and Google Ads to maximize click-through ROAS.',
    h1: 'Performance Social Media Design & Ad Creatives in Pakistan',
    faqQuestion: 'How do performance creatives drive better ROI for Pakistani brands?',
    faqAnswer: 'Our social media creatives combine neuromarketing visual hierarchy, high-contrast typography, and algorithmic hook testing to lower CAC and maximize ROAS across Pakistani ad audiences.'
  },

  // === PILLAR 02: WEB & MOBILE APPS ===
  'business-websites': {
    title: 'Web Design & Web Development in Pakistan | UraanTech',
    description: 'Pakistan\'s top web design and development company. Ultra-fast Next.js business websites, modern corporate portals, and SEO-engineered digital storefronts.',
    h1: 'Premier Web Design & Web Development Company in Pakistan',
    faqQuestion: 'Which is the best web design and web development company in Pakistan?',
    faqAnswer: 'UraanTech is widely recognized as a premier web design and development company in Pakistan, engineering sub-second Next.js web applications, high-converting corporate portals, and fully responsive digital experiences.'
  },
  'mobile-apps': {
    title: 'Mobile App Development Company in Pakistan | UraanTech',
    description: 'Top mobile app development company in Pakistan. Native-grade Flutter & React Native iOS and Android apps with biometric security and sub-second performance.',
    h1: 'Top Mobile App Design & App Development in Pakistan',
    faqQuestion: 'What technologies does UraanTech use for mobile app development in Pakistan?',
    faqAnswer: 'We engineer cross-platform and native iOS/Android applications using Flutter, React Native, Swift, and Kotlin, integrated with resilient GraphQL/REST backends and bank-grade mobile security.'
  },
  'custom-web-apps': {
    title: 'Custom Software Development in Pakistan | UraanTech',
    description: 'Top custom software development company in Pakistan. Full-stack web apps, enterprise cloud platforms, and internal tools engineered with React and Node.js.',
    h1: 'Custom Software & Full-Stack Web Development in Pakistan',
    faqQuestion: 'Why choose UraanTech for custom software development in Pakistan?',
    faqAnswer: 'UraanTech builds enterprise-grade custom software with zero technical debt, complete source code ownership, bank-grade encryption, and transparent sprint delivery for companies in Karachi, Lahore, and Islamabad.'
  },
  'pwa': {
    title: 'Progressive Web App (PWA) Development Pakistan | UraanTech',
    description: 'High-performance Progressive Web App (PWA) development in Pakistan. Offline caching, instant push notifications, and native mobile UX on any web browser.',
    h1: 'Progressive Web App (PWA) Engineering in Pakistan',
    faqQuestion: 'What are the business advantages of building a PWA in Pakistan?',
    faqAnswer: 'PWAs reduce mobile development costs by up to 50%, bypass App Store commission fees, and deliver instant load times even under low-bandwidth 3G/4G connectivity across Pakistan.'
  },
  'api-integrations': {
    title: 'Enterprise API Integration & Microservices Pakistan | UraanTech',
    description: 'Resilient API integrations, payment gateways, and microservices in Pakistan. Connect ERPs, CRMs, 1Link, Easypaisa, JazzCash, and banking webhooks safely.',
    h1: 'Fault-Tolerant Enterprise API Integrations in Pakistan',
    faqQuestion: 'Can UraanTech integrate Pakistani payment gateways and enterprise systems?',
    faqAnswer: 'Yes, we engineer robust API integrations with Pakistani payment switches (1Link, PayFast, Safepay, Easypaisa, JazzCash) as well as global gateways (Stripe, PayPal) with idempotency and webhook security.'
  },
  'web-mobile-apps': {
    title: 'Custom Web & Mobile App Development Pakistan | UraanTech',
    description: 'Leading web and mobile app development agency in Pakistan. Sub-second Next.js web applications, Flutter mobile apps, and scalable cloud architectures.',
    h1: 'Full-Stack Web & Mobile App Development in Pakistan',
    faqQuestion: 'Does UraanTech build both web platforms and mobile applications in Pakistan?',
    faqAnswer: 'Yes, we provide end-to-end full-stack engineering covering responsive web applications, native iOS/Android mobile apps, and shared cloud backend microservices under unified technical governance.'
  },
  'support-maintenance': {
    title: '24/7 Software Maintenance & DevOps SLA Pakistan | UraanTech',
    description: '24/7 proactive web, mobile app, and software maintenance services in Pakistan. 99.99% uptime SLAs, security patching, database optimization, and DevOps.',
    h1: '24/7 Software Maintenance & DevOps SLA Support in Pakistan',
    faqQuestion: 'What is included in UraanTech\'s software maintenance SLA in Pakistan?',
    faqAnswer: 'Our enterprise SLAs include 24/7 uptime monitoring, immediate CVE security patch deployment, automated database backups, quarterly performance tuning, and 15-minute emergency response windows.'
  },

  // === PILLAR 03: BUSINESS PLATFORMS & SOFTWARE ===
  'custom-erp-systems': {
    title: 'Custom ERP Software Development Pakistan | UraanTech',
    description: 'Bespoke ERP software development in Pakistan. Streamline supply chain, accounting, HRMS, and inventory for Pakistani manufacturers and enterprise retailers.',
    h1: 'Custom Enterprise ERP Software Development in Pakistan',
    faqQuestion: 'How does custom ERP software development benefit Pakistani businesses?',
    faqAnswer: 'Unlike rigid off-the-shelf software with expensive recurring licenses, UraanTech builds bespoke ERP systems mapped to your exact Pakistani tax workflows, local supply chains, and multi-branch operations.'
  },
  'custom-crm-solutions': {
    title: 'Custom CRM Software Development in Pakistan | UraanTech',
    description: 'Custom CRM software development in Pakistan. Pipeline tracking, WhatsApp automation, and omnichannel lead conversion built for high-velocity sales teams.',
    h1: 'Custom CRM Software Development Services in Pakistan',
    faqQuestion: 'Why build a custom CRM instead of using Salesforce or HubSpot in Pakistan?',
    faqAnswer: 'A custom CRM from UraanTech eliminates costly per-seat monthly subscription fees in USD, seamlessly integrates with local Pakistani telephony and WhatsApp APIs, and fits your specific sales pipeline.'
  },
  'business-platforms': {
    title: 'Enterprise Software & Business Platforms Pakistan | UraanTech',
    description: 'Custom business software and enterprise management platforms in Pakistan. Centralize fragmented workflows, automate reporting, and scale your operations.',
    h1: 'Enterprise Custom Software & Business Platforms in Pakistan',
    faqQuestion: 'What types of enterprise business software does UraanTech build in Pakistan?',
    faqAnswer: 'We engineer centralized business operating systems including manufacturing execution systems (MES), distribution logistics portals, dealership management software, and custom financial ledgers.'
  },
  'saas-development': {
    title: 'B2B SaaS Product Development in Pakistan | UraanTech',
    description: 'Top B2B SaaS software development company in Pakistan. Multi-tenant architecture, automated subscription billing, and zero-downtime cloud infrastructure.',
    h1: 'B2B SaaS Product Development & Cloud Architecture Pakistan',
    faqQuestion: 'Can UraanTech help Pakistani founders build and scale a global B2B SaaS product?',
    faqAnswer: 'Yes, we architect multi-tenant SaaS platforms with automated billing (Stripe/Paddle), role-based access control, tenant data isolation, and scalable AWS/GCP cloud architectures built for global scale.'
  },
  'ecommerce-stores': {
    title: 'Custom E-Commerce Web Development Pakistan | UraanTech',
    description: 'Custom e-commerce web and mobile app development in Pakistan. Headless Shopify, Next.js commerce, sub-second checkout, and automated courier COD integration.',
    h1: 'Custom E-Commerce Web & App Development in Pakistan',
    faqQuestion: 'How does UraanTech optimize e-commerce platforms for the Pakistani market?',
    faqAnswer: 'We integrate local Pakistani payment gateways, courier tracking APIs (TCS, Trax, Leopards, CallCourier), WhatsApp order verification, and sub-second mobile checkout to drastically reduce cart abandonment.'
  },
  'online-marketplaces': {
    title: 'Multi-Vendor Marketplace Development Pakistan | UraanTech',
    description: 'Multi-vendor marketplace software development in Pakistan. Vendor dashboards, automated escrow payouts, commission tracking, and high-volume transactions.',
    h1: 'Multi-Vendor Marketplace Software Development in Pakistan',
    faqQuestion: 'How does UraanTech handle marketplace vendor payouts and commissions in Pakistan?',
    faqAnswer: 'We build automated commission calculation engines, digital vendor wallets, split-payment settlement routines, and tax compliance ledgers compliant with Pakistani e-commerce regulations.'
  },
  'lms-elearning': {
    title: 'Custom LMS & E-Learning Portal Pakistan | UraanTech',
    description: 'Custom LMS and e-learning platform development in Pakistan. Video streaming, student progress tracking, live quizzes, and Pakistani payment integrations.',
    h1: 'Custom LMS Software & E-Learning Portal Development Pakistan',
    faqQuestion: 'What features are included in UraanTech\'s custom LMS platform in Pakistan?',
    faqAnswer: 'Our custom LMS platforms include DRM video protection, offline lesson downloads, interactive quizzes, automated certificate generation, teacher analytics, and local PKR payment gateway checkout.'
  },

  // === PILLAR 04: AI & AUTOMATION ===
  'ai-automation': {
    title: 'Custom AI Workflow Automation in Pakistan | UraanTech',
    description: 'Enterprise AI workflow automation services in Pakistan. Connect internal databases, automate customer support, and deploy autonomous LLM agents securely.',
    h1: 'Custom AI Workflow Automation & Software in Pakistan',
    faqQuestion: 'How can AI workflow automation reduce operational costs for Pakistani enterprises?',
    faqAnswer: 'UraanTech deploys intelligent deterministic code and LLM agent pipelines that automate repetitive document processing, invoice reconciliation, and customer support, reducing operational overhead by up to 70%.'
  },
  'ai-chatbots': {
    title: 'AI Chatbots & Conversational AI in Pakistan | UraanTech',
    description: 'Custom AI chatbots and WhatsApp conversational AI in Pakistan. Grounded in private enterprise data with zero hallucinations and bilingual Urdu/English support.',
    h1: 'Intelligent AI Chatbots & Support Automation in Pakistan',
    faqQuestion: 'Can UraanTech build bilingual AI chatbots supporting Urdu and English in Pakistan?',
    faqAnswer: 'Yes, our conversational AI agents support natural Roman Urdu, Urdu script, and English, integrating directly into WhatsApp Business, web portals, and mobile apps with enterprise RAG grounding.'
  },
  'ai-voice-assistants': {
    title: 'AI Voice Assistants & Telephony Pakistan | UraanTech',
    description: 'Real-time AI voice assistants and telephony automation in Pakistan. Sub-second voice synthesis, natural call handling, and automated CRM transcription.',
    h1: 'AI Voice Assistants & Inbound Telephony in Pakistan',
    faqQuestion: 'How does an AI voice agent handle inbound customer calls in Pakistan?',
    faqAnswer: 'Our AI voice pipelines combine low-latency SIP telephony, streaming Whisper speech-to-text, LLM intent reasoning, and conversational text-to-speech to resolve phone inquiries within sub-second response times.'
  },
  'autonomous-ai-agents': {
    title: 'Autonomous AI Agents & Multi-Agent Systems Pakistan | UraanTech',
    description: 'Autonomous AI agent engineering in Pakistan. Multi-agent LangGraph workflows, deterministic API tool execution, and self-correcting business pipelines.',
    h1: 'Autonomous AI Agents & Enterprise Multi-Agent Systems Pakistan',
    faqQuestion: 'What is an autonomous multi-agent system and how does it work?',
    faqAnswer: 'Autonomous AI agents are specialized software programs that break complex business objectives into discrete sub-tasks, execute tools via APIs, verify outputs against strict schemas, and collaborate autonomously.'
  },
  'custom-llm-solutions': {
    title: 'Custom LLM & Private RAG Development Pakistan | UraanTech',
    description: 'Custom LLM fine-tuning and private RAG systems in Pakistan. Zero data leakage, self-hosted open-source models, and enterprise vector search in your cloud.',
    h1: 'Custom LLM Fine-Tuning & Private RAG Systems Pakistan',
    faqQuestion: 'How does UraanTech ensure enterprise data privacy when using LLMs in Pakistan?',
    faqAnswer: 'We deploy open-weights models (Llama 3, Mistral) entirely within your private cloud VPC or on-premise servers in Pakistan, ensuring sensitive corporate data never leaves your secure perimeter.'
  },
  'data-predictive-ai': {
    title: 'Data Engineering & Predictive AI Software Pakistan | UraanTech',
    description: 'Enterprise data engineering and predictive AI models in Pakistan. Unify fragmented data lakes, forecast inventory demand, and detect revenue anomalies.',
    h1: 'Data Engineering & Predictive AI Analytics in Pakistan',
    faqQuestion: 'How do predictive AI analytics help Pakistani supply chain and retail businesses?',
    faqAnswer: 'Our predictive machine learning models analyze historical sales patterns, seasonal spikes, and macroeconomic variables to optimize inventory procurement, prevent stockouts, and maximize gross margins.'
  },
  'text-language-ai': {
    title: 'Natural Language Processing & Text AI Pakistan | UraanTech',
    description: 'Custom NLP and text intelligence pipelines in Pakistan. Entity extraction, sentiment analysis, and automated contract parsing for Pakistani legal and finance.',
    h1: 'NLP & Natural Language Processing AI Services in Pakistan',
    faqQuestion: 'Can UraanTech extract data from unstructured Pakistani business documents?',
    faqAnswer: 'Yes, our custom NLP pipelines extract named entities, tabular data, tax numbers, and contractual covenants from messy PDF, DOCX, and scanned documents with 99%+ validated accuracy.'
  },
  'vision-document-ai': {
    title: 'Computer Vision & Document OCR AI in Pakistan | UraanTech',
    description: 'Computer vision and document AI automation in Pakistan. Automated CNIC, NTN, utility bill OCR, and defect inspection with sub-second extraction pipelines.',
    h1: 'Computer Vision & Intelligent Document AI in Pakistan',
    faqQuestion: 'Can your document AI process Pakistani CNICs and utility bills automatically?',
    faqAnswer: 'Yes, our computer vision models are specifically trained on Pakistani CNICs, NTN certificates, bank statements, and utility bills, enabling 100% automated KYC onboarding for fintechs and banks.'
  },
  'workflow-automation': {
    title: 'Enterprise Workflow & Business Automation Pakistan | UraanTech',
    description: 'Deterministic workflow automation and robotic process automation in Pakistan. Connect ERP, CRM, banks, and email without human error or manual entry.',
    h1: 'Enterprise Workflow Automation & RPA Systems in Pakistan',
    faqQuestion: 'How does workflow automation differ from generic manual scripting?',
    faqAnswer: 'Our enterprise workflow pipelines feature automatic retry logic, idempotency keys, end-to-end audit logging, and cryptographic security to guarantee zero data loss during high-volume operations.'
  },

  // === PILLAR 05: CYBERSECURITY & VAPT ===
  'cybersecurity': {
    title: 'Best Cybersecurity Services in Pakistan | UraanTech',
    description: 'Pakistan\'s best cybersecurity company. Certified ethical hacking, bank-grade VAPT, zero-trust cloud security, and ISO 27001 compliance in Karachi & Lahore.',
    h1: 'Best Cybersecurity Services & Defense in Pakistan',
    faqQuestion: 'Which is the best cybersecurity services company in Pakistan?',
    faqAnswer: 'UraanTech is recognized as one of the best cybersecurity companies in Pakistan, delivering bank-grade VAPT (Vulnerability Assessment and Penetration Testing), zero-trust architecture, ISO 27001 readiness, and rapid code remediation diffs for Pakistani enterprises.'
  },
  'penetration-testing-vapt': {
    title: 'VAPT Services & Penetration Testing Pakistan | UraanTech',
    description: 'Certified VAPT services and penetration testing in Pakistan. Comprehensive web, mobile, network, and API security testing adhering to OWASP and SBP mandates.',
    h1: 'Certified VAPT & Penetration Testing Services in Pakistan',
    faqQuestion: 'Why is VAPT mandatory for banks, fintechs, and enterprises in Pakistan?',
    faqAnswer: 'VAPT identifies critical vulnerabilities (SQLi, BOLA, SSRF, authentication bypasses) before threat actors exploit them. State Bank of Pakistan (SBP) and SECP cybersecurity frameworks mandate regular third-party VAPT audits.'
  },
  'web-app-security': {
    title: 'Web Application Security & OWASP Audits Pakistan | UraanTech',
    description: 'Web application security testing and OWASP hardening in Pakistan. Protect against SQL injection, XSS, SSRF, and authentication flaws with zero false positives.',
    h1: 'Web Application Security & OWASP Hardening in Pakistan',
    faqQuestion: 'What does a web application security audit cover?',
    faqAnswer: 'Our web security audits rigorously test against OWASP Top 10 vulnerabilities, business logic flaws, session hijacking, insecure direct object references, and cryptographic weaknesses, delivering ready-to-merge remediation PRs.'
  },
  'api-security': {
    title: 'API Security Testing & Vulnerability Pakistan | UraanTech',
    description: 'REST & GraphQL API security audits in Pakistan. Eliminate BOLA, broken authentication, rate limit bypasses, and data exposure across microservices.',
    h1: 'API Security Testing & Vulnerability Assessment in Pakistan',
    faqQuestion: 'Why are APIs the primary attack vector for modern apps in Pakistan?',
    faqAnswer: 'APIs directly expose database logic to the web. Our audits test OWASP API Security Top 10 vulnerabilities, ensuring authorization checks (BOLA/BFLA), token expiration, and payload sanitization are air-tight.'
  },
  'network-audits': {
    title: 'Network Security & Infrastructure Audits Pakistan | UraanTech',
    description: 'Enterprise network security audits and internal penetration testing in Pakistan. Firewall configuration, Active Directory hardening, and segmentation audits.',
    h1: 'Enterprise Network Penetration Testing & Security in Pakistan',
    faqQuestion: 'How does an internal network penetration test protect Pakistani corporate offices?',
    faqAnswer: 'Our certified engineers simulate lateral movement, privilege escalation, Active Directory Kerberoasting, and rogue device injection to identify weaknesses before ransomware gangs can exploit your intranet.'
  },
  'cloud-security': {
    title: 'Cloud Security Architecture & AWS IAM Pakistan | UraanTech',
    description: 'Enterprise cloud security and AWS/GCP hardening in Pakistan. Zero-Trust IAM governance, S3 bucket remediation, Kubernetes RBAC, and Terraform guardrails.',
    h1: 'Cloud Security Architecture & AWS IAM Hardening in Pakistan',
    faqQuestion: 'What cloud security frameworks does UraanTech implement in Pakistan?',
    faqAnswer: 'We enforce CIS Benchmarks, AWS Well-Architected Security Pillar, least-privilege IAM policies, automated KMS encryption, and continuous CSPM drift detection across AWS, GCP, and Azure cloud environments.'
  },
  'compliance-audits': {
    title: 'ISO 27001, SOC 2 & SBP Security Compliance | UraanTech',
    description: 'Security compliance audit consulting in Pakistan. Fast-track ISO 27001, SOC 2, PCI DSS, and State Bank of Pakistan (SBP) cybersecurity framework readiness.',
    h1: 'ISO 27001, SOC 2 & SBP Security Compliance in Pakistan',
    faqQuestion: 'How quickly can UraanTech prepare our Pakistani company for ISO 27001 or SOC 2 certification?',
    faqAnswer: 'Our compliance engineers perform rapid gap analyses, draft all required InfoSec policies, enforce technical controls, and conduct pre-audit simulations to get you audit-ready within 4 to 8 weeks.'
  },
  'source-code-review': {
    title: 'Secure Source Code Review & SAST Audits Pakistan | UraanTech',
    description: 'Manual and automated secure source code review in Pakistan. Uncover hidden backdoors, cryptographic weaknesses, and logic flaws before production deployment.',
    h1: 'Secure Source Code Review & SAST/DAST Audits in Pakistan',
    faqQuestion: 'Why is manual source code review superior to automated SAST tools?',
    faqAnswer: 'Automated scanners miss complex business logic vulnerabilities, access control flaws, and custom cryptographic misconfigurations. Our senior ethical hackers analyze the actual AST and execution flow line-by-line.'
  },
  'devsecops': {
    title: 'DevSecOps CI/CD Automation & Security Pakistan | UraanTech',
    description: 'DevSecOps pipeline automation in Pakistan. Integrate automated SAST, DAST, container scanning, and secret detection directly into GitHub Actions and GitLab CI.',
    h1: 'DevSecOps CI/CD Pipeline Automation & Security in Pakistan',
    faqQuestion: 'How does DevSecOps prevent security vulnerabilities from reaching production?',
    faqAnswer: 'We embed automated security gates into your CI/CD pipelines that automatically block pull requests containing secrets, insecure dependencies, or high-severity vulnerabilities before merging.'
  }
};

console.log('=== UPDATING 39 SERVICES ===');
for (const [slug, data] of Object.entries(services)) {
  const item = serviceKeywordsMap[slug];
  if (!item) {
    console.warn(`Warning: No mapping found for ${slug}`);
    continue;
  }

  // 1. Metadata
  data.meta = data.meta || {};
  data.meta.title = item.title;
  data.meta.description = item.description;
  data.meta.ogTitle = item.title;
  data.meta.ogDescription = item.description;

  // 2. H1 in content
  if (data.content) {
    data.content = data.content.replace(
      /<h1\b([^>]*)>[\s\S]*?<\/h1>/i,
      `<h1$1>${item.h1}</h1>`
    );
  }

  // 3. Schema - Clean canonical URLs, areaServed Pakistan, Breadcrumbs, and AEO FAQPage
  const cleanUrl = `https://uraantech.online/services/${slug}`;
  const existingSchemas = data.meta.schemas || [];
  
  // Find or create Service node, Breadcrumb node, and FAQ node
  const serviceNode = {
    '@type': 'Service',
    'name': item.h1,
    'serviceType': item.h1,
    'description': item.description,
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'UraanTech Studio',
      'url': 'https://uraantech.online',
      'telephone': '+923170128047',
      'email': 'info@uraantech.online',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Karachi',
        'addressRegion': 'Sindh',
        'addressCountry': 'PK'
      }
    },
    'url': cleanUrl,
    'areaServed': [
      { '@type': 'Country', 'name': 'Pakistan' },
      { '@type': 'City', 'name': 'Karachi' },
      { '@type': 'City', 'name': 'Lahore' },
      { '@type': 'City', 'name': 'Islamabad' }
    ]
  };

  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://uraantech.online/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://uraantech.online/services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': item.h1,
        'item': cleanUrl
      }
    ]
  };

  // Preserve existing FAQs if available, but ensure primary Pakistan Question is first
  let faqQuestions = [
    {
      '@type': 'Question',
      'name': item.faqQuestion,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.faqAnswer
      }
    }
  ];

  // Check if existing schemas had FAQs and append non-duplicate questions
  if (existingSchemas.length > 0) {
    const existingStr = JSON.stringify(existingSchemas);
    if (existingStr.includes('FAQPage')) {
      for (const s of existingSchemas) {
        const list = s['@graph'] || [s];
        for (const node of list) {
          if (node['@type'] === 'FAQPage' && Array.isArray(node.mainEntity)) {
            node.mainEntity.forEach(q => {
              if (q.name && q.name !== item.faqQuestion && faqQuestions.length < 5) {
                faqQuestions.push(q);
              }
            });
          }
        }
      }
    }
  }

  const faqNode = {
    '@type': 'FAQPage',
    'mainEntity': faqQuestions
  };

  // Assemble uniform structured @graph schema
  data.meta.schemas = [
    {
      '@context': 'https://schema.org',
      '@graph': [
        serviceNode,
        breadcrumbNode,
        faqNode
      ]
    }
  ];
}

console.log('=== UPDATING CORE PAGES DATA ===');
// 1. Industries page
pages.industries.meta.title = 'Industry Software & Cybersecurity Pakistan | UraanTech';
pages.industries.meta.description = 'Domain-engineered custom software, mobile apps & bank-grade cybersecurity solutions for FinTech, Healthcare, Logistics & Retail enterprises across Pakistan.';
pages.industries.meta.ogTitle = pages.industries.meta.title;
pages.industries.meta.ogDescription = pages.industries.meta.description;
pages.industries.meta.schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Industry Software & Cybersecurity Solutions Pakistan | UraanTech',
    'url': 'https://uraantech.online/industries',
    'description': pages.industries.meta.description,
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'UraanTech Studio',
      'url': 'https://uraantech.online',
      'telephone': '+923170128047',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Karachi',
        'addressRegion': 'Sindh',
        'addressCountry': 'PK'
      }
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://uraantech.online/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Industries', 'item': 'https://uraantech.online/industries' }
      ]
    }
  }
];

// 2. Careers page
pages.careers.meta.title = 'Software & Cyber Careers in Pakistan | UraanTech Studio';
pages.careers.meta.description = 'Explore high-impact software engineering, cybersecurity, and UI/UX design jobs in Pakistan (Karachi, Lahore, Islamabad & Remote) at UraanTech Studio.';
pages.careers.meta.ogTitle = pages.careers.meta.title;
pages.careers.meta.ogDescription = pages.careers.meta.description;
pages.careers.meta.schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Software & Cyber Careers in Pakistan | UraanTech',
    'url': 'https://uraantech.online/careers',
    'description': pages.careers.meta.description,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://uraantech.online/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Careers', 'item': 'https://uraantech.online/careers' }
      ]
    }
  }
];

// 3. About page
pages.about.meta.title = 'About UraanTech | Top Software & Cyber Studio in Pakistan';
pages.about.meta.description = 'Learn about UraanTech: Pakistan\'s elite engineering studio combining Silicon Valley software development, bank-grade cybersecurity, and bespoke digital design.';
pages.about.meta.ogTitle = pages.about.meta.title;
pages.about.meta.ogDescription = pages.about.meta.description;
pages.about.meta.schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About UraanTech | Top Software & Cyber Studio in Pakistan',
    'url': 'https://uraantech.online/about',
    'description': pages.about.meta.description,
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'UraanTech',
      'url': 'https://uraantech.online',
      'telephone': '+923170128047',
      'email': 'info@uraantech.online',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Main Shahrah-e-Faisal',
        'addressLocality': 'Karachi',
        'addressRegion': 'Sindh',
        'postalCode': '75500',
        'addressCountry': 'PK'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 24.8607,
        'longitude': 67.0011
      },
      'areaServed': ['Pakistan', 'Karachi', 'Lahore', 'Islamabad']
    }
  }
];

// 4. Contact page
pages.contact.meta.title = 'Contact Top Software & Cyber Studio in Pakistan | UraanTech';
pages.contact.meta.description = 'Book a strategy session with Pakistan\'s top software development and cybersecurity studio. Offices in Karachi, serving clients in Lahore, Islamabad & worldwide.';
pages.contact.meta.ogTitle = pages.contact.meta.title;
pages.contact.meta.ogDescription = pages.contact.meta.description;
pages.contact.meta.schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact UraanTech Pakistan',
    'url': 'https://uraantech.online/contact',
    'telephone': '+923170128047',
    'email': 'info@uraantech.online',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Main Shahrah-e-Faisal',
      'addressLocality': 'Karachi',
      'addressRegion': 'Sindh',
      'postalCode': '75500',
      'addressCountry': 'PK'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 24.8607,
      'longitude': 67.0011
    },
    'areaServed': ['Pakistan', 'Karachi', 'Lahore', 'Islamabad'],
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://uraantech.online/' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Contact Us', 'item': 'https://uraantech.online/contact' }
      ]
    }
  }
];

// 5. Services Page Schema
pages.services.meta.schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Software Development, Cybersecurity & Web Design Services in Pakistan',
    'description': 'UraanTech\'s 5 Core Engineering Pillars spanning 39 technical services across Pakistan.',
    'itemListElement': [
      {
        '@type': 'Service',
        'position': 1,
        'name': 'Best Cybersecurity Services & VAPT Audits in Pakistan',
        'url': 'https://uraantech.online/services/cybersecurity'
      },
      {
        '@type': 'Service',
        'position': 2,
        'name': 'Custom Software Development & Enterprise ERP in Pakistan',
        'url': 'https://uraantech.online/services/custom-web-apps'
      },
      {
        '@type': 'Service',
        'position': 3,
        'name': 'Web Design, Web Development & Mobile App Development in Pakistan',
        'url': 'https://uraantech.online/services/business-websites'
      },
      {
        '@type': 'Service',
        'position': 4,
        'name': 'Mobile App Design & Flutter / React Native Development in Pakistan',
        'url': 'https://uraantech.online/services/mobile-apps'
      },
      {
        '@type': 'Service',
        'position': 5,
        'name': 'Corporate Logo Design, Brand Identity & UI/UX Design in Pakistan',
        'url': 'https://uraantech.online/services/logo-design'
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What core software development and cybersecurity services are offered in Pakistan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'UraanTech provides 5 specialized technical pillars in Pakistan: Certified Cybersecurity & VAPT Audits, Custom Software & Enterprise ERP/CRM Systems, High-Performance Web Design & Next.js Development, Native & Cross-Platform Mobile App Development, and Corporate Logo Design & Brand Identity Systems.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Which is the top-ranked custom software development company in Pakistan?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'UraanTech is recognized among the premier custom software development companies in Pakistan, engineering high-concurrency microservices, multi-tenant B2B SaaS platforms, and enterprise ERP systems with complete client IP ownership and zero technical debt.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does UraanTech conduct on-site cybersecurity audits in Karachi, Lahore, and Islamabad?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, UraanTech conducts both remote and on-site cybersecurity assessments, network penetration testing, and ISO 27001 / State Bank of Pakistan (SBP) compliance reviews for financial institutions, fintechs, and enterprises throughout Pakistan.'
        }
      }
    ]
  }
];

// Save files
fs.writeFileSync(servicesDataPath, JSON.stringify(services, null, 2), 'utf8');
fs.writeFileSync(pagesDataPath, JSON.stringify(pages, null, 2), 'utf8');

console.log('Successfully applied comprehensive SEO, AEO & GEO updates to servicesData.json and pagesData.json!');
