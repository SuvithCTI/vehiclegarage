import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ChevronsLeftRight } from 'lucide-react';

export const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = 'BEFORE', afterLabel = 'AFTER', title, description }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let pos = (x / rect.width) * 100;
      if (pos < 5) pos = 5;
      if (pos > 95) pos = 95;
      setSliderPosition(pos);
    },
    []
  );

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition">
      {title && (
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-black text-slate-900 font-['Outfit']">{title}</h4>
            {description && <p className="text-xs text-slate-600 mt-0.5">{description}</p>}
          </div>
          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full flex items-center space-x-1 shrink-0">
            <Sparkles className="w-3 h-3" />
            <span>Interactive Slider</span>
          </span>
        </div>
      )}

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        className="relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-inner group"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full Width Base Layer) */}
        <img
          src={afterImg}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <span className="absolute bottom-3 right-3 z-10 bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-md border border-emerald-400/40 pointer-events-none">
          {afterLabel}
        </span>

        {/* BEFORE Image (Clipped Overlay Layer) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImg}
            alt="Before"
            className="absolute inset-y-0 left-0 h-full object-cover pointer-events-none max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
            }}
          />
          <span className="absolute bottom-3 left-3 z-10 bg-slate-950/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-md border border-white/20 pointer-events-none">
            {beforeLabel}
          </span>
        </div>

        {/* Draggable Divider Line & Knob */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical white glowing line */}
          <div className="w-0.5 h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)]"></div>

          {/* Center Grab Handle Knob */}
          <div className="absolute w-9 h-9 rounded-full bg-white text-slate-900 border-2 border-[#E53935] shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <ChevronsLeftRight className="w-4 h-4 text-[#E53935]" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
        <span>👈 Drag left for <strong>After</strong></span>
        <span>Drag right for <strong>Before</strong> 👉</span>
      </div>
    </div>
  );
};
