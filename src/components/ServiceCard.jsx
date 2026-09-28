import React, { useState } from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  Check, 
  Clock, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Car, 
  Bike, 
  Sparkles, 
  Zap,
  MessageCircle
} from 'lucide-react';
import { garageInfo } from '../data/garageInfo';

export const ServiceCard = ({ service }) => {
  const { initiateBooking } = useGarage();
  const [imgError, setImgError] = useState(false);

  const isBike = service.vehicleType === 'bike';
  const isCar = service.vehicleType === 'car';

  const defaultFallback = isBike 
    ? 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
    : 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=800&q=80';

  // Dynamic Theme Colors for vibrant personality
  const getTheme = () => {
    if (service.id === 'car-periodic-basic') {
      return {
        accentBar: 'bg-gradient-to-r from-red-500 via-rose-500 to-amber-500',
        badge: 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-500/30',
        pill: 'bg-red-50 text-red-700 border-red-200',
        btn: 'bg-gradient-to-r from-[#E53935] to-rose-600 hover:from-[#d32f2f] hover:to-rose-700 shadow-[#E53935]/25',
        spec: 'bg-red-50/70 border-red-100 text-red-950',
        borderHover: 'hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10',
        checkBg: 'bg-red-100 text-red-600',
        tagDot: 'bg-red-500'
      };
    }
    if (service.id === 'car-comprehensive-master') {
      return {
        accentBar: 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400',
        badge: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-500/30',
        pill: 'bg-amber-50 text-amber-800 border-amber-200',
        btn: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-amber-500/25',
        spec: 'bg-amber-50/70 border-amber-100 text-amber-950',
        borderHover: 'hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10',
        checkBg: 'bg-amber-100 text-amber-700',
        tagDot: 'bg-amber-500'
      };
    }
    if (service.id === 'car-ac-service' || service.category === 'ac-repair') {
      return {
        accentBar: 'bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600',
        badge: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-cyan-500/30',
        pill: 'bg-sky-50 text-sky-800 border-sky-200',
        btn: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-600/25',
        spec: 'bg-sky-50/70 border-sky-100 text-sky-950',
        borderHover: 'hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10',
        checkBg: 'bg-sky-100 text-sky-700',
        tagDot: 'bg-cyan-500'
      };
    }
    if (service.category === 'detailing') {
      return {
        accentBar: 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500',
        badge: 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-purple-500/30',
        pill: 'bg-purple-50 text-purple-800 border-purple-200',
        btn: 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 shadow-purple-600/25',
        spec: 'bg-purple-50/70 border-purple-100 text-purple-950',
        borderHover: 'hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10',
        checkBg: 'bg-purple-100 text-purple-700',
        tagDot: 'bg-purple-500'
      };
    }
    if (isBike) {
      return {
        accentBar: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
        badge: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-500/30',
        pill: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        btn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-emerald-600/25',
        spec: 'bg-emerald-50/70 border-emerald-100 text-emerald-950',
        borderHover: 'hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10',
        checkBg: 'bg-emerald-100 text-emerald-700',
        tagDot: 'bg-emerald-500'
      };
    }
    return {
      accentBar: 'bg-gradient-to-r from-[#E53935] to-amber-500',
      badge: 'bg-gradient-to-r from-[#E53935] to-amber-600 text-white shadow-[#E53935]/30',
      pill: 'bg-red-50 text-red-700 border-red-200',
      btn: 'bg-gradient-to-r from-[#E53935] to-amber-600 hover:from-[#d32f2f] hover:to-amber-700 shadow-[#E53935]/25',
      spec: 'bg-slate-50 border-slate-100 text-slate-800',
      borderHover: 'hover:border-red-400 hover:shadow-xl hover:shadow-red-500/10',
      checkBg: 'bg-emerald-100 text-emerald-700',
      tagDot: 'bg-[#E53935]'
    };
  };

  const theme = getTheme();

  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-200/90 ${theme.borderHover} transition-all duration-300 group shadow-sm hover:-translate-y-1 h-full relative`}>
      
      {/* Top Colorful Accent Strip */}
      <div className={`h-1 sm:h-1.5 w-full ${theme.accentBar}`}></div>

      {/* 1. Header Image with Clean Overlay Tags */}
      <div>
        <div className="relative h-32 sm:h-44 md:h-48 overflow-hidden bg-slate-100">
          <img
            src={imgError ? defaultFallback : (service.image || defaultFallback)}
            alt={service.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25"></div>

          {/* Top Left: Category Badge */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center space-x-1 bg-white/95 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-black text-slate-800 shadow-sm border border-white/80">
            {isBike ? (
              <>
                <Bike className="w-3 h-3 text-emerald-600" />
                <span className="hidden xs:inline">Bike Care</span>
                <span className="xs:hidden">Bike</span>
              </>
            ) : isCar ? (
              <>
                <Car className="w-3 h-3 text-[#E53935]" />
                <span className="hidden xs:inline">Car Care</span>
                <span className="xs:hidden">Car</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Care</span>
              </>
            )}
          </div>

          {/* Top Right: Status Badge */}
          {service.badge && (
            <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 ${theme.badge} text-[8px] sm:text-[10px] font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md uppercase tracking-wider`}>
              {service.badge}
            </div>
          )}

          {/* Bottom Left: Star Rating */}
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center space-x-1 bg-black/70 backdrop-blur-md px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold text-white shadow-sm border border-white/20">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{service.rating}</span>
            <span className="text-white/70 text-[9px] hidden sm:inline">({service.reviewsCount})</span>
          </div>
        </div>

        {/* 2. Content Body */}
        <div className="p-3 sm:p-5 md:p-6 space-y-2 sm:space-y-3.5">
          <h3 className="text-xs sm:text-base md:text-lg font-black text-slate-900 group-hover:text-[#E53935] transition-colors line-clamp-1 font-['Outfit']">
            {service.name}
          </h3>

          <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed line-clamp-2 h-7 sm:h-9">
            {service.shortDesc}
          </p>

          {/* Duration & Warranty Spec Bar */}
          <div className={`flex items-center justify-between text-[9px] sm:text-[11px] font-semibold px-2 py-1.5 sm:px-3 sm:py-2 rounded-xl border ${theme.spec} gap-1`}>
            <div className="flex items-center space-x-1 truncate">
              <Clock className="w-3 h-3 text-amber-600 shrink-0" />
              <span className="truncate">{service.duration}</span>
            </div>
            <div className="flex items-center space-x-1 truncate">
              <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate">{service.warranty}</span>
            </div>
          </div>

          {/* 2 Key Feature Highlights with Colorful Icon Dots */}
          <div className="space-y-1 sm:space-y-1.5 pt-0.5">
            {service.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 text-[10px] sm:text-xs text-slate-700">
                <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${theme.checkBg} flex items-center justify-center shrink-0`}>
                  <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                </div>
                <span className="truncate font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Card Footer with Vibrant Price & CTA Button */}
      <div className="p-3 sm:p-5 md:p-6 pt-0">
        <div className="pt-2 sm:pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="text-sm sm:text-xl md:text-2xl font-black text-slate-900 font-['Outfit']">
                ₹{service.price.toLocaleString()}
              </span>
              {service.originalPrice && (
                <span className="text-[10px] sm:text-xs text-slate-400 line-through font-medium">
                  ₹{service.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-[8px] sm:text-[10px] text-emerald-700 font-bold flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0"></span>
              <span className="truncate">All-Inclusive</span>
            </p>
          </div>

          <div className="flex items-center space-x-1.5 w-full sm:w-auto">
            <button
              onClick={(e) => {
                e.stopPropagation();
                const msg = encodeURIComponent(`Hi ApexAuto, I want to inquire about the ${service.name} (₹${service.price.toLocaleString()}) for my ${service.vehicleType}. Are there slots available this week?`);
                window.open(`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
              }}
              title="Inquire on WhatsApp"
              className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 rounded-xl transition active:scale-95 shrink-0"
              aria-label="Inquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
            </button>

            <button
              onClick={() => initiateBooking(service, service.vehicleType)}
              className={`flex-1 sm:flex-initial px-2.5 sm:px-4 py-2 sm:py-2.5 ${theme.btn} text-white font-bold text-[10px] sm:text-xs rounded-xl shadow-sm flex items-center justify-center space-x-1 sm:space-x-1.5 transition transform active:scale-95 group-hover:translate-x-0.5`}
            >
              <span>Book</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
