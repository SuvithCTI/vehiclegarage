import React, { useState } from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  Wrench, 
  Car, 
  Bike, 
  Calendar, 
  PhoneCall, 
  ShieldCheck, 
  Menu, 
  X, 
  Sparkles, 
  Image as ImageIcon, 
  UserCheck, 
  Clock, 
  MapPin,
  LogIn,
  LogOut,
  User,
  ShieldAlert,
  Info,
  MessageCircle
} from 'lucide-react';

import { RealTimeApexLogo } from './RealTimeApexLogo';

export const Navbar = () => {
  const { 
    activeView, 
    navigateToView, 
    initiateBooking, 
    bookings,
    currentUser,
    logoutUser,
    openAuthModal,
    garageInfo 
  } = useGarage();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter bookings for the logged-in customer if customer role
  const userBookingsCount = currentUser
    ? currentUser.role === 'admin'
      ? bookings.length
      : bookings.filter(b => b.phone === currentUser.phone || b.email === currentUser.email || b.customerId === currentUser.id).length
    : 0;

  // Base public navigation items
  const publicNavItems = [
    { id: 'home', label: 'Home', icon: Wrench },
    { id: 'services', label: 'Services', icon: Car },
    { id: 'about', label: 'About Us', icon: ShieldCheck },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
    { id: 'contact', label: 'Contact', icon: MapPin },
  ];

  const handleNavClick = (viewId) => {
    navigateToView(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/90 shadow-xl">
      {/* Main Navigation Bar */}
      <div className="max-w-[1600px] mx-auto px-3.5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group shrink-0"
          >
            <div className="sm:hidden">
              <RealTimeApexLogo size="sm" />
            </div>
            <div className="hidden sm:block">
              <RealTimeApexLogo size="md" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white font-['Outfit']">APEX</span>
                <span className="text-lg sm:text-2xl font-black tracking-tight text-[#E53935] font-['Outfit']">AUTO</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-semibold tracking-wide flex items-center space-x-1 whitespace-nowrap">
                <span>CAR & BIKE CARE</span>
                <span className="text-[#E53935] hidden sm:inline">•</span>
                <span className="text-amber-400 font-bold hidden sm:inline">ISO 9001:2015</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {publicNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-md shadow-red-600/30 border border-red-500/40 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* My Bookings (Only visible when user is logged in) */}
            {currentUser && (
              <button
                onClick={() => handleNavClick('my-bookings')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  activeView === 'my-bookings'
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-md shadow-red-600/30 border border-red-500/40 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Calendar className="w-4 h-4 text-red-400" />
                <span>My Bookings</span>
                {userBookingsCount > 0 && (
                  <span className="ml-1 bg-red-500/20 text-red-300 text-xs px-2 py-0.2 rounded-full font-bold border border-red-500/30">
                    {userBookingsCount}
                  </span>
                )}
              </button>
            )}

            {/* Admin Portal (Only visible when logged in as Admin) */}
            {currentUser && currentUser.role === 'admin' && (
              <button
                onClick={() => handleNavClick('admin')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center space-x-1.5 ${
                  activeView === 'admin'
                    ? 'text-amber-200 bg-amber-600/30 border border-amber-400/50 shadow-sm font-bold'
                    : 'text-amber-300 hover:bg-amber-500/20 border border-amber-500/30'
                }`}
              >
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Admin Portal</span>
                <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded font-black uppercase">
                  Admin
                </span>
              </button>
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* User Auth Status or Login Button */}
            {currentUser ? (
              <div className="flex items-center space-x-2.5 bg-slate-900 border border-slate-800 p-1.5 pr-3 rounded-2xl shadow-sm">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-xl object-cover border border-[#E53935]/40"
                />
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-200 block leading-tight line-clamp-1">{currentUser.name}</span>
                  <span className={`text-[10px] font-bold uppercase ${currentUser.role === 'admin' ? 'text-amber-400' : 'text-[#E53935]'}`}>
                    {currentUser.role}
                  </span>
                </div>
                <button
                  onClick={logoutUser}
                  title="Log Out"
                  className="p-1.5 text-slate-400 hover:text-[#E53935] rounded-lg hover:bg-slate-800 transition"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-red-500/50 font-bold text-xs rounded-xl flex items-center space-x-2 transition shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5 text-[#E53935]" />
                <span>Login</span>
              </button>
            )}

            {/* WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ApexAuto, I want to inquire about vehicle service and booking slots.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-2xs group"
              title="Chat with ApexAuto Desk on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400 group-hover:scale-110 transition" />
              <span>WhatsApp</span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={() => initiateBooking()}
              className="rounded-xl bg-gradient-to-r from-[#E53935] to-[#D97706] hover:from-[#d32f2f] hover:to-[#b45309] px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-500/25 transition-all hover:scale-105 active:scale-95 flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu & actions */}
          <div className="flex lg:hidden items-center space-x-1.5 sm:space-x-2 shrink-0">
            {!currentUser ? (
              <button
                onClick={() => openAuthModal('login')}
                className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center space-x-1 transition shadow-2xs active:scale-95"
              >
                <LogIn className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E53935]" />
                <span>Login</span>
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('my-bookings')}
                className="bg-slate-900 text-red-400 text-[11px] sm:text-xs font-bold px-2.5 py-1.5 rounded-xl border border-slate-800 flex items-center space-x-1 transition"
              >
                <User className="w-3 h-3" />
                <span className="max-w-[55px] truncate">{currentUser.name.split(' ')[0]}</span>
              </button>
            )}

            <button
              onClick={() => initiateBooking()}
              className="bg-[#E53935] hover:bg-[#d32f2f] text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1.5 rounded-xl shadow-sm flex items-center space-x-1 transition active:scale-95"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 sm:p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 transition active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl text-white">
          
          {/* User Profile Pill in Mobile Menu */}
          {currentUser ? (
            <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-9 h-9 rounded-xl object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-white">{currentUser.name}</h4>
                  <p className="text-[10px] text-[#E53935] font-bold uppercase">{currentUser.role} Account</p>
                </div>
              </div>
              <button
                onClick={() => { logoutUser(); setMobileMenuOpen(false); }}
                className="text-xs text-red-400 font-bold px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/30"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="mb-3">
              <button
                onClick={() => { openAuthModal('login'); setMobileMenuOpen(false); }}
                className="w-full py-3 bg-gradient-to-r from-[#E53935] to-[#D97706] text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          )}

          {/* Public Nav items */}
          {publicNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#E53935] text-white shadow-md'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Logged-in only My Bookings */}
          {currentUser && (
            <button
              onClick={() => handleNavClick('my-bookings')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeView === 'my-bookings'
                  ? 'bg-[#E53935] text-white shadow-md'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span>My Bookings</span>
              </div>
              {userBookingsCount > 0 && (
                <span className="bg-red-500/20 text-red-300 text-xs px-2 py-0.5 rounded-full font-bold border border-red-500/30">
                  {userBookingsCount}
                </span>
              )}
            </button>
          )}

          {/* Logged-in only Admin Portal */}
          {currentUser && currentUser.role === 'admin' && (
            <button
              onClick={() => handleNavClick('admin')}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeView === 'admin'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30'
              }`}
            >
              <div className="flex items-center space-x-3">
                <UserCheck className="w-5 h-5" />
                <span>Admin Management Portal</span>
              </div>
              <span className="bg-amber-500 text-slate-950 text-[10px] px-2 py-0.5 rounded font-black">
                ADMIN
              </span>
            </button>
          )}

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <a
              href={`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi ApexAuto, I want to inquire about vehicle service and booking slots.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat with Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${garageInfo.phone}`}
              className="flex items-center justify-center space-x-2 py-2.5 bg-slate-900 text-slate-300 border border-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-800 transition"
            >
              <PhoneCall className="w-4 h-4 text-[#E53935]" />
              <span>Call Reception: {garageInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
