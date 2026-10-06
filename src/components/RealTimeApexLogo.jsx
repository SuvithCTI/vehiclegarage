import React, { useId } from 'react';

/**
 * RealTimeApexLogo:
 * World-Class 3D Supercar Crest Emblem for ApexAuto.
 * Concept:
 * - Aerodynamic Racing Shield & Hexagonal Titanium Bezel
 * - Genuine Woven Carbon-Fiber Texture Dial
 * - Stylized 3D Aerodynamic "Apex Wing & Precision Wrench" Crest in Polished Liquid Chrome
 * - Deep Crimson Track-Line Glow
 * - 24K Gold Redline Peak Spark
 */
export const RealTimeApexLogo = ({ size = 'md', className = '' }) => {
  const uid = useId().replace(/:/g, '_');

  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16'
  };

  return (
    <div
      className={`relative ${sizeClasses[size] || sizeClasses.md} flex items-center justify-center shrink-0 select-none group transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-[0_6px_16px_rgba(229,57,53,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Chrome Bezel Gradient */}
          <linearGradient id={`bezel_${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#cbd5e1" />
            <stop offset="38%" stopColor="#64748b" />
            <stop offset="55%" stopColor="#ffffff" />
            <stop offset="78%" stopColor="#334155" />
            <stop offset="92%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Crimson Red Enamel Background Gradient */}
          <radialGradient id={`redGlow_${uid}`} cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#ff3838" />
            <stop offset="40%" stopColor="#e50914" />
            <stop offset="75%" stopColor="#990000" />
            <stop offset="100%" stopColor="#450000" />
          </radialGradient>

          {/* Carbon Fiber Mesh Pattern */}
          <pattern id={`carbon_${uid}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#121214" />
            <rect width="3" height="3" fill="#1e1e24" />
            <rect x="3" y="3" width="3" height="3" fill="#18181c" />
            <path d="M0 3L3 0M3 6L6 3" stroke="#2a2a32" strokeWidth="0.6" />
          </pattern>

          {/* Liquid Silver Chrome "A" & Tool Emblem Gradient */}
          <linearGradient id={`silverCrest_${uid}`} x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#f1f5f9" />
            <stop offset="45%" stopColor="#94a3b8" />
            <stop offset="65%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          {/* 24K Gold Peak Ignition Gem */}
          <radialGradient id={`goldPeak_${uid}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fffdf0" />
            <stop offset="25%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#854d0e" />
          </radialGradient>

          {/* Glass Crystal Reflection Gradient */}
          <linearGradient id={`crystalGlass_${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* 3D Drop Shadow */}
          <filter id={`crestShadow_${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#000000" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* 1. Outer Aerodynamic Supercar Shield (Titanium & Chrome Bezel) */}
        <path
          d="M 60 8
             C 85 8 110 16 110 32
             C 110 75 80 102 60 112
             C 40 102 10 75 10 32
             C 10 16 35 8 60 8 Z"
          fill="url(#bezel_${uid})"
          stroke="#0f172a"
          strokeWidth="1.2"
        />

        {/* 2. Inner Carbon Fiber Backing */}
        <path
          d="M 60 12.5
             C 82 12.5 104.5 19.5 104.5 34
             C 104.5 72 77 97 60 106.5
             C 43 97 15.5 72 15.5 34
             C 15.5 19.5 38 12.5 60 12.5 Z"
          fill={`url(#carbon_${uid})`}
        />

        {/* 3. Deep Ruby Track Enamel Center Glow */}
        <path
          d="M 60 15
             C 80 15 101 21.5 101 35
             C 101 70 75 93 60 102
             C 45 93 19 70 19 35
             C 19 21.5 40 15 60 15 Z"
          fill={`url(#redGlow_${uid})`}
          opacity="0.94"
        />

        {/* 4. Precision Tachometer Arc / Calibration Tick Marks */}
        <path
          d="M 28 42 C 28 24 92 24 92 42"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
        <path
          d="M 33 80 C 42 90 60 97 60 97 C 60 97 78 90 87 80"
          fill="none"
          stroke="#facc15"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />

        {/* 5. The Iconic "Apex" Stylized Wing & Master Wrench (Forged Liquid Chrome) */}
        <g filter={`url(#crestShadow_${uid})`}>
          {/* Stylized Aerodynamic "A" & Precision Caliper Wrench */}
          <path
            d="M 60 22
               L 82 72
               L 71 72
               L 66 59
               L 54 59
               L 49 72
               L 38 72
               Z
               M 60 38
               L 56.5 52
               L 63.5 52
               Z"
            fill={`url(#silverCrest_${uid})`}
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />

          {/* Central Precision Chrome Wrench Interlock */}
          <path
            d="M 60 33
               L 60 84
               M 54 84 L 66 84
               M 52 89 L 68 89"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Metallic Jaw Bolt Core */}
          <circle cx="60" cy="86" r="3.5" fill="#0f172a" stroke="#ffffff" strokeWidth="1" />
          <circle cx="60" cy="86" r="1.5" fill="#facc15" />

          {/* Left Wing Aerodynamic Blade Accent */}
          <path
            d="M 26 38 C 34 46 44 54 44 54 L 41 57 C 33 49 24 40 26 38 Z"
            fill="#ffffff"
            fillOpacity="0.85"
          />
          {/* Right Wing Aerodynamic Blade Accent */}
          <path
            d="M 94 38 C 86 46 76 54 76 54 L 79 57 C 87 49 96 40 94 38 Z"
            fill="#ffffff"
            fillOpacity="0.85"
          />
        </g>

        {/* 6. Crystal Glass Dome Reflection Arc */}
        <path
          d="M 20 34
             C 20 20 40 15 60 15
             C 80 15 100 20 100 34
             C 100 48 80 56 60 56
             C 40 56 20 48 20 34 Z"
          fill={`url(#crystalGlass_${uid})`}
          pointerEvents="none"
        />

        {/* 7. 24K Gold Ignition Apex Spark at the Crown */}
        <g transform="translate(60, 14)">
          {/* Flare Aura */}
          <circle cx="0" cy="0" r="8" fill="#facc15" fillOpacity="0.35" />
          <circle cx="0" cy="0" r="5" fill="#fef08a" fillOpacity="0.5" />
          
          {/* 3D Gold Apex Star */}
          <circle
            cx="0"
            cy="0"
            r="3.8"
            fill={`url(#goldPeak_${uid})`}
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          
          {/* Spark Star Rays */}
          <line x1="-6" y1="0" x2="6" y2="0" stroke="#ffffff" strokeWidth="0.9" strokeLinecap="round" />
          <line x1="0" y1="-6" x2="0" y2="6" stroke="#ffffff" strokeWidth="0.9" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
