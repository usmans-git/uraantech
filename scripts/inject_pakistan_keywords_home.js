const fs = require('fs');

console.log('--- Injecting Pakistan SEO, AEO & GEO Keywords into Home Page ---');

const pages = JSON.parse(fs.readFileSync('data/pagesData.json', 'utf8'));
let home = pages.home.content;

// 1. UPDATE HERO SECTION
const oldHeroTitle = '<h1 class="hero-title animate-fade-up">\n              We Engineer <span class="gradient-text">Intelligent Systems</span> &amp; Scalable Software That Scale Your Business.\n            </h1>';
const newHeroTitle = '<h1 class="hero-title animate-fade-up">\n              Best <span class="gradient-text">Cybersecurity &amp; Custom Software</span> Development Company in Pakistan.\n            </h1>';

home = home.replace(oldHeroTitle, newHeroTitle);
if (!home.includes('Best <span class="gradient-text">Cybersecurity &amp; Custom Software')) {
  // Regex fallback
  home = home.replace(
    /<h1[^>]*class=["']hero-title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i,
    newHeroTitle
  );
}

// Update Hero Lead Paragraph
const oldLeadPattern = /<p class="hero-lead animate-fade-up delay-1">[\s\S]*?<\/p>/i;
const newLead = `<p class="hero-lead animate-fade-up delay-1">
              UraanTech is Pakistan's premier engineering studio. We architect bank-grade cybersecurity, bespoke custom software development, high-converting web design, mobile app design, and corporate logo branding for ambitious enterprises across Karachi, Lahore, Islamabad, and global markets.
            </p>`;
home = home.replace(oldLeadPattern, newLead);

// Update Hero Badge
home = home.replace(
  '<span class="badge-text">Next-Gen Software &amp; AI Studio</span>',
  '<span class="badge-text">#1 Software &amp; Cybersecurity Studio &bull; Pakistan</span>'
);

// Update Hero Trust Highlights
const oldTrustStrip = /<div class="hero-trust-strip animate-fade-up delay-3">[\s\S]*?<\/div>\s*<\/div>/i;
const newTrustStrip = `<div class="hero-trust-strip animate-fade-up delay-3">
              <div class="trust-pill">
                <span class="trust-icon">&#128737;</span>
                <span>Best Cybersecurity in Pakistan</span>
              </div>
              <div class="trust-pill">
                <span class="trust-icon">&#128187;</span>
                <span>Custom Software Development</span>
              </div>
              <div class="trust-pill">
                <span class="trust-icon">&#10024;</span>
                <span>Web, App &amp; Logo Design</span>
              </div>
            </div>
          </div>`;
home = home.replace(oldTrustStrip, newTrustStrip);

// 2. UPDATE EDITORIAL CAPABILITIES (5 KEYWORD-RICH ROWS)
const oldCapSectionPattern = /<section class="section capabilities-editorial-section" id="capabilities">[\s\S]*?<\/section>/i;
const newCapSection = `    <!-- ================= 04. CAPABILITIES (PAKISTAN TARGETED KEYWORDS) ================= -->
    <section class="section capabilities-editorial-section" id="capabilities">
      <div class="container">
        
        <div class="editorial-split-grid">
          
          <!-- Left Sticky Narrative Column -->
          <div class="editorial-sticky-col">
            <div class="section-eyebrow">
              <span class="eyebrow-dot"></span>
              <span>SPECIALIZED SERVICES &bull; PAKISTAN &amp; GLOBAL</span>
            </div>
            <h2 class="editorial-main-title">
              Top Software, Cyber &amp; <br />
              <span class="gradient-text">Design Services in Pakistan.</span>
            </h2>
            <p class="editorial-main-lead">
              From mission-critical cybersecurity audits to bespoke enterprise software, high-conversion web design, mobile app design, and corporate logo branding—we deliver unmatched technical excellence across Karachi, Lahore, and Islamabad.
            </p>

            <div class="editorial-cta-wrap">
              <a href="#contact" class="btn btn-shimmer btn-lg open-consultation-drawer-btn">
                <span>Start a Project Consultation</span>
                <span class="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <!-- Mini Spec Sheet -->
            <div class="editorial-spec-sheet">
              <div class="spec-line">
                <span class="spec-label">Cybersecurity Posture</span>
                <span class="spec-value">Certified VAPT &amp; SOC 2</span>
              </div>
              <div class="spec-line">
                <span class="spec-label">Software Architecture</span>
                <span class="spec-value">Custom ERP / Cloud Native</span>
              </div>
              <div class="spec-line">
                <span class="spec-label">Creative &amp; Design</span>
                <span class="spec-value">Web, App &amp; Logo Branding</span>
              </div>
            </div>
          </div>

          <!-- Right Open Rows Column (Keyword Rich) -->
          <div class="editorial-list">
            
            <!-- Row 1: Cybersecurity Services Pakistan -->
            <a href="/services/vapt-penetration-testing" class="editorial-row">
              <div class="editorial-row-header">
                <span class="editorial-num">01</span>
                <h3 class="editorial-row-title">Best Cybersecurity Services &amp; VAPT in Pakistan</h3>
                <span class="editorial-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <p class="editorial-row-desc">
                Bank-grade cybersecurity services across Pakistan. We deliver comprehensive vulnerability assessment and penetration testing (VAPT), cloud security audits, network hardening, and compliance for financial institutions, fintechs, and enterprises.
              </p>
              <div class="editorial-tags">
                <span class="tag-inline">Cybersecurity Company Pakistan</span>
                <span class="tag-inline">VAPT Audits Karachi</span>
                <span class="tag-inline">ISO 27001 / SOC 2</span>
                <span class="tag-inline">Network Security</span>
              </div>
            </a>

            <!-- Row 2: Custom Software Development Pakistan -->
            <a href="/services/custom-software-development" class="editorial-row">
              <div class="editorial-row-header">
                <span class="editorial-num">02</span>
                <h3 class="editorial-row-title">Custom Software Development Company in Pakistan</h3>
                <span class="editorial-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <p class="editorial-row-desc">
                Bespoke enterprise software development in Pakistan. We engineer custom ERP systems, intelligent CRM platforms, scalable microservices, and SaaS MVPs tailored for rapid business expansion and operational efficiency.
              </p>
              <div class="editorial-tags">
                <span class="tag-inline">Custom Software Pakistan</span>
                <span class="tag-inline">Enterprise ERP Karachi</span>
                <span class="tag-inline">SaaS Development</span>
                <span class="tag-inline">Next.js &amp; Python</span>
              </div>
            </a>

            <!-- Row 3: Web Design & Web Development Pakistan -->
            <a href="/services/web-app-development" class="editorial-row">
              <div class="editorial-row-header">
                <span class="editorial-num">03</span>
                <h3 class="editorial-row-title">Professional Web Design &amp; Web Development Pakistan</h3>
                <span class="editorial-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <p class="editorial-row-desc">
                Premier web design company in Pakistan. We craft ultra-fast Next.js web applications, high-converting corporate portals, and headless e-commerce platforms with sub-second page loads and responsive perfection on every device.
              </p>
              <div class="editorial-tags">
                <span class="tag-inline">Web Design Company Pakistan</span>
                <span class="tag-inline">Website Developers Lahore</span>
                <span class="tag-inline">Next.js Web Apps</span>
                <span class="tag-inline">Corporate Portals</span>
              </div>
            </a>

            <!-- Row 4: Mobile App Design & Development Pakistan -->
            <a href="/services/cross-platform-apps" class="editorial-row">
              <div class="editorial-row-header">
                <span class="editorial-num">04</span>
                <h3 class="editorial-row-title">Mobile App Design &amp; App Development in Pakistan</h3>
                <span class="editorial-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <p class="editorial-row-desc">
                Leading mobile app development company in Pakistan. Production Flutter and React Native cross-platform apps for iOS and Android featuring intuitive UI/UX app design, offline-first data sync, and biometric authentication.
              </p>
              <div class="editorial-tags">
                <span class="tag-inline">App Design Pakistan</span>
                <span class="tag-inline">Mobile App Developers Karachi</span>
                <span class="tag-inline">Flutter &amp; React Native</span>
                <span class="tag-inline">iOS &amp; Android</span>
              </div>
            </a>

            <!-- Row 5: Logo Design & Branding Pakistan -->
            <a href="/services/ui-ux-design" class="editorial-row">
              <div class="editorial-row-header">
                <span class="editorial-num">05</span>
                <h3 class="editorial-row-title">Corporate Logo Design &amp; Brand Identity Pakistan</h3>
                <span class="editorial-arrow" aria-hidden="true">&rarr;</span>
              </div>
              <p class="editorial-row-desc">
                Elite logo design company in Pakistan. We build memorable corporate logo design concepts, Figma design systems, visual brand guidelines, and high-conversion UI/UX design that build instant brand authority and client trust.
              </p>
              <div class="editorial-tags">
                <span class="tag-inline">Logo Design Pakistan</span>
                <span class="tag-inline">Brand Identity Agency</span>
                <span class="tag-inline">Figma UI/UX Design</span>
                <span class="tag-inline">Graphic Design Karachi</span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>`;

home = home.replace(oldCapSectionPattern, newCapSection);

// 3. UPDATE FAQ SECTION (AEO ANSWER ENGINE OPTIMIZATION)
const oldFaqPattern = /<section class="section faq-section" id="faq">[\s\S]*?<\/section>/i;
const newFaqSection = `    <!-- ================= 05. AEO & FAQ SECTION (DIRECT ANSWER SNIPPETS) ================= -->
    <section class="section faq-section" id="faq">
      <div class="container max-w-4xl">
        
        <div class="section-heading text-center">
          <div class="section-eyebrow">
            <span class="eyebrow-dot"></span>
            <span>FREQUENTLY ASKED QUESTIONS &bull; PAKISTAN MARKET</span>
          </div>
          <h2 class="section-title">
            Answers to Common Queries on <span class="gradient-text">Software, Cyber &amp; Design</span>
          </h2>
          <p class="section-subtitle">
            Direct, transparent insights for Pakistani business leaders, founders, and CTOs seeking elite technical delivery.
          </p>
        </div>

        <div class="faq-modern-list" id="faqAccordion">

          <!-- FAQ 1: Best Cybersecurity Company -->
          <div class="accordion-item is-open">
            <button class="accordion-header" aria-expanded="true">
              <span class="faq-num">01</span>
              <span class="faq-question">Which is the best cybersecurity services company in Pakistan?</span>
              <span class="faq-chevron">&plus;</span>
            </button>
            <div class="accordion-body">
              <p>
                <strong>UraanTech</strong> is recognized as one of the best cybersecurity companies in Pakistan. We specialize in certified <strong>VAPT (Vulnerability Assessment &amp; Penetration Testing)</strong>, zero-trust network hardening, cloud security audits, and compliance preparation (ISO 27001, SOC 2, and SBP cybersecurity guidelines) for banks, fintechs, and high-growth scaleups in Karachi, Lahore, and Islamabad.
              </p>
            </div>
          </div>

          <!-- FAQ 2: Custom Software Development -->
          <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false">
              <span class="faq-num">02</span>
              <span class="faq-question">What custom software development services do you provide in Pakistan?</span>
              <span class="faq-chevron">&plus;</span>
            </button>
            <div class="accordion-body">
              <p>
                We build end-to-end custom software solutions across Pakistan, including <strong>bespoke ERP systems</strong>, intelligent CRM workflows, multi-tenant B2B SaaS platforms, and custom AI automation pipelines. Every codebase is engineered using modern stacks (Next.js, Python, Flutter, PostgreSQL) with full client code and IP ownership.
              </p>
            </div>
          </div>

          <!-- FAQ 3: Web Design, App Design, Logo Design -->
          <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false">
              <span class="faq-num">03</span>
              <span class="faq-question">Do you offer professional web design, app design, and logo design in Pakistan?</span>
              <span class="faq-chevron">&plus;</span>
            </button>
            <div class="accordion-body">
              <p>
                Yes. UraanTech delivers complete creative and digital design services in Pakistan, including <strong>corporate logo design</strong>, brand identity kits, comprehensive Figma design token systems, responsive website design, and mobile app UI/UX design engineered specifically for customer conversion.
              </p>
            </div>
          </div>

          <!-- FAQ 4: Cost in Pakistan -->
          <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false">
              <span class="faq-num">04</span>
              <span class="faq-question">How much does custom software development and cybersecurity cost in Pakistan?</span>
              <span class="faq-chevron">&plus;</span>
            </button>
            <div class="accordion-body">
              <p>
                Our pricing in Pakistan is structured around fixed-scope 2-to-4 week milestones, eliminating hidden agency retainers. By working directly with senior in-house architects in Karachi, clients receive Silicon Valley grade engineering at highly competitive PKR and USD pricing, saving up to 60% compared to international agency rates.
              </p>
            </div>
          </div>

          <!-- FAQ 5: Cities Covered -->
          <div class="accordion-item">
            <button class="accordion-header" aria-expanded="false">
              <span class="faq-num">05</span>
              <span class="faq-question">Which cities in Pakistan do you provide services for?</span>
              <span class="faq-chevron">&plus;</span>
            </button>
            <div class="accordion-body">
              <p>
                While our headquarters are based in <strong>Karachi</strong>, we actively serve clients across <strong>Lahore, Islamabad, Rawalpindi, Faisalabad, and nationwide</strong> through direct collaborative Slack/Discord channels, Google Meet technical sprints, and on-site executive briefings for enterprise engagements.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>`;

home = home.replace(oldFaqPattern, newFaqSection);

pages.home.content = home;
fs.writeFileSync('data/pagesData.json', JSON.stringify(pages, null, 2), 'utf8');
console.log('Successfully injected Pakistan SEO, AEO & GEO keywords into Home Page!');
