// Using remote placeholder until real salon images are provided
const layoutBanner = "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop";

export function SalonCareersPage() {
  return `
    <div class="salon-careers-page">
      <!-- Hero Banner -->
      <section class="feature-banner" style="background: url('${layoutBanner}') center/cover; position: relative;">
        <div class="feature-banner-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5);"></div>
        <div class="feature-banner-content" style="position: relative; z-index: 2; padding: var(--sp-8) 0; color: white; max-width: 800px; margin: 0 auto; text-align: center;">
          <h1 style="color: white; font-size: 3.5rem; margin-bottom: 1rem;">Our Salon & Your Career</h1>
          <p style="color: white; font-size: 1.25rem; opacity: 0.9; margin-bottom: 2rem;">Take a look inside Hair Symmetry's premium layout and discover the benefits of joining our elite family of stylists.</p>
          <a href="#apply" class="btn" style="background: white; color: var(--c-charcoal); font-weight: bold; font-size: 1.1rem; padding: 1rem 2.5rem;">Explore Benefits & Apply ↓</a>
        </div>
      </section>

      <!-- The Salon Floor Plan & Layout -->
      <section class="section container">
        <div class="grid grid-2" style="align-items: center; gap: var(--sp-6);">
          <div>
            <span class="overline">The Experience</span>
            <h2 style="font-size: 2.5rem; margin-bottom: var(--sp-3);">Designed for Harmony</h2>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: var(--sp-3);">Our physical space was intentionally designed to reflect our namesake: true symmetry and balance. The open-concept luxury floor plan provides each stylist with ample, private workspace yielding an unparalleled client experience, while maintaining an airy environment that encourages spontaneous creative collaboration between chairs.</p>
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: var(--sp-3);">Clients enjoy a pristine, relaxing waiting lounge complemented by our signature aromatic blends. Meanwhile, our secluded washing sanctuary offers a tranquil, whisper-quiet spa experience during deep-conditioning treatments and scalp massages, ensuring your clients feel completely pampered.</p>
            
            <h3 style="margin-top: var(--sp-4); font-size: 1.5rem;">Your Premium Station</h3>
            <p style="opacity: 0.85; margin-bottom: var(--sp-2);">We believe a master artist needs a masterful toolkit. As a Hair Symmetry stylist, your space includes:</p>
            <ul style="list-style: none; padding: 0; margin-top: var(--sp-2);">
              <li style="margin-bottom: 0.8rem; display: flex; gap: 10px;">
                <span style="font-size: 1.2rem;">✨</span>
                <div>
                  <strong>Bespoke Custom Lighting:</strong> 
                  <span style="opacity: 0.9;">Studio-grade, color-balanced daylight bulbs specifically installed to guarantee 100% accurate color reading for complex balayage and corrections.</span>
                </div>
              </li>
              <li style="margin-bottom: 0.8rem; display: flex; gap: 10px;">
                <span style="font-size: 1.2rem;">✨</span>
                <div>
                  <strong>Ergonomic Luxury Seating:</strong> 
                  <span style="opacity: 0.9;">State-of-the-art styling chairs that provide cloud-like comfort for your client's 4-hour transformations, while exclusively safeguarding your posture and longevity as a stylist.</span>
                </div>
              </li>
              <li style="margin-bottom: 0.8rem; display: flex; gap: 10px;">
                <span style="font-size: 1.2rem;">✨</span>
                <div>
                  <strong>The Master Color Bar:</strong> 
                  <span style="opacity: 0.9;">Instant, unlimited access to elite color lines, glosses, and the industry’s highest-performing creative tools. You will never be restricted in your artistry.</span>
                </div>
              </li>
            </ul>
          </div>
          <div style="background: var(--c-sage-light); border-radius: var(--radius-lg); padding: var(--sp-4); aspect-ratio: 4/5; display: flex; align-items: center; justify-content: center; text-align: center; box-shadow: inset 0 0 20px rgba(0,0,0,0.02);">
            <div>
              <h3 style="color: var(--c-charcoal); margin-bottom: 1rem;">Interactive Floor Plan</h3>
              <p style="opacity: 0.7; font-size: 0.9rem; max-width: 250px; margin: 0 auto;">(Coming Soon - A detailed layout of our salon's premium spacing and private chemical/color processing rooms.)</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Careers Section -->
      <section class="section bg-sage-light">
        <div class="container">
          <div style="text-align: center; max-width: 850px; margin: 0 auto 4rem;">
            <span class="overline">Join The Family</span>
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">More Than Just a Chair. A True Salon Home.</h2>
            <p style="font-size: 1.15rem; color: var(--c-charcoal-light); line-height: 1.8;">We aren't just looking to fill a vacancy; we are looking for a new family member. Hair Symmetry operates on the core belief that when stylists support each other, the entire salon elevates. Our team is a tight-knit collective of highly experienced professionals who share formulations, offer second opinions on massive color corrections, and genuinely celebrate each other’s successes.</p>
          </div>

          <style>
            .career-blog-card {
                text-decoration: none; 
                color: inherit; 
                padding: var(--sp-4); 
                text-align: left; 
                height: 100%; 
                display: flex; 
                flex-direction: column; 
                transition: transform 0.3s, box-shadow 0.3s;
                background: white;
            }
            .career-blog-card:hover {
                transform: translateY(-5px);
                box-shadow: var(--shadow-md);
            }
            .career-blog-date {
                font-size: 0.8rem; 
                letter-spacing: 1px; 
                text-transform: uppercase; 
                color: var(--c-sage); 
                font-weight: 700; 
                margin-bottom: 0.75rem;
            }
            .career-blog-btn {
                margin-top: auto; 
                align-self: flex-end; 
                background: var(--c-sage); 
                color: white; 
                padding: 0.5rem 1rem; 
                border-radius: 50px; 
                font-weight: bold; 
                font-size: 0.85rem;
                display: inline-block;
            }
          </style>
          <div class="scroller-wrapper">
            <div class="scroller-track">
              <!-- Item 1 -->
              <a href="/blog/established-elite-clientele" class="scroller-item card career-blog-card">
                <span class="career-blog-date">March 15, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">🤝 Established Elite Clientele</h3>
                <p style="margin-bottom: 1.5rem;">We boast one of the highest retention rates in Wexford. You'll plug directly into an overflowing book of premium, trusting clientele eager for high-ticket color corrections, vivids, and extensions...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <!-- Item 2 -->
              <a href="/blog/salon-relentless-education" class="scroller-item card career-blog-card">
                <span class="career-blog-date">March 22, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">🎓 Relentless Education</h3>
                <p style="margin-bottom: 1.5rem;">The beauty industry moves overnight. We sponsor continuous elite education covering everything from the newest dimensional foilayage to cutting-edge social media marketing...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <!-- Item 3 -->
              <a href="/blog/true-salon-camaraderie" class="scroller-item card career-blog-card">
                <span class="career-blog-date">April 02, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">🌱 True Camaraderie</h3>
                <p style="margin-bottom: 1.5rem;">We strictly enforce a "zero toxicity, zero drama" team culture. Together we thrive on mutual respect, shared inspiration, and family-like bonds. We respect your personal time and boundaries...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <!-- Item 4 -->
              <a href="/blog/stylist-dedicated-landing-page" class="scroller-item card career-blog-card">
                <span class="career-blog-date">April 15, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">💻 Dedicated Landing Page</h3>
                <p style="margin-bottom: 1.5rem;">Every stylist receives their own premium biography page on our site allowing you to showcase your exact specialties directly to clients searching for a specific expert...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <!-- Item 5 -->
              <a href="/blog/publish-beauty-blogs" class="scroller-item card career-blog-card">
                <span class="career-blog-date">May 01, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">✍️ Publish Beauty Blogs</h3>
                <p style="margin-bottom: 1.5rem;">Establish yourself as an industry authority. We give you the platform to publish official salon blogs, driving organic traffic directly into your booking calendar...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <!-- Item 6 -->
              <a href="/blog/highlight-stylist-portfolios" class="scroller-item card career-blog-card">
                <span class="career-blog-date">May 10, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">📸 Highlight Portfolios</h3>
                <p style="margin-bottom: 1.5rem;">Access our built-in portfolio galleries to visually prove your highest-level transformations, closing new clients instantly before they even step into the salon...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <!-- Item 7 -->
              <a href="/blog/premium-salon-commission" class="scroller-item card career-blog-card">
                <span class="career-blog-date">May 20, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">💸 Premium Commission</h3>
                <p style="margin-bottom: 1.5rem;">Our commission tiers and retail bonuses are highly aggressive. We want you completely financially secure so you can focus entirely on creating unparalleled art behind the chair...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              
              <!-- Duplicate Set for Smooth Infinite Scroll -->
              <a href="/blog/established-elite-clientele" class="scroller-item card career-blog-card">
                <span class="career-blog-date">March 15, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">🤝 Established Elite Clientele</h3>
                <p style="margin-bottom: 1.5rem;">We boast one of the highest retention rates in Wexford. You'll plug directly into an overflowing book of premium, trusting clientele eager for high-ticket color corrections...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <a href="/blog/salon-relentless-education" class="scroller-item card career-blog-card">
                <span class="career-blog-date">March 22, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">🎓 Relentless Education</h3>
                <p style="margin-bottom: 1.5rem;">The beauty industry moves overnight. We sponsor continuous elite education covering everything from the newest dimensional foilayage to cutting-edge social media marketing...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <a href="/blog/true-salon-camaraderie" class="scroller-item card career-blog-card">
                <span class="career-blog-date">April 02, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">🌱 True Camaraderie</h3>
                <p style="margin-bottom: 1.5rem;">We strictly enforce a "zero toxicity, zero drama" team culture. Together we thrive on mutual respect, shared inspiration, and family-like bonds...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
              <a href="/blog/stylist-dedicated-landing-page" class="scroller-item card career-blog-card">
                <span class="career-blog-date">April 15, 2026</span>
                <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">💻 Dedicated Landing Page</h3>
                <p style="margin-bottom: 1.5rem;">Every stylist receives their own premium biography page on our site allowing you to showcase your exact specialties directly to clients searching for a specific expert...</p>
                <div class="career-blog-btn">Read More →</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form Section -->
      <section id="apply" class="section bg-charcoal" style="padding: 6rem 1rem;">
        <div class="container">
          <div style="max-width: 1000px; margin: 0 auto;">
            
            <!-- Context Copy -->
            <div style="color: white; text-align: center; margin-bottom: 3rem;">
              <span class="overline" style="color: var(--c-sage-light);">Apply Today</span>
              <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1.5rem;">Ready to Claim Your Chair?</h2>
              <p style="color: white; opacity: 0.9; margin: 0 auto 1.5rem; font-size: 1.05rem; line-height: 1.7; max-width: 700px;">Take the next step in your beauty career by joining an established, high-end salon family. Please fill out the application form with your details, experience, and portfolio.</p>
              
              <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 8px; display: inline-block;">
                <h4 style="color: white; margin-bottom: 0.5rem; margin-top:0;">Not a fan of forms?</h4>
                <p style="color: white; opacity: 0.8; font-size: 0.9rem; margin-bottom: 1rem;">You can safely bypass this system and email us directly with your resume and portfolio.</p>
                <a href="mailto:hairsymmetry@yahoo.com?subject=Stylist Application" style="display: inline-block; color: var(--c-sage-light); font-weight: bold; text-decoration: underline;">Email your application directly →</a>
              </div>
            </div>

            <!-- Application Form -->
            <div style="background: white; border-radius: var(--radius-lg); padding: var(--sp-6); color: var(--c-charcoal); box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
              <h3 style="margin-bottom: 2rem; font-size: 1.8rem; text-align: center; color: var(--c-sage);">Stylist Application Form</h3>
              <form id="stylist-application-form" onsubmit="event.preventDefault(); alert('Application submitted! (Demo only)');">
                
                <div class="grid grid-2" style="gap: 1rem; margin-bottom: 1rem;">
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">First Name *</label>
                    <input type="text" class="form-control" required placeholder="Jane" />
                  </div>
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Last Name *</label>
                    <input type="text" class="form-control" required placeholder="Doe" />
                  </div>
                </div>

                <div class="grid grid-2" style="gap: 1rem; margin-bottom: 1rem;">
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Email Address *</label>
                    <input type="email" class="form-control" required placeholder="jane@example.com" />
                  </div>
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Phone Number *</label>
                    <input type="tel" class="form-control" required placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div class="grid grid-2" style="gap: 1rem; margin-bottom: 1rem;">
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Years of Experience *</label>
                    <select class="form-control" required>
                      <option value="">Select Experience...</option>
                      <option value="0-2">0 - 2 Years (Junior)</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="6-10">6 - 10 Years</option>
                      <option value="10+">10+ Years (Master)</option>
                    </select>
                  </div>
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Primary Specialty</label>
                    <select class="form-control" style="width: 100%;">
                      <option value="">Select Primary Focus...</option>
                      <option value="color">Color Correction & Balayage</option>
                      <option value="cuts">Precision Cutting</option>
                      <option value="extensions">Extensions</option>
                      <option value="texture">Texture & Curl Specialist</option>
                      <option value="all-around">All-Around Stylist</option>
                    </select>
                  </div>
                </div>

                <div style="background: #fdfbf7; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px dashed var(--c-sage);">
                    <h4 style="margin: 0 0 1rem 0; color: var(--c-sage); font-size: 1.1rem;">Your Digital Portfolio</h4>
                    <p style="font-size: 0.9rem; color: #666; margin-bottom: 1.25rem;">Showcase your artistry! Social media links are entirely optional, but highly encouraged to give our owners a look at your skillset.</p>
                    
                    <div class="grid grid-2" style="gap: 1rem;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="display:flex; justify-content:space-between;"><span>Instagram Handle</span> <span style="font-size: 0.8rem; opacity: 0.6;">(Optional)</span></label>
                            <input type="text" class="form-control" placeholder="@yourhandle" style="width: 100%;" />
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label class="form-label" style="display:flex; justify-content:space-between;"><span>Facebook Portfolio Link</span> <span style="font-size: 0.8rem; opacity: 0.6;">(Optional)</span></label>
                            <input type="url" class="form-control" placeholder="https://facebook.com/yourpage" style="width: 100%;" />
                        </div>
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: 1.5rem;">
                   <label class="form-label">Upload Resume (PDF/DOC) *</label>
                   <input type="file" class="form-control" accept=".pdf,.doc,.docx" required style="padding: 10px; width: 100%; border: 1px dashed #ccc; background: white;" />
                </div>

                <div class="form-group" style="margin-bottom: 1.5rem; background: var(--c-sage-light); padding: 1.5rem; border-radius: 8px;">
                   <label class="form-label" style="display: flex; justify-content: space-between;">
                     <span style="font-weight: bold; font-size: 1.1rem; color: var(--c-charcoal);">Professional Headshot</span>
                     <span style="font-size: 0.8rem; opacity: 0.7;">(Optional)</span>
                   </label>
                   <input type="file" class="form-control" accept="image/*" style="padding: 8px; margin-bottom: 0.75rem; background: white;" />
                   <p style="font-size: 0.85rem; color: var(--c-charcoal-light); margin: 0; line-height: 1.5;"><em>Note: If hired, this photo may be used on our official website's Stylist Directory. Please upload a high-quality, professional image if you choose to provide one.</em></p>
                </div>

                <div class="form-group" style="margin-bottom: 1.5rem;">
                  <label class="form-label">Additional Information / Cover Letter</label>
                  <textarea class="form-control" rows="3" placeholder="Tell us why you'd be a great fit for the Hair Symmetry family..."></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Application</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
