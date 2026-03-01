import wigsImg from '../assets/team/wigs.jpg';

export function Footer() {
  return `
    <!-- Wigs for Kids Footer Spotlight -->
    <div style="background: #2d5a3d; color: white; padding: 3rem 1rem;">
      <div class="container" style="display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center; max-width: 1000px; margin: 0 auto;">
        <img src="${wigsImg}" alt="Wigs for Kids — Hair Symmetry donation partner" style="width: 80px; height: 80px; object-fit: cover; border-radius: 50%; border: 3px solid rgba(255,255,255,0.3); flex-shrink: 0;" />
        <div>
          <strong style="display: block; font-size: 1.05rem; margin-bottom: 0.35rem; color: white;">💛 Proudly Supporting Wigs for Kids</strong>
          <p style="font-size: 0.9rem; color: white; opacity: 0.9; margin: 0; line-height: 1.5;">Hair Symmetry accepts hair donations to help create custom wigs for children experiencing hair loss. Donate your hair — and make a lasting difference in a child's life.</p>
        </div>
        <a href="/donate-hair" style="white-space: nowrap; background: white; color: #2d5a3d; font-weight: bold; padding: 0.65rem 1.5rem; border-radius: 30px; text-decoration: none; font-size: 0.9rem; flex-shrink: 0; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">Donate Hair →</a>
      </div>
    </div>

    <footer class="footer">
      <div class="container grid grid-4">
        <div>
          <h3 class="logo" style="margin-bottom: var(--sp-3);">Hair Symmetry</h3>
          <p style="font-size: 0.9rem; margin-bottom: var(--sp-4);">As a beauty salon we believe there is a body and mind symmetry. We aim at elevating our customers inside and out by bringing out a sense of harmony, beautiful proportion and balance.</p>
          <div style="display: flex; gap: 16px;">
            <a href="https://www.instagram.com/hairsymmetry/" target="_blank" style="text-decoration: underline; font-weight: bold;">Instagram</a>
            <a href="https://www.facebook.com/hairsymmetry" target="_blank" style="text-decoration: underline; font-weight: bold;">Facebook</a>
          </div>
        </div>
        
        <div>
          <h4 style="margin-bottom: 16px;">Contact Us</h4>
          <p style="font-size: 0.95rem; margin-bottom: 8px;">2578 Brandt School Rd<br>Wexford, PA 15090, USA</p>
          <p style="font-size: 0.95rem; margin-bottom: 8px;"><a href="tel:+17249354450">+1 724-935-4450</a></p>
          <p style="font-size: 0.95rem;"><a href="mailto:hairsymmetry@yahoo.com">hairsymmetry@yahoo.com</a></p>
        </div>

        <div>
          <h4 style="margin-bottom: 16px;">Hours</h4>
          <ul style="list-style: none; padding: 0; font-size: 0.9rem;">
            <li style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Monday</span> <span style="opacity: 0.7;">Closed</span></li>
            <li style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Tuesday</span> <span>9am - 8pm</span></li>
            <li style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Wednesday</span> <span>9am - 8pm</span></li>
            <li style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Thursday</span> <span>9am - 8pm</span></li>
            <li style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Friday</span> <span>9am - 5pm</span></li>
            <li style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Saturday</span> <span>8am - 3:30pm</span></li>
            <li style="display: flex; justify-content: space-between;"><span>Sunday</span> <span style="opacity: 0.7;">Closed</span></li>
          </ul>
        </div>
        
        <div>
          <h4 style="margin-bottom: 16px;">Quick Links</h4>
          <ul style="display: flex; flex-direction: column; gap: 12px; list-style: none; padding: 0;">
            <li><a href="/book" class="btn btn-primary" style="padding: 10px 16px; font-size: 0.9rem;">Book Appointment</a></li>
            <li><a href="/contact" style="color: var(--c-sage); font-weight: bold;">Contact Us &rarr;</a></li>
            <li><a href="/services">All Services</a></li>
            <li><a href="/the-team">Meet the Team</a></li>
            <li><a href="/blog">Beauty Blog</a></li>
            <li><a href="/salon-careers">Careers</a></li>
            <li><a href="/donate-hair" style="color: var(--c-sage); font-weight: bold;">Donate Hair 💛</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Hair Symmetry. All rights reserved.</p>
      </div>
    </footer>
  `;
}

