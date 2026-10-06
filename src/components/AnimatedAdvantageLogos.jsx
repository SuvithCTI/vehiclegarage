import React from 'react';
import { 
  Award, 
  Sparkles, 
  Truck, 
  Cpu, 
  Radio, 
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  MapPin,
  Camera
} from 'lucide-react';

/**
 * 1. Real Image OEM Certification Logo
 * Features: Real genuine Brembo/OEM brake assembly photo, crimson glass gradient overlay,
 * floating gold award emblem, and live guarantee sparkle.
 */
export const AnimatedOemLogo = () => {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg shadow-red-500/20 border-2 border-red-500/40 group-hover:scale-105 group-hover:border-red-500 transition-all duration-300 shrink-0">
      {/* Real Photographic Image Background */}
      <img
        src="/images/gallery-brake-caliper.jpg"
        alt="Genuine OEM Spare Parts"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
      />
      {/* Red Tint & Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/50 to-red-600/30 backdrop-blur-[0.5px]"></div>

      {/* Floating Center Icon Badge */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
          <Award className="w-4 h-4 text-amber-300 animate-float" />
        </div>
      </div>

      {/* Live Sparkle Accent */}
      <span className="absolute top-1.5 right-1.5 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
      </span>
    </div>
  );
};

/**
 * 2. Real Image GPS Doorstep Pickup & Delivery Logo
 * Features: Real automotive workshop studio vehicle pickup photo, amber glass overlay,
 * floating transport truck icon, and pulsing GPS beacon.
 */
export const AnimatedGpsLogo = () => {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg shadow-amber-500/20 border-2 border-amber-500/40 group-hover:scale-105 group-hover:border-amber-500 transition-all duration-300 shrink-0">
      {/* Real Photographic Image Background */}
      <img
        src="/images/gallery-supercar-studio.jpg"
        alt="Doorstep Pick and Drop"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
      />
      {/* Amber Tint & Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/50 to-orange-600/30 backdrop-blur-[0.5px]"></div>

      {/* Floating Center Icon Badge */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
          <Truck className="w-4 h-4 text-amber-300 animate-float" />
        </div>
      </div>

      {/* Live GPS Ping Wave */}
      <span className="absolute top-1.5 right-1.5 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400 border border-white"></span>
      </span>
    </div>
  );
};

/**
 * 3. Real Image Hi-Tech Diagnostics Logo
 * Features: Real computerized laser wheel alignment & diagnostic scanner photo,
 * cyan/blue laser overlay, and active microprocessor telemetry.
 */
export const AnimatedDiagnosticsLogo = () => {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 border-2 border-blue-500/40 group-hover:scale-105 group-hover:border-blue-500 transition-all duration-300 shrink-0">
      {/* Real Photographic Image Background */}
      <img
        src="/images/gallery-wheel-align.jpg"
        alt="Computerized Bosch Diagnostics"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
      />
      {/* Blue/Cyan Tint & Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-indigo-900/50 to-cyan-600/30 backdrop-blur-[0.5px]"></div>

      {/* Sweeping Laser Scan Line */}
      <div className="absolute inset-x-0 animate-laser-scan bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_rgba(6,182,212,0.9)] z-10 pointer-events-none"></div>

      {/* Floating Center Icon Badge */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
          <Cpu className="w-4 h-4 text-cyan-300 animate-pulse" />
        </div>
      </div>

      {/* Live OBD-II Signal Dot */}
      <span className="absolute top-1.5 right-1.5 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400 border border-white"></span>
      </span>
    </div>
  );
};

/**
 * 4. Real Image Live Service Updates Logo
 * Features: Real master engine rebuild & live inspection photo,
 * emerald broadcast overlay, and live photo/video feed beacon.
 */
export const AnimatedLiveUpdatesLogo = () => {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/20 border-2 border-emerald-500/40 group-hover:scale-105 group-hover:border-emerald-500 transition-all duration-300 shrink-0">
      {/* Real Photographic Image Background */}
      <img
        src="/images/gallery-engine-build.jpg"
        alt="Live WhatsApp Inspection Updates"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
      />
      {/* Emerald Tint & Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-teal-900/50 to-emerald-600/30 backdrop-blur-[0.5px]"></div>

      {/* Floating Center Icon Badge */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-8 h-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
          <Camera className="w-4 h-4 text-emerald-300 animate-pulse" />
        </div>
      </div>

      {/* Live Recording Beacon */}
      <span className="absolute top-1.5 right-1.5 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-white"></span>
      </span>
    </div>
  );
};
