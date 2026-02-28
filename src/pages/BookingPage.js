import { TEAM, SERVICES } from '../data/db.js';
import { injectSEO } from '../seo.js';
import { ServicePreviewCard } from '../components/ServicePreviewCard.js';

export function BookingPage() {
    // SEO setup for Booking Page
    injectSEO({
        title: 'Book an Appointment | Hair Symmetry',
        description: 'Schedule your next hair, skin, or nail service at Hair Symmetry in Wexford, PA.',
        schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Book an Appointment",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Hair Symmetry",
                "telephone": "+1 724-935-4450"
            }
        }
    });

    // Pick a random stylist and one of their specialties for the left-hand inspiration side
    const randomStylist = TEAM[Math.floor(Math.random() * TEAM.length)];
    const specialties = randomStylist.specialties.split(', ');
    const randomSpecialty = specialties[Math.floor(Math.random() * specialties.length)];

    return `
    <div class="booking-page bg-sage-light" style="min-height: 100vh; padding-top: 4rem; padding-bottom: 6rem;">
        <div class="container">
            <div class="text-center" style="margin-bottom: 3rem;">
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">Reserve Your Time</h1>
                <p style="font-size: 1.2rem; color: var(--c-charcoal); max-width: 600px; margin: 0 auto;">
                    We can't wait to see you. Fill out the consultation request below, or call us directly at <a href="tel:+17249354450" style="color: var(--c-sage); font-weight: bold; text-decoration: none;">(724) 935-4450</a>.
                </p>
            </div>

            <!-- Side-by-Side Layout -->
            <div class="grid grid-2 gap-8 align-start" style="margin-bottom: 6rem;">
                
                <!-- Left Side: Inspiration / Random Stylist Highlight -->
                <div class="inspiration-panel" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <!-- Full-frame image: object-fit:contain ensures no cropping -->
                    <div style="background: var(--c-sage-light); display: flex; align-items: center; justify-content: center; overflow: hidden; height: 360px;">
                        <img 
                            src="${randomStylist.img}" 
                            alt="${randomStylist.name}" 
                            style="width: 100%; height: 100%; object-fit: contain; object-position: top; display: block;"
                        />
                    </div>
                    <div style="padding: 2.5rem;">
                        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: var(--c-sage); font-weight: bold; display: block; margin-bottom: 1rem;">Featured Inspiration</span>
                        <h2 style="font-size: 2rem; margin-bottom: 1rem; line-height: 1.2;">Consider a fresh ${randomSpecialty.toLowerCase()} with ${randomStylist.name}.</h2>
                        <p style="font-size: 1.1rem; color: #666; margin-bottom: 2rem; line-height: 1.6;">
                            Our incredible ${randomStylist.role.toLowerCase()} ${randomStylist.name} is currently accepting consultation requests for ${randomSpecialty.toLowerCase()}. ${randomStylist.bio.split('.')[0]}.
                        </p>
                        <div style="border-top: 1px solid #eee; padding-top: 1.5rem;">
                            <strong style="display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 0.75rem;">Specialties</strong>
                            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                                ${specialties.slice(0, 5).map(s => `
                                    <span style="background: var(--c-sage-light); color: var(--c-sage); font-size: 0.8rem; font-weight: 600; padding: 0.3rem 0.75rem; border-radius: 20px; white-space: nowrap;">${s.trim()}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side: Booking Form -->
                <div class="booking-form-panel" style="background: white; padding: 3rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                    <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">Consultation Request</h3>
                    <p style="color: #666; margin-bottom: 2rem;">Please provide your details and our front desk will reach out immediately to finalize your appointment block.</p>
                    
                    <form id="main-booking-form" class="grid gap-4">
                        <div class="grid grid-2 gap-4">
                            <div class="form-group mb-0">
                                <label for="firstName" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">First Name *</label>
                                <input type="text" id="firstName" name="firstName" class="form-control" required placeholder="Jane" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                            </div>
                            <div class="form-group mb-0">
                                <label for="lastName" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" class="form-control" required placeholder="Doe" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                            </div>
                        </div>

                        <div class="grid grid-2 gap-4 mt-2">
                            <div class="form-group mb-0">
                                <label for="email" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Email Address *</label>
                                <input type="email" id="email" name="email" class="form-control" required placeholder="jane@example.com" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                            </div>
                            <div class="form-group mb-0">
                                <label for="phone" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" class="form-control" required placeholder="(555) 123-4567" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                            </div>
                        </div>

                        <div class="grid grid-2 gap-4 mt-2">
                            <div class="form-group mb-0">
                                <label for="prefDate" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Preferred Date</label>
                                <input type="date" id="prefDate" name="prefDate" class="form-control" min="${new Date().toISOString().split('T')[0]}" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                                <span style="font-size: 0.78rem; color: #999; margin-top: 4px; display: block;">Leave blank if your date is flexible.</span>
                            </div>
                            <div class="form-group mb-0">
                                <label for="prefTime" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Preferred Time</label>
                                <select id="prefTime" name="prefTime" class="form-control" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                                    <option value="">Any Time</option>
                                    <option value="morning">Morning (9am - 12pm)</option>
                                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                                    <option value="evening">Evening (4pm - 8pm)</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group mb-0 mt-2">
                            <label for="stylist" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Requested Stylist</label>
                            <select id="stylist" name="stylist" class="form-control" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px;">
                                <option value="first-available">First Available (Any Stylist)</option>
                                ${TEAM.map(s => `<option value="${s.id}">${s.name} - ${s.role}</option>`).join('')}
                            </select>
                        </div>

                        <div class="form-group mb-0 mt-2">
                            <label for="goals" class="form-label" style="font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; display: block;">Hair Goals / Services Requested *</label>
                            <textarea id="goals" name="goals" class="form-control" required placeholder="Tell us what you're looking to achieve... e.g. Partial Balayage and a Trim" style="background: #f9f9f9; border: 1px solid #e0e0e0; padding: 0.8rem; width: 100%; border-radius: 6px; min-height: 120px;"></textarea>
                        </div>

                        <div id="booking-msg" style="display: none; padding: 15px; border-radius: 6px; margin-top: 15px; text-align: center; font-weight: bold;"></div>

                        <button type="submit" id="main-submit-btn" class="btn btn-primary mt-4" style="width: 100%; padding: 1.2rem; font-size: 1.1rem; letter-spacing: 1px; border-radius: 6px;">
                            REQUEST APPOINTMENT
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Section: Service Expansion Grid -->
            <div class="services-elaboration" style="border-top: 2px solid rgba(0,0,0,0.05); padding-top: 6rem;">
                <div class="text-center" style="margin-bottom: 3rem;">
                    <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; color: var(--c-sage); font-weight: bold;">Explore Your Options</span>
                    <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">What We Can Achieve Together</h2>
                    <p style="font-size: 1.1rem; color: #666; max-width: 600px; margin: 0 auto;">Not sure what to book? Discover our core service categories below and click through to see pricing, timing, and expert recommendations.</p>
                </div>
                
                <div class="grid grid-3 gap-6">
                    ${SERVICES.slice(0, 6).map(s => `
                        <a href="/services/${s.id}" style="display: block; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; text-decoration: none; color: inherit; cursor: pointer;" class="hover-lift service-card-link" onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 12px 30px rgba(0,0,0,0.12)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 15px rgba(0,0,0,0.05)'">
                            <div style="height: 220px; background-image: url('${s.img}'); background-size: cover; background-position: center; position: relative;">
                                <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%);"></div>
                            </div>
                            <div style="padding: 1.5rem;">
                                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${s.name}</h3>
                                <p style="font-size: 0.875rem; color: #666; line-height: 1.5; min-height: 52px; margin-bottom: 1rem;">${s.subtitle}</p>
                                <div style="display: flex; align-items: center; gap: 0.4rem; color: var(--c-sage); font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                                    View Service <span style="font-size: 1rem;">→</span>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>

        </div>
    </div>
    `;
}

// ─── Real form submission → delivers to hairsymmetry@yahoo.com via FormSubmit.co ───
document.addEventListener('submit', async function (e) {
    if (!e.target || e.target.id !== 'main-booking-form') return;
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector('#main-submit-btn');
    const msg = form.querySelector('#booking-msg');
    const stylistSelect = form.querySelector('#stylist');
    const selectedStylistName = stylistSelect.options[stylistSelect.selectedIndex].text;

    // ── Date guard: block past dates even if typed in manually ──
    const prefDateVal = form.prefDate.value;
    if (prefDateVal) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const chosen = new Date(prefDateVal + 'T00:00:00');
        if (chosen < today) {
            msg.style.display = 'block';
            msg.style.backgroundColor = '#fff3f3';
            msg.style.color = '#8b1d1d';
            msg.style.border = '1px solid #f5c6cb';
            msg.style.padding = '15px';
            msg.style.borderRadius = '6px';
            msg.style.marginTop = '15px';
            msg.style.textAlign = 'center';
            msg.style.fontWeight = 'bold';
            msg.innerHTML = '⚠️ Please choose a date from today or later.';
            form.prefDate.focus();
            return;
        }
    }

    // Collect all form data
    const data = {
        _subject: '📅 New Appointment Request — Hair Symmetry',
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phone: form.phone.value,
        prefDate: form.prefDate.value || 'Flexible',
        prefTime: form.prefTime.value || 'Any Time',
        stylist: selectedStylistName,
        goals: form.goals.value,
    };

    // Button → loading state
    const originalText = btn.innerText;
    btn.innerText = 'Sending…';
    btn.disabled = true;
    msg.style.display = 'none';

    try {
        const res = await fetch('https://formsubmit.co/ajax/hairsymmetry@yahoo.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            // ✅ Success
            msg.style.display = 'block';
            msg.style.backgroundColor = '#e8f4ed';
            msg.style.color = '#1e4620';
            msg.style.border = '1px solid #c3e6cb';
            msg.style.padding = '15px';
            msg.style.borderRadius = '6px';
            msg.style.marginTop = '15px';
            msg.style.textAlign = 'center';
            msg.style.fontWeight = 'bold';
            msg.innerHTML = `
                <strong>Request sent! 🎉</strong><br/><br/>
                <div style="font-size:0.9rem; font-weight:normal;">
                    📧 Your request has been delivered to Hair Symmetry.<br/>
                    We'll follow up at <strong>${data.email}</strong> or <strong>${data.phone}</strong> shortly.
                </div>`;

            form.reset();
            btn.innerText = '✔ REQUEST SENT';
            btn.style.backgroundColor = 'var(--c-sage)';
            btn.style.color = 'white';

            // Reset button after 8 s
            setTimeout(() => {
                msg.style.display = 'none';
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 8000);

        } else {
            throw new Error('server error');
        }
    } catch {
        // ❌ Error fallback
        msg.style.display = 'block';
        msg.style.backgroundColor = '#fff3f3';
        msg.style.color = '#8b1d1d';
        msg.style.border = '1px solid #f5c6cb';
        msg.style.padding = '15px';
        msg.style.borderRadius = '6px';
        msg.style.marginTop = '15px';
        msg.style.textAlign = 'center';
        msg.style.fontWeight = 'bold';
        msg.innerHTML = `Something went wrong. Please call us directly at <a href="tel:+17249354450" style="color:#8b1d1d;">(724) 935-4450</a>.`;

        btn.innerText = originalText;
        btn.disabled = false;
    }
});

