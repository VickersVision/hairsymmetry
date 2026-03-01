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

      <!-- Recruitment CTA Banner -->
      <section class="container" style="margin-top: -3rem; position: relative; z-index: 10; margin-bottom: 4rem;">
        <div style="background: var(--c-charcoal); color: white; padding: 2.5rem 3rem; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; box-shadow: var(--shadow-lg);">
          <div style="max-width: 600px;">
            <h3 style="color: white; margin-bottom: 0.5rem; font-size: 1.8rem;">Are you a Master Stylist? Join our Family.</h3>
            <p style="opacity: 0.9; margin: 0; font-size: 1.05rem;">We are always looking for elite talent. Receive your own dedicated landing page, exclusive clientele access, constant education and unmatched camaraderie.</p>
          </div>
          <a href="/salon-careers" class="btn" style="background: white; color: var(--c-charcoal); white-space: nowrap; font-weight: bold; padding: 1rem 2rem;">Explore Benefits & Apply →</a>
        </div>
      </section>

      <section class="section container" style="padding-top: 0;">
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

      <!-- Review CTA Strip -->
      <section class="container" style="margin-top: 3rem; margin-bottom: 4rem;">
        <div style="background: white; border: 1px solid var(--c-border); padding: 2.5rem 3rem; border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-sm);">
          <span style="font-size: 2rem; display: block; margin-bottom: 1rem;">⭐⭐⭐⭐⭐</span>
          <h3 style="color: var(--c-charcoal); margin-bottom: 0.5rem; font-size: 1.8rem;">Love your new look?</h3>
          <p style="color: #666; margin: 0 auto 1.5rem; max-width: 600px; font-size: 1.05rem;">The greatest compliment we can receive is a 5-star Google review. It helps our small business and independent artists thrive in Wexford.</p>
          <button onclick="document.getElementById('team-review-modal').style.display='flex'" class="btn" style="background: #4285F4; color: white; border: none; font-weight: bold; padding: 1rem 2rem; border-radius: 50px; cursor: pointer; font-size: 1.1rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Rate Your Stylist on Google</button>
        </div>
      </section>

      <!-- Dynamic Review Modal for Team Page -->
      <div id="team-review-modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
          <div style="background: white; border-radius: 16px; padding: 2.5rem; max-width: 450px; width: 90%; text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.2); position: relative;">
              <button onclick="document.getElementById('team-review-modal').style.display='none'" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #888;">&times;</button>
              
              <h3 style="margin-bottom: 0.5rem; color: var(--c-charcoal);">Support Our Artists</h3>
              <p style="color: #666; font-size: 0.95rem; margin-bottom: 1.5rem;">Did one of our incredible stylists completely transform your hair? Leave them a 5-star review!</p>
              
              <div style="background: #fdfbf7; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px dashed var(--c-sage);">
                  <p style="font-weight: bold; color: var(--c-sage); margin: 0 0 0.5rem 0; font-size: 1.05rem;">Pro-Tip for your Review:</p>
                  <p style="font-size: 0.85rem; color: #555; margin: 0;">Be sure to explicitly write <strong style="color:var(--c-charcoal);">your Stylist's Name</strong> and the <strong style="color:var(--c-charcoal);">Service</strong> you received (like "Balayage") in your review so they get the recognition they deserve!</p>
              </div>

              <div style="background: #f8f9fa; padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; display: inline-block;">
                  <!-- QR code targeting Google Review -->
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://g.page/r/HairSymmetryWexford/review" alt="Scan to Review" style="width: 150px; height: 150px; display: block; margin: 0 auto; border-radius: 8px; border: 1px solid #ddd;" />
                  <span style="font-size: 0.8rem; color: #888; display: block; margin-top: 0.5rem; font-weight: 500;">Scan to open on phone</span>
              </div>

              <a href="https://g.page/r/HairSymmetryWexford/review" target="_blank" onclick="document.getElementById('team-review-modal').style.display='none'" class="btn" style="display: block; width: 100%; border-radius: 30px; font-weight: bold; font-size: 1.1rem; padding: 1rem; background: #4285F4; color: white; text-decoration: none;">Write 5-Star Google Review</a>
          </div>
      </div>
    </div>
    `;
}
