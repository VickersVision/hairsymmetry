import { PRODUCTS } from '../data/db.js';

export function ShopPage({ slug }) {
  if (slug) {
    // Render PDP (Product Detail Page)
    return renderPDP(slug);
  } else {
    // Render PLP (Product Listing Page)
    return renderPLP();
  }
}

function renderPLP() {
  return `
    <div class="shop-plp section container">
      <div class="text-center mb-4">
        <h1>Retail Collection</h1>
        <p style="font-size: 1.15rem; color: var(--c-charcoal); font-style: italic; max-width: 600px; margin: 0 auto 1.5rem; border-left: 4px solid var(--c-sage); padding-left: 1rem; text-align: left;">
          Shop our curated collection of professional salon products in Wexford, PA. From Olaplex bond builders to eco-safe styling formulations, maintain your salon-perfect look at home.
        </p>
      </div>
      <div class="grid grid-3">
        ${PRODUCTS.map(p => `
          <a href="/shop/${p.slug}" class="card product-card" style="text-align: center;">
            <div class="card-image-wrap aspect-square" style="background: var(--color-bg); padding: 20px;">
              <img src="${p.img}" alt="${p.title}" class="img-responsive img-contain" />
            </div>
            <div class="card-content">
              <span class="product-brand" style="font-size: 0.75rem; text-transform: uppercase;">${p.brand}</span>
              <h3 style="margin: 4px 0;">${p.title}</h3>
              <strong>${p.price}</strong>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPDP(slug) {
  let product = PRODUCTS.find(p => p.slug === slug);
  if (!product) {
    product = PRODUCTS[0];
  }

  return `
    <div class="shop-pdp section container">
      <div class="grid grid-2">
        <div class="pdp-gallery bg-alt rounded" style="padding: var(--space-4);">
          <img src="${product.img}" alt="${product.title}" class="img-responsive img-contain aspect-square" style="border-radius: var(--radius-md);" />
        </div>
        <div class="pdp-info" style="padding-left: var(--space-4);">
          <strong style="color: var(--color-primary); text-transform: uppercase; font-size: 0.85rem;">${product.brand}</strong>
          <h1 style="margin-top: 8px;">${product.title}</h1>
          <div class="price h3">${product.price}</div>
          <p class="mt-4">Our high-end salon products maintain and preserve your hair's integrity between visits.</p>
          <a href="/book" class="btn btn-primary mt-4 w-100" style="width: 100%; padding: 16px; display: inline-block; text-align: center;">Get Consultation / Book</a>
          
          <div class="details mt-4">
            <h4>Benefits</h4>
            <ul style="margin-left: 20px; margin-bottom: 24px;">
              ${product.benefits ? product.benefits.map(b => `<li style="margin-bottom: 4px;">${b}</li>`).join('') : `
                <li>Salon-quality results at home.</li>
                <li>Protects your investment.</li>
                <li>Recommended personally by our team.</li>
              `}
            </ul>
            
            ${product.upsellService ? `
              <div class="upsell-block bg-sage-light rounded p-4" style="padding: var(--sp-4); border: 1px solid var(--c-sage);">
                <span class="overline d-block mb-2" style="color: var(--c-sage); font-weight: bold; font-size: 0.75rem;">Stylist Recommendation</span>
                <p style="font-size: 0.9rem; margin-bottom: var(--sp-3);">${product.upsellService.text}</p>
                <a href="/services/${product.upsellService.id}" class="text-sm font-bold" style="color: var(--c-charcoal); text-decoration: underline;">View the Service Menu</a>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}
