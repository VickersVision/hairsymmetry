import { TEAM } from '../data/db.js';

export function StylistPage({ slug }) {
  // Find the requested stylist, fallback to Debby if not found
  let stylistData = TEAM.find(s => s.id === slug);
  if (!stylistData) {
    stylistData = TEAM[0]; // Default to owner
  }

  return `
    <div class="stylist-detail-page">
      <!-- 1. Stylist Hero -->
      <section class="section container">
        <div class="grid grid-2 align-center">
          <div class="stylist-hero-img rounded" style="overflow:hidden;">
            <img src="${stylistData.img}" alt="${stylistData.name}" class="img-responsive img-cover aspect-portrait" />
          </div>
          <div class="stylist-hero-content pl-4" style="padding-left: var(--sp-4);">
            <h1>Meet ${stylistData.name}, ${stylistData.role}</h1>
            <p style="font-size: 1.15rem; color: var(--c-charcoal); font-style: italic; max-width: 600px; margin: 0 0 1rem 0; border-left: 4px solid var(--c-sage); padding-left: 1rem; text-align: left;">
              ${stylistData.name} is a premier ${stylistData.role.toLowerCase()} in Wexford, PA, specializing in ${stylistData.specialties}. Discover their portfolio and book your next transformation.
            </p>
            <p class="text-large mb-4">${stylistData.bio}</p>
            <div class="micro-stats d-flex gap-4 mb-4" style="display:flex; gap: var(--sp-4); margin-bottom: var(--sp-4);">
              <div>
                <strong>Experience</strong><br>
                <span>${stylistData.experience}</span>
              </div>
              <div>
                <strong>Specialties</strong><br>
                <div class="tags-list mt-2" style="margin-top: 8px;">
                  ${stylistData.specialties.split(', ').map(s => `<span class="badge" style="background-color: var(--c-sage-light); border: none; padding: 6px 12px; font-weight: 500;">${s}</span>`).join('')}
                </div>
              </div>
            </div>
            <a href="/book" class="btn btn-primary mt-2">Book with ${stylistData.name}</a>
          </div>
        </div>
      </section>

      <!-- 2. Portfolio / Canvas -->
      <section class="section bg-sage-light" style="background-color: var(--c-sage-light);">
        <div class="container">
          <h2 class="text-center">${stylistData.name}'s Canvas</h2>
          <p class="text-center text-charcoal-light mb-4 text-lead max-w-700 mx-auto" style="max-width: 700px; margin: 0 auto var(--sp-4) auto;">A glimpse into the artistry and transformations crafted by ${stylistData.name}.</p>
          
          ${stylistData.portfolio && stylistData.portfolio.length > 0 ? `
          <!-- Portfolio grid using stylist-specific images -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-top: 2rem;">
            ${stylistData.portfolio.map((img, i) => `
              <div style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); aspect-ratio: 1; position: relative;">
                <img src="${img}" alt="${stylistData.name} portfolio work" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; cursor: pointer; display: block;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" />
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%); pointer-events: none;"></div>
                <div style="position: absolute; bottom: 1rem; left: 1rem; color: white; font-size: 0.8rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">
                  ${stylistData.specialties.split(', ')[i % stylistData.specialties.split(', ').length]}
                </div>
              </div>
            `).join('')}
            <!-- Third canvas slot: always show stylist's primary service image -->
            <div style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); aspect-ratio: 1; background: var(--c-sage); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2rem; gap: 1rem;">
              <span style="font-size: 2.5rem;">✂️</span>
              <h3 style="color: white; font-size: 1.2rem; margin: 0;">Book with ${stylistData.name}</h3>
              <p style="color: rgba(255,255,255,0.85); font-size: 0.875rem; margin: 0;">${stylistData.specialties.split(', ').slice(0, 2).join(' & ')}</p>
              <a href="/book" style="background: white; color: var(--c-sage); padding: 0.6rem 1.5rem; border-radius: 30px; font-size: 0.875rem; font-weight: 700; text-decoration: none; margin-top: 0.5rem;">Reserve a Spot</a>
            </div>
          </div>
          ` : `
          <!-- Fallback grid for stylists without portfolio data -->
          <div class="grid grid-3 mt-4" style="margin-top: var(--sp-4);">
            <div class="portfolio-item rounded aspect-square" style="overflow:hidden; box-shadow: var(--shadow-sm);">
              <img src="/images/services/haircut-and-style.jpg" alt="Portfolio piece" class="img-cover" style="transition: transform 0.5s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
            </div>
            <div class="portfolio-item rounded aspect-square" style="overflow:hidden; box-shadow: var(--shadow-sm);">
              <img src="/images/services/hair-coloring.jpg" alt="Portfolio piece" class="img-cover" style="transition: transform 0.5s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
            </div>
            <div class="portfolio-item rounded aspect-square" style="overflow:hidden; box-shadow: var(--shadow-sm);">
              <img src="/images/portfolio/highlights-result.jpg" alt="Portfolio piece" class="img-cover" style="transition: transform 0.5s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
            </div>
          </div>
          `}
        </div>
      </section>


      <!-- 3. Final CTA -->
      <section class="section container text-center">
        <h2>Ready for a change?</h2>
        <a href="/book" class="btn btn-primary mt-4" style="margin-top: var(--sp-4);">Reserve ${stylistData.name}'s Next Opening</a>
        <div style="margin-top: 1rem; font-size: 0.9rem; color: var(--c-charcoal);">
            Or call the salon directly at <a href="tel:+17249354450" style="color: var(--c-sage); font-weight: bold; text-decoration: none;">(724) 935-4450</a> to request ${stylistData.name}.
        </div>
      </section>
    </div>
  `;
}
