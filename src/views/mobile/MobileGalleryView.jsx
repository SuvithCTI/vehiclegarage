import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { Image as ImageIcon, Maximize2, X, Calendar, Camera } from 'lucide-react';
import { galleryData } from '../../data/galleryData';

export const MobileGalleryView = () => {
  const { initiateBooking } = useGarage();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="space-y-6 pb-12">
      <div className="space-y-1">
        <div className="inline-flex items-center space-x-1.5 bg-red-50 text-[#E53935] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-red-200">
          <Camera className="w-3 h-3" />
          <span>Workshop Media</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 font-['Outfit']">Gallery & Showcase</h1>
        <p className="text-xs text-slate-600">Real photos from our service bays and detailing studio</p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
        {galleryData.map(item => (
          <div 
            key={item.id} 
            onClick={() => setSelectedPhoto(item)}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between shadow-sm active:scale-95 transition cursor-pointer group hover:border-[#E53935]/40"
          >
            <div>
              <div className="relative h-32 sm:h-44 bg-slate-100 overflow-hidden">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md text-white text-[8px] sm:text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {item.category}
                </div>
                <div className="absolute bottom-2 right-2 p-1 sm:p-1.5 bg-white/90 rounded-lg shadow text-slate-800">
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>

              <div className="p-2.5 sm:p-3.5 space-y-0.5 sm:space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-[#E53935] transition-colors">{item.title}</h4>
                <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-1 sm:line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-sm w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 bg-black flex items-center justify-center">
              <img src={selectedPhoto.url} alt={selectedPhoto.title} className="w-full h-full object-contain" />
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2.5 right-2.5 p-1.5 bg-black/60 text-white rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 pt-0 space-y-3 text-white">
              <div>
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{selectedPhoto.category}</span>
                <h4 className="text-sm font-bold text-white mt-0.5">{selectedPhoto.title}</h4>
                <p className="text-xs text-slate-300 mt-1">{selectedPhoto.description}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  initiateBooking();
                }}
                className="w-full py-2.5 bg-[#E53935] text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Service For This</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
