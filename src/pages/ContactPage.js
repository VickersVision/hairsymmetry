import { injectSEO } from '../seo.js';

// Real Google Reviews from Hair Symmetry's Google Business Profile
// Source: https://g.co/kgs/hair-symmetry-wexford · 58 reviews · 4.7 rating
// Only 5-star reviews with substantive content are shown
const GOOGLE_REVIEWS = [
    {
        author: 'Holly Healy',
        rating: 5,
        date: '5 years ago',
        text: 'I am lucky to say Katie has been doing my hair for years. She did the hair for my wedding months ago and I am still receiving compliments! She is a master from color to cut and fun to work with.',
        avatar: 'H',
        badge: 'Local Guide'
    },
    {
        author: 'Calley Connelly',
        rating: 5,
        date: '7 years ago',
        text: 'It\'s a tad pricey but I\'ve been getting my hair done here since I was little! Deb and the whole staff are the nicest and are great at what they do. Every time I leave, my hair feels so amazing, and they always get it perfect every time! I don\'t see a specific hair dresser, I switch around because they all rock!',
        avatar: 'C',
        badge: 'Local Guide'
    },
    {
        author: 'Kelly',
        rating: 5,
        date: '2 years ago',
        text: 'The salon staff are all friendly and Adrienne is the best! I\'ve been with her for many years & know many others that also use her. Always a perfect cut.',
        avatar: 'K',
        badge: 'Local Guide'
    },
    {
        author: 'Jennifer Preiss',
        rating: 5,
        date: '7 years ago',
        text: 'They are a wonderful group of hair stylists and people. I have been going there for 14+ years. My hair always looks amazing when I leave!',
        avatar: 'J',
        badge: 'Local Guide'
    },
    {
        author: 'Lauren Wilson',
        rating: 5,
        date: '7 years ago',
        text: 'Hair Symmetry is awesome! Sam is an amazing professional and artist. Hands down gives the best haircuts I have ever had! Also, they sell great products including the best smelling candles ever!',
        avatar: 'L',
        badge: null
    },
    {
        author: 'Catherine Kuharsky',
        rating: 5,
        date: '7 years ago',
        text: 'Nice salon. My first visit with Jessica and she did a fantastic job interpreting what I wanted and working with my crazy curl/frizz. She knew my hair like she had styled it for years. I love it and I will be a repeat customer. Thanks Jess.',
        avatar: 'C',
        badge: null
    },
    {
        author: 'Ann Malick',
        rating: 5,
        date: '2 years ago',
        text: 'Great service! Nice environment. Cathy is great... specializes in color as well as styling!',
        avatar: 'A',
        badge: 'Local Guide'
    },
    {
        author: 'Ken',
        rating: 5,
        date: '7 years ago',
        text: 'Fantastic salon. Talented stylists. Friendly staff. Would highly recommend!',
        avatar: 'K',
        badge: 'Local Guide'
    },
    {
        author: 'Jordan Johnson',
        rating: 5,
        date: '6 years ago',
        text: 'I have problematic hair, and asked the hair dresser to feel free to be creative and do what she could. The results were spectacular. I would go back any time.',
        avatar: 'J',
        badge: null
    },
    {
        author: 'Christina Horstman',
        rating: 5,
        date: '8 years ago',
        text: 'Polly is the absolute best!!!! My hair has never looked so good. Thank you Polly!!!!!',
        avatar: 'C',
        badge: null
    },
    {
        author: 'Lisa Mounteer',
        rating: 5,
        date: '6 years ago',
        text: 'Sue was amazing. A gem in Wexford. Hidden next to Pomodoro Pizza, but don\'t drive past this one!',
        avatar: 'L',
        badge: 'Local Guide'
    },
    {
        author: 'sup235 bach',
        rating: 5,
        date: 'a year ago',
        text: 'Melissa Masartis is a wonderful hairdresser.',
        avatar: 'S',
        badge: 'Local Guide'
    }
];


function renderStars(count) {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function ReviewCard({ author, rating, date, text, avatar, badge }) {
    return `
    <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 1rem; border: 1px solid #f0f0f0; transition: transform 0.3s ease; cursor: default;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--c-sage); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: bold; flex-shrink: 0;">${avatar}</div>
            <div>
                <strong style="display: block; font-size: 1rem;">${author}</strong>
                <span style="font-size: 0.8rem; color: #888;">${date}</span>
                ${badge ? `<span style="font-size: 0.75rem; color: #4285f4; font-weight: 600; display: block;">⭐ ${badge}</span>` : ''}
            </div>
            <div style="margin-left: auto; display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: #f4b400; font-size: 1.1rem; letter-spacing: 1px;">${renderStars(rating)}</span>
                <img src="https://www.google.com/favicon.ico" alt="Google" style="width: 18px; height: 18px; opacity: 0.7;" />
            </div>
        </div>
        <p style="font-size: 0.95rem; color: #555; line-height: 1.7; margin: 0; font-style: italic;">"${text}"</p>
    </div>
    `;
}

export function ContactPage() {
    injectSEO({
        title: 'Contact & Location | Hair Symmetry | Wexford, PA',
        description: 'Visit Hair Symmetry at 2578 Brandt School Rd, Wexford, PA 15090. Call (724) 935-4450 to book your appointment or find us on the map.',
        schema: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hair Symmetry",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "2578 Brandt School Rd",
                "addressLocality": "Wexford",
                "addressRegion": "PA",
                "postalCode": "15090",
                "addressCountry": "US"
            },
            "telephone": "+17249354450",
            "email": "hairsymmetry@yahoo.com",
            "url": "https://hairsymmetry.com",
            "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"], "opens": "09:00", "closes": "20:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday"], "opens": "09:00", "closes": "17:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "08:00", "closes": "15:30" }
            ]
        }
    });

    return `
    <div class="contact-page">

        <!-- Page Header -->
        <section style="background: var(--c-sage-light); padding: 5rem 1rem 4rem; text-align: center;">
            <div class="container" style="max-width: 700px; margin: 0 auto;">
                <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--c-sage); font-weight: bold;">Find Us</span>
                <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin: 1rem 0;">Visit Hair Symmetry</h1>
                <p style="font-size: 1.15rem; color: var(--c-charcoal); max-width: 500px; margin: 0 auto;">
                    Located in the heart of Wexford, PA. We'd love to meet you — walk-ins welcome when available!
                </p>
            </div>
        </section>

        <!-- Map + Contact Info Split -->
        <section class="section container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
                
                <!-- Google Map Embed -->
                <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.8489279497!2d-80.0921039!3d40.6136401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883489f550953677%3A0x538e9ae6d3cb7265!2sHair%20Symmetry!5e0!3m2!1sen!2sus!4v1700000000000"
                        width="100%"
                        height="460"
                        style="border:0; display: block;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Hair Symmetry Location Map">
                    </iframe>
                </div>

                <!-- Contact Details -->
                <div style="display: flex; flex-direction: column; gap: 2rem;">
                    <div>
                        <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Get in Touch</h2>
                        
                        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
                            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                                <span style="font-size: 1.4rem; width: 28px; text-align: center; flex-shrink: 0;">📍</span>
                                <div>
                                    <strong style="display: block; margin-bottom: 0.2rem;">Our Address</strong>
                                    <a href="https://maps.google.com/?q=Hair+Symmetry+Wexford+PA" target="_blank" rel="noopener noreferrer" style="color: var(--c-sage); text-decoration: none; line-height: 1.5;">
                                        2578 Brandt School Rd<br/>Wexford, PA 15090
                                    </a>
                                </div>
                            </div>

                            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                                <span style="font-size: 1.4rem; width: 28px; text-align: center; flex-shrink: 0;">📞</span>
                                <div>
                                    <strong style="display: block; margin-bottom: 0.2rem;">Phone</strong>
                                    <a href="tel:+17249354450" style="color: var(--c-sage); text-decoration: none; font-size: 1.15rem; font-weight: bold;">(724) 935-4450</a>
                                </div>
                            </div>

                            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                                <span style="font-size: 1.4rem; width: 28px; text-align: center; flex-shrink: 0;">✉️</span>
                                <div>
                                    <strong style="display: block; margin-bottom: 0.2rem;">Email</strong>
                                    <a href="mailto:hairsymmetry@yahoo.com" style="color: var(--c-sage); text-decoration: none;">hairsymmetry@yahoo.com</a>
                                </div>
                            </div>

                            <div style="display: flex; gap: 1rem; align-items: flex-start;">
                                <span style="font-size: 1.4rem; width: 28px; text-align: center; flex-shrink: 0;">🕐</span>
                                <div>
                                    <strong style="display: block; margin-bottom: 0.5rem;">Hours</strong>
                                    <table style="font-size: 0.9rem; border-collapse: collapse; width: 100%;">
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Monday</td><td style="color: #c0392b; font-weight: 600;">Closed</td></tr>
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Tuesday</td><td>9:00 AM – 8:00 PM</td></tr>
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Wednesday</td><td>9:00 AM – 8:00 PM</td></tr>
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Thursday</td><td>9:00 AM – 8:00 PM</td></tr>
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Friday</td><td>9:00 AM – 5:00 PM</td></tr>
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Saturday</td><td>8:00 AM – 3:30 PM</td></tr>
                                        <tr><td style="padding: 3px 12px 3px 0; color: #666;">Sunday</td><td style="color: #c0392b; font-weight: 600;">Closed</td></tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                        <a href="/book" class="btn btn-primary" style="text-align: center; border-radius: 6px; padding: 1rem;">Book an Appointment</a>
                        <a href="https://www.google.com/maps/place/Hair+Symmetry/@40.6136401,-80.0921039,17z" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="text-align: center; border-radius: 6px; padding: 0.9rem; font-size: 0.9rem;">Get Directions on Google Maps ↗</a>
                    </div>

                    <div style="display: flex; gap: 1rem;">
                        <a href="https://www.instagram.com/hairsymmetry_salon" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--c-sage); text-decoration: none; font-weight: 600;">
                            📸 Instagram
                        </a>
                        <a href="https://www.facebook.com/hairsymmetrysalon" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--c-sage); text-decoration: none; font-weight: 600;">
                            👍 Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Google Reviews Section -->
        <section style="background: #fafafa; padding: 6rem 1rem;">
            <div class="container">
                <div class="text-center" style="margin-bottom: 4rem;">
                    <span style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 3px; color: var(--c-sage); font-weight: bold;">From Our Clients</span>
                    <h2 style="font-size: clamp(2rem, 4vw, 3rem); margin: 1rem 0;">What Our Community Says</h2>
                    <div style="display: inline-flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem; background: white; padding: 0.75rem 1.5rem; border-radius: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
                        <img src="https://www.google.com/favicon.ico" alt="Google" style="width: 20px;" />
                        <span style="font-size: 1rem; font-weight: bold;">4.7</span>
                        <span style="color: #f4b400; font-size: 1.1rem;">★★★★☆</span>
                        <span style="color: #888; font-size: 0.9rem;">58 reviews on Google</span>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem;">
                    ${GOOGLE_REVIEWS.map(r => ReviewCard(r)).join('')}
                </div>

                <div class="text-center" style="margin-top: 3rem;">
                    <a href="https://www.google.com/maps/place/Hair+Symmetry/@40.6136401,-80.0921039,17z" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; color: var(--c-sage); font-weight: bold; text-decoration: none; font-size: 0.95rem; border: 2px solid var(--c-sage); padding: 0.75rem 1.5rem; border-radius: 30px; transition: all 0.3s ease;" onmouseover="this.style.background='var(--c-sage)'; this.style.color='white';" onmouseout="this.style.background='transparent'; this.style.color='var(--c-sage)';">
                        <img src="https://www.google.com/favicon.ico" alt="Google" style="width: 18px;" />
                        See All Reviews on Google Maps ↗
                    </a>
                </div>
            </div>
        </section>

    </div>
    `;
}
