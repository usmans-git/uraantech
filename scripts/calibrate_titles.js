const fs = require('fs');
const path = require('path');

const servicesDataPath = path.join(__dirname, '../data/servicesData.json');
const services = JSON.parse(fs.readFileSync(servicesDataPath, 'utf8'));

const titleFixes = {
  'api-integrations': 'API Integration & Microservices in Pakistan | UraanTech', // 55
  'autonomous-ai-agents': 'Autonomous AI Agents & Multi-Agent Pakistan | UraanTech', // 55
  'business-platforms': 'Enterprise Software & Platforms in Pakistan | UraanTech', // 55
  'data-predictive-ai': 'Data Engineering & Predictive AI Pakistan | UraanTech', // 53
  'network-audits': 'Network Security & Vulnerability Pakistan | UraanTech', // 53
  'workflow-automation': 'Enterprise Workflow Automation in Pakistan | UraanTech', // 54
  'compliance-audits': 'ISO 27001, SOC 2 & SBP Audits Pakistan | UraanTech' // 51
};

for (const [slug, title] of Object.entries(titleFixes)) {
  if (services[slug]) {
    services[slug].meta.title = title;
    services[slug].meta.ogTitle = title;
  }
}

fs.writeFileSync(servicesDataPath, JSON.stringify(services, null, 2), 'utf8');
console.log('Title length calibration complete.');
