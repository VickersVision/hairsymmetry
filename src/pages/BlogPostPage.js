import { BLOG_POSTS, TEAM, SERVICES, PRODUCTS } from '../data/db.js';
import { injectSEO } from '../seo.js';

// Before/after showcase images by category
const BEFORE_AFTER_BY_CATEGORY = {
    'hair-care': { before: '/images/portfolio/highlights-result.jpg', after: '/images/portfolio/keratin-extensions-result.jpg', label: 'Color Transformation' },
    'styling': { before: '/images/portfolio/keratin-extensions-result.jpg', after: '/images/portfolio/highlights-result.jpg', label: 'Style Transformation' },
    'nails': { before: '/images/services/nails.jpg', after: null, label: null },
    'lashes': { before: '/images/services/lashes-and-brows.jpg', after: null, label: null },
    'waxing': { before: '/images/services/waxing.jpg', after: null, label: null },
    'products': { before: '/images/products/olaplex-no3.jpg', after: null, label: null },
};

export function BlogPostPage({ slug }) {
    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return `<div class="container section text-center"><h1>Post Not Found</h1><p>We could not find the article. <a href="/blog">Return to Blog</a></p></div>`;
    }

    const author = TEAM.find(t => t.id === post.authorId);

    injectSEO({
        title: `${post.title} | Hair Symmetry Blog`,
        description: post.synopsis,
        schema: {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.img,
            "datePublished": post.date,
            "author": {
                "@type": "Person",
                "name": author ? author.name : "Hair Symmetry"
            }
        }
    });

    // ─── Build the 3-slot funnel (always shown) ───────────────────────────────
    const funnel = post.relatedFunnel || {};
    const targetProduct = funnel.product ? PRODUCTS.find(p => p.slug === funnel.product.id) : null;
    const funnelStylistId = funnel.stylist ? funnel.stylist.id : post.authorId;
    const targetStylist = TEAM.find(t => t.id === funnelStylistId) || author;

    // Build before/after section for hair categories
    const beforeAfterData = BEFORE_AFTER_BY_CATEGORY[post.category];
    const showBeforeAfter = beforeAfterData && beforeAfterData.after;

    return `
        <div class="blog-post-page">
            <article>
                <!-- SEO Header -->
                <header style="padding: 6rem 1rem 4rem; text-align: center; background-color: white;">
                    <div class="container" style="max-width: 800px;">
                        <div style="color: var(--c-sage); font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem;">
                            ${post.date}
                        </div>
                        <h1 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1.5rem; line-height: 1.2;">
                            ${post.title}
                        </h1>
                        <!-- SEO Synopsis -->
                        <p style="font-size: 1.3rem; color: var(--c-charcoal); font-style: italic; border-left: 4px solid var(--c-sage); padding-left: 1.5rem; margin: 0 auto 2rem; text-align: left; opacity: 0.85;">
                            ${post.synopsis}
                        </p>
                        
                        ${author ? `
                            <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 2rem;">
                                <img src="${author.img}" alt="${author.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" />
                                <div style="text-align: left;">
                                    <div style="font-weight: bold; color: var(--c-charcoal);">${author.name}</div>
                                    <div style="font-size: 0.85rem; color: #777;">${author.role} · Hair Symmetry</div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </header>

                <!-- Featured Image -->
                ${post.img ? `
                    <div class="container" style="max-width: 1000px; margin-bottom: 4rem;">
                        <img src="${post.img}" alt="${post.title}" style="width: 100%; height: 500px; object-fit: cover; border-radius: 12px; display: block;" />
                    </div>
                ` : ''}

                <!-- Article Content -->
                <div class="container" style="max-width: 800px; margin-bottom: 5rem;">
                    <div class="blog-content styled-content" style="font-size: 1.15rem; line-height: 1.8; color: var(--c-charcoal);">
                        ${post.content}
                    </div>
                </div>

                ${showBeforeAfter ? `
                <!-- Before/After Transformation Showcase -->
                <div class="container" style="max-width: 1000px; margin-bottom: 5rem;">
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <span style="display: inline-block; font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase; color: var(--c-sage); font-weight: 700; margin-bottom: 0.75rem;">Transformation Gallery</span>
                        <h2 style="font-size: 1.75rem; margin: 0;">${beforeAfterData.label}</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; border-radius: 12px; overflow: hidden;">
                        <div style="position: relative;">
                            <img src="${beforeAfterData.before}" alt="Before transformation" style="width: 100%; height: 420px; object-fit: cover; display: block;" />
                            <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(0,0,0,0.65); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">BEFORE</div>
                        </div>
                        <div style="position: relative;">
                            <img src="${beforeAfterData.after}" alt="After transformation" style="width: 100%; height: 420px; object-fit: cover; display: block;" />
                            <div style="position: absolute; bottom: 1rem; left: 1rem; background: var(--c-sage); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">AFTER</div>
                        </div>
                    </div>
                    <p style="text-align: center; color: #888; font-size: 0.875rem; margin-top: 1rem; font-style: italic;">Results performed by our team at Hair Symmetry, Wexford PA.</p>
                </div>
                ` : ''}

                <!-- Stylist Recommendation Funnel (always visible) -->
                <div style="background: #f7f7f5; padding: 5rem 1rem; margin-bottom: 0;">
                    <div class="container" style="max-width: 1000px;">
                        <div style="text-align: center; margin-bottom: 3rem;">
                            <span style="display: inline-block; font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase; color: var(--c-sage); font-weight: 700; margin-bottom: 0.75rem;">Your Next Steps</span>
                            <h2 style="font-size: 1.75rem; margin: 0;">Ready to experience this for yourself?</h2>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                            
                            <!-- Product Slot -->
                            ${targetProduct ? `
                            <a href="/shop/${targetProduct.slug}" style="display: flex; flex-direction: column; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.07); text-decoration: none; color: inherit; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                                <div style="height: 200px; background-image: url('${targetProduct.img}'); background-size: contain; background-repeat: no-repeat; background-position: center; background-color: #fafafa; padding: 1rem;"></div>
                                <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--c-sage); font-weight: 700; letter-spacing: 1px; margin-bottom: 0.5rem;">Take It Home</span>
                                    <h4 style="margin: 0 0 0.5rem; font-size: 1.1rem;">${funnel.product ? funnel.product.title : targetProduct.title}</h4>
                                    <p style="font-size: 0.9rem; color: #666; flex: 1; margin-bottom: 1rem;">${funnel.product ? funnel.product.description : targetProduct.benefits[0]}</p>
                                    <span style="color: var(--c-sage); font-size: 0.875rem; font-weight: 700;">Shop Now →</span>
                                </div>
                            </a>
                            ` : `
                            <a href="/shop" style="display: flex; flex-direction: column; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.07); text-decoration: none; color: inherit; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                                <div style="height: 200px; background: linear-gradient(135deg, var(--c-sage-light), #e8f0e8); display: flex; align-items: center; justify-content: center; font-size: 3rem;">🛍️</div>
                                <div style="padding: 1.5rem; flex: 1;">
                                    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--c-sage); font-weight: 700; letter-spacing: 1px; display: block; margin-bottom: 0.5rem;">Take It Home</span>
                                    <h4 style="margin: 0 0 0.5rem;">Professional Products</h4>
                                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">Shop the same salon-quality products our stylists use every day.</p>
                                    <span style="color: var(--c-sage); font-size: 0.875rem; font-weight: 700;">Browse Shop →</span>
                                </div>
                            </a>
                            `}

                            <!-- Service Booking Slot -->
                            <a href="${funnel.service ? '/services/' + funnel.service.categoryId : '/book'}" style="display: flex; flex-direction: column; background: var(--c-charcoal); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.15); text-decoration: none; color: white; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                                <div style="height: 200px; background-image: url('${post.img}'); background-size: cover; background-position: center; position: relative;">
                                    <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.4);"></div>
                                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 3rem;">✨</div>
                                </div>
                                <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--c-sage-light); font-weight: 700; letter-spacing: 1px; margin-bottom: 0.5rem;">Experience It</span>
                                    <h4 style="margin: 0 0 0.5rem; color: white;">${funnel.service ? funnel.service.title : 'Book an Appointment'}</h4>
                                    <p style="font-size: 0.9rem; color: rgba(255,255,255,0.7); flex: 1; margin-bottom: 1rem;">${funnel.service ? funnel.service.description : 'Our team is ready to create a personalized look for you.'}</p>
                                    <span style="color: var(--c-sage-light); font-size: 0.875rem; font-weight: 700;">${funnel.service ? funnel.service.cta : 'Book Now'} →</span>
                                </div>
                            </a>

                            <!-- Stylist Profile Slot -->
                            ${targetStylist ? `
                            <a href="/the-team/${targetStylist.id}" style="display: flex; flex-direction: column; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.07); text-decoration: none; color: inherit; transition: transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                                <div style="height: 200px; background-image: url('${targetStylist.img}'); background-size: cover; background-position: center top;"></div>
                                <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--c-sage); font-weight: 700; letter-spacing: 1px; margin-bottom: 0.5rem;">Meet Your Stylist</span>
                                    <h4 style="margin: 0 0 0.25rem;">${funnel.stylist ? funnel.stylist.title : 'Book with ' + targetStylist.name}</h4>
                                    <p style="font-size: 0.85rem; color: #888; margin-bottom: 0.5rem;">${targetStylist.experience} experience · ${targetStylist.specialties.split(',')[0]}</p>
                                    <p style="font-size: 0.9rem; color: #666; flex: 1; margin-bottom: 1rem;">${funnel.stylist ? funnel.stylist.description : targetStylist.bio.substring(0, 100) + '...'}</p>
                                    <span style="color: var(--c-sage); font-size: 0.875rem; font-weight: 700;">View Portfolio & Book →</span>
                                </div>
                            </a>
                            ` : ''}

                        </div>
                    </div>
                </div>

                <!-- Sticky CTA Strip -->
                <div style="background: var(--c-sage); padding: 2.5rem 2rem; text-align: center;">
                    <div class="container" style="display: flex; align-items: center; justify-content: center; gap: 2rem; flex-wrap: wrap;">
                        <div>
                            <strong style="color: white; font-size: 1.2rem; display: block;">Ready to book?</strong>
                            <span style="color: rgba(255,255,255,0.85); font-size: 0.95rem;">Hair Symmetry — Wexford, PA</span>
                        </div>
                        <a href="/book" style="background: white; color: var(--c-charcoal); padding: 0.875rem 2rem; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 0.95rem; white-space: nowrap;">📅 Book Online</a>
                        <a href="tel:+17249354450" style="background: rgba(255,255,255,0.15); color: white; padding: 0.875rem 2rem; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 0.95rem; white-space: nowrap; border: 2px solid rgba(255,255,255,0.3);">📞 (724) 935-4450</a>
                    </div>
                </div>

            </article>
        </div>
    `;
}

