import React, { useId } from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  ShieldCheck, 
  Award, 
  Heart, 
  CheckCircle2, 
  Car, 
  Bike, 
  Sparkles, 
  Users, 
  Calendar,
  ExternalLink,
  Zap,
  Gauge,
  Activity
} from 'lucide-react';

/* 3D Master Automotive Mission Emblem */
const MissionEngineBadge = () => {
  const uid = useId().replace(/:/g, '_');
  return (
    <div className="relative w-16 h-16 shrink-0 group-hover:scale-105 transition-transform duration-300">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_6px_14px_rgba(229,57,53,0.45)]" fill="none">
        <defs>
          <linearGradient id={`mBezel_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="75%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <radialGradient id={`mRed_${uid}`} cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="35%" stopColor="#e52d27" />
            <stop offset="70%" stopColor="#990000" />
            <stop offset="100%" stopColor="#4d0000" />
          </radialGradient>
          <linearGradient id={`mWrench_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#e2e8f0" />
            <stop offset="60%" stopColor="#94a3b8" />
            <stop offset="85%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <radialGradient id={`mGold_${uid}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fffdf0" />
            <stop offset="30%" stopColor="#fde047" />
            <stop offset="70%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#854d0e" />
          </radialGradient>
          <filter id={`mShadow_${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* 3D Outer Chrome Bezel */}
        <rect x="4" y="4" width="92" height="92" rx="22" fill={`url(#mBezel_${uid})`} stroke="#334155" strokeWidth="0.8" />
        
        {/* Inner Titanium Inset */}
        <rect x="7.5" y="7.5" width="85" height="85" rx="19" fill="#0f172a" />
        
        {/* Deep Ruby Sunburst Enamel */}
        <rect x="9" y="9" width="82" height="82" rx="18" fill={`url(#mRed_${uid})`} />

        {/* Calibration Ticks */}
        <circle cx="50" cy="50" r="33" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="3 3.5" />

        {/* 3D Forged Torque Wrench & Spark Emblem */}
        <g filter={`url(#mShadow_${uid})`} transform="rotate(-45 50 50)">
          <path
            d="M 50 18 C 44 18 39.5 22.5 38.5 28.5 L 44 34.5 C 45 33.5 46.5 32.8 48.2 32.8 C 49.9 32.8 51.4 33.5 52.4 34.5 L 57.9 28.5 C 56.9 22.5 52.4 18 50 18 Z M 47 37.5 L 47 67 C 44.5 69 43.5 72.5 45 76 C 46.5 79.5 50.5 81 53.5 79.5 C 56.5 78 57.5 74 56 70.5 L 53 67 L 53 37.5 Z"
            fill={`url(#mWrench_${uid})`}
            stroke="#ffffff"
            strokeWidth="1"
          />
          <line x1="50" y1="39" x2="50" y2="66" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.9" />
          <circle cx="50" cy="73.5" r="2.8" fill="#450000" stroke="#ffffff" strokeWidth="0.8" />
        </g>

        {/* Glass Dome Highlight */}
        <path d="M 12 28 C 12 18 20 11 32 11 L 68 11 C 80 11 88 18 88 28 C 88 38 72 44 50 44 C 28 44 12 38 12 28 Z" fill="#ffffff" fillOpacity="0.3" pointerEvents="none" />

        {/* 24K Gold Ignition Flare */}
        <g transform="translate(68, 12)">
          <circle cx="8" cy="8" r="7" fill="#facc15" fillOpacity="0.35" />
          <circle cx="8" cy="8" r="4.2" fill={`url(#mGold_${uid})`} stroke="#ffffff" strokeWidth="0.8" />
          <circle cx="6.5" cy="6.5" r="1" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

/* 3D Smart Diagnostics & Workshop Bay Emblem */
const DiagnosticsBayBadge = () => {
  const uid = useId().replace(/:/g, '_');
  return (
    <div className="relative w-16 h-16 shrink-0 group-hover:scale-105 transition-transform duration-300">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_6px_14px_rgba(6,182,212,0.45)]" fill="none">
        <defs>
          <linearGradient id={`dBezel_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="75%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id={`dBlue_${uid}`} cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="35%" stopColor="#0284c7" />
            <stop offset="70%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#082f49" />
          </radialGradient>
          <linearGradient id={`dChrome_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#cffafe" />
            <stop offset="60%" stopColor="#67e8f9" />
            <stop offset="85%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#155e75" />
          </linearGradient>
          <filter id={`dShadow_${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* 3D Outer Cyan/Chrome Bezel */}
        <rect x="4" y="4" width="92" height="92" rx="22" fill={`url(#dBezel_${uid})`} stroke="#0e7490" strokeWidth="0.8" />
        
        {/* Inner Titanium Inset */}
        <rect x="7.5" y="7.5" width="85" height="85" rx="19" fill="#042f2e" />
        
        {/* Deep Cyan/Sapphire Telemetry Enamel */}
        <rect x="9" y="9" width="82" height="82" rx="18" fill={`url(#dBlue_${uid})`} />

        {/* Radar Optical Target Rings */}
        <circle cx="50" cy="50" r="33" fill="none" stroke="#a5f3fc" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="4 3" />
        <circle cx="50" cy="50" r="23" fill="none" stroke="#22d3ee" strokeOpacity="0.4" strokeWidth="0.8" />

        {/* 3D Computerized Microcontroller / OBD-II Processor Chip */}
        <g filter={`url(#dShadow_${uid})`}>
          {/* Main Silicon / Chrome Carrier */}
          <rect x="33" y="33" width="34" height="34" rx="8" fill={`url(#dChrome_${uid})`} stroke="#ffffff" strokeWidth="1.2" />
          
          {/* Inner Glowing Core */}
          <rect x="41" y="41" width="18" height="18" rx="4" fill="#082f49" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="50" cy="50" r="4.5" fill="#22d3ee" />
          <circle cx="50" cy="50" r="2" fill="#ffffff" />

          {/* Golden Pin Connectors */}
          {/* Top Pins */}
          <line x1="40" y1="27" x2="40" y2="33" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="27" x2="50" y2="33" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="27" x2="60" y2="33" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          {/* Bottom Pins */}
          <line x1="40" y1="67" x2="40" y2="73" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="67" x2="50" y2="73" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="67" x2="60" y2="73" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          {/* Left Pins */}
          <line x1="27" y1="40" x2="33" y2="40" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="27" y1="50" x2="33" y2="50" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="27" y1="60" x2="33" y2="60" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          {/* Right Pins */}
          <line x1="67" y1="40" x2="73" y2="40" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="67" y1="50" x2="73" y2="50" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
          <line x1="67" y1="60" x2="73" y2="60" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Glass Dome Highlight */}
        <path d="M 12 28 C 12 18 20 11 32 11 L 68 11 C 80 11 88 18 88 28 C 88 38 72 44 50 44 C 28 44 12 38 12 28 Z" fill="#ffffff" fillOpacity="0.3" pointerEvents="none" />

        {/* Active Laser Pulse Sensor */}
        <g transform="translate(68, 12)">
          <circle cx="8" cy="8" r="7" fill="#22d3ee" fillOpacity="0.4" />
          <circle cx="8" cy="8" r="4.2" fill="#06b6d4" stroke="#ffffff" strokeWidth="0.8" />
          <circle cx="8" cy="8" r="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

export const AboutUsView = () => {
  const { garageInfo, initiateBooking } = useGarage();

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner with High Opacity Background */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 p-8 sm:p-12 shadow-xl min-h-[220px] flex items-center">
        {/* High Opacity Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-header-bg.jpg"
            alt="ApexAuto Service Bays and Diagnostic Equipment"
            className="w-full h-full object-cover object-center scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md border border-red-400/40">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>Bangalore's Premier Auto & Bike Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] drop-shadow-md">
            Master Craftsmanship & Transparent Engineering
          </h1>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow">
            Founded with a commitment to bridge the gap between expensive dealership service centers and unreliable local garages through digital diagnostic transparency and certified technicians.
          </p>
        </div>
      </div>

      {/* Mission & Vision Grid with Authentic Real Workshop Photography Backgrounds & 3D Master Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Our Engineering Mission */}
        <div className="group relative rounded-3xl p-8 bg-white border border-slate-200 hover:border-[#E53935] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between">
          
          {/* Top Decorative Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E53935] via-amber-500 to-rose-500 z-20"></div>

          {/* REAL-TIME WORKSHOP PHOTOGRAPHY BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <img
              src="/images/gallery-engine-build.jpg"
              alt="Engineering Mission Bay"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/94 via-white/88 to-white/95"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              {/* 3D Master Emblem */}
              <MissionEngineBadge />

              <span className="inline-flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#E53935] border border-red-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Compromise</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 font-['Outfit']">Our Engineering Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                To provide transparent, high-precision vehicle maintenance for car and motorcycle owners with digital inspection logs, honest pricing, and zero unnecessary part replacements.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2">
              <li className="flex items-center space-x-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">100% Sealed Barcode OEM Oil & Genuine Filters</span>
              </li>
              <li className="flex items-center space-x-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Full Video Transparency on Replaced Components</span>
              </li>
              <li className="flex items-center space-x-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Trained Master Mechanics with ASE Credentials</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Hi-Tech Workshop Bays */}
        <div className="group relative rounded-3xl p-8 bg-white border border-slate-200 hover:border-cyan-500 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between">
          
          {/* Top Decorative Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 z-20"></div>

          {/* REAL-TIME WORKSHOP PHOTOGRAPHY BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <img
              src="/images/gallery-wheel-align.jpg"
              alt="Hi-Tech Diagnostic Bay"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/94 via-white/88 to-white/95"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              {/* 3D Smart Diagnostics Emblem */}
              <DiagnosticsBayBadge />

              <span className="inline-flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Smart Bays</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 font-['Outfit']">Hi-Tech Workshop Bays</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                Our multi-bay facility is equipped with automated pneumatic lifts, ultrasonic fuel injector cleaner baths, laser wheel aligners, and factory OBD-II diagnostic scanners.
              </p>
            </div>

            <ul className="space-y-2.5 pt-2">
              <li className="flex items-center space-x-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Bosch Computerized Diagnostic Terminals</span>
              </li>
              <li className="flex items-center space-x-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Dust-Free 9H Ceramic & PPF Detailing Studio</span>
              </li>
              <li className="flex items-center space-x-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Custom Superbike Dyno & Throttle Sync Rig</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Certifications Row */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6 shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase text-[#E53935] tracking-wider">Industry Accreditations</span>
          <h3 className="text-2xl font-black text-slate-900 font-['Outfit'] mt-1">Our Official Certifications</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">We maintain the highest global automotive standards and OEM partnerships.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'ISO 9001:2015', sub: 'Quality Management Certified', desc: 'Certified processes ensuring systematic vehicle inspection and zero-defect servicing.' },
            { title: 'ASE Certified', sub: 'Automotive Service Excellence', desc: 'Technicians tested and credentialed in engine repair, brakes, and electrical diagnostics.' },
            { title: 'Bosch Service Partner', sub: 'Authorized Diagnostic Hub', desc: 'Direct access to Bosch ECU diagnostic software, calibration rigs, and OEM parts catalog.' },
            { title: 'Brembo Expert', sub: 'High-Performance Brake Center', desc: 'Trained in composite rotors, performance calipers, and racing hydraulic bleed standards.' },
          ].map((cert, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#E53935]/40 transition shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-red-100 text-[#E53935] flex items-center justify-center font-bold text-xs">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="text-base font-black text-slate-900 font-['Outfit']">{cert.title}</h4>
              <p className="text-xs font-bold text-[#E53935]">{cert.sub}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Specs Table */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold uppercase text-[#E53935] tracking-wider">Facility Specifications</span>
          <h3 className="text-2xl font-black text-slate-900 font-['Outfit'] mt-1">ApexAuto Infrastructure</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-2xl font-black text-[#E53935] font-['Outfit']">8 Bays</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Car Hydraulic Lift Bays</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-2xl font-black text-amber-700 font-['Outfit']">4 Rigs</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Dedicated Superbike Stations</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-2xl font-black text-blue-600 font-['Outfit']">10,000 sq.ft</div>
            <div className="text-xs text-slate-600 font-medium mt-1">Climate-Controlled Floor</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-2xl font-black text-emerald-600 font-['Outfit']">100%</div>
            <div className="text-xs text-slate-600 font-medium mt-1">CCTV & Telemetry Monitored</div>
          </div>
        </div>
      </div>

      {/* Booking CTA Banner */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-white bg-slate-950 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-400">Ready For Precision Care?</span>
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit']">Experience Dealership-Grade Service Today</h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Book an appointment online in 60 seconds with free doorstep pickup & drop anywhere in Bangalore.
          </p>
        </div>

        <button
          onClick={initiateBooking}
          className="px-8 py-4 bg-[#E53935] hover:bg-red-600 text-white rounded-2xl text-sm font-bold shadow-lg shadow-red-500/30 transition transform hover:-translate-y-0.5 shrink-0 flex items-center space-x-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Service Now</span>
        </button>
      </div>

    </div>
  );
};
