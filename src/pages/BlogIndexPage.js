import { BLOG_POSTS, TEAM } from '../data/db.js';
import { injectSEO } from '../seo.js';

const categoryLabels = {
    'all': 'All Articles',
    'hair-care': 'Hair Care',
    'styling': 'Styling & Trends',
    'nails': 'Nail Care',
    'waxing': 'Waxing & Skin',
    'lashes': 'Lashes & Brows',
    'products': 'Product Spotlight'
};

export function BlogIndexPage() {
    injectSEO({
        title: 'Blog | Hair Symmetry | Wexford, PA',
        description: 'Industry insights, expert advice, and the latest trends from our master stylists at Hair Symmetry.',
    });

    const urlParams = new URLSearchParams(window.location.search);
    const activeCategory = urlParams.get('cat') || 'all';

    const filteredPosts = activeCategory === 'all'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory);

    const availableCategories = ['all', ...new Set(BLOG_POSTS.map(post => post.category))].filter(Boolean);

    return `
        <div class="blog-index-page">
            <section class="blog-hero" style="padding: 6rem 2rem; background-color: var(--c-charcoal); color: white; text-align: center;">
                <div class="container">
                    <h1 style="font-size: 3.5rem; margin-bottom: 1rem;">The symmetry blog.</h1>
                    <p style="font-size: 1.25rem; opacity: 0.9; max-width: 600px; margin: 0 auto 2rem; color: var(--c-sage-light);">
                        Industry insights, expert advice, and the latest trends from our master stylists.
                    </p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="/book" style="background: var(--c-sage); color: white; padding: 0.875rem 2rem; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 0.95rem;">📅 Book Appointment</a>
                        <a href="tel:+17249354450" style="background: transparent; color: white; padding: 0.875rem 2rem; border-radius: 50px; font-weight: 700; text-decoration: none; border: 2px solid rgba(255,255,255,0.35); font-size: 0.95rem;">📞 (724) 935-4450</a>
                    </div>
                </div>
            </section>

            <section class="blog-filters-section" style="padding: 2rem 1rem; background-color: white; border-bottom: 1px solid #eee; text-align: center;">
                <div class="container">
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        ${availableCategories.map(cat => `
                            <a href="/blog?cat=${cat}" class="btn ${cat === activeCategory ? 'btn-primary' : 'btn-outline'}" style="text-decoration: none; border-radius: 30px; padding: 0.5rem 1.25rem;">
                                ${categoryLabels[cat] || cat}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="blog-grid-section" style="padding: 4rem 1rem; background-color: #f9f9f9;">
                <div class="container">
                    <div class="blog-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 3rem;">
                        ${filteredPosts.map(post => {
        const author = TEAM.find(t => t.id === post.authorId);
        const authorName = author ? author.name : 'The Team';
        return `
                                <a href="/blog/${post.slug}" class="blog-card" style="background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; text-decoration: none; color: inherit; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'">
                                    <div class="blog-card-img" style="height: 250px; background-color: #eee; background-image: url('${post.img}'); background-size: cover; background-position: center;"></div>
                                    
                                    <div class="blog-card-content" style="padding: 2rem; display: flex; flex-direction: column; flex-grow: 1;">
                                        <div style="font-size: 0.85rem; color: #888; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">
                                            ${post.date} &bull; By ${authorName}
                                        </div>
                                        
                                        <h2 style="font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.3; color: var(--c-charcoal); transition: color 0.2s;" onmouseover="this.style.color='var(--c-sage)'" onmouseout="this.style.color='var(--c-charcoal)'">
                                            ${post.title}
                                        </h2>
                                        
                                        <p style="color: #555; margin-bottom: 2rem; line-height: 1.6;">
                                            ${post.synopsis}
                                        </p>
                                        
                                        <div style="margin-top: auto;">
                                            <span class="btn btn-outline" style="display: inline-block; padding: 0.75rem 1.5rem;">
                                                Read Article
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            `;
    }).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
}
