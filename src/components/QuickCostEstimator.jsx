import React, { useState } from 'react';
import { useGarage } from '../context/GarageContext';
import { Calculator, Car, Bike, Check, ArrowRight, Clock, ShieldCheck, Tag, MessageCircle } from 'lucide-react';
import { garageInfo } from '../data/garageInfo';

export const QuickCostEstimator = () => {
  const { initiateBooking, services } = useGarage();

  const [vehicleType, setVehicleType] = useState('car'); // 'car' | 'bike'
  const [vehicleSegment, setVehicleSegment] = useState('sedan');
  const [serviceTier, setServiceTier] = useState('standard'); // 'basic', 'standard', 'master'

  // Familiar Vehicle Segments with real-world models
  const carSegments = [
    { id: 'hatchback', name: 'Hatchback', models: 'Swift, i20, Tiago', icon: '🚗' },
    { id: 'sedan', name: 'Sedan', models: 'City, Verna, Dzire', icon: '🚘' },
    { id: 'suv', name: 'SUV / MUV', models: 'Creta, Nexon, Brezza', icon: '🚙' },
    { id: 'luxury', name: 'Luxury', models: 'BMW, Audi, Merc', icon: '🏎️' }
  ];

  const bikeSegments = [
    { id: 'commuter', name: 'Scooter / Commuter', models: 'Activa, Splendor', icon: '🛵' },
    { id: 'sports', name: 'Sports 150-250cc', models: 'Pulsar, Apache, FZ', icon: '🏍️' },
    { id: 'cruiser', name: 'Cruiser 350cc+', models: 'Royal Enfield, Hunter', icon: '⚡' },
    { id: 'superbike', name: 'Superbike', models: 'KTM Duke, Kawasaki', icon: '🏁' }
  ];

  // Pricing matrix with transparent dealership comparison
  const estimates = {
    car: {
      hatchback: { basic: 1999, standard: 3299, master: 4899, dealer: 4500, time: '2-3 hrs' },
      sedan: { basic: 2499, standard: 3999, master: 5699, dealer: 5500, time: '3-4 hrs' },
      suv: { basic: 2899, standard: 4599, master: 6499, dealer: 6200, time: '4-5 hrs' },
      luxury: { basic: 4499, standard: 7499, master: 10999, dealer: 12500, time: '1 day' }
    },
    bike: {
      commuter: { basic: 499, standard: 799, master: 1399, dealer: 1200, time: '1 hr' },
      sports: { basic: 749, standard: 1199, master: 2099, dealer: 1800, time: '1.5 hrs' },
      cruiser: { basic: 949, standard: 1599, master: 2699, dealer: 2400, time: '2 hrs' },
      superbike: { basic: 1399, standard: 2699, master: 4199, dealer: 4200, time: '3 hrs' }
    }
  };

  const selectedData = estimates[vehicleType][vehicleSegment] || estimates.car.sedan;
  const selectedEstimate = selectedData[serviceTier] || 3999;
  const dealerPrice = selectedData.dealer || selectedEstimate * 1.35;
  const savings = Math.max(300, dealerPrice - selectedEstimate);
  const selectedTime = selectedData.time;

  const handleBookNow = () => {
    const matchedService = services.find(s => 
      s.vehicleType === vehicleType && 
      (serviceTier === 'master' ? s.name.toLowerCase().includes('master') || s.name.toLowerCase().includes('comprehensive') : true)
    ) || services[0];

    initiateBooking(matchedService, vehicleType);
  };

  return (
    <div className="relative rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-2xl overflow-hidden space-y-4">
      
      {/* Dynamic Background Image: Car / Superbike Detailing Studio */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Car Detailing Workshop Image */}
        <img
          src="/images/estimator-bg.jpg"
          alt="High-Tech Car Detailing Garage"
          style={{ objectPosition: 'center 82%' }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            vehicleType === 'car' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Superbike Workshop Detailing Image */}
        <img
          src="/images/estimator-bike-bg.jpg"
          alt="Luxury Superbike Garage Studio"
          style={{ objectPosition: 'center 65%' }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            vehicleType === 'bike' ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Soft transparent gradient mask to ensure maximum background clarity + readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-slate-950/70"></div>
      </div>



      {/* 1. Header with Vehicle Switcher */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-white/20">
        <div>
          <div className="inline-flex items-center space-x-1.5 bg-red-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-md mb-1">
            <Calculator className="w-3 h-3" />
            <span>Instant Price Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] drop-shadow-md">
            Calculate Your Service Cost in Seconds
          </h3>
          <p className="text-xs text-white/90 font-medium drop-shadow-sm">
            Select vehicle and tier to get an instant transparent quote.
          </p>
        </div>

        {/* Familiar Car / Bike Switcher */}
        <div className="flex bg-black/50 backdrop-blur-md p-1 rounded-xl border border-white/20 shrink-0">
          <button
            onClick={() => { setVehicleType('car'); setVehicleSegment('sedan'); }}
            className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              vehicleType === 'car' ? 'bg-[#E53935] text-white shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Car</span>
          </button>
          <button
            onClick={() => { setVehicleType('bike'); setVehicleSegment('sports'); }}
            className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition ${
              vehicleType === 'bike' ? 'bg-[#E53935] text-white shadow-md' : 'text-white/80 hover:text-white'
            }`}
          >
            <Bike className="w-3.5 h-3.5" />
            <span>Bike</span>
          </button>
        </div>
      </div>

      {/* 2. Selection Steps Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Step 1: Select Familiar Vehicle Model (Compact 2x2 Grid) */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-black uppercase text-white tracking-wider drop-shadow-sm">
            1. Select Vehicle Segment
          </span>

          <div className="grid grid-cols-2 gap-2">
            {(vehicleType === 'car' ? carSegments : bikeSegments).map((seg) => {
              const isSelected = vehicleSegment === seg.id;
              return (
                <button
                  key={seg.id}
                  onClick={() => setVehicleSegment(seg.id)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex items-center space-x-2.5 backdrop-blur-md ${
                    isSelected
                      ? 'bg-white text-slate-900 border-white shadow-lg ring-2 ring-[#E53935]'
                      : 'bg-white/90 border-white/40 hover:bg-white text-slate-800 shadow-sm'
                  }`}
                >
                  <span className="text-xl shrink-0 p-1 bg-slate-100 rounded-lg shadow-2xs border border-slate-200">
                    {seg.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-[#E53935]' : 'text-slate-900'}`}>
                      {seg.name}
                    </h4>
                    <p className="text-[9px] text-slate-500 truncate">{seg.models}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Choose Service Level (Compact Stack) */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-black uppercase text-white tracking-wider drop-shadow-sm">
            2. Choose Service Level
          </span>

          <div className="space-y-2">
            {[
              {
                id: 'basic',
                name: 'Basic Periodic Care',
                desc: 'Oil change, filter cleaning & wash'
              },
              {
                id: 'standard',
                name: 'Standard Maintenance',
                desc: 'Synthetic oil, brake check & 25-pt scan',
                badge: 'Popular'
              },
              {
                id: 'master',
                name: 'Master Comprehensive',
                desc: 'Bumper-to-bumper care & ECU scan'
              }
            ].map((tier) => {
              const isSelected = serviceTier === tier.id;
              return (
                <div
                  key={tier.id}
                  onClick={() => setServiceTier(tier.id)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-2 backdrop-blur-md ${
                    isSelected
                      ? 'bg-white text-slate-900 border-white shadow-lg ring-2 ring-[#E53935]'
                      : 'bg-white/90 border-white/40 hover:bg-white text-slate-800 shadow-sm'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-1.5">
                      <h4 className={`text-xs font-bold ${isSelected ? 'text-[#E53935]' : 'text-slate-900'}`}>
                        {tier.name}
                      </h4>
                      {tier.badge && (
                        <span className="text-[8px] font-black uppercase px-1.5 py-0.2 bg-amber-100 text-amber-800 rounded-full border border-amber-200">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-500">{tier.desc}</p>
                  </div>

                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border ${
                    isSelected ? 'bg-[#E53935] border-[#E53935] text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 3: Instant Live Quote Invoice Card (Compact Dark Glass) */}
        <div className="lg:col-span-4 bg-black/75 backdrop-blur-xl text-white rounded-2xl p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/20">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/30 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between border-b border-white/15 pb-2">
              <span className="text-[9px] uppercase font-black tracking-wider text-slate-300">
                Price Quote
              </span>
              <span className="text-[9px] font-bold text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-2 py-0.5 rounded-full flex items-center space-x-1">
                <Tag className="w-2.5 h-2.5" />
                <span>Save ₹{savings.toLocaleString()} vs Dealer</span>
              </span>
            </div>

            {/* Big Transparent Price */}
            <div className="mt-2.5 flex items-baseline space-x-1.5">
              <span className="text-3xl font-black font-['Outfit'] tracking-tight text-white drop-shadow-md">
                ₹{selectedEstimate.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-300">all-inclusive</span>
            </div>

            {/* Specs & Timeline */}
            <div className="mt-2.5 pt-2 border-t border-white/15 space-y-1 text-[11px] text-slate-200">
              <div className="flex items-center space-x-1.5">
                <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                <span>Turnaround: <strong className="text-white">~{selectedTime}</strong></span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>Includes Warranty & Inspection</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Book and WhatsApp Quote */}
          <div className="mt-3.5 space-y-2">
            <button
              onClick={handleBookNow}
              className="w-full py-2.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-black text-xs rounded-xl shadow-lg shadow-[#E53935]/40 flex items-center justify-center space-x-1.5 transition transform active:scale-95 hover:translate-x-0.5"
            >
              <span>Book Service at This Price</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                const segmentName = (vehicleType === 'car' ? carSegments : bikeSegments).find(s => s.id === vehicleSegment)?.name || vehicleSegment;
                const msg = encodeURIComponent(`Hi ApexAuto, I calculated a service quote on your website for my ${segmentName} (${vehicleType.toUpperCase()}):
• Package Tier: ${serviceTier.toUpperCase()}
• Estimated Cost: ₹${selectedEstimate.toLocaleString()}
• Est. Time: ~${selectedTime}

Can you please confirm technician slot availability for this?`);
                window.open(`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
              }}
              className="w-full py-2 bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl border border-emerald-400/40 flex items-center justify-center space-x-1.5 transition active:scale-95 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Get Quote on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
