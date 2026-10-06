import { Category, Product, Slide, Testimonial } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'hand-bags',
    name: 'Hand Bags',
    slug: 'hand-bags',
    image: 'https://lumerah.pk/uploads/categories/1772993316_c5c1f1eab60442f1271f.jpg',
    itemCount: 14,
    description: 'Timeless structured silhouettes tailored for sophisticated everyday elegance.'
  },
  {
    id: 'clutch',
    name: 'Clutch',
    slug: 'clutch',
    image: 'https://lumerah.pk/uploads/categories/1772993141_e2628974d35eab047ccb.jpg',
    itemCount: 8,
    description: 'Statement evening clutches embellished with crystals and refined metallic finishes.'
  },
  {
    id: 'shoulder-bags',
    name: 'Shoulder Bags',
    slug: 'shoulder-bags',
    image: 'https://lumerah.pk/uploads/categories/1772993150_82e8af69dbc1259e0423.jpg',
    itemCount: 12,
    description: 'Ergonomic curves and supple leather straps designed for effortless movement.'
  },
  {
    id: 'totes',
    name: 'Totes',
    slug: 'totes',
    image: 'https://lumerah.pk/uploads/categories/1772993160_96fb6d81b47c6da985cd.jpg',
    itemCount: 16,
    description: 'Spacious, structured carrying companions crafted with premium textured leather.'
  },
  {
    id: 'the-mini-edit',
    name: 'The Mini Edit',
    slug: 'the-mini-edit',
    image: 'https://lumerah.pk/uploads/categories/1772993238_6b18c84027aa1a72da9d.jpg',
    itemCount: 9,
    description: 'Compact miniature silhouettes carrying your absolute essentials in high fashion.'
  },
  {
    id: 'branded-bags',
    name: 'Branded Bags',
    slug: 'branded-bags',
    image: 'https://lumerah.pk/uploads/categories/1773245324_57c44c06772ae22767e6.png',
    itemCount: 11,
    description: 'Curated world-class designer editions and master crafted icon pieces.'
  }
];

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    subtitle: 'New Collection',
    title: 'Elegance Redefined',
    description: 'Discover our latest collection of premium fashion wear and luxury handcrafted bags.',
    image: 'https://lumerah.pk/assets/images/ban1.jpg',
    ctaText: 'Shop Now',
    ctaLink: 'featured'
  },
  {
    id: 2,
    subtitle: 'Summer Edit',
    title: 'Fresh Styles',
    description: "Explore the season's most stunning pieces, sculpted leather forms, and radiant accents.",
    image: 'https://lumerah.pk/assets/images/ban3.jpg',
    ctaText: 'Explore',
    ctaLink: 'totes'
  },
  {
    id: 3,
    subtitle: 'Cash on Delivery',
    title: 'Shop With Confidence',
    description: 'Nationwide delivery with Cash on Delivery option and complimentary shipping on orders over PKR 5,000.',
    image: 'https://lumerah.pk/assets/images/ban2.jpg',
    ctaText: 'Shop Now',
    ctaLink: 'all'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'blush-pink-tote-with-floral-illustration',
    name: 'Blush Pink Tote With Floral Illustration',
    slug: 'blush-pink-tote-with-floral-illustration',
    price: 3500,
    originalPrice: 4200,
    category: 'totes',
    categoryLabel: 'Totes',
    image: 'https://lumerah.pk/uploads/products/1772565103_11d4e2b1b9000f0553cd.jpg',
    description: 'An artful blush-pink structured tote adorned with delicate floral illustrations. Crafted with reinforced double stitching, smooth top handles, and a secure zip closure.',
    material: 'High-grade textured vegan leather with gold hardware',
    dimensions: '13.5" (W) x 10.5" (H) x 4.5" (D)',
    inStock: true,
    isSale: true,
    featured: true,
    colors: [
      { name: 'Blush Pink', hex: '#E8C5C8' },
      { name: 'Ivory Cream', hex: '#FDFBF7' }
    ]
  },
  {
    id: 'classic-chestnut-structured-tote',
    name: 'Classic Chestnut Structured Tote',
    slug: 'classic-chestnut-structured-tote',
    price: 3500,
    category: 'totes',
    categoryLabel: 'Totes',
    image: 'https://lumerah.pk/uploads/products/1772737084_fa292547c66fc3a96f37.jpg',
    description: 'Warm chestnut tones meet architectural symmetry. A versatile everyday essential with generous interior compartments and protective base feet.',
    material: 'Full-grain textured leatherette with brass accents',
    dimensions: '14" (W) x 11" (H) x 5" (D)',
    inStock: true,
    featured: true,
    colors: [
      { name: 'Chestnut Brown', hex: '#7A4B29' },
      { name: 'Deep Espresso', hex: '#3B2418' }
    ]
  },
  {
    id: 'deep-red-tote-with-floral-illustration',
    name: 'Deep Red Tote with Floral Illustration',
    slug: 'deep-red-tote-with-floral-illustration',
    price: 3500,
    category: 'totes',
    categoryLabel: 'Totes',
    image: 'https://lumerah.pk/uploads/products/1772565396_61dce441d38a93067fac.jpeg',
    description: 'Bold crimson statement tote featuring hand-rendered floral botanical art. Perfect balance of traditional artisanal charm and modern functionality.',
    material: 'Water-resistant textured PU leather with satin lining',
    dimensions: '13.5" (W) x 10.5" (H) x 4.5" (D)',
    inStock: true,
    featured: true,
    colors: [
      { name: 'Deep Carmine Red', hex: '#8B1E2B' },
      { name: 'Wine Burgundy', hex: '#58111A' }
    ]
  },
  {
    id: 'elegant-black-croc-textured-mini-bag',
    name: 'Elegant Black Croc-Textured Mini Bag',
    slug: 'elegant-black-croc-textured-mini-bag',
    price: 3000,
    originalPrice: 3800,
    category: 'the-mini-edit',
    categoryLabel: 'The Mini Edit',
    image: 'https://lumerah.pk/uploads/products/1772565499_ac1ee048548633565bc9.jpeg',
    description: 'Glossy embossed crocodile texture with a sculpted top handle and removable curb-chain crossbody strap. Effortlessly elevates any evening attire.',
    material: 'Glossy embossed croc vegan leather, polished alloy chain',
    dimensions: '8.5" (W) x 6" (H) x 3" (D)',
    inStock: true,
    isSale: true,
    featured: true,
    colors: [
      { name: 'Onyx Black', hex: '#1A1A1A' }
    ]
  },
  {
    id: 'minimalistic-bush-beige-crescent-shoulder-bag',
    name: 'Minimalistic Bush Beige Crescent Shoulder Bag',
    slug: 'minimalistic-bush-beige-crescent-shoulder-bag',
    price: 3000,
    category: 'shoulder-bags',
    categoryLabel: 'Shoulder Bags',
    image: 'https://lumerah.pk/uploads/products/1772737623_1cd069a29fca816e30a6.jpg',
    description: 'Contemporary crescent half-moon silhouette tailored to fit seamlessly under the arm. Ultra lightweight with magnetic flap closure.',
    material: 'Matte smooth vegan nappa leather',
    dimensions: '10.5" (W) x 7" (H) x 2.8" (D)',
    inStock: true,
    featured: true,
    colors: [
      { name: 'Bush Beige', hex: '#D7C7B0' },
      { name: 'Warm Taupe', hex: '#B29F8D' }
    ]
  },
  {
    id: 'imported-tote-bag',
    name: 'Imported Tote Bag',
    slug: 'imported-tote-bag',
    price: 11000,
    category: 'totes',
    categoryLabel: 'Totes',
    image: 'https://lumerah.pk/uploads/products/1774808804_8b33fe76a8ee5243a643.jpg',
    description: 'Exclusive imported executive tote crafted from ultra-durable premium textured leather. Features dual reinforced handles and dedicated laptop/tablet compartment.',
    material: 'Imported heavy pebble grain leather with reinforced lining',
    dimensions: '16" (W) x 12" (H) x 6" (D)',
    inStock: true,
    isNew: true,
    featured: true,
    colors: [
      { name: 'Classic Black', hex: '#111111' },
      { name: 'Saddle Tan', hex: '#8B5A2B' }
    ]
  },
  {
    id: 'the-elara-tote',
    name: 'The Elara Tote',
    slug: 'the-elara-tote',
    price: 3500,
    category: 'totes',
    categoryLabel: 'Totes',
    image: 'https://lumerah.pk/uploads/products/1774436810_448d0499b0529d401c0c.jpg',
    description: 'A sophisticated tri-tone signature tote blending deep black, warm tan, and soft beige tones. Includes detachable adjustable shoulder strap and zip compartment.',
    material: 'Multi-tone structured composite leather',
    dimensions: '12" (W) x 11" (H) x 4.8" (D)',
    inStock: true,
    isNew: true,
    featured: true,
    colors: [
      { name: 'Tri-Tone Harmony', hex: '#3B3028' },
      { name: 'Monochrome Black', hex: '#1C1C1C' }
    ]
  },
  {
    id: 'tory-burch-miller-shoulder-bag',
    name: 'Tory Burch Miller Shoulder Bag',
    slug: 'tory-burch-miller-shoulder-bag',
    price: 10000,
    category: 'branded-bags',
    categoryLabel: 'Branded Bags',
    image: 'https://lumerah.pk/uploads/products/1773684743_14b4c58a6aa8a3289392.jpg',
    description: 'Artisanal laser-cut medallion medallion logo emblem on supple grained calfskin. Two carrying options: braided shoulder strap or crossbody webbing strap.',
    material: 'Premium textured calfskin leather with polished gold logo',
    dimensions: '11" (W) x 7.5" (H) x 3.5" (D)',
    inStock: true,
    isNew: true,
    colors: [
      { name: 'Aged Cognac', hex: '#9E5B2E' },
      { name: 'Black Gold', hex: '#1F1F1F' }
    ]
  },
  {
    id: 'jacquemus-the-bambino-les-classiques-small-handbag',
    name: 'Jacquemus The Bambino LES CLASSIQUES Small Handbag',
    slug: 'jacquemus-the-bambino-les-classiques-small-handbag',
    price: 5000,
    category: 'the-mini-edit',
    categoryLabel: 'The Mini Edit',
    image: 'https://lumerah.pk/uploads/products/1773684441_d68160f57fc6f1eadfa7.jpg',
    description: 'Iconic structured mini envelope bag with padded top handle, magnetic flap closure, back patch pocket, and gold metallic letter branding.',
    material: 'Smooth calfskin finish with gold lettering',
    dimensions: '7" (W) x 3.8" (H) x 2.4" (D)',
    inStock: true,
    isNew: true,
    colors: [
      { name: 'Pristine White', hex: '#F5F5F0' },
      { name: 'Noir', hex: '#161616' }
    ]
  },
  {
    id: 'urban-royal-tote',
    name: 'Urban Royal Tote',
    slug: 'urban-royal-tote',
    price: 3000,
    category: 'totes',
    categoryLabel: 'Totes',
    image: 'https://lumerah.pk/uploads/products/1773482675_e494d5de700b34f897fd.png',
    description: 'Urban luxury with clean minimal stitching. Built for daily hustle, college, work, or weekend cafe visits without sacrificing structure.',
    material: 'Matte composite leather with durable canvas lining',
    dimensions: '13" (W) x 11.5" (H) x 5" (D)',
    inStock: true,
    isNew: true,
    colors: [
      { name: 'Royal Camel', hex: '#C19A6B' }
    ]
  },
  {
    id: 'oval-rhinestone-evening-clutch',
    name: 'Oval Rhinestone Evening Clutch',
    slug: 'oval-rhinestone-evening-clutch',
    price: 4950,
    category: 'clutch',
    categoryLabel: 'Clutch',
    image: 'https://lumerah.pk/uploads/products/1773482017_eabc998e7e74b35ace2a.jpg',
    description: 'Exquisite hard-shell oval clutch completely pavé-set with light-catching crystal rhinestones. Features a jeweled clasp and detachable snake chain.',
    material: 'Pavé crystal rhinestones on electroplated metal casing',
    dimensions: '8" (W) x 4.5" (H) x 2.2" (D)',
    inStock: true,
    isNew: true,
    colors: [
      { name: 'Champagne Gold', hex: '#E2CA9E' },
      { name: 'Silver Starlight', hex: '#D8DCE0' }
    ]
  },
  {
    id: 'top-hand-leather-handbad',
    name: 'Top Handle Structured Leather Handbag',
    slug: 'top-hand-leather-handbad',
    price: 7000,
    category: 'hand-bags',
    categoryLabel: 'Hand Bags',
    image: 'https://lumerah.pk/uploads/products/1773481756_71661f607b3282704237.jpg',
    description: 'Polished trapezoid silhouette with sturdy rolled top handle and turn-lock metallic closure. An aristocratic piece for weddings and formal celebrations.',
    material: 'Structured patent and calf grain leather',
    dimensions: '11" (W) x 8" (H) x 4" (D)',
    inStock: true,
    isNew: true,
    colors: [
      { name: 'Burgundy Crimson', hex: '#681724' },
      { name: 'Classic Black', hex: '#1A1A1A' }
    ]
  },
  {
    id: 'coach-savannah-small-carryall-bag',
    name: 'Coach Savannah Small Carryall Bag',
    slug: 'coach-savannah-small-carryall-bag',
    price: 11000,
    category: 'branded-bags',
    categoryLabel: 'Branded Bags',
    image: 'https://lumerah.pk/uploads/products/1773481466_76a6da9ed610c6d3c8c5.jpg',
    description: 'Signature designer carryall silhouette with triple internal compartments, center zip divider, and signature gold hangtag.',
    material: 'Signature cross-grain coated leather',
    dimensions: '11.5" (W) x 8.5" (H) x 5" (D)',
    inStock: true,
    isNew: true,
    colors: [
      { name: 'Taupe Monogram', hex: '#9C8A79' }
    ]
  },
  {
    id: 'coach-mollie-tote',
    name: 'Coach Mollie Tote',
    slug: 'coach-mollie-tote',
    price: 11000,
    category: 'branded-bags',
    categoryLabel: 'Branded Bags',
    image: 'https://lumerah.pk/uploads/products/1773347728_2e66179e87affeba7ff9.png',
    description: 'Spacious double-face grain leather tote with slim shoulder straps and center zip compartment. Effortless luxury from boardroom to evening dinner.',
    material: 'Double face grain leather with gold tone hardware',
    dimensions: '13.25" (W) x 11" (H) x 5" (D)',
    inStock: true,
    colors: [
      { name: 'Warm Chalk', hex: '#EFECE6' }
    ]
  },
  {
    id: 'michael-kors-hendrix-bag-master-copy',
    name: 'Michael Kors Hendrix Bag (Master Edition)',
    slug: 'michael-kors-hendrix-bag-master-copy',
    price: 9500,
    category: 'shoulder-bags',
    categoryLabel: 'Shoulder Bags',
    image: 'https://lumerah.pk/uploads/products/1773250980_d3612fda2a4258a2cec5.jpeg',
    description: 'Architectural turn-lock shoulder bag with two-tone leather trim and structured flap. Masterful stitching and premium tactile feel.',
    material: 'Grained calf leather and coated canvas with brushed gold accents',
    dimensions: '10" (W) x 7" (H) x 3.5" (D)',
    inStock: true,
    colors: [
      { name: 'Cognac Multi', hex: '#7D4726' }
    ]
  },
  {
    id: 'gucci-jackie-notte-mini-bag-master-copy',
    name: 'Gucci Jackie Notte Mini Bag (Master Edition)',
    slug: 'gucci-jackie-notte-mini-bag-master-copy',
    price: 11000,
    category: 'branded-bags',
    categoryLabel: 'Branded Bags',
    image: 'https://lumerah.pk/uploads/products/1773245919_259e27b7271a59b8680a.jpeg',
    description: 'The legendary Jackie silhouette reimagined for nightlife. Features the iconic piston lock, chain strap with script lettering, and patent sheen.',
    material: 'Glossy patent leather with gold-toned piston lock hardware',
    dimensions: '7.5" (W) x 5.1" (H) x 2.4" (D)',
    inStock: true,
    colors: [
      { name: 'Ancora Deep Red', hex: '#590014' },
      { name: 'Jet Black', hex: '#111111' }
    ]
  },
  {
    id: 'flutter-crystal-clutch',
    name: 'Flutter Crystal Clutch',
    slug: 'flutter-crystal-clutch',
    price: 2000,
    originalPrice: 2800,
    category: 'clutch',
    categoryLabel: 'Clutch',
    image: 'https://lumerah.pk/uploads/products/1772739718_60c969bf502a8bddecd3.jpeg',
    description: 'Lightweight sparkling clutch embellished with delicate fluttering crystal motifs. Ideal for festive family dinners, weddings, and formal receptions.',
    material: 'Shimmering satin weave with faceted glass crystals',
    dimensions: '9" (W) x 5" (H) x 2" (D)',
    inStock: true,
    isSale: true,
    colors: [
      { name: 'Silver Shimmer', hex: '#D2D6DC' },
      { name: 'Golden Glow', hex: '#DEB887' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    city: 'Lahore, Punjab',
    rating: 5,
    comment: 'The Elara Tote exceeded my expectations! The leather quality is so buttery and structured. Delivery was right on time in 2 days with Cash on Delivery.',
    productName: 'The Elara Tote',
    date: 'March 28, 2026'
  },
  {
    id: '2',
    name: 'Mahnoor Tariq',
    city: 'Karachi, Sindh',
    rating: 5,
    comment: 'Ordered the Blush Pink Tote for my sister and she absolutely fell in love with the floral illustration. The packaging was immaculate. Truly premium experience!',
    productName: 'Blush Pink Tote With Floral Illustration',
    date: 'April 02, 2026'
  },
  {
    id: '3',
    name: 'Zainab Fatima',
    city: 'Islamabad',
    rating: 5,
    comment: 'I was hesitant about ordering bags online, but Lumerah made it so seamless. The Oval Rhinestone Clutch shone like real diamonds at my cousin’s wedding.',
    productName: 'Oval Rhinestone Evening Clutch',
    date: 'April 04, 2026'
  }
];
