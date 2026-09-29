import React from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  Wrench, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Heart, 
  Car, 
  Bike, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';

import { RealTimeApexLogo } from './RealTimeApexLogo';

export const Footer = () => {
  const { setActiveView, initiateBooking, garageInfo } = useGarage();

  const handleNav = (viewId) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/90 pt-6 pb-4 text-slate-300 text-xs mt-4 relative overflow-hidden">
      {/* Subtle ambient red/dark glow in background */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-slate-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-5 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info & Quality Assurance */}
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2.5 cursor-pointer group" onClick={() => handleNav('home')}>
              <RealTimeApexLogo size="sm" />
              <span className="text-lg font-black text-white tracking-tight font-['Outfit']">
                APEX<span className="text-[#E53935]">AUTO</span>
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3">
              Bangalore's premier ISO-certified multi-brand automobile garage for comprehensive car & superbike servicing, computerized diagnostics, and rapid emergency assistance.
            </p>
            
            <div className="p-2.5 bg-slate-900/90 border border-slate-800 rounded-xl">
              <div className="flex items-center space-x-1.5 text-[11px] text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] animate-pulse"></span>
                <span className="font-semibold text-white">Workshop Quality Guarantee</span>
              </div>
              <p className="text-[#E53935] font-bold text-xs mt-0.5">100% Genuine OEM Spares</p>
              <p className="text-[10px] text-slate-400">Authorized Multi-Brand Auto & Bike Hub</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
              <span className="w-1 h-3.5 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white hover:translate-x-1 transition flex items-center space-x-1.5 text-slate-400 group">
                  <ChevronRight className="w-3 h-3 text-red-500 group-hover:text-red-400 transition shrink-0" />
                  <span className="group-hover:text-white">Home & Highlights</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white hover:translate-x-1 transition flex items-center space-x-1.5 text-slate-400 group">
                  <ChevronRight className="w-3 h-3 text-red-500 group-hover:text-red-400 transition shrink-0" />
                  <span className="group-hover:text-white">Car & Bike Packages</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white hover:translate-x-1 transition flex items-center space-x-1.5 text-slate-400 group">
                  <ChevronRight className="w-3 h-3 text-red-500 group-hover:text-red-400 transition shrink-0" />
                  <span className="group-hover:text-white">Workshop Photos</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white hover:translate-x-1 transition flex items-center space-x-1.5 text-slate-400 group">
                  <ChevronRight className="w-3 h-3 text-red-500 group-hover:text-red-400 transition shrink-0" />
                  <span className="group-hover:text-white">About Engineers & Hub</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white hover:translate-x-1 transition flex items-center space-x-1.5 text-slate-400 group">
                  <ChevronRight className="w-3 h-3 text-red-500 group-hover:text-red-400 transition shrink-0" />
                  <span className="group-hover:text-white">Enquiry & Map</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered (Hidden on Mobile View) */}
          <div className="hidden md:block">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
              <span className="w-1 h-3.5 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
              <span>Specializations</span>
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <Car className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                <span>Car Synthetic Oil Service</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Bike className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Superbike Tuning & Motul 300V</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>9H Ceramic Coating & Detailing</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                <span>Bosch Computer Diagnostics</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
                <span>Brake Caliper Skimming</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>24/7 Roadside Assistance</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Working Hours */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
              <span className="w-1 h-3.5 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
              <span>Hub & Timings</span>
            </h4>
            
            <div className="flex items-start space-x-2 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#E53935] shrink-0 mt-0.5" />
              <span className="text-slate-300 line-clamp-1">{garageInfo.address}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Booking: <span className="text-white font-semibold">{garageInfo.phone}</span></span>
            </div>

            <a
              href={`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ApexAuto, I want to inquire about vehicle servicing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold hover:text-emerald-300 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400 shrink-0" />
              <span>WhatsApp: {garageInfo.whatsapp}</span>
            </a>

            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#E53935] shrink-0" />
              <span>{garageInfo.workingHours.weekdays}</span>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row lg:flex-col gap-1.5">
              <a
                href={`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ApexAuto, I want to chat with a service technician.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center space-x-1.5 transition active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Chat</span>
              </a>

              <button
                onClick={() => initiateBooking()}
                className="flex-1 py-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs rounded-lg shadow-md shadow-red-600/25 transition active:scale-95"
              >
                Book Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom credits & Legal Links */}
        <div className="mt-3 pt-3 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} ApexAuto Garage Services. All Rights Reserved.</p>
          <div className="flex items-center space-x-3 font-medium">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-red-400 transition text-slate-400 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-red-400 transition text-slate-400 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
