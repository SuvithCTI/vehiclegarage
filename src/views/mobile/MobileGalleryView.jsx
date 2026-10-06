import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGarage } from '../../context/GarageContext';
import { 
  Maximize2, 
  X, 
  Calendar, 
  Camera, 
  Search, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export const MobileGalleryView = () => {
  const { initiateBooking } = useGarage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow || '';
      };
    }
  }, [lightboxIndex]);

  // Filter items
  const filteredPhotos = galleryData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.vehicle && item.vehicle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <div className="space-y-4 pb-12">
      {/* Mobile Header Banner */}
      <div className="space-y-1">
        <div className="inline-flex items-center space-x-1.5 bg-red-50 text-[#E53935] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-red-200">
          <Camera className="w-3 h-3" />
          <span>Workshop Media</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 font-['Outfit']">Gallery & Showcase</h1>
        <p className="text-xs text-slate-600">Real photos from our service bays and detailing studio</p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search photos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E53935]/30 focus:border-[#E53935]"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Horizontal Category Scroll */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        {[
          { id: 'all', label: 'All' },
          { id: 'car', label: 'Cars' },
          { id: 'bike', label: 'Bikes' },
          { id: 'workshop', label: 'Workshop' },
          { id: 'detailing', label: 'Detailing' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition ${
              activeCategory === cat.id
                ? 'bg-slate-900 text-white shadow'
                : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2-Column Photo Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
        {filteredPhotos.map((item, idx) => (
          <div 
            key={item.id} 
            onClick={() => setLightboxIndex(idx)}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between shadow-sm active:scale-95 transition cursor-pointer group hover:border-[#E53935]/50"
          >
            <div>
              <div className="relative h-32 sm:h-44 bg-slate-100 overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  loading="lazy" 
                />
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {item.category}
                </div>
                <div className="absolute bottom-2 right-2 p-1 sm:p-1.5 bg-white/90 rounded-lg shadow text-slate-800">
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E53935]" />
                </div>
              </div>

              <div className="p-2.5 sm:p-3 space-y-0.5 sm:space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#E53935] transition-colors font-['Outfit']">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-tight">
                  {item.shortDescription || item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Photo Modal - Portaled to document.body */}
      {activePhoto && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/98 backdrop-blur-2xl animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-sm w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col text-white my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-3.5 bg-slate-950 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-600 text-white">
                  {activePhoto.category}
                </span>
                <span className="text-xs text-slate-400">
                  {lightboxIndex + 1} of {filteredPhotos.length}
                </span>
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="p-1.5 bg-slate-800 rounded-full text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Photo */}
            <div className="relative h-60 bg-black flex items-center justify-center">
              <img src={activePhoto.url} alt={activePhoto.title} className="w-full h-full object-contain" />
            </div>

            {/* Description & Action */}
            <div className="p-4 space-y-3 bg-slate-950">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-['Outfit']">{activePhoto.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{activePhoto.shortDescription || activePhoto.description}</p>
              </div>

              <button
                onClick={() => {
                  setLightboxIndex(null);
                  initiateBooking();
                }}
                className="w-full py-2.5 bg-[#E53935] hover:bg-red-600 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Service For This</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
