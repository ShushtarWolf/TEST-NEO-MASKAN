#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const contentPath = path.join(rootDir, 'content', 'site.json');
const stylesheetPath = path.join(rootDir, 'styles', 'main.css');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderListings(listings) {
  return listings
    .map((listing) => {
      const amenities = (listing.amenities || [])
        .map((amenity) => `<li>${escapeHtml(amenity)}</li>`)
        .join('');
      const tags = (listing.tags || [])
        .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join('');

      return `
        <article class="listing" id="${escapeHtml(listing.id)}">
          <div class="listing-header">
            <h3>${escapeHtml(listing.title)}</h3>
            <span class="badge">${escapeHtml(listing.price)}</span>
          </div>
          <p>${escapeHtml(listing.address)}</p>
          <p>متراژ ${escapeHtml(listing.area)} متر | ${escapeHtml(listing.bedrooms)} خواب</p>
          <ul class="amenities">${amenities}</ul>
          <div class="listing-tags">${tags}</div>
        </article>
      `;
    })
    .join('\n');
}

function renderFeatures(features) {
  return features
    .map(
      (feature) => `
        <article class="card feature-card">
          <div class="feature-icon" aria-hidden="true">${escapeHtml(feature.icon || '')}</div>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.body)}</p>
        </article>
      `,
    )
    .join('\n');
}

function renderInsights(cards) {
  return cards
    .map(
      (card) => `
        <article class="card">
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.body)}</p>
        </article>
      `,
    )
    .join('\n');
}

function renderFaq(faqItems) {
  return faqItems
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>
      `,
    )
    .join('\n');
}

function renderPage(site) {
  const { hero, insights, features, listings, faq, contact, newsletter } = site;
  const metrics = [
    { label: 'پرونده فعال', value: '۲۴۳' },
    { label: 'میانگین رضایت', value: '۹۸٪' },
    { label: 'میانگین پاسخگویی', value: 'کمتر از ۵ دقیقه' },
  ];

  const metricsHtml = metrics
    .map(
      (metric) => `
        <div class="metric-card">
          <strong>${escapeHtml(metric.value)}</strong>
          <span>${escapeHtml(metric.label)}</span>
        </div>
      `,
    )
    .join('\n');

  const heroSection = `
    <section class="hero" id="hero">
      <div class="container">
        <div class="badge" aria-label="پلتفرم هوشمند">پیشرو در تحلیل داده مسکن</div>
        <h1>${escapeHtml(hero.title)}</h1>
        <p>${escapeHtml(hero.subtitle)}</p>
        <div class="button-group" role="group">
          <a class="button primary" href="${escapeHtml(hero.primaryCta.href)}">${escapeHtml(hero.primaryCta.label)}</a>
          <a class="button secondary" href="${escapeHtml(hero.secondaryCta.href)}">${escapeHtml(hero.secondaryCta.label)}</a>
        </div>
        <div class="metrics" aria-label="شاخص‌های عملکرد">
          ${metricsHtml}
        </div>
      </div>
    </section>
  `;

  const insightsSection = `
    <section class="container" id="insights">
      <h2 class="section-title">داده محور تصمیم بگیرید</h2>
      <div class="insights">
        ${renderInsights(insights.cards)}
      </div>
    </section>
  `;

  const featuresSection = `
    <section class="container" id="features">
      <h2 class="section-title">امکانات کلیدی نئو مسکن</h2>
      <div class="features">
        ${renderFeatures(features)}
      </div>
    </section>
  `;

  const listingsSection = `
    <section class="container" id="listings">
      <h2 class="section-title">پیشنهادهای منتخب امروز</h2>
      <div class="listings" aria-live="polite">
        ${renderListings(listings)}
      </div>
    </section>
  `;

  const faqSection = `
    <section class="container faq" id="faq">
      <h2 class="section-title">سوالات پرتکرار</h2>
      ${renderFaq(faq)}
    </section>
  `;

  const contactSection = `
    <section class="container contact" id="contact">
      <h2 class="section-title">در تماس باشیم</h2>
      <p>تلفن: <strong>${escapeHtml(contact.phone)}</strong></p>
      <p>ایمیل: <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></p>
      <p>آدرس دفتر مرکزی: ${escapeHtml(contact.address)}</p>
      <div class="newsletter">
        <h3>${escapeHtml(newsletter.title)}</h3>
        <p>${escapeHtml(newsletter.description)}</p>
        <form aria-label="عضویت در خبرنامه">
          <label class="sr-only" for="newsletter-email">${escapeHtml(newsletter.placeholder)}</label>
          <input id="newsletter-email" type="email" required placeholder="${escapeHtml(newsletter.placeholder)}" />
          <button type="submit">${escapeHtml(newsletter.button)}</button>
        </form>
      </div>
    </section>
  `;

  return `
    <!doctype html>
    <html lang="${escapeHtml(site.language || 'fa')}" dir="rtl">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${escapeHtml(site.siteTitle)}</title>
        <meta name="description" content="پلتفرم هوشمند املاک و مستغلات با تمرکز بر تجربه فارسی‌زبان" />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </head>
      <body>
        <header class="header" role="banner">
          <nav class="container" aria-label="ناوبری اصلی">
            <div class="button-group" style="justify-content: space-between; padding: 1.25rem 0;">
              <span style="font-weight:700; font-size:1.2rem; color:#312e81;">نئو مسکن</span>
              <span style="font-size:0.95rem; color:#4c1d95;">تحلیل داده محور برای بازار مسکن ایران</span>
            </div>
          </nav>
        </header>
        <main>
          ${heroSection}
          ${insightsSection}
          ${featuresSection}
          ${listingsSection}
          ${faqSection}
          ${contactSection}
        </main>
        <footer class="footer">© ${new Date().getFullYear()} NeoMaskan - تمامی حقوق محفوظ است.</footer>
        <script>
          const form = document.querySelector('.newsletter form');
          if (form) {
            form.addEventListener('submit', (event) => {
              event.preventDefault();
              const input = form.querySelector('input[type="email"]');
              if (!input) return;
              const value = input.value.trim();
              if (!value) {
                alert('لطفا ایمیل خود را وارد کنید.');
                return;
              }
              form.reset();
              alert('عضویت شما در خبرنامه ثبت شد.');
            });
          }
        </script>
      </body>
    </html>
  `;
}

function buildSite(options = {}) {
  const start = Date.now();
  if (!fs.existsSync(contentPath)) {
    throw new Error(`Site content not found at ${contentPath}`);
  }
  const raw = fs.readFileSync(contentPath, 'utf8');
  const site = JSON.parse(raw);

  ensureDir(distDir);
  fs.rmSync(distDir, { recursive: true, force: true });
  ensureDir(distDir);

  const html = renderPage(site);
  const css = fs.readFileSync(stylesheetPath, 'utf8');

  fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
  fs.writeFileSync(path.join(distDir, 'styles.css'), css, 'utf8');

  const duration = Date.now() - start;
  if (options.log !== false) {
    console.log(`Built NeoMaskan static site in ${duration}ms`);
    console.log(`Output directory: ${distDir}`);
  }

  return { distDir, duration };
}

if (require.main === module) {
  try {
    buildSite();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { buildSite };
