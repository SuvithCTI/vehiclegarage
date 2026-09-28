import React, { useState, useEffect } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  Image as ImageIcon, 
  Sparkles, 
  Eye, 
  Layers, 
  Car, 
  Bike, 
  Wrench, 
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Camera
} from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export const DesktopGalleryView = () => {
  const { initiateBooking } = useGarage();
  const [lightboxIndex, setLightboxIndex] = useState(null); // null or number

  const activePhoto = lightboxIndex !== null ? galleryData[lightboxIndex] : null;

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryData.length - 1));
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < galleryData.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner with High-Opacity Dedicated Workshop Backdrop */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 p-8 sm:p-12 shadow-xl min-h-[220px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery-supercar-studio.jpg"
            alt="ApexAuto Workshop Facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md border border-red-400/40">
            <Camera className="w-3.5 h-3.5 text-white" />
            <span>Facility & Workmanship Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] drop-shadow-md">
            Inside ApexAuto Workshop & Service Bays
          </h1>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow">
            Explore authentic photos from our hydraulic lifts, computerized dyno station, dust-free ceramic detailing bays, and engine overhaul facilities.
          </p>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryData.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#E53935]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-52 bg-slate-100 overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

              <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] font-bold text-slate-900 shadow-sm">
                <ImageIcon className="w-3 h-3 text-[#E53935]" />
                <span className="capitalize">{item.category}</span>
              </div>

              <div className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-900 rounded-xl border border-white/50 opacity-0 group-hover:opacity-100 transition-all shadow-md transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4 text-[#E53935]" />
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h3 className="text-sm font-black text-slate-900 group-hover:text-[#E53935] transition-colors line-clamp-1 font-['Outfit']">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition shadow-lg"
            title="Close Preview (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition shadow-lg hidden sm:flex items-center justify-center"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition shadow-lg hidden sm:flex items-center justify-center"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div 
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image display */}
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={activePhoto.url} 
                alt={activePhoto.title} 
                className="w-full h-full object-contain"
              />
              <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            {/* Photo Info and Quick Actions Bar */}
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    {activePhoto.category}
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Outfit']">{activePhoto.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activePhoto.description}</p>
              </div>

              <div className="flex items-center space-x-3 shrink-0 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    initiateBooking();
                  }}
                  className="px-5 py-2.5 bg-[#E53935] hover:bg-red-600 text-white rounded-xl text-xs font-bold transition shadow-md shadow-red-500/20 flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Workshop Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
