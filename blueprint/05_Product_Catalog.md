# 5. Product Catalog + Detail Pages

Transforming the static brand logos into a revenue-generating eCommerce component.

## Category Landing Pages (PLP - Product Listing Page)
**Categories**: Hair Care, Styling, Color Preservation, Spa & Body (Nails/Skin).

### Structure:
1. **Hero**: Category name (H1) and a 1-sentence description. (e.g., \"Professional styling tools and eco-safe products to hold your look.\")
2. **Filter Bar**: Filter by Brand (Olaplex, etc.), Hair Type (Color-treated, Fine, Curly), and Benefit (Volume, Repair, Shine).
3. **Product Grid**:
   - Clean, white/light-grey background cards.
   - High-res product isolate image.
   - Brand name in small uppercase.
   - Product Name (bold).
   - Price.
   - **Hover State**: Shows a secondary lifestyle image and a \"Quick Add to Cart\" overlay.

---

## Product Detail Pages (PDP)

### 1. Above the Fold (The Buy Box)
- **Left Column: Image Gallery**
  - Main high-res image.
  - Secondary images showing texture, packaging back, and lifestyle usage.
- **Right Column: Product Info & Commerce**
  - **Brand Link**: e.g., *Olaplex*
  - **H1**: Product Name (e.g., No. 4 Bond Maintenance Shampoo)
  - **SKU**: Displayed subtly for retail tracking.
  - **Price & Variants**: Size dropdown (e.g., 8.5 oz | liter). Price updates dynamically.
  - **Star Rating**: Stars + link to jump down to reviews.
  - **Short Description**: 2-3 sentences max on the primary benefit.
  - **CTA**: Add to Cart (Prominent, solid color)
  - **Trust Badges**: Cruelty-Free, Eco-Friendly, Salon Standard.

### 2. Deep Dive (Tabs or Scroll)
- **Benefits / Why it works**: Bullet points of key outcomes.
- **How to Use**: Step-by-step instructions. (Crucial for salon products).
- **Ingredients**: Full CI list or key active ingredients (clinical notes if applicable).

### 3. Cross-Sell
- **Headline**: Completes the Routine
- **Content**: 3 recommended products (e.g., if Shampoo, recommend the Conditioner and Leave-in Treatment).

### 4. Reviews Module
- Real client reviews to build trust. Option to filter by star rating.

### SEO Requirements for PDP
- **Title Tag Syntax**: `[Brand] [Product Name] - [Category] | Hair Symmetry`
- **Meta Description**: Sell the benefit and include \"Buy online at Hair Symmetry Wexford.\"
- **Product Schema**: JSON-LD with `name`, `image`, `description`, `brand`, `offers` (price/currency/availability), and `aggregateRating`.
