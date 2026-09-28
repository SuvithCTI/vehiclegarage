export const servicesData = [
  // --- 3 CAR SERVICES ---
  {
    id: 'car-periodic-basic',
    name: 'Periodic Basic Service',
    vehicleType: 'car',
    category: 'maintenance',
    price: 2499,
    originalPrice: 3200,
    duration: '2 - 3 Hours',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Popular',
    image: '/images/service-car-basic.jpg',
    videoUrl: 'https://www.youtube.com/embed/g2b9p2eC6qM',
    shortDesc: 'Comprehensive engine oil replacement, 25-point inspection, and vital fluid top-ups for cars.',
    features: [
      'Engine Oil Replacement (Castrol/Mobil 1)',
      'Oil Filter Replacement (OEM)',
      'Air Filter & Cabin AC Filter Cleaning',
      '25-Point Comprehensive Safety Inspection',
      'Coolant & Brake Fluid Top-up',
      'Spark Plug Checking & Cleaning',
      'Complimentary Exterior Foam Wash & Vacuum'
    ],
    warranty: '1000 Kms or 1 Month Warranty',
    popularFor: ['Hatchback', 'Sedan', 'Compact SUV']
  },
  {
    id: 'car-comprehensive-master',
    name: 'Comprehensive Master Service',
    vehicleType: 'car',
    category: 'maintenance',
    price: 4999,
    originalPrice: 6500,
    duration: '4 - 5 Hours',
    rating: 5.0,
    reviewsCount: 218,
    badge: 'Best Value',
    image: '/images/service-car-master.jpg',
    videoUrl: 'https://www.youtube.com/embed/B_mS35xXn9g',
    shortDesc: 'Complete bumper-to-bumper car maintenance with full synthetic oil and brake servicing.',
    features: [
      'Full Synthetic Engine Oil Change',
      'All Filters Replacement (Oil, Air, AC)',
      'Front & Rear Brake Caliper Service & Cleaning',
      'Wheel Alignment & Dynamic Wheel Balancing',
      'OBD-II Computerized Engine Scan & Diagnostics',
      'Battery Health & Alternator Voltage Check',
      'Full Interior Deep Foam Shampoo & Wax Polish'
    ],
    warranty: '5000 Kms or 6 Months Warranty',
    popularFor: ['Sedan', 'SUV', 'Luxury Cars']
  },
  {
    id: 'car-ceramic-detailing',
    name: '9H Ceramic Coating & Deep Detailing',
    vehicleType: 'car',
    category: 'detailing',
    price: 8999,
    originalPrice: 12000,
    duration: '1 - 2 Days',
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Premium Gloss',
    image: '/images/service-car-ceramic.jpg',
    videoUrl: 'https://www.youtube.com/embed/xP5xQ5VqR3M',
    shortDesc: 'Multi-stage paint correction, swirl removal, and ultra-durable 9H nano ceramic shield.',
    features: [
      '3-Step Rotary Paint Correction & Scratch Removal',
      'Dual Layer 9H Ceramic Nano Shield Application',
      'Hydrophobic Water Repellent Glass Treatment',
      'Alloy Wheel & Brake Caliper Ceramic Coating',
      'Leather Seat Conditioning & UV Interior Protection',
      'Headlight Restoration & Crystal Clear Seal'
    ],
    warranty: '2 Years Gloss & Hydrophobic Guarantee',
    popularFor: ['New Cars', 'Luxury Cars', 'Enthusiasts']
  },

  // --- 3 BIKE SERVICES ---
  {
    id: 'bike-periodic-general',
    name: 'Standard Bike General Service',
    vehicleType: 'bike',
    category: 'maintenance',
    price: 799,
    originalPrice: 1100,
    duration: '1.5 Hours',
    rating: 4.8,
    reviewsCount: 175,
    badge: 'Top Pick',
    image: '/images/service-bike-basic.jpg',
    videoUrl: 'https://www.youtube.com/embed/Vb8lT_QG8qY',
    shortDesc: 'Engine oil change, chain cleaning & lubing, brake inspection, spark plug tuning, and foam wash.',
    features: [
      'Engine Oil Replacement (Motul / Castrol Semi-Synthetic)',
      'Drive Chain Deep Cleaning, Tightening & Motul Lube',
      'Front & Rear Brake Shoe/Pad Cleaning & Adjustment',
      'Spark Plug & Air Filter Cleaning',
      'Clutch & Throttle Free Play Calibration',
      'Electrical Battery & Lighting Checkup',
      'High-Pressure Foam Wash & Tyre Polish'
    ],
    warranty: '1000 Kms / 30 Days Warranty',
    popularFor: ['Commuter Bikes', 'Scooters (Activa/Jupiter)', '100-200cc Bikes']
  },
  {
    id: 'bike-superbike-tune',
    name: 'Superbike Master Service & Dyno Check',
    vehicleType: 'bike',
    category: 'maintenance',
    price: 2899,
    originalPrice: 3800,
    duration: '3 - 4 Hours',
    rating: 5.0,
    reviewsCount: 112,
    badge: 'Pro Performance',
    image: '/images/service-bike-superbike.jpg',
    videoUrl: 'https://www.youtube.com/embed/5H-oUo23wXk',
    shortDesc: 'Specialized track-ready service for 250cc+ & Superbikes (KTM, Royal Enfield, Kawasaki, BMW, Ducati).',
    features: [
      '100% Synthetic Motul 300V / Liqui Moly Racing Oil',
      'K&N / OEM Air Filter Cleaning & Oiling',
      'Ultrasonic Fuel Injector & Throttle Body Cleaning',
      'Brake Bleeding with DOT 5.1 Racing Brake Fluid',
      'Fork Suspension Inspection & Seal Health Check',
      'ECU Diagnostic Scan & Error Code Rectification',
      'Chain O-ring Safe Ultrasonic Wash & Wax'
    ],
    warranty: '3000 Kms / 3 Months Warranty',
    popularFor: ['Royal Enfield', 'KTM Duke/RC', 'Kawasaki', 'BMW GS', 'Harley-Davidson']
  },
  {
    id: 'bike-foam-wash-polish',
    name: 'Bike Deep Foam Wash & Ceramic Wax',
    vehicleType: 'bike',
    category: 'detailing',
    price: 399,
    originalPrice: 600,
    duration: '45 Mins',
    rating: 4.9,
    reviewsCount: 230,
    badge: 'Quick Shine',
    image: '/images/service-bike-wash.jpg',
    videoUrl: 'https://www.youtube.com/embed/2uJ85w-Y0mQ',
    shortDesc: 'pH-neutral thick foam bath, degreasing, tyre dresser, and high-gloss polymer paint wax.',
    features: [
      'High-Pressure Snow Foam Pre-Wash & Decontamination',
      'Engine Bay & Chain Sprocket Degreasing',
      'Matte / Gloss Safe Paint Protection Wax',
      'Anti-Rust Coating on Exhaust & Chrome Bits',
      'Silicone Tyre & Plastic Trim Dressing'
    ],
    warranty: 'Instant High Gloss',
    popularFor: ['All Bikes & Scooters']
  }
];

export const packageCategories = [
  { id: 'all', label: 'All Services', icon: 'Wrench' },
  { id: 'car', label: 'Car Services (3)', icon: 'Car' },
  { id: 'bike', label: 'Bike Services (3)', icon: 'Bike' },
  { id: 'maintenance', label: 'Periodic Maintenance', icon: 'CheckCircle' },
  { id: 'detailing', label: 'Washing & Detailing', icon: 'Sparkles' }
];
