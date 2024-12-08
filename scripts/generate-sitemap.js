const { create } = require('xmlbuilder2');
const fs = require('fs');
const path = require('path');
const { locationData } = require('../lib/locations-data');
const { reviews, brands } = require('../lib/reviews-data');

const DOMAIN = 'https://your-domain.com';

function generateSitemap() {
  const doc = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  // Add static pages
  const staticPages = [
    '/',
    '/about',
    '/faq',
    '/guides',
    '/reviews',
    '/where-to-buy-nicotine-pouches'
  ];

  staticPages.forEach(page => {
    doc.ele('url')
      .ele('loc').txt(`${DOMAIN}${page}`).up()
      .ele('changefreq').txt('weekly').up()
      .ele('priority').txt('0.8').up();
  });

  // Add location pages
  Object.entries(locationData).forEach(([countrySlug, country]) => {
    // Country page
    doc.ele('url')
      .ele('loc').txt(`${DOMAIN}/where-to-buy-nicotine-pouches/${countrySlug}`).up()
      .ele('changefreq').txt('weekly').up()
      .ele('priority').txt('0.7').up();

    // City pages
    Object.entries(country.cities).forEach(([citySlug]) => {
      doc.ele('url')
        .ele('loc').txt(`${DOMAIN}/where-to-buy-nicotine-pouches/${countrySlug}/${citySlug}`).up()
        .ele('changefreq').txt('weekly').up()
        .ele('priority').txt('0.6').up();
    });
  });

  // Add review pages
  Object.entries(brands).forEach(([brandSlug, brand]) => {
    // Brand page
    doc.ele('url')
      .ele('loc').txt(`${DOMAIN}/reviews/${brandSlug}`).up()
      .ele('changefreq').txt('weekly').up()
      .ele('priority').txt('0.7').up();
  });

  Object.entries(reviews).forEach(([_, review]) => {
    // Review page
    doc.ele('url')
      .ele('loc').txt(`${DOMAIN}/reviews/${review.brand}/${review.slug}`).up()
      .ele('lastmod').txt(review.updatedAt || review.publishedAt).up()
      .ele('changefreq').txt('monthly').up()
      .ele('priority').txt('0.6').up();
  });

  const xml = doc.end({ prettyPrint: true });

  // Ensure the public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // Write sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);

  // Write robots.txt
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

  console.log('Generated sitemap.xml and robots.txt');
}

generateSitemap();