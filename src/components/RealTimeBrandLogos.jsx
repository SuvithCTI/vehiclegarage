import React from 'react';

/**
 * Real-Time Animated OEM & Performance Brand Logos
 * Each logo features authentic brand geometry + real-time animated CSS/SVG elements
 */

export const BoschLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    {/* Bosch spark armature symbol */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <circle cx="12" cy="12" r="3" className="animate-pulse" />
    </svg>
  </div>
);

export const MotulLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    {/* Racing chevrons */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M4 18L10 6H14L8 18H4Z" />
      <path d="M12 18L18 6H22L16 18H12Z" className="opacity-80" />
    </svg>
  </div>
);

export const Mobil1Logo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    {/* Mobil '1' racing velocity badge */}
    <span className="font-black text-sm tracking-tighter italic text-red-400 drop-shadow">
      M<span className="text-white text-xs">1</span>
    </span>
  </div>
);

export const BremboLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    {/* Rotating brake rotor */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 animate-spin-slow stroke-white fill-none stroke-2">
      <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="4" />
    </svg>
    <div className="absolute w-2 h-2 rounded-full bg-white animate-ping"></div>
  </div>
);

export const CastrolLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    {/* Liquid titanium drop wave */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
      <path d="M12 3C12 3 6 10 6 15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15C18 10 12 3 12 3Z" className="fill-red-500/80 stroke-white" />
    </svg>
  </div>
);

export const LiquiMolyLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0 border border-blue-600">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    {/* German racing shield */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
      <path d="M12 2L4 6V12C4 17 8 21 12 22C16 21 20 17 20 12V6L12 2Z" className="fill-red-600/70" />
      <path d="M12 7V17 M8 12H16" stroke="white" strokeWidth="2" />
    </svg>
  </div>
);

export const DensoLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    <span className="font-black text-xs tracking-tighter">DN</span>
  </div>
);

export const NgkLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    {/* Spark plug lightning bolt */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-200 stroke-white stroke-1">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" className="animate-pulse" />
    </svg>
  </div>
);

export const RoyalEnfieldLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shadow-sm overflow-hidden shrink-0 border border-amber-500/40">
    {/* Classic wing emblem */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12 6L4 10L6 14L12 11L18 14L20 10L12 6Z" className="animate-float" />
    </svg>
  </div>
);

export const KtmLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    <span className="font-black text-xs italic tracking-tighter">KTM</span>
  </div>
);

export const BmwLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center shadow-sm overflow-hidden shrink-0 border border-sky-400">
    {/* BMW Rotating Roundel Quadrants */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 animate-spin-slow">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#38bdf8" strokeWidth="2" />
      <path d="M12 2A10 10 0 0 1 22 12H12V2Z" fill="#0284c7" />
      <path d="M12 22A10 10 0 0 1 2 12H12V22Z" fill="#0284c7" />
      <path d="M2 12A10 10 0 0 1 12 2V12H2Z" fill="#ffffff" />
      <path d="M22 12A10 10 0 0 1 12 22V12H22Z" fill="#ffffff" />
    </svg>
  </div>
);

export const HyundaiLogo = () => (
  <div className="relative w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-white shadow-sm overflow-hidden shrink-0">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none"></div>
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
      <ellipse cx="12" cy="12" rx="9" ry="6" transform="rotate(-15 12 12)" />
      <path d="M9 8L15 16" />
    </svg>
  </div>
);
