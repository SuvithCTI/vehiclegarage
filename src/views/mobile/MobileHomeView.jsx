import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  Wrench, 
  Car, 
  Bike, 
  Sparkles, 
  Play, 
  Star, 
  PhoneCall, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Tag,
  ChevronRight
} from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { QuickCostEstimator } from '../../components/QuickCostEstimator';
import { StatsCounter } from '../../components/StatsCounter';
import { OfferBanner } from '../../components/OfferBanner';
import { ReviewCard } from '../../components/ReviewCard';
import { reviewsData } from '../../data/reviewsData';
import { offersData } from '../../data/offersData';

import { 
  AnimatedOemLogo, 
  AnimatedGpsLogo, 
  AnimatedDiagnosticsLogo, 
  AnimatedLiveUpdatesLogo 
} from '../../components/AnimatedAdvantageLogos';
import {
  BoschLogo,
  MotulLogo,
  Mobil1Logo,
  BremboLogo,
  CastrolLogo,
  LiquiMolyLogo,
  DensoLogo,
  NgkLogo,
  RoyalEnfieldLogo,
  KtmLogo,
  BmwLogo,
  HyundaiLogo
} from '../../components/RealTimeBrandLogos';

const brandPartners = [
  { name: 'BOSCH', tag: 'Diagnostic Systems', color: 'text-red-600', Logo: BoschLogo },
  { name: 'MOTUL', tag: '100% Synthetic 300V', color: 'text-rose-600', Logo: MotulLogo },
  { name: 'MOBIL 1', tag: 'High-RPM Racing Oil', color: 'text-blue-700', Logo: Mobil1Logo },
  { name: 'BREMBO', tag: 'Ceramic Brakes', color: 'text-red-700', Logo: BremboLogo },
  { name: 'CASTROL', tag: 'EDGE Fluid Titanium', color: 'text-emerald-700', Logo: CastrolLogo },
  { name: 'LIQUI MOLY', tag: 'German Additives & Flush', color: 'text-blue-800', Logo: LiquiMolyLogo },
  { name: 'DENSO', tag: 'Iridium Power Plugs', color: 'text-red-600', Logo: DensoLogo },
  { name: 'NGK', tag: 'Laser Platinum Spark', color: 'text-amber-700', Logo: NgkLogo },
  { name: 'HYUNDAI MOBIS', tag: 'Genuine OEM Parts', color: 'text-blue-900', Logo: HyundaiLogo },
  { name: 'ROYAL ENFIELD', tag: 'Factory Specs', color: 'text-yellow-800', Logo: RoyalEnfieldLogo },
  { name: 'KTM POWERPARTS', tag: 'Ready to Race OEM', color: 'text-orange-600', Logo: KtmLogo },
  { name: 'BMW MOTORRAD', tag: 'Twin-Cylinder Diagnostics', color: 'text-sky-700', Logo: BmwLogo }
];


export const MobileHomeView = () => {
  const { services, initiateBooking, setActiveView, garageInfo } = useGarage();
  const [vehicleTab, setVehicleTab] = useState('all');

  const filtered = services.filter(s => vehicleTab === 'all' ? true : s.vehicleType === vehicleTab || s.vehicleType === 'all');

  return (
    <div className="space-y-8 pb-12">
      
      {/* Mobile Hero */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 p-6 shadow-xl">
        {/* Full Opacity Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-home-bg.jpg"
            alt="ApexAuto High Performance Workshop"
            style={{ objectPosition: 'center 40%' }}
            className="w-full h-full object-cover opacity-100"
          />
          {/* Subtle contrast gradient mask for maximum image clarity and readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/35"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 space-y-4 text-center flex flex-col items-center">
          <div className="inline-flex items-center space-x-1.5 bg-red-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1 rounded-full border border-red-400/40 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Bangalore Multi-Brand Garage</span>
          </div>

          <h1 className="text-3xl font-black text-white font-['Outfit'] leading-tight drop-shadow-md">
            Top-Tier Car & <br />
            <span className="text-[#E53935]">Bike Servicing.</span>
          </h1>

          <p className="text-xs text-slate-200 max-w-xs mx-auto leading-relaxed drop-shadow">
            Transparent pricing, 100% genuine OEM spares, and 24/7 emergency roadside assistance.
          </p>

          <div className="pt-2 w-full flex flex-col gap-2.5">
            <button
              onClick={() => initiateBooking()}
              className="w-full py-3.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-black text-xs rounded-xl shadow-lg shadow-[#E53935]/35 flex items-center justify-center space-x-2 transition active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>

            <button
              onClick={() => {
                setActiveView('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3 bg-white hover:bg-slate-100 text-slate-900 border border-white/60 text-xs font-bold rounded-xl flex items-center justify-center space-x-2 transition active:scale-98 shadow-md"
            >
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>View Packages</span>
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Hotline Button */}
      <a
        href={`tel:${garageInfo.emergencyPhone}`}
        className="p-4 bg-gradient-to-r from-[#E53935] to-amber-600 text-white rounded-2xl flex items-center justify-between shadow-md"
      >
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-black/20 flex items-center justify-center">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <h4 className="text-xs font-black">24/7 Breakdown Assistance</h4>
            <p className="text-[10px] text-white/90">30-min on-spot technician arrival</p>
          </div>
        </div>
        <PhoneCall className="w-5 h-5 animate-pulse" />
      </a>

      {/* Stats bar with Running Numbers & Colorful Themes */}
      <StatsCounter />


      {/* Estimator */}
      <QuickCostEstimator />

      {/* Featured Services */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Service Packages</h3>
            <p className="text-[11px] text-slate-500">Select your ride</p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => setVehicleTab('all')}
              className={`px-2.5 py-1 rounded-lg font-bold ${vehicleTab === 'all' ? 'bg-[#E53935] text-white' : 'text-slate-600'}`}
            >
              All
            </button>
            <button
              onClick={() => setVehicleTab('car')}
              className={`px-2.5 py-1 rounded-lg font-bold ${vehicleTab === 'car' ? 'bg-[#E53935] text-white' : 'text-slate-600'}`}
            >
              Car
            </button>
            <button
              onClick={() => setVehicleTab('bike')}
              className={`px-2.5 py-1 rounded-lg font-bold ${vehicleTab === 'bike' ? 'bg-[#E53935] text-white' : 'text-slate-600'}`}
            >
              Bike
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {filtered.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <button
          onClick={() => {
            setActiveView('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition shadow-sm"
        >
          <span>View All Packages in Service Page</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>


      {/* Why Choose ApexAuto - Animated Real-Time Logos in 2-Column Grid */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Why Trust ApexAuto</h3>
          <p className="text-[11px] text-slate-500">Live transparency & master precision</p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {/* 1. Genuine OEM Parts */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:border-red-300 transition space-y-2">
            <div className="flex items-start justify-between">
              <AnimatedOemLogo />
              <span className="text-[8px] font-bold text-red-700 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">100% OEM</span>
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900">Genuine OEM Parts</h4>
              <p className="text-[10px] text-slate-500 leading-tight">Barcode verified & sealed manufacturer parts.</p>
            </div>
          </div>

          {/* 2. Free Pick & Drop */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:border-amber-300 transition space-y-2">
            <div className="flex items-start justify-between">
              <AnimatedGpsLogo />
              <span className="text-[8px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">GPS Live</span>
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900">Free Pick & Drop</h4>
              <p className="text-[10px] text-slate-500 leading-tight">Real-time driver tracking across Bangalore.</p>
            </div>
          </div>

          {/* 3. Hi-Tech Diagnostics */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:border-blue-300 transition space-y-2">
            <div className="flex items-start justify-between">
              <AnimatedDiagnosticsLogo />
              <span className="text-[8px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">OBD-II</span>
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900">Hi-Tech Diagnostics</h4>
              <p className="text-[10px] text-slate-500 leading-tight">Bosch computerized engine sensor & ECU scan.</p>
            </div>
          </div>

          {/* 4. Live Service Updates */}
          <div className="p-3 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:border-emerald-300 transition space-y-2">
            <div className="flex items-start justify-between">
              <AnimatedLiveUpdatesLogo />
              <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">Real-Time</span>
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-slate-900">Live Service Updates</h4>
              <p className="text-[10px] text-slate-500 leading-tight">Live WhatsApp inspection video & photo feed.</p>
            </div>
          </div>
        </div>

        {/* Real-Time OEM Brand Logo Marquee on Mobile */}
        <div className="pt-2">
          <div className="relative overflow-hidden py-2.5 bg-white/90 rounded-2xl border border-slate-200">
            <div className="animate-marquee flex items-center space-x-3">
              {[...brandPartners, ...brandPartners].map((brand, bIdx) => {
                const BrandLogoComponent = brand.Logo;
                return (
                  <div
                    key={bIdx}
                    className="px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2.5 shrink-0"
                  >
                    <BrandLogoComponent />
                    <div>
                      <span className={`font-black text-[11px] tracking-wider ${brand.color}`}>
                        {brand.name}
                      </span>
                      <p className="text-[8px] text-slate-500 font-medium">
                        {brand.tag}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Offers - Clean Stacked Layout on Mobile */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Special Offers</h3>
            <p className="text-[11px] text-slate-500">Limited time discounts & promo codes</p>
          </div>
          <span className="text-[10px] font-bold text-[#E53935] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
            4 Active
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {offersData.slice(0, 4).map((offer) => (
            <OfferBanner key={offer.id} offer={offer} />
          ))}
        </div>
      </div>

      {/* Reviews - 1 Row Continuous Moving Marquee Carousel */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Customer Reviews</h3>
            <p className="text-[11px] text-slate-500">Real feedback from verified vehicle owners</p>
          </div>
          <div className="flex items-center space-x-1 text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 text-[11px] font-bold">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>5.0 Verified</span>
          </div>
        </div>

        {/* 1 Row Moving Horizontal Marquee */}
        <div className="relative overflow-hidden py-1">
          <div className="animate-marquee-slow flex items-stretch space-x-3">
            {[...reviewsData, ...reviewsData].map((review, rIdx) => (
              <div key={rIdx} className="w-[280px] shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
