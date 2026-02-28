# 2. Homepage Redesign Blueprint

## UX Flow & Scroll Path
1. **Hero Section**: Immediate emotional connection, strong benefit headline, and dual CTAs.
2. **Social Proof Bar**: Instant credibility (Google rating, \"Established 1982\").
3. **Services Preview**: Modular cards guiding users to specific categories.
4. **The Symmetry Experience (Video/Image Parallax)**: Leaning into the \"body and mind symmetry\" ethos.
5. **Meet the Artists (Stylists)**: Building personal connection.
6. **Featured Retail**: Shoppable product ribbon (Olaplex, Eco-friendly).
7. **Footer / Location**: Sticky booking bar + detailed footer.

---

## Content & Copy Matrix

### 1. Global Navigation (Sticky Header)
- **Left**: Hair Symmetry Logo (Minimalist, modern typographic)
- **Center**: Services | The Team | Products | Our Story
- **Right Button 1 (Secondary)**: Shop Retail
- **Right Button 2 (Primary - Solid Fill)**: Book Now

### 2. Hero Section
- **Visual**: Looping ambient video (4-5 seconds) of a stylist doing a blowout or coloring, interspersed with a client smiling looking in the mirror. High aesthetic, warm lighting.
- **Headline (H1)**: Find Your Perfect Balance.
- **Subheadline (H2)**: Wexford’s premier destination for effortless hair, skin, and beauty since 1982. We bring out your natural beauty through artistry and environmentally conscious care.
- **Primary CTA**: Book Your Experience
- **Secondary CTA**: Meet Our Stylists

### 3. Social Proof Bar (Immediately below fold)
- **Visual**: Minimalist inline bar.
- **Icons/Text**:
  - `[Star Icon x 5]` 4.9/5 Average Rating
  - `[Badge Icon]` Serving Wexford Since 1982
  - `[Leaf Icon]` Certified Eco-Conscious Salon

### 4. Services Preview Blocks
- **Section Headline (H2)**: Tailored Services for Mind & Body
- **Container Layout**: CSS Grid (3 columns desktop, 1 column mobile) with hover-zoom image cards.
- **Cards**:
  1. **Haircut & Style** (Image: Precision cut) -> *CTA: View Styling*
  2. **Vibrant Coloring** (Image: Balayage/Foil work) -> *CTA: Explore Color*
  3. **Wig Consultation** (Image: Natural-looking wig fitting) -> *CTA: Book Consultation*
  4. **Nails & Spa** (Image: Manicure detail) -> *CTA: View Spa Services*
  5. **Lashes & Brows** (Image: Close-up brow lamination) -> *CTA: Enhance Beauty*
  6. **Men\'s Grooming** (Image: Clean fade/beard trim) -> *CTA: Men\'s Services*

### 5. Featured Stylist Section
- **Section Headline (H2)**: Master Artists at Your Service
- **Layout**: Horizontal scroll carousel.
- **Card Content**:
  - Professional, lifestyle headshot
  - Stylist Name & Title (e.g., \"Sarah – Master Colorist\")
  - Specialty Tags: `[Balayage]` `[Extensions]`
  - **CTA**: View Portfolio & Book

### 6. Retail & Products (Olaplex Feature)
- **Section Headline (H2)**: Salon Quality, Preserved at Home.
- **Subhead**: We partner with Olaplex and eco-safe brands to ensure your hair’s health long after you leave the chair.
- **Visual**: High-end product photography layout.
- **CTA**: Shop Our Favorites

### 7. Footer & Contact
- **Layout**: 4-Column Grid
  - **Col 1**: Logo + \"Empowering your most beautiful self.\"
  - **Col 2**: Navigation Links
  - **Col 3**: Hours of Operation (Clean table layout)
  - **Col 4**: 2578 Brandt School Rd, Wexford, PA 15090 | Map Embed | Social Links
- **Sticky Bottom Bar (Mobile Only)**: `[ Book Appointment ]` fixed to the bottom edge of the viewport.
