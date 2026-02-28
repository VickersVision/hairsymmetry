export function ServicePreviewCard({ title, imageUrl, linkUrl, ctaText, desc }) {
  return `
    <a href="${linkUrl}" class="card">
      <div class="card-img">
        <img src="${imageUrl}" alt="${title}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3>${title}</h3>
        <p style="font-size: 0.95rem; line-height: 1.5; flex-grow: 1;">${desc}</p>
        <span class="card-cta">${ctaText}</span>
      </div>
    </a>
  `;
}
