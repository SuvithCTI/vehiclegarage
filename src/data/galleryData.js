export const galleryData = [
  {
    id: 'gal-1',
    type: 'image',
    category: 'car',
    categoryLabel: 'Car Performance',
    vehicle: 'Audi RS7 Sportback (4.0L Twin-Turbo V8)',
    title: 'Hunter 3D Laser 4-Wheel Alignment & Chassis Calibration',
    shortDescription: 'Precision digital optical sensors attached to high-performance alloy wheels on a heavy-duty drive-on scissor lift.',
    fullDescription: 'Complete computerized suspension geometry realign and dynamic chassis calibration for an Audi RS7 following high-speed track testing and cornering optimization.',
    url: '/images/gallery-wheel-align.jpg',
    duration: '2.5 Hours',
    technician: 'Vikramaditya S. (Senior Chassis Specialist)',
    warranty: '6 Months / 5,000 Km Laser Guarantee',
    tags: ['Laser Alignment', 'Audi RS7', 'Chassis Tuning', 'Hunter HawkEye'],
    keyHighlights: [
      { label: 'Tolerance', value: '±0.02° Laser True' },
      { label: 'Turnaround', value: '2.5 Hours' },
      { label: 'Quality Score', value: '100% Pass' }
    ],
    procedures: [
      'Hunter HawkEye Elite high-definition 4-target sensor fixture mounting',
      'Camber, Caster, and Individual Toe angles dialed to factory motorsport spec',
      'Electronic Steering Angle Sensor (SAS) reset via Bosch OBD-II telemetry',
      'Dynamic high-speed rolling road balance verification up to 160 km/h'
    ],
    partsUsed: ['OEM Audi Tie-Rod Lock Nuts', 'Hunter QuickGrip Wheel Clamps', 'Precision Alignment Shims'],
    beforeAfter: {
      issue: 'Steering pulling left under hard acceleration; 0.45° toe out causing inner tire scrubbing.',
      result: 'Dead-center steering return, 0.00° laser straight line stability, enhanced high-speed tire longevity.'
    }
  },
  {
    id: 'gal-2',
    type: 'image',
    category: 'workshop',
    categoryLabel: 'Brakes & Hydraulics',
    vehicle: 'McLaren 720S & High-Performance Supercars',
    title: 'Brembo Carbon Ceramic Brake Caliper & Rotor Rebuild',
    shortDescription: 'Close-up macro detail of a cross-drilled slotted carbon ceramic rotor and multi-piston high-performance caliper.',
    fullDescription: 'Complete hydraulic overhaul, high-temp silicone seal installation, and track-spec DOT 5.1 fluid bleed for a 6-piston monobloc Brembo carbon ceramic system.',
    url: '/images/gallery-brake-caliper.jpg',
    duration: '4 Hours',
    technician: 'Rahul Menon (Performance Brake Engineer)',
    warranty: '1 Year / 10,000 Km Performance Warranty',
    tags: ['Brembo', 'Carbon Ceramic', 'McLaren', 'Track Ready'],
    keyHighlights: [
      { label: 'Piston Count', value: '6-Piston Monobloc' },
      { label: 'Fluid Spec', value: 'DOT 5.1 High Temp' },
      { label: 'Braking G-Force', value: '1.45G Peak' }
    ],
    procedures: [
      'Ultrasonic bath cleaning of multi-piston aluminum caliper housings',
      'Installation of high-temp Brembo genuine silicone dust boots & piston seals',
      'Micrometer runout inspection of cross-drilled slotted carbon ceramic disc',
      'Pressure vacuum bleeding with Motul RBF 660 synthetic racing fluid'
    ],
    partsUsed: ['Genuine Brembo Carbon-Ceramic Pads', 'Motul RBF 660 Factory Line Fluid', 'Brembo Titanium Anti-Rattle Springs'],
    beforeAfter: {
      issue: 'Spongy pedal feel at high operating temperatures and minor fluid degradation from track usage.',
      result: 'Instant razor-sharp bite, zero brake fade past 600°C, factory pedal stiffness restored.'
    }
  },
  {
    id: 'gal-3',
    type: 'image',
    category: 'workshop',
    categoryLabel: 'Engine Overhauls',
    vehicle: 'Ford Mustang GT 5.0L Coyote V8',
    title: 'Precision V8 Racing Engine Overhaul & Dyno Blueprinting',
    shortDescription: 'Full motorsport engine teardown and torque rebuild on a 360-degree rotating stand with blue Snap-on workstation.',
    fullDescription: 'Complete ground-up motorsport engine overhaul including cylinder honing, forged rod fitting, micro-polished crankshaft assembly, and digital torque angle angle tightening.',
    url: '/images/gallery-engine-build.jpg',
    duration: '3 Days',
    technician: 'Arjun Deshmukh (Lead Engine Architect)',
    warranty: '2 Years / 25,000 Km Comprehensive Powertrain Warranty',
    tags: ['Engine Rebuild', 'V8 Power', 'Motorsport', 'Blueprinted'],
    keyHighlights: [
      { label: 'Engine Type', value: '5.0L DOHC V8' },
      { label: 'Dyno Output', value: '460 BHP @ 7000 RPM' },
      { label: 'Compression', value: '12.0:1 Balanced' }
    ],
    procedures: [
      'Cylinder block chemical hot-tank de-greasing and micro-honing crosshatch inspection',
      'Forged piston & H-beam connecting rod balancing to within 0.1 gram tolerance',
      'Multi-angle valve job with high-temperature titanium retainers',
      'Snap-on digital electronic torque-to-yield angle tightening on all main & head studs'
    ],
    partsUsed: ['Mahle Motorsport Forged Pistons', 'ARP 2000 Head Studs', 'Cometic Multi-Layer Steel Gaskets', 'Motul 300V Chrono 10W-40'],
    beforeAfter: {
      issue: 'Excessive blow-by gases, low compression on cylinders 3 & 7, and oil consumption under load.',
      result: 'Silky smooth high-RPM powerband, balanced 210 PSI compression across all 8 cylinders, +28 WHP gain.'
    }
  },
  {
    id: 'gal-4',
    type: 'image',
    category: 'bike',
    categoryLabel: 'Custom Motorcycle Builds',
    vehicle: 'Royal Enfield Continental GT 650 Twin',
    title: 'Custom Royal Enfield Continental GT 650 Café Racer Build',
    shortDescription: 'British Racing Green custom café racer build with gold spoke rims, polished twin exhaust, and handcrafted leather saddle.',
    fullDescription: 'Complete bespoke cafe racer transformation featuring hand-stitched tan saddle, high-flow stainless twin megaphones, custom aluminum clip-ons, and stage-2 ECU tune.',
    url: '/images/gallery-bike-custom.jpg',
    duration: '10 Days',
    technician: 'Sameer Rao (Custom Bike Fabricator)',
    warranty: '1 Year Custom Craftsmanship Guarantee',
    tags: ['Royal Enfield', 'Custom Build', 'Cafe Racer', 'Handcrafted'],
    keyHighlights: [
      { label: 'Displacement', value: '648cc Parallel Twin' },
      { label: 'Weight Shaved', value: '-14 kg' },
      { label: 'Exhaust Note', value: '98 dB Deep Rumble' }
    ],
    procedures: [
      'Subframe loop modification and integrated LED brake light integration',
      'Hand-fabricated polished stainless steel 2-into-2 free flow headers and mufflers',
      'Custom gold anodized aluminum rim lacing with heavy-duty stainless steel spokes',
      'Custom dyno map flash removing top-end speed limiter and smoothing torque curve'
    ],
    partsUsed: ['Hand-Formed Aluminum Flyscreen', 'Custom CNC Bar-End Mirrors', 'Pirelli Phantom Sportscomp Tires', 'K&N High-Flow Air Filter'],
    beforeAfter: {
      issue: 'Stock heavy cruiser ergonomics and muted factory twin exhaust note with flat midrange flat-spot.',
      result: 'Aggressive roadster posture, weight reduced by 14kg, thrilling visceral sound and instant throttle punch.'
    }
  },
  {
    id: 'gal-5',
    type: 'image',
    category: 'car',
    categoryLabel: 'Supercar Diagnostics',
    vehicle: 'Porsche 911 Carrera S (992 Gen)',
    title: 'Porsche 911 Diagnostic Health Scan & Dual-Clutch PDK Calibration',
    shortDescription: 'State-of-the-art climate-controlled garage floor with computerized Bosch terminals and luxury multi-brand service bays.',
    fullDescription: 'Complete 80-sensor vehicle telematics audit, PDK dual-clutch transmission clutch point relearn, and active aero spoiler mechanism servicing.',
    url: '/images/gallery-supercar-studio.jpg',
    duration: '3.5 Hours',
    technician: 'Vikramaditya S. (Porsche PIWIS Specialist)',
    warranty: '6 Months Full System Coverage',
    tags: ['Porsche Studio', 'PDK Calibration', 'Diagnostic Prep', 'Luxury Bay'],
    keyHighlights: [
      { label: 'Sensors Audited', value: '80+ Live Modules' },
      { label: 'Gear Shift Speed', value: 'Sub-100ms PDK' },
      { label: 'Diagnostic Pass', value: '100% Zero Faults' }
    ],
    procedures: [
      'PIWIS-III OEM dealer diagnostic handshake and full CAN-Bus network query',
      'PDK wet clutch engagement kiss-point recalibration under controlled thermal conditions',
      'Bi-turbo boost leak smoke test across high-pressure charge pipes and intercoolers',
      'Dynamic battery AGM charging curve health check and alternator load test'
    ],
    partsUsed: ['Mobil 1 ESP X3 0W-40 Synthetic', 'OEM Porsche Air/Oil Separator', 'OEM Cabin Micro-filters'],
    beforeAfter: {
      issue: 'Low-speed hesitation when engaging 1st to 2nd gear and intermittent boost pressure fluctuation.',
      result: 'Instant butter-smooth low-speed creep, flawless lightning shifts, peak 1.2 bar boost restored.'
    }
  },
  {
    id: 'gal-6',
    type: 'image',
    category: 'bike',
    categoryLabel: 'Superbike Tuning',
    vehicle: 'Ducati Panigale V4 S (1,103cc Desmosedici Stradale)',
    title: 'Ducati Panigale V4 S Desmo Service & Dyno Calibration',
    shortDescription: 'Specialized 2-wheeler performance tuning garage with clean epoxy floor, ambient LED strips, and diagnostic rigs.',
    fullDescription: 'Comprehensive Desmodromic valve clearance adjustment, titanium exhaust valve check, Öhlins electronic suspension firmware update, and dyno mapping.',
    url: '/images/gallery-superbike-detailing.jpg',
    duration: '2 Days',
    technician: 'Karan Varma (Ducati Certified Master Tech)',
    warranty: '1 Year Track & Street Warranty',
    tags: ['Superbike Suite', 'Ducati', 'Desmo Service', 'Performance'],
    keyHighlights: [
      { label: 'Valve Timing', value: 'Desmo 16-Valve' },
      { label: 'Wheel HP', value: '214 BHP @ 13,000 RPM' },
      { label: 'ECU Mapping', value: 'Race Pro Config' }
    ],
    procedures: [
      'Full bodywork disassembly and precision Desmodromic valve shim clearance inspection (0.05mm precision)',
      'Installation of heavy-duty timing belts with electronic frequency tension calibration',
      'Spark plug replacement with ultra-fine wire iridium NGK motorsport plugs',
      'Dynojet wideband air-fuel ratio tuning across all 4 ride modes (Race, Sport, Street, Wet)'
    ],
    partsUsed: ['OEM Ducati Desmo Valve Shims', 'NGK Laser Iridium Racing Plugs', 'Motul 300V Factory Line 15W-50', 'Brembo Z04 Brake Pads'],
    beforeAfter: {
      issue: 'Approaching 24,000km Desmo service threshold; rough idle and minor valve tick at cold startup.',
      result: 'Quiet, crisp mechanical harmony, razor-sharp throttle modulation, certified dyno chart +12 BHP.'
    }
  },
  {
    id: 'gal-7',
    type: 'image',
    category: 'detailing',
    categoryLabel: 'Paint Protection & Detailing',
    vehicle: 'BMW M4 Competition Coupe (Isle of Man Green)',
    title: 'Multi-Stage Paint Correction & 9H Graphene Ceramic Coating',
    shortDescription: 'pH-neutral thick snow foam lifting grime and microscopic contaminants prior to multi-stage paint correction.',
    fullDescription: '100% dust-free darkroom detailing involving 3-stage rotary compounding to eliminate 95%+ swirl marks, followed by double-layer 9H Graphene Ceramic shield.',
    url: '/images/service-car-ceramic.jpg',
    duration: '24 Hours',
    technician: 'Farhan Qureshi (Master Detailer & Coating Specialist)',
    warranty: '3-Year Gloss & Hydrophobic Warranty',
    tags: ['Snow Foam', 'Detailing', 'BMW M4', '9H Ceramic'],
    keyHighlights: [
      { label: 'Gloss Units', value: '98.5 GU (Mirror)' },
      { label: 'Coating Hardness', value: '9H Graphene Matrix' },
      { label: 'Water Contact Angle', value: '115° Super Hydrophobic' }
    ],
    procedures: [
      'Heavy snow foam soak, iron decontaminant spray & synthetic clay bar decontamination',
      '3-stage paint correction using Rupes Bigfoot dual-action polisher with Menzerna micro-abrasives',
      'Isopropanol alcohol (IPA) panel wipe-down removing all polishing oils',
      'Dual-layer application of 9H Graphene Ceramic Coating cured under infrared heat lamps'
    ],
    partsUsed: ['Gyeon Q2 Infinite Graphene Ceramic', 'Rupes Microfiber Cutting Pads', 'Menzerna 400 & 3800 Polishes', 'CarPro Hydro2 Sealant'],
    beforeAfter: {
      issue: 'Extensive dealership wash swirl marks, water spots on clearcoat, and dull gloss reflection.',
      result: 'Deep mirror-like liquid green reflection, 0% visible swirl marks, self-cleaning hydrophobic sheeting.'
    }
  },
  {
    id: 'gal-8',
    type: 'image',
    category: 'workshop',
    categoryLabel: 'ECU & Diagnostics',
    vehicle: 'Mercedes-Benz E-Class & Luxury Fleet',
    title: 'Bosch Automated Master OBD-II Live Diagnostic Terminal',
    shortDescription: 'Live ECU sensor scanning, CAN-bus network health check, and dynamic throttle body calibration.',
    fullDescription: 'Comprehensive deep telemetry scan across 120+ control modules, automated battery load analysis, catalytic converter efficiency test, and live fuel rail pressure calibration.',
    url: '/images/service-car-basic.jpg',
    duration: '1.5 Hours',
    technician: 'Vikramaditya S. (Diagnostic Telemetry Lead)',
    warranty: 'Digital Diagnostic Report with 6-Month Pass',
    tags: ['ECU Scan', 'Live Telemetry', 'Bosch OBD-II', 'Mercedes E-Class'],
    keyHighlights: [
      { label: 'Modules Scanned', value: '120+ Microcontrollers' },
      { label: 'Data Refresh Rate', value: '50ms Real-Time' },
      { label: 'Report Format', value: 'Digital 15-Page PDF' }
    ],
    procedures: [
      'Comprehensive electronic handshake across Engine, Transmission, ABS, SRS, and Climate ECUs',
      'Live fuel trim monitoring (STFT / LTFT) under progressive throttle loading',
      'O2 sensor waveform oscillation test verifying catalytic converter conversion rate >98%',
      'Electronic throttle body position sensor adaptation and idle speed recalibration'
    ],
    partsUsed: ['Bosch KTS Diagnostic Interface', 'OEM Mercedes-Benz Software License', 'OEM Multi-Contact Terminal Probes'],
    beforeAfter: {
      issue: 'Intermittent Check Engine Light (P0171 System Too Lean) and sporadic idle RPM hunting.',
      result: 'Fault isolated to minor vacuum line crack; sealed and ECU adapted to flawless 720 RPM idle.'
    }
  }
];
