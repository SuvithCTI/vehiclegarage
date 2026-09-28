import React from 'react';
import { useGarage } from '../context/GarageContext';
import { X, Play, Film, ShieldCheck } from 'lucide-react';

export const VideoPlayerModal = () => {
  const { activeVideoModal, setActiveVideoModal } = useGarage();

  if (!activeVideoModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center text-[#E53935]">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 line-clamp-1">{activeVideoModal.title}</h3>
              <p className="text-xs text-slate-500">ApexAuto Verified Workshop Service Video</p>
            </div>
          </div>
          
          <button
            onClick={() => setActiveVideoModal(null)}
            className="p-2 rounded-xl bg-slate-200 text-slate-600 hover:text-white hover:bg-[#E53935] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Embed */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {activeVideoModal.videoUrl || activeVideoModal.videoEmbedUrl ? (
            <iframe
              src={activeVideoModal.videoUrl || activeVideoModal.videoEmbedUrl}
              title={activeVideoModal.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-center p-8 space-y-3">
              <Play className="w-12 h-12 text-amber-500 mx-auto animate-pulse" />
              <p className="text-sm text-slate-300">Video streaming showcase ready for workshop demonstration.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2 border-t border-slate-200">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">Demonstrating 100% Genuine OEM Procedures & Tools</span>
          </div>
          <button
            onClick={() => setActiveVideoModal(null)}
            className="px-4 py-1.5 bg-[#E53935] text-white rounded-lg font-bold text-xs hover:bg-[#d32f2f] transition"
          >
            Close Clip
          </button>
        </div>

      </div>
    </div>
  );
};
