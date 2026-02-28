import { SERVICES } from '../data/db.js';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery.js';

export function ServicePage({ slug }) {
  // Find requested service, default to Haircut & Style
  let serviceData = SERVICES.find(s => s.id === slug);
  if (!serviceData) {
    serviceData = SERVICES[0]; // fallback
  }

  // Adding overlay variables directly for inline style text visibility
  return `
    <div class="service-detail-page">
      <!-- 1. Service Hero with Contrast Fix -->
      <section class="service-hero" style="background: linear-gradient(rgba(42, 44, 43, 0.7), rgba(42, 44, 43, 0.7)), url('${serviceData.img}') center/cover; padding: var(--sp-16) 0; color: var(--c-white); text-align: center;">
        <div class="container">
          <h1 style="color: var(--c-white); text-shadow: 0px 2px 4px rgba(0,0,0,0.5); font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 0.5rem;">${serviceData.name} in Wexford, PA</h1>
          <p style="font-size: 1.15rem; color: rgba(255,255,255,0.8); font-style: italic; max-width: 600px; margin: 0 auto var(--sp-4); text-shadow: 0px 1px 2px rgba(0,0,0,0.5);">
            Expert ${serviceData.name.toLowerCase()} services provided by our master stylists, tailored precisely to your needs.
          </p>
          <p class="max-w-700 mx-auto" style="color: rgba(255,255,255,0.95); font-size: 1.25rem; max-width: 700px; margin: 0 auto; text-shadow: 0px 1px 3px rgba(0,0,0,0.5);">${serviceData.subtitle}</p>
          <a href="/book" class="btn btn-primary mt-4" style="background: var(--c-white); border-color: var(--c-white); color: var(--c-charcoal); margin-top: var(--sp-4);">Book ${serviceData.name}</a>
        </div>
      </section>

      <!-- 2. Definition & Pricing -->
      <section class="section container">
        <div class="grid grid-2">
          <div>
            <h2>The Process</h2>
            <p>${serviceData.description}</p>
            <p style="margin-bottom: var(--sp-6);">Every appointment begins with a thorough consultation to discuss your hair history, health, and goals. We utilize the top products in the industry to ensure your look is maintained.</p>
            
            ${serviceData.extraContent ? `
              <div class="extra-content-block p-4 bg-alt rounded" style="padding: var(--sp-5); background: var(--c-sage-light); border-left: 4px solid var(--c-sage); margin-bottom: var(--sp-6);">
                <h3 style="margin-bottom: var(--sp-3);">${serviceData.extraContent.title}</h3>
                ${serviceData.extraContent.body.split('\n\n').map(p => `<p>${p}</p>`).join('')}
                <div style="margin-top: var(--sp-4);">
                  <a href="/book" class="btn btn-primary d-inline-block">Book a Free Consultation</a>
                </div>
              </div>
            ` : ''}
          </div>
          <div>
            <div class="pricing-menu rounded" style="padding: var(--sp-4); border: 1px solid rgba(42, 44, 43, 0.1);">
              <h3 style="margin-bottom: var(--sp-4); padding-bottom: 8px;">Pricing Menu</h3>
              <ul style="list-style: none; padding: 0;">
                ${serviceData.pricing.map(p => {
    const link = p.slug ? `/services/${serviceData.id}/${p.slug}` : `/book`;
    return `
                  <li style="border-bottom: 1px dashed rgba(42, 44, 43, 0.2);">
                    <a href="${link}" class="pricing-click-block" style="display: block; padding: var(--sp-4) 0; text-decoration: none; color: inherit; transition: background-color 0.2s; border-radius: var(--radius-sm);">
                      <div class="d-flex justify-between font-bold" style="display: flex; justify-content: space-between; align-items: baseline;">
                        <h4 style="margin: 0; display: inline-flex; align-items: center; gap: 8px;">
                          ${p.name}
                          <span style="font-size: 0.75rem; color: var(--c-sage); font-weight: normal; opacity: 0; transition: opacity 0.2s;" class="book-text">See Details &rarr;</span>
                        </h4>
                        <strong style="color: var(--c-sage);">${p.price}</strong>
                      </div>
                      ${p.duration ? `<p style="font-size: 0.8rem; text-transform: uppercase; color: #888; margin-top: 4px; margin-bottom: 0;">&mapstoup; Est. Time: ${p.duration}</p>` : ''}
                      ${p.details ? `<p style="font-size: 0.9rem; margin-top: 8px; margin-bottom: 0; opacity: 0.85;">${p.details}</p>` : ''}
                    </a>
                  </li>
                `}).join('')}
              </ul>
              <p style="font-size: 0.85rem; opacity: 0.7; margin-top: var(--sp-3); text-align: center;">*Pricing varies by stylist level and hair length/density. Exact quotes provided before service begins.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Before/After Gallery -->
      <section class="section container">
        ${BeforeAfterGallery()}
      </section>

      <!-- 4. Top CTA -->
      <section class="section container text-center">
        <h2>Ready to transform your look?</h2>
        <a href="/the-team/debby" class="btn btn-primary mt-4" style="margin-top: var(--sp-4);">Schedule Your Consultation</a>
      </section>
    </div>
  `;
}
