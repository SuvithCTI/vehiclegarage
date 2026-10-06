import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  Camera,
  Search,
  Tag
} from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export const DesktopGalleryView = () => {
  const { initiateBooking } = useGarage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null); // null or number

  // Filter items based on category and search query
  const filteredPhotos = galleryData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.vehicle && item.vehicle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  // Lock background body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow || '';
      };
    }
  }, [lightboxIndex]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
    }
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
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
  }, [lightboxIndex, filteredPhotos]);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 p-8 sm:p-12 shadow-xl min-h-[220px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery-supercar-studio.jpg"
            alt="ApexAuto Workshop Facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/40"></div>
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

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'car', label: 'Cars' },
            { id: 'bike', label: 'Bikes' },
            { id: 'workshop', label: 'Workshop' },
            { id: 'detailing', label: 'Detailing' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search gallery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E53935]/30 focus:border-[#E53935]"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#E53935]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-2xl flex flex-col justify-between cursor-pointer"
          >
            <div className="relative h-56 bg-slate-100 overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
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
                {item.shortDescription || item.description}
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

      {/* Clean Fullscreen Photo Lightbox Modal - Portaled to document.body */}
      {activePhoto && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/98 backdrop-blur-2xl animate-fadeIn select-none overflow-y-auto"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Modal Box */}
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Integrated Close & Counter */}
            <div className="px-5 py-3.5 bg-slate-950/95 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-600 text-white">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Photo {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Prev & Next arrows in header */}
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Close button */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white border border-white/10 transition ml-2"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* High-Resolution Photo Display */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={activePhoto.url} 
                alt={activePhoto.title} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Photo Info and Quick Actions Bar */}
            <div className="p-5 bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
              <div className="space-y-1 max-w-2xl">
                <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit']">{activePhoto.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{activePhoto.shortDescription || activePhoto.description}</p>
                
                {/* Hashtags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {activePhoto.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
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
        </div>,
        document.body
      )}

    </div>
  );
};
