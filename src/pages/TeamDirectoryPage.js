import { TEAM } from '../data/db.js';
import { StylistCard } from '../components/StylistCard.js';

export function TeamDirectoryPage() {
  return `
    <div class="team-directory-page">
      <section class="section bg-sage-light text-center">
        <div class="container">
          <span class="overline">The Artists</span>
          <h1>Meet Our Team</h1>
          <p style="font-size: 1.15rem; color: var(--c-charcoal); font-style: italic; max-width: 600px; margin: 0 auto 1rem; border-left: 4px solid var(--c-sage); padding-left: 1rem; text-align: left;">
            Discover the premier hair stylists, color specialists, and beauty experts of Wexford, PA. Our dedicated team at Hair Symmetry continually advances their education to master the latest trends in balayage, precision cuts, and luxury treatments.
          </p>
        </div>
      </section>

      <section class="section container">
        <div class="grid grid-4 gap-8">
          ${TEAM.map(s => StylistCard({
    name: s.name,
    title: s.role,
    imageUrl: s.img,
    specialties: s.specialties.split(', ').slice(0, 3),
    linkUrl: '/the-team/' + s.id
  })).join('')}
        </div>
      </section>

      <!-- Booking CTA -->
      <section style="background: var(--c-charcoal); color: white; padding: 5rem 2rem; text-align: center;">
        <div class="container" style="max-width: 800px;">
          <span style="display: inline-block; font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase; color: var(--c-sage-light); margin-bottom: 1rem; font-weight: 700;">Ready to Transform?</span>
          <h2 style="color: white; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem;">Book Your Appointment Today</h2>
          <p style="color: rgba(255,255,255,0.75); font-size: 1.15rem; max-width: 550px; margin: 0 auto 2.5rem;">Each of our stylists brings a unique expertise. Reserve your chair online or give us a call — we'd love to hear what you're envisioning.</p>
          <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
            <a href="/book" style="background: var(--c-sage); color: white; padding: 1rem 2.5rem; border-radius: 50px; font-size: 1rem; font-weight: 700; text-decoration: none; transition: background 0.2s;" onmouseover="this.style.background='#5a7a5a'" onmouseout="this.style.background='var(--c-sage)'">📅 Book Online</a>
            <a href="tel:+17249354450" style="background: transparent; color: white; padding: 1rem 2.5rem; border-radius: 50px; font-size: 1rem; font-weight: 700; text-decoration: none; border: 2px solid rgba(255,255,255,0.4); transition: border-color 0.2s;" onmouseover="this.style.borderColor='white'" onmouseout="this.style.borderColor='rgba(255,255,255,0.4)'">📞 (724) 935-4450</a>
          </div>
        </div>
      </section>
    </div>
    `;
}
