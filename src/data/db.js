// Centralized Database for Hair Symmetry

export const TEAM = [
    {
        id: 'debby',
        name: 'Debby',
        role: 'Hair Stylist & Owner',
        experience: '38 Years',
        specialties: 'Highlights',
        bio: 'Debby has owned the salon for 38 years. Family is the most important thing to her, and when you join Hair Symmetry you are family. She specializes in highlights and will make sure you leave looking natural and beautiful.',
        img: '/images/team/debby.jpg',
        portfolio: ['/images/portfolio/highlights-result.jpg', '/images/services/haircut-and-style.jpg']
    },
    {
        id: 'cathy',
        name: 'Cathy',
        role: 'Hair Stylist',
        experience: '30+ Years',
        specialties: 'Keratin Treatments, Extensions, Color',
        bio: 'Cathy is one of our most experienced stylists. As an expert in the field, Cathy strives to bring knowledge to her clients with an ongoing education from Keratin treatments to extensions and color.',
        img: '/images/team/cathy.jpg',
        portfolio: ['/images/portfolio/keratin-extensions-result.jpg', '/images/services/hair-coloring.jpg']
    },
    {
        id: 'briana',
        name: 'Briana',
        role: 'Hair Stylist',
        experience: '3+ Years',
        specialties: 'Color, Haircuts',
        bio: 'I love creating beautiful color and fresh haircuts tailored to each client. I’m always expanding my skills and learning new techniques to ensure my clients leave loving their results every time.',
        img: '/images/team/briana.jpg',
        portfolio: ['/images/services/hair-coloring.jpg', '/images/services/haircut-and-style.jpg']
    },
    {
        id: 'jen',
        name: 'Jen',
        role: 'Hair Stylist',
        experience: '20+ Years',
        specialties: 'Exciting Colors',
        bio: 'Jen has been with us for over 20 years and delivers stunning work. She stays educated on the latest trends and loves to explore new and exciting colors for both men and women.',
        img: '/images/team/jen.jpg',
        portfolio: ['/images/services/hair-coloring.jpg', '/images/portfolio/highlights-result.jpg']
    },
    {
        id: 'adrienne',
        name: 'Adrienne',
        role: 'Hair Stylist',
        experience: '17 Years',
        specialties: 'Custom Women\'s Cuts and Colors',
        bio: 'Adrienne specializes in Custom Women\'s cuts and colors. She loves art, the beach, is a real foodie and has served in the US navy.',
        img: '/images/team/adrienne.jpg',
        portfolio: ['/images/services/haircut-and-style.jpg', '/images/services/hair-coloring.jpg']
    },
    {
        id: 'becky',
        name: 'Becky',
        role: 'Nail Technician',
        experience: '20+ Years',
        specialties: 'Pedicures, Gel Manicures',
        bio: 'Becky is our nail technician and has been with us for over 20 years. She specializes in pedicures and loves getting creative with gel manicures.',
        img: '/images/team/becky.jpg',
        portfolio: ['/images/services/nails.jpg', '/images/services/lashes-and-brows.jpg']
    },
    {
        id: 'angela',
        name: 'Angela',
        role: 'Hair Stylist',
        experience: '22 Years',
        specialties: 'Color, Highlighting, Perfect Cuts',
        bio: 'I recently moved back to Pittsburgh after spending 10 years in Arkansas. I’ve been a licensed cosmetologist since 2002. I love meeting new people and helping every client feel confident, refreshed, and amazing when they leave my chair.',
        img: '/images/team/angela.jpg',
        portfolio: ['/images/portfolio/highlights-result.jpg', '/images/services/haircut-and-style.jpg']
    },
    {
        id: 'miranda',
        name: 'Miranda',
        role: 'Hair Stylist',
        experience: '7+ Years',
        specialties: 'Long Layered Cuts, Men\'s Cuts, Blonding, Balayage',
        bio: 'I specialize in long, layered haircuts, men’s cuts, and blonding services such as highlights and balayage, along with color services and eyebrow waxing. My goal is to create a style that highlights your natural beauty while providing a relaxing and uplifting experience.',
        img: '/images/team/miranda.jpg',
        portfolio: ['/images/portfolio/keratin-extensions-result.jpg', '/images/portfolio/highlights-result.jpg']
    }
];

export const SERVICES = [
    {
        id: 'haircut-and-style',
        name: 'Haircut & Style',
        subtitle: 'Vibrant, dimension-rich results tailored perfectly to your lifestyle.',
        description: 'Our experienced stylists go above and beyond to provide a relaxing atmosphere while delivering cutting edge styles and colors.',
        img: '/images/services/haircut-and-style.jpg',
        extraContent: {
            title: 'Donate your hair - Wigs for Kids',
            body: 'When a child loses their hair, they don’t just suffer physically. They experience a great emotional pain from the extreme change in their appearance. Losing their hair can significantly harm their self-image and self-esteem.\n\nWhen you donate hair at Hair Symmetry for wigs to Wigs for Kids, you’re helping a child receive more than just a quick fix. Because their hair replacement systems are hand made to custom fit the recipient and looks and feels like a real growing head of hair, they won’t come off when a child is being active and being themselves. Our goal is to give each child the ability to look themselves and live their life with a smile and confidence.',
            link: 'Learn More About Wigs For Kids'
        },
        pricing: [
            {
                name: 'Shampoo & Blowdry',
                price: '$35 and up',
                slug: 'shampoo-blowdry',
                duration: '45 Minutes',
                details: 'A thorough, relaxing cleanse followed by a professional blowout tailored to your hair type. We use premium hydration products to ensure a sleek, bouncy, and enduring finish.',
                bestPractice: 'Ideal for weekly maintenance or preparing for an important meeting. Regular blow-dry treatments can actually train your hair to hold volume longer between washes.'
            },
            {
                name: 'Conditioner & Blowdry',
                price: '$40 and up',
                slug: 'conditioner-blowdry',
                duration: '60 Minutes',
                details: 'Includes an extended scalp massage and the application of a deep-penetrating conditioning mask. This service concludes with our signature polished blowout.',
                bestPractice: 'We highly recommend this for clients with color-treated or brittle hair. The deep conditioning step adds critical moisture back into the cuticle before applying heat.'
            },
            {
                name: 'Special Occasion Styling',
                price: '$55 and up',
                slug: 'special-occasion-styling',
                duration: '60 - 90 Minutes',
                details: 'From intricate updos to cascading vintage waves, our stylists architect the perfect look for weddings, proms, or galas using high-hold, flexible products.',
                bestPractice: 'Please arrive with clean, dry hair ("day-old" hair often holds styling best). We recommend booking a trial run 2-4 weeks prior to major events like weddings.'
            },
            {
                name: 'Women\'s Cut',
                price: '$50 and up',
                slug: 'womens-cut',
                duration: '60 Minutes',
                details: 'A precision haircut tailored specifically to your face shape, hair density, and lifestyle. Includes a luxury shampoo experience and a full blowout to style the final look.',
                bestPractice: 'To maintain the structural integrity and shape of your style, we recommend returning every 6-8 weeks for a reshape, or 4-6 weeks if maintaining a blunt bob or pixie.'
            }
        ]
    },
    {
        id: 'hair-coloring',
        name: 'Hair Coloring',
        subtitle: 'From the subtlest hint of color to head-turning, multi-dimensional techniques.',
        description: 'Achieving the hair color that you want requires a skilled stylist and knowledge of exactly what you would like. Hair Symmetry stylists are color specialists. We deliver the know-how and talent to help you love your look.',
        img: '/images/services/hair-coloring.jpg',
        pricing: [
            {
                name: 'First Time Color',
                price: '$55 & Up',
                slug: 'first-time-color',
                duration: '90 - 120 Minutes',
                details: 'For first time color, Hair Symmetry requires a dedicated consultation, so that we have a full understanding of the look that you would like to achieve. We discuss your hair history and patch-test formulas.',
                bestPractice: 'Always bring reference photos. Understanding what you *don\'t* want is just as important as knowing what you *do* want. We recommend avoiding washing your hair 24 hours prior to the appointment.'
            },
            {
                name: 'Permanent Hair Color',
                price: '$65 & Up',
                slug: 'permanent-hair-color',
                duration: '90 - 120 Minutes',
                details: 'Color brings even the dullest, most lifeless hair back to life. From the subtlest hint of color to head-turning, multi-dimensional techniques, we deliver total grey coverage and rich, enduring tones.',
                bestPractice: 'To prevent premature fading, switch to a sulfate-free, color-safe shampoo immediately. We advise touch-ups every 4-6 weeks to manage root growth flawlessly.'
            },
            {
                name: 'Balayage',
                price: '$95 & Up',
                slug: 'balayage',
                duration: '150 - 180 Minutes',
                details: 'Balayage is a French word meaning "to sweep". It gives the hair depth and plays off of your natural color. Our stylists will give you sun-kissed painted highlights for a more natural look and a soft grow out.',
                bestPractice: 'Balayage is incredibly low-maintenance. A gloss or toner appointment every 8 weeks keeps the painted tones vibrant, while the actual lightening technique only needs touching up 2-3 times a year.'
            },
            {
                name: 'Highlights (full or partial)',
                price: '$85 & Up',
                slug: 'highlights',
                duration: '120 - 180 Minutes',
                details: 'Whether you are interested in full highlights for maximum brightness or partial foils to frame your face, we work with your particular hair color and style to make sure your hair looks radiant.',
                bestPractice: 'We highly suggest pairing this with an Olaplex treatment to maintain the structural bonds of your hair while lifting. Purple shampoo at home is essential for maintaining cool, bright blondes.'
            },
            {
                name: 'Dimensional Hair Color',
                price: '$85 & Up',
                slug: 'dimensional-color',
                duration: '120 - 150 Minutes',
                details: 'If modern and edgy is the style that you are seeking, this look is for you. Whether it\'s a subdued hint of color underneath or a bold streak of color on top, we will give you that exciting look.',
                bestPractice: 'Vivid and dimensional colors require specialized care. Washing in cool water and minimizing heat styling will drastically prolong the life of creative, dimensional tones.'
            },
            {
                name: 'Keratin Treatments',
                price: '$150 and up',
                slug: 'keratin-treatments',
                duration: '120 - 180 Minutes',
                details: 'If you want to cut your blow-dry time in half and have smooth, shiny hair, Global Keratin treatments are perfect for you. This treatment works by infusing vital proteins directly into each strand of your hair.',
                bestPractice: 'Do not wash, tie back, or tuck your hair behind your ears for 48 hours post-treatment. Using a sodium-chloride-free shampoo is absolutely critical to prevent stripping the Keratin.'
            },
            {
                name: 'Extensions',
                price: 'Consultation Required',
                slug: 'extensions',
                duration: '120 - 240+ Minutes',
                details: 'From highlighted to natural or just a few fantasy colors, we offer you only the highest quality, all natural extensions from Babe Extensions. We precisely color match and blend them seamlessly into your natural length.',
                bestPractice: 'Extensions are an investment. You must brush them daily from the ends upward, braid them loosely before sleeping, and return every 6-8 weeks for move-up maintenance.'
            }
        ]
    },
    {
        id: 'nails',
        name: 'Nails',
        subtitle: 'Make your hands look as good as they feel.',
        description: 'Need a quick escape? Clean and simple, our nail services make your hands look as good as they feel. We start with a bubbling soak to soften your skin, hydrate your hands with our Farmhouse Fresh Products, and finish with precision polish.',
        img: '/images/services/nails.jpg',
        pricing: [
            {
                name: 'Spa Manicure',
                price: '$30',
                slug: 'spa-manicure',
                duration: '45 Minutes',
                details: 'We start with a bubbling soak to soften your skin, hydrate your hands with our Farmhouse Fresh Products, perfect your cuticles, and use OPI/Emma Polish for an amazing finish and polished look.',
                bestPractice: 'Applying cuticle oil nightly and wearing gloves while doing dishes will significantly extend the life of your traditional polish manicure.'
            },
            {
                name: 'French Manicure',
                price: '$35',
                slug: 'french-manicure',
                duration: '50 Minutes',
                details: 'Clean and simple, a French Manicure makes your hands look as good as they feel. We finish the tips with a crisp, classic white and top it with a high-gloss sealant.',
                bestPractice: 'The crisp white tips can sometimes yellow if exposed to certain sunscreens, tanning lotions, or harsh cleaning chemicals. A quick top-coat reapplication mid-week keeps them pristine.'
            },
            {
                name: 'Dip Manicure',
                price: '$45',
                slug: 'dip-manicure',
                duration: '60 Minutes',
                details: 'A dip manicure is a great option for anyone that needs extreme durability added to their natural nail. The powder-coated application resists chipping far longer than traditional polish.',
                bestPractice: 'Because of its strength, do not attempt to peel or pry a dip manicure off yourself. It requires professional soaking removal to prevent damage to the nail bed.'
            },
            {
                name: 'Gel Manicure',
                price: '$37',
                slug: 'gel-manicure',
                duration: '60 Minutes',
                details: 'Are you looking for a long lasting polish with high shine that lasts for 2-3 weeks, is smudge-proof, and instantly dry? Treat yourself to our gel manicure with relaxing and hydrating hand massage.',
                bestPractice: 'Gel requires a gentle, professional removal process. Returning every 2-3 weeks for a fresh set ensures your natural nails stay healthy and breathe correctly.'
            },
            {
                name: 'Dazzle Dry Manicure',
                price: '$40',
                slug: 'dazzle-dry-manicure',
                duration: '45 Minutes',
                details: 'Our Dazzle Dry Manicure gives you a smooth, glossy finish that dries incredibly fast and holds up beautifully. It’s perfect for anyone who wants clean, polished nails without waiting around.',
                bestPractice: 'Dazzle Dry is a unique, non-toxic system. We recommend it highly for clients who want the longevity of gel without the required UV light curing process.'
            },
            {
                name: 'Pedicure',
                price: '$47',
                slug: 'pedicure',
                duration: '60 Minutes',
                details: 'Give your toes a touch-up or repair tired feet with our revitalizing foot and leg massage with organic FarmHouse Fresh products. We offer sugar scrubs, hydrating masks and sweet oils in all our pedicures.',
                bestPractice: 'We highly suggest bringing open-toed sandals to wear home to allow traditional polish the maximum amount of time to harden securely.'
            },
            {
                name: 'Dazzle Dry Pedicure',
                price: '$57',
                slug: 'dazzle-dry-pedicure',
                duration: '60 Minutes',
                details: 'Our Dazzle Dry Pedicure delivers a high-shine finish that sets fast, helping you get back to your day without worrying about smudges or bringing open-toed shoes in the winter.',
                bestPractice: 'Ideal for winter months when you need to put closed-toed shoes or boots back on immediately after your service.'
            }
        ]
    },
    {
        id: 'lashes-and-brows',
        name: 'Lashes & Brows',
        subtitle: 'Bring out your natural beauty with eye-popping results.',
        description: 'Don\'t hesitate to consult our beauty experts for more information. Taking your preference into account they will offer their expertise to achieve the best result possible.',
        img: '/images/services/lashes-and-brows.jpg',
        extraContent: {
            title: 'What is a Lash lift?',
            body: 'The lift treatment will make your natural lashes look fuller and longer by boosting and lifting each individual eyelash. The lash is curled from the base to the tip. Combine the lash lift with a tint for eye-popping results.\n\nLooking for more volume? Eyelash extensions are synthetic lashes added to your natural. It gives you length and volume. The lashes are categorized by four types classic, hybrid, volume and mega-volume.'
        },
        pricing: [
            {
                name: 'Lash Bath / Lash Tint',
                price: '$25',
                slug: 'lash-tint',
                duration: '30 Minutes',
                details: 'A semi-permanent dye applied to your natural lashes to give them the appearance of wearing mascara without the daily hassle or smudging.',
                bestPractice: 'Avoid oil-based makeup removers around the eyes, as they rapidly break down the tint. Results typically last 3-5 weeks depending on your lash shedding cycle.'
            },
            {
                name: 'Lash Lift / Brow Lamination',
                price: '$50',
                slug: 'lash-lift-lamination',
                duration: '45 Minutes',
                details: 'A gentle perming treatment for your lashes or brows. We restructure the hairs to lay perfectly curled upwards or brushed flawlessly into place.',
                bestPractice: 'You absolutely must keep the treated hairs completely dry and avoid steam, sweat, or makeup for the first 24 hours to allow the bonds to permanently lock in.'
            },
            {
                name: 'Lift & Tint',
                price: '$75',
                slug: 'lift-and-tint',
                duration: '60 Minutes',
                details: 'The ultimate natural eye makeover. We combine the restructuring curl of the lash lift with the bold darkening effect of the tint. No mascara required.',
                bestPractice: 'We recommend returning every 6-8 weeks for this combo. Combine it with an activating lash serum at home to maximize the length we can lift.'
            },
            {
                name: 'Classic Lash Extension',
                price: '$120',
                slug: 'classic-lash',
                duration: '90 - 120 Minutes',
                details: 'A 1:1 application where a single synthetic extension is applied to a single natural lash. This yields a beautiful, natural enhancement in length and subtle fullness.',
                bestPractice: 'You must wash your lashes daily with a lash-safe cleanser. Oils, sleeping on your face, and picking will cause premature shedding. Book a fill every 2-3 weeks.'
            },
            {
                name: 'Hybrid / Volume Lash',
                price: '$145 - $170',
                slug: 'volume-lash',
                duration: '150 - 180 Minutes',
                details: 'For dramatic fluff and density. We create hand-made fans of multiple lightweight extensions and apply them to a single natural lash to create an intensely full, dark lash line.',
                bestPractice: 'Volume lashes hold up beautifully but require careful detangling. Gently brush them from the middle to the tips daily using a clean spoolie wand.'
            },
            {
                name: 'Brow Wax & Tint',
                price: '$50',
                slug: 'brow-wax-tint',
                duration: '30 Minutes',
                details: 'Complete brow architecture. We map and wax your brows to the perfect shape for your facial structure, then tint the hairs and underlying skin for a defined, filled-in look.',
                bestPractice: 'If you are using Retinol or Accutane, you must pause usage for at least 7 days prior to waxing to prevent lifting the skin. Tweezing between appointments will ruin the intended shape.'
            }
        ]
    },
    {
        id: 'mens',
        name: 'For Men',
        subtitle: 'Even tough guys like pedicures.',
        description: 'At Hair Symmetry we do not discriminate between men and women. Depending on the length and state of your hair our stylists will calculate your price. This section serves as a quick overview and easy navigation based on our male clients most favoured services.',
        img: '/images/services/mens.jpg',
        extraContent: {
            title: 'What includes a pedicure?',
            body: 'Your feet work hard every single day, yet they’re usually the first part of our self-care routine to get ignored. A regular pedicure is more than just polish, it’s a simple and effective way to keep your feet feeling clean, comfortable, and healthy. It can also help spot early signs of irritation or infection before they turn into bigger issues.\n\nAt Hair Symmetry, we focus on both relaxation and real foot care. Your service begins with a soothing coconut soak to soften the skin and help you unwind. From there, we trim and shape your nails, clean up the cuticles, and gently remove buildup to eliminate dirt and bacteria. Next, we smooth away dry skin and calluses, then treat your feet to a deeply moisturizing mask wrapped in warm towels for the ultimate comfort.\n\nTo finish, we complete your pedicure with a relaxing foot and leg massage to boost circulation and leave you feeling refreshed. Our goal is simple: you leave our chair feeling lighter, cleaner, and fully taken care of.'
        },
        pricing: [
            {
                name: 'Men\'s Pedicure',
                price: '$47',
                slug: 'mens-pedicure',
                duration: '60 Minutes',
                details: 'Total foot care focusing on callus reduction, nail health, and tension relief. Includes a deep exfoliation scrub and an extended lower leg and foot massage to boost circulation.',
                bestPractice: 'Routine pedicures prevent painful ingrown nails and deeply cracked heels. We recommend monthly visits, especially if you work in boots or stand frequently.'
            },
            {
                name: 'Beard Trim',
                price: '$7.50',
                slug: 'beard-trim',
                duration: '15 Minutes',
                details: 'Expert tapering and fading of your facial hair to blend seamlessly into your haircut. We establish crisp lines on the cheeks and neck and finish with conditioning beard oil.',
                bestPractice: 'Combining this with your regular haircut ensures your beard and hair transitions are flawlessly connected.'
            },
            {
                name: 'Men\'s Cut & Style',
                price: '$30 and up',
                slug: 'mens-cut',
                duration: '45 Minutes',
                details: 'A precision haircut tailored to your head shape, hair texture, and preferred maintenance level. Includes a massaging shampoo, scalp treatment, and a styled finish using professional pomade or clay.',
                bestPractice: 'To maintain clean lines, especially around the neck and ears, we recommend a standing appointment every 3-4 weeks.'
            }
        ]
    },
    {
        id: 'waxing',
        name: 'Waxing',
        subtitle: 'Get Silky Smooth.',
        description: 'No more shaving and razor burn. At Hair Symmetry we only use Nufree, which is kind on the skin and is safe for the entire body. Nufree also does not contain any sugar or honey and is completely vegan.',
        img: '/images/services/waxing.jpg',
        extraContent: {
            title: 'The Safe Choice Hair Removal! What is Nufree?',
            body: 'Nufree® is a non-wax hair removal process that will remove hair from any part of the body—virtually pain-free. Because Nufree isn’t a wax, clients won’t experience the pain, redness, or swelling that often happens with wax-based products. Scientifically tested, Nufree is a self-preserving antibacterial and antimicrobial, ensuring that it’s both safe and effective.'
        },
        pricing: [
            {
                name: 'Lip Wax',
                price: '$15',
                slug: 'lip-wax',
                duration: '10 Minutes',
                details: 'Quick and precise removal of fine hair above the upper lip using gentle Nufree formula.',
                bestPractice: 'Discontinue retinol use 5 days prior to waxing to prevent skin sensitivity.'
            },
            {
                name: 'Brow Wax',
                price: '$20',
                slug: 'brow-wax',
                duration: '15 Minutes',
                details: 'Shaping and cleaning up the eyebrow arch and stray hairs to perfectly frame your face.',
                bestPractice: 'Do not tweeze between appointments to maintain your ideal, full shape.'
            },
            {
                name: 'Underarm Wax',
                price: '$25',
                slug: 'underarm-wax',
                duration: '20 Minutes',
                details: 'A quick and efficient hair removal process for the underarms. Waxing this area significantly reduces shadowing and stubble compared to shaving.',
                bestPractice: 'Hair needs to be at least 1/4 inch long. Avoid wearing tight clothing immediately after the service.'
            },
            {
                name: 'Lip & Brow Wax',
                price: '$30',
                slug: 'lip-brow-wax',
                duration: '25 Minutes',
                details: 'Combined facial waxing package covering the lip and complete eyebrow shaping for a polished look.',
                bestPractice: 'A cooling gel will be applied afterward; avoid excessive sun exposure for 24 hours.'
            },
            {
                name: 'Bikini Wax',
                price: '$40',
                slug: 'bikini-wax',
                duration: '30 Minutes',
                details: 'Hair removal extending exactly to the bikini line so you are completely clean and smooth when wearing standard swimwear or undergarments.',
                bestPractice: 'Exfoliate the area gently 48 hours before your appointment to release any trapped hairs. We recommend scheduling every 4-5 weeks.'
            },
            {
                name: 'Leg (1/2) Wax',
                price: '$50',
                slug: 'half-leg-wax',
                duration: '45 Minutes',
                details: 'Achieve perfectly smooth lower legs. We use large-format pulling techniques to rapidly cleanly remove hair from the knee down.',
                bestPractice: 'The hair must be fully grown out (at least 3-4 weeks of growth). Exfoliate regularly between appointments to prevent ingrowns.'
            }
        ]
    }
];

export const PRODUCTS = [
    {
        title: 'No. 4 Bond Maintenance Shampoo',
        brand: 'OLAPLEX',
        price: '$30.00',
        img: '/images/products/olaplex-no4.jpg',
        slug: 'olaplex-no4',
        benefits: ['Repairs broken hair bonds with every wash', 'Moisturizes dry and damaged ends', 'Color-safe, paraben-free & vegan formula'],
        upsellService: { id: 'hair-coloring', text: 'Protect your color investment! Ask about our Olaplex treatment add-on during your next Color or Balayage appointment.' }
    },
    {
        title: 'No. 5 Bond Maintenance Conditioner',
        brand: 'OLAPLEX',
        price: '$30.00',
        img: '/images/products/olaplex-no5.jpg',
        slug: 'olaplex-no5',
        benefits: ['Restores moisture without weighing hair down', 'Eliminates frizz and promotes shine', 'Pairs perfectly with No. 4 Bond Shampoo'],
        upsellService: { id: 'haircut-and-style', text: 'Lock in this hydration during your next Haircut & Style to ensure a smooth, silky blowout.' }
    },
    {
        title: 'No. 3 Hair Perfector',
        brand: 'OLAPLEX',
        price: '$30.00',
        img: '/images/products/olaplex-no3.jpg',
        slug: 'olaplex-no3',
        benefits: ['Take-home bond-repair treatment', 'Strengthens and protects all hair types', 'Visibly reduces breakage and damage'],
        upsellService: { id: 'hair-coloring', text: 'Our stylists recommend pairing No. 3 with in-salon Olaplex treatments for maximum bond repair.' }
    },
    {
        title: 'Moroccanoil Treatment',
        brand: 'MOROCCANOIL',
        price: '$38.00',
        img: '/images/products/nature-mist.jpg',
        slug: 'moroccanoil-treatment',
        benefits: ['Argan oil-infused for instant shine', 'Detangles and speeds up drying time', 'Suitable for all hair types'],
        upsellService: { id: 'haircut-and-style', text: 'Ask your stylist to work Moroccanoil Treatment through your blowout for a sleek, glass-like finish.' }
    },
    {
        title: 'Curl Defining Cream',
        brand: 'MOROCCANOIL',
        price: '$36.00',
        img: '/images/products/curl-cream.jpg',
        slug: 'curl-cream',
        benefits: ['Defines and separates curls', 'Fights frizz with argan oil', 'Provides intense long-lasting hydration'],
        upsellService: { id: 'haircut-and-style', text: 'Book a curly cut consultation — our stylists will match the right cream formula to your curl pattern.' }
    },
    {
        title: 'Hydrate Shampoo',
        brand: 'PUREOLOGY',
        price: '$32.00',
        img: '/images/products/color-shampoo.jpg',
        slug: 'color-shampoo',
        benefits: ['Sulfate-free color protection', 'Deep hydration for dry, color-treated hair', 'Vegan AntiFade Complex formula'],
        upsellService: { id: 'hair-coloring', text: 'Essential for clients with color services — sulfate-free formulas extend vibrancy between visits.' }
    },
    {
        title: 'Dry Texturizing Spray',
        brand: 'ORIBE',
        price: '$52.00',
        img: '/images/products/texture-spray.jpg',
        slug: 'texture-spray',
        benefits: ['Triple-action: texture, volume & grit', 'Invisible hold — no white residue', 'Ideal for updos, braids & special occasions'],
        upsellService: { id: 'haircut-and-style', text: 'Ask Debby to use this on your next updo or special occasion style — it makes your look last all day.' }
    },
    {
        title: 'Rough Rider Clay',
        brand: 'KEVIN MURPHY',
        price: '$28.00',
        img: '/images/products/sculpting-paste.jpg',
        slug: 'sculpting-paste',
        benefits: ['Matte finish with strong hold', 'Adds texture and structure', 'Easy to restyle throughout the day'],
        upsellService: { id: 'mens', text: 'Our men\'s stylists swear by Kevin Murphy clay for a low-maintenance, effortlessly styled look.' }
    },
    {
        title: 'Lash Bath Foam Cleanser',
        brand: 'LASH CARE',
        price: '$22.00',
        img: '/images/products/lashes-cleanser.jpg',
        slug: 'lashes-cleanser',
        benefits: ['Oil-free — safe for lash extensions', 'Removes makeup without stripping adhesive', 'Daily use extends lash retention'],
        upsellService: { id: 'lashes-and-brows', text: 'Essential for lash extension clients — daily cleansing is the #1 way to make your fills last longer.' }
    }
];


export const BLOG_POSTS = [
    {
        id: '1',
        slug: 'how-to-maintain-blonde-hair',
        category: 'hair-care',
        title: 'The Ultimate Guide to Maintaining Bright, Healthy Blonde Hair',
        synopsis: 'Learn professional secrets to preventing brassiness, maintaining hydration, and extending the life of your highlights between salon visits.',
        date: 'October 12, 2026',
        authorId: 'debby',
        img: '/images/blog/blonde-maintenance.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">Going blonde is an investment of both time and money. While we handle the heavy lifting of safe lifting and toning in the salon, how you care for your hair at home dictates how long that beautiful, icy, or sun-kissed tone lasts.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">1. The Importance of Purple Shampoo</h3>
            <p style="margin-bottom: 1.5rem">Purple shampoo is not just a marketing gimmick; it's color theory. Purple is directly opposite yellow on the color wheel, meaning it neutralizes brassy, warm tones that inevitably creep into lightened hair over time. We recommend using a high-quality purple shampoo once a week. Leave it on for 3-5 minutes before rinsing for maximum effect.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">2. Hydration is Non-Negotiable</h3>
            <p style="margin-bottom: 1.5rem">Lightening hair requires swelling the cuticle and removing natural pigment, which inherently dries out the strand. To combat this, you must replace the lost moisture. Swap out your standard conditioner for a deep-penetrating moisture mask at least once a week.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">3. Protecting the Bonds</h3>
            <p style="margin-bottom: 1.5rem">If you're blonde, you need a bond-building treatment like Olaplex No. 3. This isn't just a conditioner; it actually repairs the broken disulfide bonds internally, preventing breakage and snapping at the ends.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">4. Temperature Matters</h3>
            <p style="margin-bottom: 1.5rem">Hot water opens the cuticle, allowing your expensive toner to literally wash down the drain. Always wash and rinse your hair in lukewarm or cool water to seal the cuticle and lock in the color and shine.</p>
        `,
        relatedFunnel: {
            product: { id: 'olaplex-no3', title: 'Protect Your Color', description: 'Repairs broken bonds caused by lightening.', cta: 'Shop Olaplex' },
            service: { categoryId: 'hair-coloring', serviceSlug: 'partial-balayage', title: 'Ready for a Touch-up?', description: 'Book a partial balayage to refresh your face-framing pieces.', cta: 'View Pricing' },
            stylist: { id: 'debby', title: 'Book with an Expert Colorist', description: 'Debby specializes in lived-in blonding and color correction.', cta: 'View Portfolio' }
        }
    },
    {
        id: '2',
        slug: 'why-we-recommend-dazzle-dry',
        category: 'nails',
        title: 'Why We Switched to Dazzle Dry (And Why You Will Too)',
        synopsis: 'Discover why Dazzle Dry is revolutionizing manicures with lightning-fast drying times, zero UV lamps, and non-toxic ingredients.',
        date: 'November 05, 2026',
        authorId: 'becky',
        img: '/images/blog/dazzle-dry.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">We are always looking for ways to improve the health and experience of our clients. That's why we are so excited to introduce Dazzle Dry to our nail service menu. It's not a gel, it's not a traditional polish, it's a completely unique system that is changing the game.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Dry in 5 Minutes. Without UV.</h3>
            <p style="margin-bottom: 1.5rem">The biggest frustration with traditional polish is the drying time. We've all ruined a fresh manicure reaching for our keys. Dazzle Dry sets rock-hard in exactly 5 minutes. Best of all? It does this air-drying. No UV or LED lamps are required, completely removing any risk of UV exposure to your hands.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Impeccable Wear</h3>
            <p style="margin-bottom: 1.5rem">While traditional polish might chip in 2-3 days, Dazzle Dry is engineered to wear flawlessly for 7-14 days on hands, and over a month on toes. The flexibility in the formula prevents the standard cracking and chipping.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Non-Toxic & Vegan</h3>
            <p style="margin-bottom: 1.5rem">Dazzle Dry is formulated without the harsh, reactive chemicals found in traditional polish and gels. It is hypoallergenic, vegan, and cruelty-free. It does not contain nitrocellulose, which is the primary cause of nail yellowing.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Easy, Damage-Free Removal</h3>
            <p style="margin-bottom: 1.5rem">Unlike gel which requires soaking in harsh acetone and scraping (which can deeply damage the nail bed if done incorrectly), Dazzle Dry wipes off with regular nail polish remover just like standard polish.</p>
        `,
        relatedFunnel: {
            product: { id: 'curl-cream', title: 'Maintain Hydration', description: 'Keep your cuticles sealed at home.', cta: 'Shop Hair Care' },
            service: { categoryId: 'nails', serviceSlug: 'dazzle-dry-manicure', title: 'Try Dazzle Dry', description: 'Experience the 5-minute air dry for yourself.', cta: 'Book Now' },
            stylist: { id: 'becky', title: 'Consult with Becky', description: 'Our leading nail technician and esthetician.', cta: 'View Portfolio' }
        }
    },
    {
        id: '3',
        slug: 'understanding-hair-porosity',
        category: 'hair-care',
        title: 'Why Hair Porosity is the Secret to Perfect Styling',
        synopsis: 'Stop buying the wrong products. Learn how to determine your hair porosity and the best practices for low, normal, and high porosity hair.',
        date: 'December 10, 2026',
        authorId: 'briana',
        img: '/images/blog/hair-texture.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">We often categorize our hair by its texture—straight, wavy, or curly—but the true secret to understanding what products will work for you lies in your hair's <strong>porosity</strong>. Porosity refers to your hair's ability to absorb and retain moisture, dictated by the structure of its outermost layer, the cuticle.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">What is Low Porosity?</h3>
            <p style="margin-bottom: 1.5rem">In low porosity hair, the cuticles are tightly bound and lay flat, like overlapping roof shingles. This means it's hard for moisture to get in, but once it's in, it stays. Standard products often just sit on the surface, causing buildup.</p>
            <p style="margin-bottom: 1.5rem"><strong>Best Practice for Low Porosity:</strong> Use lightweight, liquid-based products. When deep conditioning, apply heat (like a warm towel or sitting under a dryer) to help lift the cuticle and allow the moisture to penetrate.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">What is High Porosity?</h3>
            <p style="margin-bottom: 1.5rem">High porosity hair has widely spaced cuticles spread apart or even missing. This hair absorbs moisture instantly but loses it just as fast, leading to chronic dryness, frizz, and tangling. This is often caused by chemical treatments, heat damage, or simply genetics.</p>
            <p style="margin-bottom: 1.5rem"><strong>Best Practice for High Porosity:</strong> Layer your products. Start with a water-based leave-in, follow with a thick cream, and seal it with an oil or butter (the LOC method). You also need regular protein treatments to help fill in the gaps in the cuticle.</p>
            
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Float Test</h3>
            <p style="margin-bottom: 1.5rem">Want to find out your porosity? Take a clean, shed strand of hair (must be clean, no products) and drop it into a glass of room temperature water. Let it sit for 2-4 minutes.
            <br>• If it floats at the top: Low porosity.
            <br>• If it sinks to the middle: Normal porosity.
            <br>• If it sinks to the bottom quickly: High porosity.</p>
            
            <p style="margin-bottom: 1.5rem">Understanding your hair is the first step. The second is having a professional assess it and curate a routine specifically for you.</p>
        `,
        relatedFunnel: {
            product: { id: 'nature-mist', title: 'Lightweight Hold', description: 'Perfect for low porosity hair that builds up easily.', cta: 'Shop Mist' },
            service: { categoryId: 'haircut-and-style', serviceSlug: 'shampoo-and-blowdry', title: 'Professional Assessment', description: 'Let us assess your porosity and treat it right.', cta: 'Book a Blowdry' },
            stylist: { id: 'briana', title: 'Texture Expert', description: 'Briana curates routines for all hair porosities and types.', cta: 'View Portfolio' }
        }
    }

    ,
    {
        id: '4',
        slug: 'balayage-vs-highlights',
        category: 'styling',
        title: 'Balayage vs. Highlights: Which is Right for You?',
        synopsis: 'Confused by color jargon? We break down the differences between traditional highlights and hand-painted balayage so you can book with confidence.',
        date: 'January 15, 2027',
        authorId: 'angela',
        img: '/images/blog/balayage.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">When you want to add dimension to your hair, the two most popular options are highlights and balayage. But what exactly is the difference, and which one will give you the results you're dreaming of?</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Traditional Highlights</h3>
            <p style="margin-bottom: 1.5rem">Highlights use foils to lighten specific sections of hair from the root to the ends. This creates a more uniform, structured lift. If you want a significant color change or a bright, "blonde all over" look right to the root, traditional highlights are your best bet.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Balayage: The Art of Hand-Painting</h3>
            <p style="margin-bottom: 1.5rem">Balayage is a French word meaning "to sweep." It's a freehand painting technique where the lightener is swept onto the surface of the hair. The result is a soft, natural, sun-kissed gradient that leaves the roots darker. It is incredibly low-maintenance, as the grow-out line is soft and diffused.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Verdict</h3>
            <p style="margin-bottom: 1.5rem">Choose highlights for structure, bright roots, and major changes. Choose balayage for a low-maintenance, lived-in, natural glow.</p>
        `,
        relatedFunnel: {
            product: { id: 'olaplex-no3', title: 'Pre-Lightening Care', description: 'Prep your hair before your next big color shift.', cta: 'Shop Olaplex' },
            service: { categoryId: 'hair-coloring', serviceSlug: 'full-balayage', title: 'Get the Look', description: 'Book a custom balayage session.', cta: 'Book Service' },
            stylist: { id: 'angela', title: 'Meet Your Colorist', description: 'Angela utilizes hand-painting techniques for seamless blends.', cta: 'View Portfolio' }
        }
    },
    {
        id: '5',
        slug: 'benefits-of-regular-waxing',
        category: 'waxing',
        title: 'Shaving vs. Waxing: Why Your Skin Deserves Better',
        synopsis: 'Tired of razor burn and stubble? Discover the long-term skincare benefits of switching to professional waxing.',
        date: 'February 02, 2027',
        authorId: 'becky',
        img: '/images/blog/waxing.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">We all know the frustration: you shave in the morning, and by dinner, the stubble is back. Not to mention the irritation, razor bumps, and ingrown hairs. Here is why switching to professional waxing is a game-changer for your skin.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">1. Longer Lasting Results</h3>
            <p style="margin-bottom: 1.5rem">Waxing removes hair from the root, unlike shaving which just slices it at the surface. This means you get weeks of smooth skin, not days.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">2. Finer, Softer Regrowth</h3>
            <p style="margin-bottom: 1.5rem">Over time, regular waxing damages the hair follicle, causing hair to grow back finer, softer, and sparser. Shaving leaves a blunt edge, making regrowth feel rough and thick.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">3. Gentle Exfoliation</h3>
            <p style="margin-bottom: 1.5rem">Waxing doesn't just remove hair; it strips away the outermost layer of dead skin cells, leaving your skin incredibly smooth and radiant.</p>
            <p style="margin-bottom: 1.5rem">At Hair Symmetry, we use high-quality, sensitive-skin-friendly waxes like Nufree to ensure a comfortable experience and flawless results.</p>
        `,
        relatedFunnel: {
            product: { id: 'color-shampoo', title: 'Gentle Cleansing', description: 'Use gentle products post-waxing to avoid irritation.', cta: 'Shop Care' },
            service: { categoryId: 'waxing', serviceSlug: 'eyebrow-wax', title: 'Ditch the Razor', description: 'Experience our Nufree waxing system.', cta: 'Book Waxing' },
            stylist: { id: 'becky', title: 'Waxing Specialist', description: 'Becky provides quick, comfortable hair removal.', cta: 'View Portfolio' }
        }
    },
    {
        id: '6',
        slug: 'bridal-hair-trends-2027',
        category: 'styling',
        title: 'Top 5 Bridal Hair Trends for the Modern Bride',
        synopsis: 'Planning your big day? Explore the most stunning, elegant bridal hair trends defining this wedding season.',
        date: 'March 10, 2027',
        authorId: 'debby',
        img: '/images/blog/bridal.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">Your wedding hair should be a reflection of your personal style—elevated. Here are the top trends our styling team is creating for brides this season.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">1. The Textured Low Bun</h3>
            <p style="margin-bottom: 1.5rem">Move over, tight chignons. The modern low bun is all about loose, romantic texture, face-framing tendrils, and effortless elegance. It pairs perfectly with both veils and floral accessories.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">2. Old Hollywood Waves</h3>
            <p style="margin-bottom: 1.5rem">For the glamourous bride, deep, uniform, glossy waves swept to one side offer a timeless, red-carpet-ready look. This style requires expert setting and holding products to last through the reception.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">3. Pearl Embellishments</h3>
            <p style="margin-bottom: 1.5rem">Accessories are trending hard, specifically pearl pins scattered through braids or nested in updos, adding a subtle touch of luxury without overpowering the dress.</p>
            <p style="margin-bottom: 1.5rem">Remember, your wedding hair starts months in advance with a healthy trim and color maintenance plan.</p>
        `,
        relatedFunnel: {
            product: { id: 'texture-spray', title: 'All Day Hold', description: 'The exact spray we use to lock in bridal looks.', cta: 'Shop Spray' },
            service: { categoryId: 'haircut-and-style', serviceSlug: 'special-occasion-styling', title: 'Bridal Trial', description: 'Book a consultation for your big day.', cta: 'Book Trial' },
            stylist: { id: 'debby', title: 'Bridal Expert', description: 'Debby specializes in romantic, lasting updos.', cta: 'View Portfolio' }
        }
    },
    {
        id: '7',
        slug: 'professional-gloss-treatment',
        category: 'hair-care',
        title: 'The Magic of a Professional Hair Gloss',
        synopsis: 'Want glass-like shine and vibrant color without the commitment? Uncover the secret weapon of top stylists: the hair gloss.',
        date: 'April 05, 2027',
        authorId: 'angela',
        img: '/images/blog/gloss.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">If your hair is feeling dull, looking brassy, or lacking that "just left the salon" vibrancy, a gloss treatment is the quick, transformative fix you need.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">What is a Gloss?</h3>
            <p style="margin-bottom: 1.5rem">A gloss (or glaze) is a demi-permanent treatment that coats the cuticle. It can be clear (just for immense shine and conditioning) or tinted (to combat brassiness, refresh faded ends, or add a subtle tonal shift).</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Benefits</h3>
            <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.6;">
                <li><strong>Unreal Shine:</strong> By closing and smoothing the cuticle securely, light reflects off the hair perfectly.</li>
                <li><strong>Color Correction:</strong> It neutralizes unwanted tones (like turning yellow blonde back to icy).</li>
                <li><strong>No Commitment:</strong> It gently fades out over 4-6 weeks without leaving a harsh root line.</li>
            </ul>
            <p style="margin-bottom: 1.5rem">A gloss can be added to the end of any service and only takes about 15-20 minutes at the bowl!</p>
        `,
        relatedFunnel: {
            product: { id: 'color-shampoo', title: 'Prolong the Shine', description: 'Sulfate-free shampoo to protect your new gloss.', cta: 'Shop Shampoo' },
            service: { categoryId: 'hair-coloring', serviceSlug: 'color-gloss', title: 'Transform Your Ends', description: 'Add a gloss to any cut or color appointment.', cta: 'Book Gloss' },
            stylist: { id: 'angela', title: 'Glossing Master', description: 'Angela knows exactly what tone to glaze you with.', cta: 'View Portfolio' }
        }
    },
    {
        id: '8',
        slug: 'mens-grooming-beyond-clippers',
        category: 'styling',
        title: "Men's Grooming: Beyond the Basic Clipper Cut",
        synopsis: "Elevate your style. Discover why modern men's grooming is about scissor work, texture, and proper scalp care.",
        date: 'April 22, 2027',
        authorId: 'miranda',
        img: '/images/blog/mens-hair.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">The days of the standard $15 buzz cut are over. Modern men are recognizing that a great haircut is the foundation of their personal style and professional image.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Power of Scissor Work</h3>
            <p style="margin-bottom: 1.5rem">While clippers are great for fades, utilizing scissors on the top and sides allows for customized texture, tailored weight removal, and a shape that grows out cleanly. It provides a bespoke finish that clippers simply cannot achieve.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Scalp Health is Hair Health</h3>
            <p style="margin-bottom: 1.5rem">Men are prone to scalp issues like dandruff and thinning. A professional salon visit includes a thorough scalp cleanse, massage to stimulate blood flow, and product recommendations to maintain a healthy environment for hair growth.</p>
            <p style="margin-bottom: 1.5rem">A precision cut takes time, skill, and an understanding of your unique head shape and hair growth patterns.</p>
        `,
        relatedFunnel: {
            product: { id: 'sculpting-paste', title: 'Daily Control', description: 'Matte-finish paste for unstructured texture.', cta: 'Shop Paste' },
            service: { categoryId: 'for-men', serviceSlug: 'mens-cut', title: 'Bespoke Scissor Work', description: 'Upgrade from the standard clipper fade.', cta: 'Book Cut' },
            stylist: { id: 'miranda', title: "Men's Specialist", description: 'Miranda provides tailored texture and head-shape analysis.', cta: 'View Portfolio' }
        }
    },
    {
        id: '9',
        slug: 'ultimate-guide-eyelash-extensions',
        category: 'lashes',
        title: 'Wake Up Flawless: The Ultimate Guide to Lash Extensions',
        synopsis: 'Ditch the mascara. Everything you need to know about getting, maintaining, and loving custom eyelash extensions.',
        date: 'May 12, 2027',
        authorId: 'becky',
        img: '/images/blog/lashes.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">Imagine waking up, doing absolutely nothing to your eyes, and looking polished, bright, and ready to go. That's the magic of individual eyelash extensions.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">Classic vs. Volume vs. Hybrid</h3>
            <p style="margin-bottom: 1.5rem">We customize every set. <strong>Classic</strong> attaches one extension to one natural lash for a mascara-look. <strong>Volume</strong> attaches a handmade fan of 3-5 ultra-fine lashes to one natural lash for fluff and drama. <strong>Hybrid</strong> mixes the two for a textured, wispy look.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Golden Rules of Lash Care</h3>
            <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; line-height: 1.6;">
                <li><strong>Wash them daily:</strong> Use a lash-safe foaming cleanser to remove oils and debris that break down the adhesive.</li>
                <li><strong>No oil near the eyes:</strong> Oil dissolves the glue. Check your makeup removers and eye creams!</li>
                <li><strong>Brush them:</strong> Use a clean spoolie every morning to keep them fluffy and separated.</li>
            </ul>
            <p style="margin-bottom: 1.5rem">Extensions require "fills" every 2-3 weeks to replace lashes that have naturally shed.</p>
        `,
        relatedFunnel: {
            product: { id: 'lashes-cleanser', title: 'Lash Safe Foam', description: 'Keep your extensions fluffy and clean daily.', cta: 'Shop Cleanser' },
            service: { categoryId: 'lashes-and-brows', serviceSlug: 'eyelash-extensions', title: 'Wake Up Flawless', description: 'Custom classic, hybrid, or volume sets.', cta: 'Book Lashes' },
            stylist: { id: 'becky', title: 'Lash Artist', description: 'Becky maps the perfect fan layout for your eye shape.', cta: 'View Portfolio' }
        }
    },
    {
        id: '10',
        slug: 'olaplex-science-explained',
        category: 'products',
        title: "The Science of Olaplex: Why It's Not Just Another Conditioner",
        synopsis: "Unpacking the patented chemistry behind the industry's most famous bond- builder, and why your damaged hair depends on it.",
        date: 'June 01, 2027',
        authorId: 'debby',
        img: '/images/blog/olaplex.jpg',
        content: `
            <p style="margin-bottom: 1.5rem">If you've ever bleached your hair, you've likely heard a stylist tell you that you need Olaplex. But why? Is it just hype, or is there real science behind the little bottles?</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Anatomy of Hair Damage</h3>
            <p style="margin-bottom: 1.5rem">Your hair gets its structure from disulfide bonds. When you apply chemicals (color/bleach), use hot tools, or even go out in the sun, these bonds break. Broken bonds lead to frizz, split ends, and eventually, hair breakage.</p>
            <h3 style="margin-top: 2rem; margin-bottom: 1rem">The Patented Molecule</h3>
            <p style="margin-bottom: 1.5rem">Most deep conditioners mask damage by coating the hair in silicones or proteins, making it feel soft temporarily. Olaplex contains a patented active ingredient (Bis-Aminopropyl Diglycol Dimaleate) that works on a molecular level. It seeks out single sulfur hydrogen bonds and cross-links them back together into double disulfide bonds.</p>
            <p style="margin-bottom: 1.5rem"><strong>It literally rebuilds the broken structure of your hair from the inside out.</strong> We use No. 1 and No. 2 in the salon during color services to prevent damage, but using No. 3 at home is vital for continuous repair.</p>
        `,
        relatedFunnel: {
            product: { id: 'olaplex-no3', title: 'The Holy Grail', description: 'Take the repair process home with you.', cta: 'Shop Olaplex' },
            service: { categoryId: 'hair-coloring', serviceSlug: 'olaplex-treatment', title: 'In-Salon Repair', description: 'Book a standalone No. 1 and No. 2 treatment.', cta: 'Book Repair' },
            stylist: { id: 'debby', title: 'Damage Reversal', description: 'Consult with Debby on saving compromised hair.', cta: 'View Portfolio' }
        }
    }
];