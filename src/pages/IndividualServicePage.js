import { SERVICES, TEAM } from '../data/db.js';
import { injectSEO } from '../seo.js';

export function IndividualServicePage({ categorySlug, serviceSlug }) {
    // Find the category
    const category = SERVICES.find(s => s.id === categorySlug);
    // Find the specific pricing item
    const service = category ? category.pricing.find(p => p.slug === serviceSlug) : null;

    if (!category || !service) {
        return `<div class="container section text-center"><h1>Service Not Found</h1><p>We could not find the service you are looking for. <a href="/services">Return to Services</a></p></div>`;
    }

    // SEO Injection
    injectSEO({
        title: `${service.name} | Hair Symmetry | Wexford, PA`,
        description: service.details || service.description || category.subtitle,
        schema: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "provider": {
                "@type": "LocalBusiness",
                "name": "Hair Symmetry",
                "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2578 Brandt School Rd",
                    "addressLocality": "Wexford",
                    "addressRegion": "PA",
                    "postalCode": "15090"
                }
            },
            "offers": {
                "@type": "Offer",
                "price": service.price.replace(/[^0-9.]/g, ''),
                "priceCurrency": "USD"
            }
        }
    });

    // Find Stylists who specialize in this broad category to recommend them
    const matchedStylists = TEAM.filter(member => {
        const spec = member.specialties.toLowerCase();
        const role = member.role.toLowerCase();
        const catName = category.name.toLowerCase();

        if (catName === 'nails' && (role.includes('nail') || spec.includes('pedicure') || spec.includes('manicure'))) return true;
        if (catName === 'hair coloring' && (spec.includes('color') || spec.includes('balayage') || spec.includes('highlight'))) return true;
        if (catName === 'haircut & style' && (spec.includes('cut') || spec.includes('style'))) return true;
        if (catName === 'lashes & brows' && (spec.includes('lash') || spec.includes('brow'))) return true;
        if (catName === 'mens' && spec.includes('mens')) return true;
        if (catName === 'waxing' && spec.includes('wax')) return true;

        return false;
    });

    const recommendedStylists = matchedStylists.length > 0 ? matchedStylists : TEAM.filter(m => m.role.toLowerCase().includes('stylist'));

    return `
        <div class="service-deep-dive-page">
            <section class="service-deep-dive-hero" style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${category.img}); padding: var(--sp-12) var(--sp-4); color: white; text-align: center; background-size: cover; background-position: center;">
                <div class="container">
                    <a href="/services" style="color: var(--c-sage-light); text-decoration: none; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin-bottom: 1rem; display: inline-block;">
                        &larr; Back to Services
                    </a>
                    <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem;">${service.name}</h1>
                    <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto;">
                        ${category.subtitle}
                    </p>
                    <div style="margin-top: 2rem; display: inline-flex; gap: 2rem; padding: 1rem 2rem; background-color: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); flex-wrap: wrap; justify-content: center;">
                        <div>
                            <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Starting Price</strong>
                            <span style="font-size: 1.5rem; font-weight: bold;">${service.price}</span>
                        </div>
                        <div style="width: 1px; background-color: rgba(255,255,255,0.3);"></div>
                        <div>
                            <strong style="display: block; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Est. Time</strong>
                            <span style="font-size: 1.5rem; font-weight: bold;">${service.duration || 'Consultation'}</span>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container" style="padding: 4rem 1rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: start;">
                <div class="service-deep-dive-content" style="line-height: 1.8; font-size: 1.1rem; max-width: 800px;">
                    <div style="margin-bottom: 3rem;">
                        <h2 style="font-size: 2rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--c-sage); padding-bottom: 0.5rem; display: inline-block;">Service Overview</h2>
                        <p style="font-size: 1.15rem; color: var(--c-charcoal); margin-bottom: 1.5rem;">${service.details || service.description || 'Our master stylists have years of experience to deliver the precise look you desire.'}</p>
                        ${service.name === 'Balayage' || service.name === 'Extensions' ? `
                           <div style="background-color: var(--c-charcoal); color: white; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                                <strong>Consultation Notice:</strong> Because this is an advanced service, we recommend calling ahead if you are attempting a major color correction or significant lengthening so we can properly allocate time.
                           </div>
                        ` : ''}
                    </div>

                    <div style="background-color: var(--c-sage-light); padding: 2.5rem; border-left: 4px solid var(--c-sage);">
                        <h2 style="font-size: 1.8rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span role="img" aria-label="star">✨</span> Stylist Best Practice
                        </h2>
                        <p style="font-style: italic; color: var(--c-charcoal); margin: 0;">
                            "${service.bestPractice || "Consult with our team to find the best maintenance schedule for your unique hair type."}"
                        </p>
                    </div>
                </div>

                <div class="booking-sidebar" style="background-color: white; padding: 2rem; border: 1px solid #eee; box-shadow: 0 4px 20px rgba(0,0,0,0.05); position: sticky; top: 2rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; text-align: center;">Ready to Book?</h3>
                    <p style="text-align: center; margin-bottom: 2rem; color: #666;">Select a specialist below to continue to booking.</p>
                    
                    <div class="specialists-list" style="display: flex; flex-direction: column; gap: 1rem;">
                        ${recommendedStylists.map(stylist => `
                            <a href="/book" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border: 1px solid #e0e0e0; text-decoration: none; color: inherit; transition: all 0.2s ease; border-radius: var(--radius-sm);" onmouseover="this.style.borderColor='var(--c-sage)'" onmouseout="this.style.borderColor='#e0e0e0'">
                                <img src="${stylist.img}" alt="${stylist.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;" />
                                <div>
                                    <strong style="display: block; font-size: 1.1rem;">Book with ${stylist.name}</strong>
                                    <span style="font-size: 0.85rem; color: #777;">${stylist.role}</span>
                                </div>
                                <span style="margin-left: auto; color: var(--c-sage); font-weight: bold;">&rarr;</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}
