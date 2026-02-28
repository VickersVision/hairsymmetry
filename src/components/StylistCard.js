export function StylistCard({ name, title, imageUrl, specialties, linkUrl }) {
  const specialtiesHtml = specialties.map(s => `<span class="badge">${s}</span>`).join('');
  return `
    <a href="${linkUrl}" class="card" style="text-decoration: none; color: inherit; display: block;">
      <div class="card-img square">
        <img src="${imageUrl}" alt="${name} - ${title}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 style="margin-bottom: 4px;">${name}</h3>
        <p class="text-brand" style="font-size: 0.9rem; font-weight: 500; margin-bottom: 12px;">${title}</p>
        <div class="tags-list">
          ${specialtiesHtml}
        </div>
        <span class="card-cta d-inline-block mt-4" style="color: var(--c-sage); font-weight: bold;">View Portfolio &rarr;</span>
      </div>
    </a>
  `;
}
