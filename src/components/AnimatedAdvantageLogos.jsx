import React from 'react';
import { 
  Award, 
  Sparkles, 
  Truck, 
  Cpu, 
  Radio, 
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

/**
 * 1. Animated OEM Certification Logo
 * Features: Outer rotating precision calibration ring, shimmering metallic gradient,
 * central floating award emblem, and glowing orbiting sparkle.
 */
export const AnimatedOemLogo = () => {
  return (
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center shadow-md shadow-red-500/25 overflow-hidden group-hover:scale-105 transition-transform">
      {/* Light shimmer sweep reflection */}
      <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep pointer-events-none"></div>

      {/* Rotating precision calibration ring */}
      <svg className="absolute inset-0 w-full h-full animate-spin-slow text-white/30" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>

      {/* Center Icon */}
      <Award className="w-6 h-6 text-white animate-float relative z-10" />

      {/* Orbiting Sparkle Star */}
      <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute top-2 right-2 animate-spin z-20" />
    </div>
  );
};

/**
 * 2. Animated GPS Doorstep Pickup & Delivery Logo
 * Features: Concentric sonar radar rings, rotating 360° radar sweep beam,
 * and floating delivery truck with active live ping.
 */
export const AnimatedGpsLogo = () => {
  return (
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-500/25 overflow-hidden group-hover:scale-105 transition-transform">
      
      {/* Concentric Radar Grid Rings */}
      <svg className="absolute inset-0 w-full h-full text-white/20" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Rotating Radar Scanner Beam */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 rounded-full animate-radar-sweep overflow-hidden">
          <div className="w-1/2 h-1/2 bg-gradient-to-br from-white/40 via-white/10 to-transparent origin-bottom-right transform rotate-45"></div>
        </div>
      </div>

      {/* Center Vehicle Icon */}
      <Truck className="w-6 h-6 text-white animate-float relative z-10" />

      {/* Live GPS Ping Wave Dot */}
      <span className="absolute top-2 right-2 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-200"></span>
      </span>
    </div>
  );
};

/**
 * 3. Animated Hi-Tech Diagnostics Logo
 * Features: Computerized microchip with vertical sweeping laser scanner line,
 * gold micro-connector pins, and active telemetry pulse.
 */
export const AnimatedDiagnosticsLogo = () => {
  return (
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-500/25 overflow-hidden group-hover:scale-105 transition-transform">
      
      {/* Vertical Diagnostic Laser Scanner Line */}
      <div className="absolute inset-x-0 animate-laser-scan bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_rgba(6,182,212,0.9)] z-20 pointer-events-none"></div>

      {/* Circuit Micro-Pins Top & Bottom */}
      <div className="absolute inset-1 border border-white/20 rounded-xl pointer-events-none">
        <div className="absolute -top-1 left-2 right-2 flex justify-around">
          <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
          <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
          <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
        </div>
        <div className="absolute -bottom-1 left-2 right-2 flex justify-around">
          <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
          <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
          <span className="w-1 h-1 bg-cyan-300 rounded-full"></span>
        </div>
      </div>

      {/* Center Microprocessor Core */}
      <Cpu className="w-6 h-6 text-white animate-pulse relative z-10" />

      {/* Live OBD-II Signal Dot */}
      <span className="absolute top-2 right-2 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
      </span>
    </div>
  );
};

/**
 * 4. Animated Live Service Updates Logo
 * Features: Radiating broadcast radio transmission arcs, pulsing live signal beacon,
 * and dynamic communication icon.
 */
export const AnimatedLiveUpdatesLogo = () => {
  return (
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 overflow-hidden group-hover:scale-105 transition-transform">
      
      {/* Radiating Broadcast Wave Rings */}
      <svg className="absolute inset-0 w-full h-full text-white/25" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
        <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Center Radio Wave Broadcast Icon */}
      <Radio className="w-6 h-6 text-white animate-pulse relative z-10" />

      {/* Live Recording Beacon */}
      <span className="absolute top-2 right-2 flex h-3 w-3 z-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
      </span>
    </div>
  );
};
