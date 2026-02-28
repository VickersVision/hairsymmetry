export function AboutPage() {
    return `
        <div class="page-transition">
            <header class="page-hero bg-sage-light text-center py-6">
                <div class="container">
                    <span class="overline">Est. 1982</span>
                    <h1>Our Story</h1>
                    <p style="font-size: 1.15rem; color: var(--c-charcoal); font-style: italic; max-width: 600px; margin: 0 auto 1.5rem; text-align: center;">
                        Body and Mind Symmetry. We aim to elevate our customers inside and out by bringing out a sense of harmony, beautiful proportion, and balance.
                    </p>
                </div>
            </header>

            <section class="section container">
                <div class="grid grid-2" style="align-items: center; gap: var(--sp-6);">
                    <div>
                        <img src="/images/home/hero.jpg" alt="Salon interior" style="border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);" />
                    </div>
                    <div>
                        <h2 class="mb-4">Welcome to Hair Symmetry</h2>
                        <p class="text-large mb-4">
                            Located in the heart of Wexford, PA, Hair Symmetry has been a cornerstone of beauty and wellness since 1982. We believe that true beauty stems from a harmonious balance between body and mind. 
                        </p>
                        <p class="mb-4">
                            Our team of highly trained professionals goes above and beyond to provide a relaxing, luxurious atmosphere while delivering cutting-edge styles, vibrant colors, and eco-conscious treatments.
                            Whether you are visiting us for a routine trim or a complete transformation, we ensure every detail is tailored to your unique lifestyle.
                        </p>
                        <p>
                            We specialize in environmentally friendly, bond-building products to maintain the integrity of your hair, ensuring you leave our salon looking and feeling your absolute best.
                        </p>
                    </div>
                </div>
            </section>

            <section class="section bg-sage-light">
                <div class="container text-center">
                    <h2 class="mb-4">Why Choose Us?</h2>
                    <div class="grid grid-3" style="gap: var(--sp-4);">
                        <div class="card p-4 bg-white" style="border-radius: 8px;">
                            <h3 class="mb-2">Expert Stylists</h3>
                            <p>Our master colorists and stylists continuously refine their craft with industry-leading training.</p>
                        </div>
                        <div class="card p-4 bg-white" style="border-radius: 8px;">
                            <h3 class="mb-2">Eco-Conscious</h3>
                            <p>We actively choose sustainable, safe formulations to protect both your hair and the environment.</p>
                        </div>
                        <div class="card p-4 bg-white" style="border-radius: 8px;">
                            <h3 class="mb-2">Relaxing Ambience</h3>
                            <p>Experience a salon environment designed for your comfort, tranquility, and ultimate relaxation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Meet the team section -->
            <section class="section container text-center">
                <h2 class="mb-2">Meet the Artists</h2>
                <p style="color: #666; max-width: 500px; margin: 0 auto 2rem; font-size: 1.05rem;">Our team of stylists, colorists, and beauty experts are here to make your vision a reality.</p>
                <a href="/the-team" class="btn btn-outline" style="border-radius: 50px; padding: 0.875rem 2.5rem; margin-bottom: 1rem;">Meet Our Team →</a>
            </section>

            <!-- Booking CTA Banner -->
            <section style="background: var(--c-charcoal); padding: 5rem 2rem; text-align: center;">
                <div class="container" style="max-width: 700px;">
                    <h2 style="color: white; margin-bottom: 1rem;">Ready for Your Next Look?</h2>
                    <p style="color: rgba(255,255,255,0.75); font-size: 1.1rem; margin-bottom: 2.5rem; max-width: 500px; margin-left: auto; margin-right: auto;">Whether it's a fresh cut, a color refresh, or a full transformation — our team is ready. Book online or call us directly.</p>
                    <div style="display: flex; gap: 1.25rem; justify-content: center; flex-wrap: wrap;">
                        <a href="/book" style="background: var(--c-sage); color: white; padding: 1rem 2.5rem; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 1rem;">📅 Book Appointment</a>
                        <a href="tel:+17249354450" style="background: transparent; color: white; padding: 1rem 2.5rem; border-radius: 50px; font-weight: 700; text-decoration: none; border: 2px solid rgba(255,255,255,0.4); font-size: 1rem;">📞 (724) 935-4450</a>
                    </div>
                </div>
            </section>
        </div>
    `;
}
