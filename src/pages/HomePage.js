import { ServicePreviewCard } from '../components/ServicePreviewCard.js';
import { StylistCard } from '../components/StylistCard.js';
import { injectSEO } from '../seo.js';
import { SERVICES, TEAM } from '../data/db.js';

export function HomePage() {
  injectSEO({
    title: 'Wexford Premium Salon',
    description: 'Wexford’s premier destination for effortless hair, skin, and beauty since 1982.',
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Hair Symmetry",
      "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2578 Brandt School Rd",
        "addressLocality": "Wexford",
        "addressRegion": "PA",
        "postalCode": "15090"
      },
      "telephone": "(724) 935-4450",
      "priceRange": "$$"
    }
  });

  return `
    <div class="homepage">
      
      <!-- 1. Clean Split Hero -->
      <section class="hero-split section bg-sage-light">
        <div class="container grid grid-2">
          <div class="hero-content">
            <span class="overline">Est. 1982 • Wexford, PA</span>
            <h1>Artistry Meets Ecology.</h1>
            <p style="font-size: 1.15rem; color: var(--c-charcoal); font-style: italic; max-width: 600px; margin: 0 0 1rem 0; border-left: 4px solid var(--c-sage); padding-left: 1rem; text-align: left; background: rgba(255,255,255,0.7); backdrop-filter: blur(5px);">
              Wexford’s premier destination for effortless hair, skin, and beauty. We bring out your natural beauty through high-end techniques, expert colorists, and environmentally conscious luxury salon care.
            </p>
            <div class="btn-group">
              <a href="/book" class="btn btn-primary">Book Appointment</a>
              <a href="/services/haircut-and-style" class="btn btn-secondary">Explore Services</a>
            </div>
            <div style="margin-top: 1rem; font-size: 0.9rem; color: var(--c-charcoal);">
              Or call us directly at <a href="tel:+17249354450" style="color: var(--c-sage); font-weight: bold; text-decoration: none;">(724) 935-4450</a>
            </div>
          </div>
          <div class="hero-image-wrapper">
            <img src="/images/home/hero.jpg" alt="Salon experience" loading="lazy" />
          </div>
        </div>
      </section>

      <!-- 2. Trust Strip -->
      <section class="social-proof-strip">
        <div class="container proof-metrics">
          <div class="proof-item">
            <span class="star-rating" style="color:#f4b400; font-size:1.1rem; letter-spacing:2px;">★★★★★</span>
            <span>56 5-Star Google Reviews</span>
          </div>
          <div class="proof-item">📅 Serving Wexford Since 1982</div>
          <div class="proof-item">🌿 Certified Eco-Conscious</div>
        </div>
      </section>

      <!-- 3. What We Offer (SEO Highlight) -->
      <section class="section" style="background-color: var(--c-sage-light); padding-top: var(--sp-12); padding-bottom: var(--sp-12);">
        <div class="container">
          <div class="text-center" style="max-width: 600px; margin: 0 auto 48px auto;">
            <span class="overline">Why Choose Hair Symmetry?</span>
            <h2>Our Core Specialties</h2>
            <p>From advanced coloring to sensitive skin solutions and hair restoration, every visit is completely tailored to you.</p>
          </div>
          <div class="grid grid-3 gap-8 text-center">
            <div class="offer-card" style="background: white; padding: var(--sp-6); border-radius: var(--radius-lg); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
              <h3 style="color: var(--c-sage); font-size: 1.5rem; margin-bottom: var(--sp-3);">Advanced Hair Care</h3>
              <p style="font-size: 0.95rem;">One of our specialties is using products which are both beneficial to your hair and skin and safe for the environment. We carefully select formulas that protect your investment.</p>
            </div>
            <div class="offer-card" style="background: white; padding: var(--sp-6); border-radius: var(--radius-lg); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
              <h3 style="color: var(--c-sage); font-size: 1.5rem; margin-bottom: var(--sp-3);">Master Haircuts</h3>
              <p style="font-size: 0.95rem;">Our experienced stylists go above and beyond to provide a relaxing atmosphere while delivering cutting-edge styles and colors mapped to your aesthetic.</p>
            </div>
            <div class="offer-card" style="background: white; padding: var(--sp-6); border-radius: var(--radius-lg); box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
              <h3 style="color: var(--c-sage); font-size: 1.5rem; margin-bottom: var(--sp-3);">Wigs & Restoration</h3>
              <p style="font-size: 0.95rem;">We offer free, private consultations for wigs and hair restoration. We are happy to advise you about the many wig options to find the perfect, comfortable fit.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Core Services Grid -->
      <section class="section">
        <div class="container">
          <div class="text-center" style="max-width: 600px; margin: 0 auto 48px auto;">
            <span class="overline">Our Expertise</span>
            <h2>Tailored Services for Mind & Body</h2>
            <p>From advanced coloring to sensitive skin solutions, every visit is completely tailored to you.</p>
          </div>
          <div class="scroller-wrapper">
            <div class="scroller-track">
              ${[...SERVICES, ...SERVICES].map(s => `
                <div class="scroller-item">
                  ${ServicePreviewCard({ title: s.name, desc: s.subtitle, imageUrl: s.img, linkUrl: '/services/' + s.id, ctaText: 'View ' + s.name })}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="text-center" style="margin-top: var(--sp-8);">
             <a href="/services/hair-coloring" class="btn btn-secondary">View All Service Menus</a>
          </div>
        </div>
      </section>

      <!-- 4. Feature Banner -->
      <section class="section-sm">
        <div class="container">
          <div class="feature-banner">
            <div class="feature-banner-bg"></div>
            <div class="feature-banner-overlay"></div>
            <div class="feature-banner-content">
              <h2>The Symmetry Experience</h2>
              <p class="text-lead" style="margin-bottom: 0;">Leaning into the harmonious balance of body and mind, our sanctuary is designed to elevate your spirit while we perfect your look.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Stylists Standard Grid -->
      <section class="section" style="overflow: hidden;">
        <div class="container">
          <div class="text-center" style="max-width: 600px; margin: 0 auto 48px auto;">
            <span class="overline">The Team</span>
            <h2>Meet the Artists</h2>
            <p>Our master stylists undergo rigorous continuous education to bring you the best techniques.</p>
          </div>
          <div class="scroller-wrapper">
            <div class="scroller-track" style="animation-direction: reverse; animation-duration: 45s;">
              ${[...TEAM, ...TEAM].map(s => `
                <div class="scroller-item">
                  ${StylistCard({ name: s.name, title: s.role, imageUrl: s.img, specialties: s.specialties.split(', ').slice(0, 2), linkUrl: '/the-team/' + s.id })}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="text-center" style="margin-top: var(--sp-8);">
             <a href="/the-team" class="btn btn-secondary">View the Full Team Directory</a>
          </div>
        </div>
      </section>

      <!-- 6. Map & Reviews Strip -->
      <section class="section">
        <div class="container">
          <div class="text-center" style="max-width: 600px; margin: 0 auto 3rem auto;">
            <span class="overline">Find Us & Hear From Our Clients</span>
            <h2>Wexford's Most Trusted Salon</h2>
            <div style="display: inline-flex; align-items: center; gap: 0.6rem; margin-top: 0.75rem; background: #fff; padding: 0.6rem 1.2rem; border-radius: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
              <img src="https://www.google.com/favicon.ico" alt="Google" style="width: 18px;" />
              <span style="color: #f4b400; font-size: 1.1rem; letter-spacing: 2px;">★★★★★</span>
              <span style="color: #444; font-weight: bold; font-size: 0.9rem;">56 5-Star Google Reviews</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; margin-bottom: 3rem;">
            <!-- Map -->
            <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.1);">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.8489279497!2d-80.0921039!3d40.6136401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883489f550953677%3A0x538e9ae6d3cb7265!2sHair%20Symmetry!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="380"
                style="border:0; display:block;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Hair Symmetry on Google Maps">
              </iframe>
            </div>

            <!-- Reviews Snippet (3 cards) -->
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${[
      { author: 'Lisa M.', text: 'I have been going to Hair Symmetry for years. Debby and her team are so talented — I always leave feeling beautiful!', avatar: 'L', date: 'Jan 2025' },
      { author: 'Kara P.', text: 'Miranda completely transformed my hair. She took her time and I&#39;m absolutely obsessed with the results.', avatar: 'K', date: 'Feb 2025' },
      { author: 'Jennifer W.', text: 'Jenna sat with me for 20 minutes just consulting. Incredibly knowledgeable — this is my forever salon!', avatar: 'J', date: 'Jan 2025' }
    ].map(r => `
                <div style="background: white; border-radius: 10px; padding: 1.25rem 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid #f0f0f0; display: flex; gap: 1rem; align-items: flex-start;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--c-sage); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0; font-size: 1rem;">${r.avatar}</div>
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.3rem; flex-wrap: wrap;">
                      <strong style="font-size: 0.9rem;">${r.author}</strong>
                      <span style="color: #f4b400; font-size: 0.9rem;">★★★★★</span>
                      <span style="color: #aaa; font-size: 0.75rem;">${r.date}</span>
                      <img src="https://www.google.com/favicon.ico" alt="Google" style="width: 14px; opacity: 0.6;" />
                    </div>
                    <p style="font-size: 0.88rem; color: #555; margin: 0; line-height: 1.6; font-style: italic;">"${r.text}"</p>
                  </div>
                </div>
              `).join('')}
              
              <a href="/contact" class="btn btn-outline" style="text-align: center; margin-top: 0.5rem; border-radius: 30px;">
                See All Reviews & Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Retail & Footer Pre-CTA -->
      <section class="section bg-charcoal text-center" style="margin-bottom: -96px; padding-bottom: 128px;">
        <div class="container" style="max-width: 600px;">
          <h2 style="color: white;">Salon Quality, Home Care.</h2>
          <p style="color: rgba(255,255,255,0.8); margin-bottom: 32px;">We partner with Olaplex to ensure your hair’s health long after you leave the chair.</p>
          <a href="/shop" class="btn btn-primary" style="background: white; color: var(--c-charcoal);">Shop Products</a>
        </div>
      </section>

    </div>
  `;
}
