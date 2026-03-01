export function Header() {
  return `
    <!-- Announcement Bar: Wigs for Kids -->
    <div style="background: #2d5a3d; color: white; text-align: center; padding: 0.55rem 1rem; font-size: 0.85rem; letter-spacing: 0.5px;">
      💛 Hair Symmetry proudly supports <strong>Wigs for Kids</strong> — 
      <a href="/donate-hair" style="color: #a8e6bf; text-decoration: underline; font-weight: bold; margin-left: 0.25rem;">Donate Your Hair &amp; Help a Child ↗</a>
    </div>
    <header class="header">
      <div class="container header-wrapper">
        <a href="/" class="logo">
          <img src="/logo.png" alt="Hair Symmetry Logo" style="height: 60px; width: auto;" />
        </a>
            <li><a href="/services">Services</a></li>
            <li><a href="/the-team">The Team</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/donate-hair" style="color: var(--c-sage); font-weight: bold;">Donate Hair 💛</a></li>
          </ul>
        </nav>
        <div class="header-cta">
          <a href="/book" class="btn btn-primary">Book</a>
        </div>
      </div>
    </header>
  `;
}

