const fs = require('fs');

// 1. Update app/layout.jsx
let layout = fs.readFileSync('app/layout.jsx', 'utf8');
layout = layout.replace(
  /title:\s*"UraanTech \| Software Engineering, AI & Cyber Studio"/g,
  'title: "Cybersecurity & Software Development Pakistan | UraanTech"'
);
layout = layout.replace(
  /description:\s*"UraanTech engineers intelligent software systems, bespoke AI automations, scalable SaaS products, and bank-grade cybersecurity for ambitious companies\."/g,
  'description:\n    "Pakistan\'s top studio for bank-grade cybersecurity, custom software development, web & app design, and corporate logo branding. Based in Karachi, Pakistan."'
);
layout = layout.replace(
  /alt:\s*"UraanTech Venture & AI Studio"/g,
  'alt: "UraanTech Software Development & Cybersecurity Pakistan"'
);
fs.writeFileSync('app/layout.jsx', layout, 'utf8');

// 2. Update index.html
if (fs.existsSync('index.html')) {
  let index = fs.readFileSync('index.html', 'utf8');
  index = index.replace(
    /<title>.*?<\/title>/i,
    '<title>Cybersecurity & Software Development Pakistan | UraanTech</title>'
  );
  index = index.replace(
    /<meta name="description" content=".*?"\s*\/?>/i,
    '<meta name="description" content="Pakistan\'s top studio for bank-grade cybersecurity, custom software development, web & app design, and corporate logo branding. Based in Karachi, Pakistan.">'
  );
  index = index.replace(
    /<meta property="og:title" content=".*?"\s*\/?>/i,
    '<meta property="og:title" content="Cybersecurity & Software Development Pakistan | UraanTech">'
  );
  index = index.replace(
    /<meta property="og:description" content=".*?"\s*\/?>/i,
    '<meta property="og:description" content="Pakistan\'s top studio for bank-grade cybersecurity, custom software development, web & app design, and corporate logo branding.">'
  );
  fs.writeFileSync('index.html', index, 'utf8');
}

console.log('Successfully updated app/layout.jsx and index.html');
