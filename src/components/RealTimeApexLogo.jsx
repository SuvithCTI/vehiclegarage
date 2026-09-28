import React from 'react';
import { Wrench, Sparkles } from 'lucide-react';

/**
 * RealTimeApexLogo:
 * Interactive, real-time animated brand emblem for ApexAuto.
 * Features:
 * - Real-time rotating precision calibration gear ring
 * - Multi-layer shimmering metallic reflection sweep
 * - Real-time glowing spark & orbiting flare
 * - 3D depth with dual-tone gradient
 */
export const RealTimeApexLogo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  return (
    <div className={`relative ${sizeClasses[size] || sizeClasses.md} rounded-xl bg-gradient-to-br from-[#E53935] via-red-600 to-[#D97706] flex items-center justify-center shadow-md shadow-red-500/25 overflow-hidden group-hover:scale-105 transition-all duration-300 ${className}`}>
      {/* Real-time continuous metallic shimmer sweep */}
      <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none z-10"></div>

      {/* Real-time rotating precision mechanical ring */}
      <svg className="absolute inset-0 w-full h-full animate-spin-slow text-white/30 pointer-events-none" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="22" cy="22" r="14" fill="none" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      {/* Center Tool / Automotive Emblem */}
      <Wrench className={`${iconSizes[size] || iconSizes.md} text-white animate-float relative z-20 drop-shadow`} />

      {/* Real-time live active pulse beacon */}
      <span className="absolute top-1 right-1 flex h-2 w-2 z-30">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
      </span>
    </div>
  );
};
