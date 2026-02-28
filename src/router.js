import { HomePage } from './pages/HomePage.js';
import { ServicePage } from './pages/ServicePage.js';
import { StylistPage } from './pages/StylistPage.js';
import { ShopPage } from './pages/ShopPage.js';
import { BookingPage } from './pages/BookingPage.js';
import { TeamDirectoryPage } from './pages/TeamDirectoryPage.js';
import { BlogIndexPage } from './pages/BlogIndexPage.js';
import { BlogPostPage } from './pages/BlogPostPage.js';
import { IndividualServicePage } from './pages/IndividualServicePage.js';
import { AboutPage } from './pages/AboutPage.js';
import { ContactPage } from './pages/ContactPage.js';
import { DonateHairPage } from './pages/DonateHairPage.js';

const routes = {
    '/': HomePage,
    '/services': ServicePage, // Renders default services directory
    '/the-team': TeamDirectoryPage, // Renders team directory
    '/shop': ShopPage,
    '/book': BookingPage,
    '/blog': BlogIndexPage,
    '/about-our-story': AboutPage,
    '/about': AboutPage,  // alias — both /about and /about-our-story work
    '/contact': ContactPage,
    '/donate-hair': DonateHairPage,
    '/policies-faq': () => `
        <div class="section container" style="max-width: 800px; padding: 5rem 1rem;">
            <h1 style="margin-bottom: 0.5rem;">Policies &amp; FAQ</h1>
            <p style="color: #666; font-size: 1.05rem; margin-bottom: 3rem; border-bottom: 1px solid #eee; padding-bottom: 2rem;">Last updated February 2026 — Please review our policies before booking.</p>

            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Cancellation &amp; No-Show Policy</h2>
            <p style="line-height: 1.8; margin-bottom: 2rem;">We understand that life happens. We ask that you give us <strong>24 hours notice</strong> if you need to cancel or reschedule your appointment. Repeat no-shows or last-minute cancellations (under 2 hours) may result in a cancellation fee or a deposit requirement for future bookings.</p>

            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Late Arrivals</h2>
            <p style="line-height: 1.8; margin-bottom: 2rem;">If you arrive more than <strong>15 minutes late</strong>, we may need to modify your services to fit the remaining time, or reschedule you to protect the appointment of the client after you. Please call ahead if you are running behind — we'll do our best to accommodate you.</p>

            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Color Services &amp; Consultations</h2>
            <p style="line-height: 1.8; margin-bottom: 2rem;">All first-time color clients and clients requesting a significant change (e.g. bleach/lift, color correction) are required to complete a <strong>complimentary consultation</strong> prior to the service being performed. This ensures we fully understand your hair history and goals, and helps us avoid any surprises on the day of your appointment.</p>

            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Product Returns</h2>
            <p style="line-height: 1.8; margin-bottom: 2rem;">We stand behind every product we retail. If a product does not work for your hair type, bring it back within <strong>30 days</strong> (with receipt) and we'll exchange it for something better suited for you.</p>

            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Children in the Salon</h2>
            <p style="line-height: 1.8; margin-bottom: 2rem;">For the safety of all clients and the comfort of your service experience, we ask that children not receiving services be supervised by a responsible adult who is not receiving a service at the time.</p>

            <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Frequently Asked Questions</h2>
            <p style="font-weight: bold; margin-bottom: 0.25rem;">Do I need an appointment?</p>
            <p style="line-height: 1.8; margin-bottom: 1.5rem;">Yes — we are an appointment-based salon. Walk-ins are welcome but not guaranteed. <a href="/book" style="color: var(--c-sage); font-weight: bold;">Book online here</a> or call <a href="tel:+17249354450" style="color: var(--c-sage); font-weight: bold;">(724) 935-4450</a>.</p>

            <p style="font-weight: bold; margin-bottom: 0.25rem;">What should I bring to a color consultation?</p>
            <p style="line-height: 1.8; margin-bottom: 1.5rem;">Bring reference photos — Pinterest boards, Instagram saves, or screenshots work great. The more visual references you have, the better we can align on your vision.</p>

            <p style="font-weight: bold; margin-bottom: 0.25rem;">Do you accept credit cards?</p>
            <p style="line-height: 1.8; margin-bottom: 2rem;">Yes, we accept all major credit cards, debit cards, cash, and Venmo.</p>

            <div style="margin-top: 3rem; padding: 2rem; background: var(--c-sage-light); border-radius: 8px; text-align: center;">
                <h3 style="margin-bottom: 0.5rem;">Still have questions?</h3>
                <p style="margin-bottom: 1.5rem;">We're always happy to chat. Give us a call or send us a message.</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="/contact" class="btn btn-primary">Contact Us</a>
                    <a href="tel:+17249354450" class="btn btn-outline">(724) 935-4450</a>
                </div>
            </div>
        </div>
    `
};

// Simple pattern matcher for dynamic routes like /services/haircut
function matchRoute(path) {
    if (routes[path]) {
        return routes[path];
    }

    if (path.startsWith('/services/')) {
        const parts = path.split('/services/')[1].split('/');
        if (parts.length === 2 && parts[1] !== '') {
            // It's a nested specific service! e.g. /services/haircut-and-style/womens-cut
            return () => IndividualServicePage({ categorySlug: parts[0], serviceSlug: parts[1] });
        } else {
            // Just a category page
            return () => ServicePage({ slug: parts[0] });
        }
    }

    if (path.startsWith('/the-team/')) {
        const slug = path.split('/the-team/')[1];
        return () => StylistPage({ slug });
    }

    if (path.startsWith('/shop/')) {
        const slug = path.split('/shop/')[1];
        return () => ShopPage({ slug });
    }

    if (path.startsWith('/blog/')) {
        const slug = path.split('/blog/')[1];
        return () => BlogPostPage({ slug });
    }

    return () => `
        <div class="section container" style="text-align: center; padding: 8rem 1rem;">
            <h1 style="font-size: 5rem; margin-bottom: 0; color: var(--c-sage);">404</h1>
            <h2 style="margin-bottom: 1rem;">Page Not Found</h2>
            <p style="color: #666; margin-bottom: 2rem;">The page you are looking for doesn't exist or may have moved.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/" class="btn btn-primary">← Back to Home</a>
                <a href="/book" class="btn btn-outline">Book Appointment</a>
            </div>
        </div>
    `;
}

function renderRoute() {
    const path = window.location.pathname;
    const renderFunction = matchRoute(path);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = renderFunction({ slug: '' }); // Pass empty slug when doing exact match just in case, though handled dynamically.
        // Ensure we scroll to top on nav
        window.scrollTo(0, 0);
    }
}

export function initRouter() {
    window.addEventListener('popstate', renderRoute);

    // Intercept link clicks for SPA routing
    document.body.addEventListener('click', e => {
        // Find closest anchor tag
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            // Only intercept internal links
            if (href && href.startsWith('/')) {
                e.preventDefault();
                window.history.pushState(null, '', href);
                renderRoute();
            }
        }
    });

    // Initial render
    renderRoute();
}
