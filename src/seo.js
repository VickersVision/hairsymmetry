export function injectSEO({ title, description, schema }) {
    // Update Title
    document.title = title ? `${title} | Hair Symmetry` : 'Hair Symmetry | Body and Mind Symmetry';

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', description || 'Hair Symmetry in Wexford, PA. Bring out your natural beauty with our premium hair coloring, styling, and wellness services. Established 1982.');
    }

    // Inject Schema
    let existingSchema = document.querySelector('#seo-schema');
    if (existingSchema) {
        existingSchema.remove();
    }

    if (schema) {
        const script = document.createElement('script');
        script.id = 'seo-schema';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }
}
