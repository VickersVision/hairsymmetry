# 10. Deliverables & Implementation Checklist

## Full Target Sitemap
```text
/ (Homepage)
/about-our-story
/the-team (Directory)
    /the-team/[stylist-name] (Individual Profiles)
/services (Directory)
    /services/haircut-styling
    /services/color-balayage
    /services/wigs-consultation
    /services/nails-spa
    /services/lashes-brows
    /services/waxing
    /services/mens-grooming
/shop (Retail Directory)
    /shop/olaplex-collection
    /shop/[product-handle]
/contact
/policies-faq
```

## Implementation Checklist for Developers/Designers

### Phase 1: Foundation & Setup
- [ ] Determine technical stack (e.g., Webflow, Shopify + Next.js, or headless WordPress) based on retail integration needs.
- [ ] Setup the global CSS variables based on the Visual Style Guide (`09_Visual_Style_Guide.md`).
- [ ] Configure global typography (Playfair Display / Inter).
- [ ] Build global Navbar (Sticky, with Primary CTA).
- [ ] Build global Footer (4 columns, NAP data, Map embed).

### Phase 2: Core Templates Assembly
- [ ] Build the Modular Service Page Template (`03_Services_Pages.md`).
- [ ] Build the Stylist Landing Page Template (`04_Stylist_Landing_Pages.md`).
- [ ] Build the Product Detail Page (PDP) Template (`05_Product_Catalog.md`).

### Phase 3: Content Population
- [ ] Source all high-res photography (Stylist headshots, interior salon shots, product hero images).
- [ ] Populate Homepage with copy (`02_Homepage_Redesign.md`).
- [ ] Populate 7 distinct Service interior pages using the base template.
- [ ] Create 1 landing page per stylist using their bio, reviews, and portfolio images.
- [ ] Upload retail products (Olaplex, etc.) into the eCommerce CMS.

### Phase 4: Integrations & UX
- [ ] Verify functionality of \"Book Appointment\" buttons routing to the `v7410` portal (`06_Calls_To_Action.md`).
- [ ] Integrate live Instagram feeds to stylist portfolio sections.
- [ ] Integrate Google Reviews widget for automatic 5-star updating.
- [ ] Test Mobile \"Sticky Bottom Bar\" functionality for booking.

### Phase 5: SEO & Validation
- [ ] Write and apply all Title Tags and Meta Descriptions (`07_SEO_Strategy.md`).
- [ ] Validate H1-H4 semantic hierarchy on every page.
- [ ] Generate and inject `LocalBusiness`, `Service`, and `FAQ` Schema.org JSON-LD scripts.
- [ ] Run Lighthouse performance audit (aim for 90+ across all metrics).
- [ ] Final client walkthrough and QA.
