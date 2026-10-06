import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  Wrench, 
  Car, 
  Bike, 
  ShieldCheck, 
  Clock, 
  Award, 
  ChevronRight, 
  Sparkles, 
  Play, 
  Star, 
  PhoneCall, 
  CheckCircle2, 
  Calendar,
  Zap,
  Tag,
  ArrowRight,
  Cpu,
  Truck,
  Radio,
  BadgeCheck,
  Activity,
  Layers
} from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { OfferBanner } from '../../components/OfferBanner';
import { ReviewCard } from '../../components/ReviewCard';
import { QuickCostEstimator } from '../../components/QuickCostEstimator';
import { StatsCounter } from '../../components/StatsCounter';
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

export const DesktopHomeView = () => {
  const { 
    services, 
    initiateBooking, 
    setActiveView, 
    garageInfo 
  } = useGarage();

  const [heroVehicleTab, setHeroVehicleTab] = useState('all');

  const featuredServices = services
    .filter(s => heroVehicleTab === 'all' ? true : s.vehicleType === heroVehicleTab || s.vehicleType === 'all')
    .slice(0, 3);


  return (
    <div className="space-y-12 pb-0">
      
      {/* 1. HERO SECTION - Full Size & Full Width Bleed */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-10 -mt-6 min-h-[720px] lg:min-h-[86vh] xl:min-h-[90vh] overflow-hidden bg-slate-950 flex items-center shadow-2xl">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-home-bg.jpg"
            alt="ApexAuto Luxury Supercar & Superbike Engineering Hub"
            style={{ objectPosition: 'center 42%' }}
            className="w-full h-full object-cover opacity-100 scale-100 transform hover:scale-102 transition-transform duration-1000"
          />
          {/* Subtle balanced gradient overlay for high image clarity and text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/25"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-[760px] space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-md border border-red-400/50 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>Bangalore's #1 Car & Superbike Service Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Outfit'] leading-[1.1] drop-shadow-lg">
              Precision Care For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53935] via-amber-400 to-[#E53935]">
                Your Cars & Bikes.
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl drop-shadow-md font-medium">
              Experience transparent periodic servicing, computerized Bosch engine diagnostics, custom performance tuning, and 24/7 roadside emergency breakdown support with 100% genuine OEM parts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => initiateBooking()}
                className="px-7 py-3.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-sm rounded-2xl shadow-xl shadow-[#E53935]/40 flex items-center space-x-2 transition transform hover:-translate-y-0.5 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveView('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-white/95 hover:bg-white text-slate-900 border border-white/60 font-bold text-sm rounded-2xl transition flex items-center space-x-2 shadow-lg backdrop-blur-md"
              >
                <Wrench className="w-4 h-4 text-amber-600" />
                <span>Explore Packages</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-200 border-t border-white/20">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#E53935]" />
                <span className="font-semibold text-white">100% Genuine OEM Spares</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#E53935]" />
                <span className="font-semibold text-white">Free Doorstep Pick & Drop</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#E53935]" />
                <span className="font-semibold text-white">6 Months Service Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR WITH ANIMATED RUNNING NUMBERS & COLORFUL THEMES */}
      <section>
        <StatsCounter />
      </section>


      {/* 3. INSTANT COST ESTIMATOR WIDGET */}
      <section>
        <QuickCostEstimator />
      </section>

      {/* 4. FEATURED SERVICES SHOWCASE WITH CAR/BIKE TABS */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-1">
              <Wrench className="w-4 h-4" />
              <span>Service Packages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
              Engineered For Peak Performance
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Choose from our curated service packages designed specifically for Indian road conditions.
            </p>
          </div>

          {/* Car / Bike Selector Tabs */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setHeroVehicleTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                heroVehicleTab === 'all' ? 'bg-[#E53935] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setHeroVehicleTab('car')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                heroVehicleTab === 'car' ? 'bg-[#E53935] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Cars</span>
            </button>
            <button
              onClick={() => setHeroVehicleTab('bike')}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition ${
                heroVehicleTab === 'bike' ? 'bg-[#E53935] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>Bikes</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => {
              setActiveView('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold inline-flex items-center space-x-2 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>View All Packages & Engine Diagnostics in Service Page</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>


      {/* 5. ACTIVE OFFERS & COUPONS */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-1">
            <Tag className="w-4 h-4" />
            <span>Special Offers</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 font-['Outfit']">Save On Your Next Service</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offersData.map((offer) => (
            <OfferBanner key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE APEXAUTO (REAL-TIME LOGOS WITH DYNAMIC ANIMATIONS & WORKSHOP BACKGROUND) */}
      <section className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm overflow-hidden space-y-10">
        
        {/* Workshop Ambient Background Image with High Visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=2000&q=80"
            alt="ApexAuto Workshop Bays"
            className="w-full h-full object-cover opacity-85 scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/55 to-white/75"></div>
          {/* Subtle ambient accent glow circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>



        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-2 bg-red-50/90 backdrop-blur-sm border border-red-200 px-3 py-1 rounded-full text-xs font-bold text-[#E53935]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>The ApexAuto Advantage</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 font-['Outfit']">
            Why Discerning Drivers & Riders Trust Us
          </h2>
          <p className="text-xs text-slate-600">
            We bridge the gap between expensive dealership service centers and unreliable local workshops with transparent pricing, live tracking, and master technician care.
          </p>
        </div>

        {/* 4 Feature Cards with Real Car Photo Header at Top and Smooth Hover Effects */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Genuine OEM Parts */}
          <div className="flex flex-col justify-between h-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 hover:border-[#E53935] hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1.5 shadow-sm">
            {/* Real Car Photo at Top */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src="/images/gallery-brake-caliper.jpg"
                alt="Genuine OEM Parts"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold text-white bg-red-600/90 backdrop-blur-md border border-red-400/40 px-3 py-1 rounded-full shadow-md">
                  100% Genuine
                </span>
              </div>

              {/* Bottom Icon Badge in Photo */}
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide drop-shadow-md">OEM Certified</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#E53935] transition-colors font-['Outfit']">
                  Genuine OEM Parts
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  100% authentic spare parts with sealed manufacturer warranties, zero counterfeit risk & barcode verification.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
                <BadgeCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">Bosch, Brembo, NGK, Denso</span>
              </div>
            </div>
          </div>

          {/* Card 2: Free Pick & Drop */}
          <div className="flex flex-col justify-between h-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 hover:border-amber-500 hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1.5 shadow-sm">
            {/* Real Car Photo at Top */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src="/images/gallery-supercar-studio.jpg"
                alt="Free Doorstep Pick & Drop"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold text-slate-950 bg-amber-400 backdrop-blur-md border border-amber-300 px-3 py-1 rounded-full shadow-md">
                  GPS Live
                </span>
              </div>

              {/* Bottom Icon Badge in Photo */}
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 shadow-md">
                  <Truck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide drop-shadow-md">Express Transit</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-['Outfit']">
                  Free Pick & Drop
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contactless, GPS-tracked vehicle pickup and delivery at your doorstep across Bangalore with trained drivers.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                <span className="truncate">15 Km Express Radius Delivery</span>
              </div>
            </div>
          </div>

          {/* Card 3: Master Certified Technicians */}
          <div className="flex flex-col justify-between h-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1.5 shadow-sm">
            {/* Real Car Photo at Top */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src="/images/service-car-master.jpg"
                alt="Master Certified Technicians"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold text-white bg-blue-600/90 backdrop-blur-md border border-blue-400/40 px-3 py-1 rounded-full shadow-md">
                  ASE Certified
                </span>
              </div>

              {/* Bottom Icon Badge in Photo */}
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-cyan-400 shadow-md">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide drop-shadow-md">Master Techs</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-['Outfit']">
                  Master Certified Technicians
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Factory-trained master mechanics with 15+ years of experience across luxury, Indian & international automotive brands.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate">15+ Yrs Multi-Brand Specialist Care</span>
              </div>
            </div>
          </div>

          {/* Card 4: Live Service Updates */}
          <div className="flex flex-col justify-between h-full bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 hover:border-emerald-500 hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1.5 shadow-sm">
            {/* Real Car Photo at Top */}
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src="/images/gallery-engine-build.jpg"
                alt="Live Service Updates"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold text-white bg-emerald-600/90 backdrop-blur-md border border-emerald-400/40 px-3 py-1 rounded-full shadow-md">
                  Real-Time
                </span>
              </div>

              {/* Bottom Icon Badge in Photo */}
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-emerald-400 shadow-md">
                  <Radio className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide drop-shadow-md">WhatsApp Live</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-['Outfit']">
                  Live Service Updates
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time WhatsApp video and photo status of every part inspected & replaced before any invoice is created.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs font-semibold text-slate-700">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                <span className="truncate">100% Inspection Transparency</span>
              </div>
            </div>
          </div>

        </div>

        {/* Real-Time Authorized OEM & Brand Partner Logo Marquee */}
        <div className="relative z-10 pt-6 border-t border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span className="uppercase tracking-wider flex items-center space-x-2">
              <Layers className="w-4 h-4 text-[#E53935]" />
              <span>Authorized OEM & Performance Parts Network</span>
            </span>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              100% Verified Genuine Supply
            </span>
          </div>

          <div className="relative overflow-hidden py-3 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200">

            {/* Left & Right gradient fades */}
            <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

            {/* Continuous Marquee Ticker with Real-Time Animated Logos */}
            <div className="animate-marquee flex items-center space-x-4">
              {[...brandPartners, ...brandPartners].map((brand, bIdx) => {
                const BrandLogoComponent = brand.Logo;
                return (
                  <div
                    key={bIdx}
                    className="px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center space-x-3 shrink-0 hover:scale-105 transition-transform duration-200 cursor-pointer group"
                  >
                    <BrandLogoComponent />
                    <div>
                      <span className={`font-black text-xs tracking-wider ${brand.color}`}>
                        {brand.name}
                      </span>
                      <p className="text-[9px] text-slate-500 font-medium">
                        {brand.tag}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS & TESTIMONIALS */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-1">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 font-['Outfit']">Loved By 15,000+ Vehicle Owners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* 8. COMPACT EMERGENCY CALLOUT BANNER */}
      <section className="rounded-2xl px-6 py-5 sm:px-8 sm:py-5 bg-gradient-to-r from-[#E53935] via-red-600 to-amber-600 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-center space-x-4 max-w-2xl">
          <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
            <Zap className="w-6 h-6 fill-amber-300" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-black tracking-wider bg-black/20 text-amber-200 px-2.5 py-0.5 rounded-full border border-white/15">
                24/7 Breakdown SOS
              </span>
              <span className="text-[11px] text-white/80 font-medium">• 30-Min Rapid Van Dispatch</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black font-['Outfit'] mt-1 text-white tracking-tight">
              Stuck on the road with a breakdown or flat tyre?
            </h3>
            <p className="text-xs text-white/85 mt-0.5 line-clamp-1">
              Mobile technician van reaches anywhere in Bangalore with battery jumpstart, tyre inflators & towing.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
          <a
            href={`tel:${garageInfo.emergencyPhone}`}
            className="px-4 py-2.5 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-xs flex items-center space-x-2 shadow-md transition active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Call 24/7 Helpline</span>
          </a>
          <button
            onClick={() => initiateBooking(services.find(s => s.id === 'emergency-roadside-help'))}
            className="px-4 py-2.5 bg-white text-slate-900 hover:bg-slate-50 rounded-xl font-bold text-xs shadow-md transition active:scale-95"
          >
            Request Instant Dispatch
          </button>
        </div>
      </section>

    </div>
  );
};
