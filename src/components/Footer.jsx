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
    <footer className="bg-white border-t border-slate-200 pt-6 pb-6 text-slate-600 text-sm mt-6">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-slate-200">
          
          {/* Col 1: Brand Info & Quality Assurance */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNav('home')}>
              <RealTimeApexLogo size="sm" />
              <span className="text-xl font-black text-slate-900 tracking-tight font-['Outfit']">
                APEX<span className="text-[#E53935]">AUTO</span>
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Bangalore's premier ISO-certified multi-brand automobile garage for comprehensive car & superbike servicing, computerized diagnostics, and rapid emergency assistance.
            </p>
            
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center space-x-2 text-xs text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse"></span>
                <span className="font-semibold text-slate-900">Workshop Quality Guarantee</span>
              </div>
              <p className="text-[#E53935] font-bold text-sm mt-1">100% Genuine OEM Spares</p>
              <p className="text-[11px] text-slate-500">Authorized Multi-Brand Auto & Bike Hub</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-4 bg-[#E53935] rounded-full"></span>
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#E53935] transition flex items-center space-x-1.5 text-slate-600">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Home & Garage Highlights</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#E53935] transition flex items-center space-x-1.5 text-slate-600">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Car & Bike Service Packages</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#E53935] transition flex items-center space-x-1.5 text-slate-600">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Workshop Photos</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#E53935] transition flex items-center space-x-1.5 text-slate-600">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>About Our Engineers & Facilities</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#E53935] transition flex items-center space-x-1.5 text-slate-600">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Enquiry & Workshop Map</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-4 bg-[#E53935] rounded-full"></span>
              <span>Our Specializations</span>
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-600">
                <Car className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Car Periodic Synthetic Oil Service</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Bike className="w-3.5 h-3.5 text-amber-600" />
                <span>Superbike Tuning & Motul 300V</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>9H Ceramic Coating & Paint Detailing</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Bosch OBD-II Computer Diagnostics</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <Award className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Brake Caliper Skimming & Overhaul</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-600">
                <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                <span>24/7 Roadside Assistance & Towing</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Working Hours */}
          <div className="space-y-3">
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-4 bg-[#E53935] rounded-full"></span>
              <span>Garage Hub & Timings</span>
            </h4>
            
            <div className="flex items-start space-x-2.5 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
              <span>{garageInfo.address}</span>
            </div>
            
            <div className="flex items-center space-x-2.5 text-xs text-slate-600">
              <PhoneCall className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Booking: {garageInfo.phone}</span>
            </div>

            <a
              href={`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ApexAuto, I want to inquire about vehicle servicing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 text-xs text-emerald-700 font-bold hover:text-emerald-800 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600 shrink-0" />
              <span>WhatsApp: {garageInfo.whatsapp}</span>
            </a>

            <div className="flex items-center space-x-2.5 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-[#E53935] shrink-0" />
              <span>{garageInfo.workingHours.weekdays}</span>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ApexAuto, I want to chat with a service technician.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center space-x-2 transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => initiateBooking()}
                className="w-full py-2.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 transition active:scale-95"
              >
                Book Appointment Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom credits & Legal Links */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} ApexAuto Garage Services. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 font-semibold">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#E53935] transition text-slate-600 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-[#E53935] transition text-slate-600 hover:underline"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
