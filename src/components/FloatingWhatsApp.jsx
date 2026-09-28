import React, { useState } from 'react';
import { garageInfo } from '../data/garageInfo';

export const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneClean = garageInfo.whatsapp.replace(/[^0-9]/g, '');

  const handleOpenWhatsApp = () => {
    const msg = encodeURIComponent('Hi ApexAuto, I would like to inquire about vehicle service booking.');
    window.open(`https://wa.me/${phoneClean}?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center">
      
      {/* Tooltip on Touch / Hover */}
      <div 
        className={`mr-3 px-3.5 py-1.5 bg-slate-900/95 text-white text-xs font-bold rounded-xl shadow-xl backdrop-blur-md border border-white/15 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center space-x-1.5 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Chat on WhatsApp</span>
      </div>

      {/* Circular Floating WhatsApp Button (Icon Only) */}
      <button
        onClick={handleOpenWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setTimeout(() => setIsHovered(false), 2500)}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group relative w-[58px] h-[58px] sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#25D366] via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/45 hover:scale-110 active:scale-90 transition-all duration-300 border-[2.5px] border-white"
      >
        {/* Live active beacon ping */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* Official WhatsApp SVG Logo */}
        <svg 
          className="w-8 h-8 sm:w-7 sm:h-7 fill-white transform group-hover:scale-110 transition-transform duration-300 drop-shadow"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.529 1.838.814 2.8.814 3.179 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.772-5.766zm0-2.172c4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8-1.378 0-2.67-.35-3.8-1l-4.2 1.1 1.1-4.1c-.7-1.168-1.1-2.522-1.1-4 0-4.418 3.582-8 8-8zm3.87 11.233c-.159.447-.798.818-1.129.866-.33.048-.758.077-2.457-.624-2.175-.898-3.582-3.117-3.69-3.262-.109-.145-.881-1.171-.881-2.233 0-1.062.556-1.584.755-1.799.198-.215.433-.269.578-.269.145 0 .289.002.415.008.134.006.313-.051.488.371.18.433.616 1.503.67 1.612.054.109.09.237.018.382-.072.145-.109.236-.217.363-.109.127-.229.284-.327.382-.109.109-.223.228-.096.446.127.218.563.93 1.209 1.505.833.742 1.536.972 1.754 1.08.218.109.345.091.472-.054.127-.145.544-.634.69-.852.145-.218.29-.182.489-.109.199.073 1.263.596 1.48.705.217.109.362.164.416.255.054.091.054.527-.105.974z"/>
        </svg>
      </button>

    </div>
  );
};
