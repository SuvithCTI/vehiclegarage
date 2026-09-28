import React from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  ShieldCheck, 
  Award, 
  Wrench, 
  Cpu, 
  Heart, 
  CheckCircle2, 
  Car, 
  Bike, 
  Sparkles, 
  Users, 
  Code,
  Calendar,
  ExternalLink
} from 'lucide-react';

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
            alt="ApexAuto Garage Facility"
            className="w-full h-full object-cover object-center"
          />
          {/* Balanced gradient overlay for high image visibility and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md border border-red-400/40">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>Excellence In Automotive Craftsmanship</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] drop-shadow-md">
            About ApexAuto Garage & Bike Care
          </h1>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow">
            Founded with a passion for mechanical perfection, ApexAuto bridges the gap between high dealership pricing and unverified roadside garages through aerospace-grade diagnostic standards and genuine parts.
          </p>
        </div>
      </div>

      {/* Mission & Vision Grid with Colorful Real-time Moving Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Our Engineering Mission (Crimson / Amber Fire Theme) */}
        <div className="group relative rounded-3xl p-8 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/30 border-2 border-red-200/80 hover:border-red-400 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 overflow-hidden flex flex-col justify-between">
          
          {/* Top Decorative Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#E53935] via-amber-500 to-rose-500"></div>

          {/* REAL-TIME MOVING ANIMATED BACKGROUND ELEMENTS */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Moving Floating Glow Orb 1 */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gradient-to-br from-red-500/20 to-rose-400/20 blur-2xl animate-orb-1"></div>
            {/* Moving Floating Glow Orb 2 */}
            <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-gradient-to-tr from-amber-400/25 to-orange-400/15 blur-2xl animate-orb-2"></div>
            
            {/* Rotating Gear / Mechanical Motif in Background */}
            <div className="absolute -right-10 -top-10 w-44 h-44 text-red-500/10 animate-spin-slow">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="50" cy="50" r="38" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="28" />
                <path d="M50 2 v8 M50 90 v8 M2 50 h8 M90 50 h8 M16 16 l6 6 M78 78 l6 6 M16 84 l6-6 M78 22 l6-6" />
              </svg>
            </div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E53935] to-amber-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30 group-hover:scale-110 transition duration-300">
                <Wrench className="w-7 h-7" />
              </div>
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-red-100/80 text-[#E53935] border border-red-200">
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
              <li className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-red-100 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">100% Sealed Barcode OEM Oil & Genuine Filters</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-red-100 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Full Video Transparency on Replaced Components</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-red-100 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Trained Master Mechanics with ASE Credentials</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Hi-Tech Workshop Bays (Cyber Cyan / Electric Indigo Theme) */}
        <div className="group relative rounded-3xl p-8 bg-gradient-to-br from-white via-cyan-50/40 to-indigo-50/30 border-2 border-cyan-200/80 hover:border-cyan-400 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden flex flex-col justify-between">
          
          {/* Top Decorative Gradient Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

          {/* REAL-TIME MOVING ANIMATED BACKGROUND ELEMENTS */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Real-time Moving Laser Scanner Line */}
            <div className="animate-laser-scan bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>

            {/* Moving Floating Glow Orb 1 */}
            <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-2xl animate-orb-2"></div>
            {/* Moving Floating Glow Orb 2 */}
            <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-400/15 blur-2xl animate-orb-1"></div>
            
            {/* Rotating Radar / High-Tech Circle in Background */}
            <div className="absolute -right-8 -bottom-8 w-44 h-44 text-cyan-600/10 animate-radar-sweep">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="50" cy="50" r="42" />
                <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
                <line x1="50" y1="50" x2="50" y2="8" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition duration-300">
                <Cpu className="w-7 h-7" />
              </div>
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-800 border border-cyan-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
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
              <li className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-cyan-100 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Bosch Computerized Diagnostic Terminals</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-cyan-100 shadow-sm">
                <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">Dust-Free 9H Ceramic & PPF Detailing Studio</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-cyan-100 shadow-sm">
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
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {garageInfo.certifications.map((cert, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5 sm:space-y-2 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E53935] flex items-center justify-center mb-1">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">{cert.title}</h4>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-600 line-clamp-2">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
