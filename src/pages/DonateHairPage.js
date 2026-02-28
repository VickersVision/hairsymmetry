import { injectSEO } from '../seo.js';
import wigsImg from '../assets/team/wigs.jpg';

export function DonateHairPage() {
    injectSEO({
        title: 'Donate Your Hair | Wigs for Kids | Hair Symmetry Wexford PA',
        description: 'Two easy ways to donate your hair at Hair Symmetry in Wexford, PA. Drop off your pre-cut ponytail or book a donation cut — we handle the rest for Wigs for Kids.',
        schema: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Donate Your Hair — Wigs for Kids",
            "description": "Hair Symmetry accepts hair donations for Wigs for Kids two ways: drop-off or a booked donation cut appointment.",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Hair Symmetry",
                "telephone": "+17249354450",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2578 Brandt School Rd",
                    "addressLocality": "Wexford",
                    "addressRegion": "PA",
                    "postalCode": "15090"
                }
            }
        }
    });

    return `
    <div class="donate-page">

        <!-- Hero -->
        <section style="background: linear-gradient(135deg, #2d5a3d 0%, #4a8c5c 100%); color: white; padding: 6rem 1rem 5rem; text-align: center; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; background: url('${wigsImg}') center/cover; opacity: 0.13;"></div>
            <div class="container" style="max-width: 750px; margin: 0 auto; position: relative; z-index: 1;">
                <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 4px; opacity: 0.8; font-weight: bold; display: block; margin-bottom: 1rem;">Community & Giving Back</span>
                <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); color: white; margin-bottom: 1.5rem; line-height: 1.1;">Donate Your Hair.<br/>Change a Child's Life.</h1>
                <p style="font-size: 1.2rem; color: white; opacity: 0.9; max-width: 620px; margin: 0 auto 2.5rem; line-height: 1.7;">
                    Hair Symmetry is a proud <strong>Wigs for Kids</strong> donation partner. We offer <strong>two simple ways</strong> to donate — whether you're already cut and ready, or want us to handle everything from the first snip to the shipping.
                </p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="#choose-path" class="btn btn-primary" style="background: white; color: #2d5a3d; border-color: white; font-size: 1rem; padding: 0.9rem 2rem;">Choose Your Donation Path ↓</a>
                    <a href="https://www.wigsforkids.org" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="border-color: white; color: white; font-size: 1rem; padding: 0.9rem 2rem;">About Wigs for Kids ↗</a>
                </div>
            </div>
        </section>

        <!-- ===== TWO PATH CHOOSER ===== -->
        <section id="choose-path" style="padding: 5rem 1rem; background: #f8f8f6;">
            <div class="container" style="max-width: 1000px; margin: 0 auto;">
                <div class="text-center" style="margin-bottom: 3.5rem;">
                    <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--c-sage); font-weight: bold; display: block; margin-bottom: 0.75rem;">Two Easy Ways to Give</span>
                    <h2 style="font-size: clamp(1.75rem, 3vw, 2.5rem);">How Would You Like to Donate?</h2>
                    <p style="font-size: 1.05rem; color: #666; margin-top: 0.75rem;">Pick the path that works best for you — both make a huge difference.</p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: stretch;">

                    <!-- PATH A: Drop It Off -->
                    <div style="background: white; border-radius: 16px; padding: 2.5rem; box-shadow: 0 6px 30px rgba(0,0,0,0.07); display: flex; flex-direction: column; border-top: 5px solid #6aab7d; position: relative;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #6aab7d; font-weight: bold; margin-bottom: 0.5rem;">Option A</div>
                        <h3 style="font-size: 1.6rem; margin-bottom: 1rem; line-height: 1.2;">Drop Off Your Ponytail</h3>
                        <p style="font-size: 0.95rem; color: #555; line-height: 1.7; flex: 1; margin-bottom: 1.5rem;">
                            Already had your hair cut? <strong>No problem.</strong> Bring your pre-cut, rubber-banded, and packaged ponytail(s) to Hair Symmetry. We'll weigh, verify, and handle all the shipping directly to Wigs for Kids on your behalf — no post office run needed.
                        </p>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem;">
                            ${[
            'Hair must be cut, rubber-banded, and in a Ziploc bag',
            'Minimum 12 inches (14+ preferred)',
            'Clean and completely dry',
            'No perms, dyes, or highlights',
            'We handle the barcode form & shipping for you'
        ].map(t => `
                                <li style="display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.9rem; color: #444;">
                                    <span style="color: #6aab7d; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✓</span>
                                    <span>${t}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div style="background: #f0f8f2; border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 1.75rem;">
                            <strong style="font-size: 0.85rem; color: #2d5a3d; display: block; margin-bottom: 0.25rem;">📍 Drop-Off Location</strong>
                            <span style="font-size: 0.9rem; color: #444;">2578 Brandt School Rd, Wexford, PA 15090<br>Tue–Fri 9am–8pm · Sat 8am–3:30pm</span>
                        </div>
                        <a href="/contact" class="btn btn-outline" style="text-align: center; border-color: #6aab7d; color: #2d5a3d; font-size: 0.95rem; padding: 0.85rem 1.5rem; border-radius: 8px; text-decoration: none; display: block; transition: background 0.2s;" onmouseover="this.style.background='#f0f8f2'" onmouseout="this.style.background='transparent'">View Location & Hours →</a>
                    </div>

                    <!-- PATH B: Book a Cut -->
                    <div style="background: #2d5a3d; border-radius: 16px; padding: 2.5rem; box-shadow: 0 6px 30px rgba(45,90,61,0.25); display: flex; flex-direction: column; border-top: 5px solid #a8e6bf; position: relative;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">✂️</div>
                        <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #a8e6bf; font-weight: bold; margin-bottom: 0.5rem;">Option B — Most Popular</div>
                        <h3 style="font-size: 1.6rem; margin-bottom: 1rem; line-height: 1.2; color: white;">Book a Donation Cut</h3>
                        <p style="font-size: 0.95rem; color: rgba(255,255,255,0.85); line-height: 1.7; flex: 1; margin-bottom: 1.5rem;">
                            Want us to handle <em>everything?</em> Book a dedicated donation appointment. Our stylists will section your hair, cut your ponytail(s) the right way, rubber band and package everything correctly, and ship it directly to Wigs for Kids. <strong style="color: white;">You just show up — we do the rest.</strong>
                        </p>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem;">
                            ${[
            'Stylist sections, cuts & packages your hair',
            'We fill out the Wigs for Kids barcode form',
            'We ship directly to Wigs for Kids',
            'You also get a fresh new style',
            'No extra charge for the donation processing'
        ].map(t => `
                                <li style="display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.9rem; color: rgba(255,255,255,0.85);">
                                    <span style="color: #a8e6bf; font-weight: bold; flex-shrink: 0; margin-top: 1px;">✓</span>
                                    <span>${t}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div style="background: rgba(255,255,255,0.12); border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 1.75rem;">
                            <strong style="font-size: 0.85rem; color: #a8e6bf; display: block; margin-bottom: 0.25rem;">💡 Just mention it when booking</strong>
                            <span style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">Select "Haircut" and note in the comments that it's a Wigs for Kids donation — we'll take it from there.</span>
                        </div>
                        <a href="/book" class="btn btn-primary" style="text-align: center; background: white; color: #2d5a3d; border-color: white; font-size: 1rem; padding: 0.85rem 1.5rem; border-radius: 8px; text-decoration: none; display: block; font-weight: bold;">Book My Donation Cut →</a>
                    </div>
                </div>

                <!-- Phone option -->
                <div style="text-align: center; margin-top: 2rem;">
                    <p style="font-size: 0.95rem; color: #777;">Prefer to call? <a href="tel:+17249354450" style="color: var(--c-sage); font-weight: bold;">📞 (724) 935-4450</a> — we'll walk you through both options.</p>
                </div>
            </div>
        </section>

        <!-- About Wigs for Kids -->
        <section class="section container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;">
                <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 16px 50px rgba(0,0,0,0.12);">
                    <img src="${wigsImg}" alt="Wigs for Kids hair donation at Hair Symmetry" style="width: 100%; height: 480px; object-fit: cover; display: block;" />
                </div>
                <div>
                    <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--c-sage); font-weight: bold; display: block; margin-bottom: 1rem;">About Wigs for Kids</span>
                    <h2 style="font-size: clamp(1.75rem, 3vw, 2.5rem); margin-bottom: 1.5rem; line-height: 1.2;">More Than a Wig — It's Confidence Restored.</h2>
                    <p style="font-size: 1.05rem; color: #555; line-height: 1.8; margin-bottom: 1.25rem;">
                        <strong>Wigs for Kids</strong> is a nonprofit that helps children experiencing hair loss from <strong>chemotherapy, radiation therapy, alopecia, trichotillomania, burns, and other medical causes.</strong>
                    </p>
                    <p style="font-size: 1.05rem; color: #555; line-height: 1.8; margin-bottom: 1.25rem;">
                        Their hair replacement systems are <strong>handmade to custom fit</strong> the recipient, look and feel like a real growing head of hair, and <em>won't come off when a child is active.</em>
                    </p>
                    <div style="background: #f0f8f2; border-left: 4px solid var(--c-sage); padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 1.5rem;">
                        <p style="margin: 0; font-size: 0.95rem; color: #333; line-height: 1.6;">
                            💕 Hair replacements average <strong>$1,800 per child per year</strong>. Every ponytail and financial contribution brings a child closer to living life with a smile and confidence.
                        </p>
                    </div>
                    <a href="https://www.wigsforkids.org/donate" target="_blank" rel="noopener noreferrer" style="color: var(--c-sage); font-weight: bold; text-decoration: underline; font-size: 1rem;">Help Our Children — Donate Financially ↗</a>
                </div>
            </div>
        </section>

        <!-- Official Guidelines -->
        <section style="background: #f8f8f6; padding: 6rem 1rem;">
            <div class="container" style="max-width: 900px; margin: 0 auto;">
                <div class="text-center" style="margin-bottom: 4rem;">
                    <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--c-sage); font-weight: bold; display: block; margin-bottom: 0.75rem;">Official Guidelines</span>
                    <h2>Hair Donation Requirements</h2>
                    <p style="font-size: 1rem; color: #666; max-width: 560px; margin: 0.75rem auto 0; line-height: 1.7;">These requirements apply to <strong>both drop-off and cut-appointment</strong> donations. If booking with us, our stylists will ensure everything is done correctly.</p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 2rem;">

                    <!-- Step 1 -->
                    <div style="background: white; border-radius: 12px; padding: 2rem 2.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-left: 4px solid var(--c-sage);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                            <div style="width: 42px; height: 42px; background: var(--c-sage); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; flex-shrink: 0;">1</div>
                            <h3 style="margin: 0; font-size: 1.35rem;">Measure Your Hair</h3>
                        </div>
                        <div style="padding-left: 3.5rem;">
                            <div style="background: #fff8e1; border: 1px solid #f4b400; border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 1.25rem;">
                                <strong style="color: #856404; display: block; margin-bottom: 0.25rem;">⚠️ Minimum 12 inches — 14+ inches is strongly preferred</strong>
                                <span style="font-size: 0.9rem; color: #856404;">Grow ponytails 14 inches or more to have the most impact on a child in need.</span>
                            </div>
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
                                ${[
            'Pull curly hair <strong>straight</strong> for a more accurate measurement.',
            'Start the measuring tape at the <strong>start of the ponytail</strong>.',
            'Stop measuring where the ponytail starts to <strong>thin due to layers or split ends</strong>.'
        ].map(t => `<li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; color: #444;"><span style="color: var(--c-sage); font-weight: bold; flex-shrink: 0; margin-top: 2px;">✓</span><span>${t}</span></li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div style="background: white; border-radius: 12px; padding: 2rem 2.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-left: 4px solid var(--c-sage);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                            <div style="width: 42px; height: 42px; background: var(--c-sage); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; flex-shrink: 0;">2</div>
                            <h3 style="margin: 0; font-size: 1.35rem;">Section into 4–6 Ponytails <span style="font-size: 0.8rem; background: var(--c-sage); color: white; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: normal; margin-left: 0.5rem;">We do this for you with Option B</span></h3>
                        </div>
                        <div style="padding-left: 3.5rem;">
                            <p style="font-size: 0.95rem; color: #555; margin-bottom: 1rem; line-height: 1.6;">One ponytail loses up to 4 inches. Sectioning maximizes your donation:</p>
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
                                ${[
            'Make a <strong>center part</strong> from forehead to nape.',
            'Part the hair <strong>over the top of each ear</strong> — this creates four sections.',
            'Tie the hair <strong>in front of each ear</strong> into a ponytail, then <strong>behind each ear</strong> into a ponytail.',
            'Aim for <strong>6 sections</strong> for an even more generous donation.'
        ].map(t => `<li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; color: #444;"><span style="color: var(--c-sage); font-weight: bold; flex-shrink: 0; margin-top: 2px;">✓</span><span>${t}</span></li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div style="background: white; border-radius: 12px; padding: 2rem 2.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-left: 4px solid var(--c-sage);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                            <div style="width: 42px; height: 42px; background: var(--c-sage); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; flex-shrink: 0;">3</div>
                            <h3 style="margin: 0; font-size: 1.35rem;">Secure, Cut & Dry <span style="font-size: 0.8rem; background: var(--c-sage); color: white; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: normal; margin-left: 0.5rem;">We do this for you with Option B</span></h3>
                        </div>
                        <div style="padding-left: 3.5rem;">
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
                                ${[
            'Secure hair with <strong>several rubber bands 2–3 inches apart</strong>. Loosely wrapped hair becomes unusable.',
            '<strong>Cut hair above the top rubber band</strong> and seal the cut end.',
            'Hair must be <strong>clean and completely dry</strong> — wet hair molds in shipping and will be discarded.',
            'Seal all ponytails in a <strong>Ziploc bag</strong>.'
        ].map(t => `<li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; color: #444;"><span style="color: var(--c-sage); font-weight: bold; flex-shrink: 0; margin-top: 2px;">✓</span><span>${t}</span></li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div style="background: white; border-radius: 12px; padding: 2rem 2.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.05); border-left: 4px solid var(--c-sage);">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                            <div style="width: 42px; height: 42px; background: var(--c-sage); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.1rem; flex-shrink: 0;">4</div>
                            <h3 style="margin: 0; font-size: 1.35rem;">Register & Ship <span style="font-size: 0.8rem; background: var(--c-sage); color: white; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: normal; margin-left: 0.5rem;">We handle this for you with both options</span></h3>
                        </div>
                        <div style="padding-left: 3.5rem;">
                            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem;">
                                ${[
            'Hair Symmetry completes the <strong>online Wigs for Kids Donation Form</strong> and obtains a barcode on your behalf.',
            'Your sealed Ziploc and barcode are packaged and <strong>shipped directly to Wigs for Kids</strong>.',
            'With a barcode, Wigs for Kids sends a <strong>thank you within 60 days</strong>. Without one, allow 4–6 months.'
        ].map(t => `<li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; color: #444;"><span style="color: var(--c-sage); font-weight: bold; flex-shrink: 0; margin-top: 2px;">✓</span><span>${t}</span></li>`).join('')}
                            </ul>
                            <div style="background: #f0f8f2; border: 1px solid #c8e6c9; border-radius: 10px; padding: 1.25rem 1.5rem;">
                                <strong style="display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: var(--c-sage); margin-bottom: 0.6rem;">📦 Wigs for Kids — Donations Address</strong>
                                <address style="font-style: normal; font-size: 1rem; color: #333; line-height: 1.7;">
                                    <strong>Wigs For Kids — Hair Donations</strong><br>
                                    24231 Center Ridge Road<br>
                                    Westlake, Ohio 44145
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Accepted / Not Accepted -->
        <section class="section container">
            <div style="max-width: 860px; margin: 0 auto;">
                <div class="text-center" style="margin-bottom: 3rem;">
                    <h2>What Hair Is Accepted</h2>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
                    <div>
                        <h3 style="font-size: 1.4rem; margin-bottom: 1.25rem; color: #2d9e5f;">✅ Accepted</h3>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                            ${[
            '12+ inches minimum (14+ strongly preferred)',
            'Clean and completely dry',
            'Gray hair is accepted',
            'Temporary color completely washed out before cutting'
        ].map(r => `<li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; color: #444;"><span style="color: #2d9e5f; font-weight: bold; flex-shrink: 0;">✓</span><span>${r}</span></li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 style="font-size: 1.4rem; margin-bottom: 1.25rem; color: #c0392b;">❌ Not Accepted</h3>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                            ${[
            'Under 12 inches',
            'Permed or permanently waved hair',
            'Color-treated or highlighted hair',
            'Bleached hair',
            'Wet or damp hair (molds in shipping)',
            'Loosely bundled — will come apart in transit'
        ].map(r => `<li style="display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; color: #444;"><span style="color: #c0392b; font-weight: bold; flex-shrink: 0;">✗</span><span>${r}</span></li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA: both options again -->
        <section style="background: var(--c-sage); color: white; padding: 5rem 1rem; text-align: center;">
            <div class="container" style="max-width: 700px; margin: 0 auto;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">💛</div>
                <h2 style="color: white; font-size: 2.25rem; margin-bottom: 1rem;">Ready to Make a Difference?</h2>
                <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 3rem; line-height: 1.7;">Two paths, one powerful outcome. Choose how you'd like to donate.</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 580px; margin: 0 auto 2rem;">
                    <div style="background: rgba(255,255,255,0.12); border-radius: 12px; padding: 1.75rem 1.5rem; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.75rem;">📦</div>
                        <strong style="display: block; color: white; margin-bottom: 0.5rem; font-size: 1.05rem;">Drop It Off</strong>
                        <p style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 1.25rem; line-height: 1.5;">Bring your pre-cut ponytail in — we handle barcode, form & shipping.</p>
                        <a href="/contact" style="background: transparent; border: 2px solid white; color: white; padding: 0.6rem 1.25rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: bold; display: inline-block;">Get Directions →</a>
                    </div>
                    <div style="background: rgba(255,255,255,0.12); border-radius: 12px; padding: 1.75rem 1.5rem; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 0.75rem;">✂️</div>
                        <strong style="display: block; color: white; margin-bottom: 0.5rem; font-size: 1.05rem;">Book a Cut</strong>
                        <p style="font-size: 0.85rem; opacity: 0.8; margin-bottom: 1.25rem; line-height: 1.5;">We section, cut, package, form, and ship everything for you.</p>
                        <a href="/book" style="background: white; border: 2px solid white; color: #2d5a3d; padding: 0.6rem 1.25rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: bold; display: inline-block;">Book Now →</a>
                    </div>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.75;">Questions? Call us at <a href="tel:+17249354450" style="color: white; font-weight: bold; text-decoration: underline;">(724) 935-4450</a></p>
            </div>
        </section>

    </div>
    `;
}
