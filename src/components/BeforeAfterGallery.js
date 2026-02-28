export function BeforeAfterGallery() {
  // Re-purposing this component to show a "Signature Work" final results gallery
  // as requested, removing the generic Unsplash before/afters in favor of relevant local portfolio work.
  const images = [
    {
      src: '/images/blog/balayage.jpg',
      title: 'Dimensional Balayage',
      desc: 'Seamless, hand-painted highlights for a sun-kissed finish.'
    },
    {
      src: '/images/portfolio/keratin-extensions-result.jpg',
      title: 'Volume & Length',
      desc: 'Custom-blended Babe Extensions for transformative volume.'
    },
    {
      src: '/images/blog/blonde-maintenance.jpg',
      title: 'Platinum & Tone',
      desc: 'Cool, icy blondes lifted safely while maintaining hair integrity.'
    },
    {
      src: '/images/blog/gloss.jpg',
      title: 'Color Gloss & Glaze',
      desc: 'Revitalizing shine and richness between full color appointments.'
    }
  ];

  return `
    <div class="signature-gallery" style="margin: 4rem 0;">
      <div class="text-center" style="margin-bottom: 3rem;">
        <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--c-sage); font-weight: bold; display: block; margin-bottom: 0.5rem;">Our Masterpieces</span>
        <h2 style="margin-bottom: 1rem;">Signature Work</h2>
        <p style="color: #666; max-width: 600px; margin: 0 auto;">Browse a selection of our recent client transformations, showcasing our expertise in color, extensions, and styling.</p>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 2rem;">
        ${images.map((img) => `
          <div class="portfolio-card" style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); background: white; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width: 100%; height: 320px; background-image: url('${img.src}'); background-size: cover; background-position: center;"></div>
            <div style="padding: 1.5rem;">
              <h3 style="font-size: 1.15rem; margin-bottom: 0.4rem; color: var(--c-charcoal);">${img.title}</h3>
              <p style="font-size: 0.9rem; color: #666; margin: 0; line-height: 1.5;">${img.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

