import React, { useState } from 'react';
import { useGarage } from '../context/GarageContext';
import { Tag, Copy, Check, ArrowRight, Sparkles, Percent, Gift, Bike, Truck, MessageCircle } from 'lucide-react';
import { garageInfo } from '../data/garageInfo';

export const OfferBanner = ({ offer }) => {
  const { initiateBooking, showToast } = useGarage();
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast(`Coupon code ${code} copied to clipboard!`, 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  // Color Theme definitions for each offer
  const getTheme = () => {
    if (offer.id === 'off-first20') {
      return {
        cardBg: 'bg-gradient-to-br from-rose-50/70 via-white to-red-50/40',
        topStrip: 'bg-gradient-to-r from-red-500 via-rose-500 to-amber-500',
        badge: 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-500/20',
        discountGrad: 'from-red-600 to-rose-600',
        borderHover: 'hover:border-red-400 hover:shadow-red-500/10',
        couponBorder: 'border-rose-300 bg-rose-50/80 text-rose-700 hover:bg-rose-100',
        couponTag: 'text-rose-600',
        claimText: 'text-red-600 hover:text-red-800',
        icon: Percent
      };
    }
    if (offer.id === 'off-monsoon') {
      return {
        cardBg: 'bg-gradient-to-br from-cyan-50/70 via-white to-blue-50/40',
        topStrip: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400',
        badge: 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-500/20',
        discountGrad: 'from-cyan-600 to-blue-700',
        borderHover: 'hover:border-cyan-400 hover:shadow-cyan-500/10',
        couponBorder: 'border-cyan-300 bg-cyan-50/80 text-cyan-700 hover:bg-cyan-100',
        couponTag: 'text-cyan-600',
        claimText: 'text-cyan-700 hover:text-cyan-900',
        icon: Gift
      };
    }
    if (offer.id === 'off-superbike') {
      return {
        cardBg: 'bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40',
        topStrip: 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400',
        badge: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/20',
        discountGrad: 'from-amber-600 to-orange-600',
        borderHover: 'hover:border-amber-400 hover:shadow-amber-500/10',
        couponBorder: 'border-amber-300 bg-amber-50/80 text-amber-800 hover:bg-amber-100',
        couponTag: 'text-amber-600',
        claimText: 'text-amber-700 hover:text-amber-900',
        icon: Bike
      };
    }
    if (offer.id === 'off-pickup') {
      return {
        cardBg: 'bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40',
        topStrip: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-green-400',
        badge: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/20',
        discountGrad: 'from-emerald-600 to-teal-700',
        borderHover: 'hover:border-emerald-400 hover:shadow-emerald-500/10',
        couponBorder: 'border-emerald-300 bg-emerald-50/80 text-emerald-800 hover:bg-emerald-100',
        couponTag: 'text-emerald-600',
        claimText: 'text-emerald-700 hover:text-emerald-900',
        icon: Truck
      };
    }
    return {
      cardBg: 'bg-gradient-to-br from-slate-50 via-white to-slate-50',
      topStrip: 'bg-gradient-to-r from-[#E53935] to-amber-500',
      badge: 'bg-[#E53935] text-white shadow-red-500/20',
      discountGrad: 'from-[#E53935] to-amber-600',
      borderHover: 'hover:border-red-400 hover:shadow-red-500/10',
      couponBorder: 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100',
      couponTag: 'text-slate-600',
      claimText: 'text-[#E53935] hover:text-[#b71c1c]',
      icon: Tag
    };
  };

  const theme = getTheme();
  const IconComponent = theme.icon;

  return (
    <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl ${theme.cardBg} border border-slate-200/90 p-2.5 sm:p-5 md:p-6 flex flex-col justify-between ${theme.borderHover} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-sm group h-full`}>
      
      {/* Top Colorful Accent Strip */}
      <div className={`absolute top-0 inset-x-0 h-1 sm:h-1.5 ${theme.topStrip}`}></div>

      {/* Decorative ambient corner glow */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/40 rounded-full blur-2xl pointer-events-none"></div>

      <div>
        {/* Header Row: Badge & Validity */}
        <div className="flex items-center justify-between mb-1 sm:mb-3.5 pt-0.5 sm:pt-1 gap-1">
          <span className={`text-[8px] sm:text-[10px] uppercase font-black tracking-wider px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full ${theme.badge} shadow-sm flex items-center space-x-0.5 sm:space-x-1 truncate`}>
            <IconComponent className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline-block mr-0.5 sm:mr-1 shrink-0" />
            <span className="truncate">{offer.badge}</span>
          </span>
          <span className="text-[8px] sm:text-xs text-slate-500 font-semibold bg-white/80 px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full border border-slate-200/60 shadow-2xs shrink-0">
            {offer.validTill}
          </span>
        </div>

        {/* Big Bold Colorful Discount Title */}
        <h3 className={`text-base sm:text-2xl md:text-3xl font-black font-['Outfit'] tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${theme.discountGrad} leading-tight`}>
          {offer.discount}
        </h3>
        
        {/* Offer Subheading & Details */}
        <h4 className="text-[11px] sm:text-sm font-bold text-slate-800 mt-0.5 sm:mt-1 line-clamp-1 font-['Outfit'] leading-snug">
          {offer.title}
        </h4>
        
        <p className="text-[9px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1 leading-tight sm:leading-relaxed line-clamp-1 sm:line-clamp-2">
          {offer.description}
        </p>
      </div>

      {/* Footer: Coupon Code & Claim CTA side by side */}
      <div className="mt-2 sm:mt-5 pt-1.5 sm:pt-3.5 border-t border-slate-200/70 flex items-center justify-between gap-1">
        {/* Coupon Code Pill */}
        <div 
          onClick={() => handleCopy(offer.code)}
          className={`flex items-center space-x-1 px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-dashed ${theme.couponBorder} cursor-pointer transition shadow-2xs group/btn shrink-0`}
          title="Click to copy coupon code"
        >
          <Tag className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${theme.couponTag}`} />
          <span className="font-mono text-[9px] sm:text-xs font-black tracking-wide">{offer.code}</span>
          {copied ? (
            <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-600 stroke-[3]" />
          ) : (
            <Copy className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover/btn:text-slate-700 transition" />
          )}
        </div>

        {/* Claim Actions */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => {
              const msg = encodeURIComponent(`Hi ApexAuto, I want to claim the offer "${offer.title}" (${offer.discount}) using promo code ${offer.code} for my upcoming service booking.`);
              window.open(`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
            }}
            title="Claim on WhatsApp"
            className="p-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 rounded-lg transition active:scale-95"
            aria-label="Claim offer via WhatsApp"
          >
            <MessageCircle className="w-3 h-3 fill-emerald-600 text-white" />
          </button>

          <button
            onClick={() => initiateBooking()}
            className={`text-[9px] sm:text-xs font-black ${theme.claimText} flex items-center space-x-0.5 sm:space-x-1 transition group-hover:translate-x-0.5 shrink-0`}
          >
            <span>Claim</span>
            <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
