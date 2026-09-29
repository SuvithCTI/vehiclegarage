import React, { useState, useEffect } from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  X, 
  UserCheck, 
  User, 
  Lock, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  KeyRound,
  LogIn
} from 'lucide-react';

export const AuthModal = () => {
  const { authModal, closeAuthModal, loginUser, showToast, garageInfo, navigateToView } = useGarage();
  
  const [loginRole, setLoginRole] = useState('customer'); // 'customer' | 'admin'
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('admin@apexauto.com');
  const [adminPassword, setAdminPassword] = useState('admin123');

  useEffect(() => {
    if (authModal.initialTab === 'admin') {
      setLoginRole('admin');
    } else {
      setLoginRole('customer');
    }
  }, [authModal]);

  if (!authModal.isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginRole === 'admin') {
      const cleanEmail = adminEmail.trim().toLowerCase();
      const cleanPass = adminPassword.trim();

      if (!cleanPass) {
        showToast('Please enter admin passkey', 'error');
        return;
      }

      if (cleanPass !== 'admin123' && cleanPass !== 'apex2026') {
        showToast('Invalid Admin credentials or passkey', 'error');
        return;
      }

      const adminUser = {
        id: 'admin-1',
        name: 'ApexAuto Master Admin',
        email: cleanEmail || 'admin@apexauto.com',
        phone: garageInfo.phone,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80'
      };
      loginUser(adminUser, authModal.redirectView || 'admin');
    } else {
      const cleanInput = emailOrPhone.trim();
      if (!cleanInput) {
        showToast('Please enter your email or phone number', 'error');
        return;
      }
      const customerUser = {
        id: cleanInput === '+91 97123 45678' || cleanInput.includes('neha') ? 'cust-2' : 'cust-1',
        name: cleanInput.includes('@') ? cleanInput.split('@')[0] : 'Aditya Roy',
        email: cleanInput.includes('@') ? cleanInput : 'aditya.roy@example.com',
        phone: cleanInput.includes('@') ? '+91 98451 23456' : cleanInput,
        role: 'customer',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
      };
      loginUser(customerUser, authModal.redirectView || 'my-bookings');
    }
  };

  // Demo 1-click logins
  const handleQuickDemoCustomer = (customerName, userPhone, userEmail) => {
    const user = {
      id: customerName === 'Aditya Roy' ? 'cust-1' : 'cust-2',
      name: customerName,
      phone: userPhone,
      email: userEmail,
      role: 'customer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
    };
    loginUser(user, authModal.redirectView || 'my-bookings');
  };

  const handleQuickDemoAdmin = () => {
    const admin = {
      id: 'admin-1',
      name: 'ApexAuto Master Admin',
      email: 'admin@apexauto.com',
      phone: garageInfo.phone,
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80'
    };
    loginUser(admin, authModal.redirectView || 'admin');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 border-b border-slate-200 relative">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center text-[#E53935]">
              <LogIn className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 font-['Outfit']">
                Account Login
              </h3>
              <p className="text-xs text-slate-500">
                Log in to access your dashboard & service records
              </p>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 pt-0 space-y-4">
          
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
            
            {/* Role Switcher: Customer vs Admin */}
            <div>
              <label className="block text-slate-700 font-bold mb-2">Select Login Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLoginRole('customer')}
                  className={`py-3 px-3 rounded-xl border font-bold flex items-center justify-center space-x-2 transition ${
                    loginRole === 'customer'
                      ? 'bg-[#E53935]/10 border-[#E53935] text-[#E53935] shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <User className="w-4 h-4 text-[#E53935]" />
                  <span>Customer (Others)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLoginRole('admin')}
                  className={`py-3 px-3 rounded-xl border font-bold flex items-center justify-center space-x-2 transition ${
                    loginRole === 'admin'
                      ? 'bg-amber-50 border-amber-500 text-amber-700 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <UserCheck className="w-4 h-4 text-amber-600" />
                  <span>Admin</span>
                </button>
              </div>
            </div>

            {/* Admin Login Form Fields */}
            {loginRole === 'admin' ? (
              <div className="space-y-3.5 animate-fadeIn">
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-[11px] leading-relaxed">
                  Log in as Admin to manage vehicle service bookings, update workshop repair status, and edit packages.
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Admin Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Admin Passkey</label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold rounded-xl shadow-md shadow-[#E53935]/20 flex items-center justify-center space-x-2 transition"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Log In as Admin</span>
                </button>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleQuickDemoAdmin}
                    className="w-full py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 font-bold rounded-xl text-center text-xs flex items-center justify-center space-x-1.5 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>⚡ Quick 1-Click Admin Login</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Customer Login Form Fields */
              <div className="space-y-3.5 animate-fadeIn">
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-[11px] leading-relaxed">
                  Log in as Customer to track your vehicle maintenance timeline, inspection status, and printable invoices.
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Mobile Number or Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 98451 23456 or aditya.roy@example.com"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Password</label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      placeholder="Enter password (optional for demo)"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold rounded-xl shadow-md shadow-[#E53935]/20 flex items-center justify-center space-x-2 transition"
                >
                  <span>Log In as Customer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 1-Click Customer Logins */}
                <div className="pt-2 border-t border-slate-200 space-y-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                    ⚡ Quick 1-Click Customer Logins:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickDemoCustomer('Aditya Roy', '+91 98451 23456', 'aditya.roy@example.com')}
                      className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-left text-[11px] transition"
                    >
                      <span className="font-bold text-slate-800 block">Aditya Roy</span>
                      <span className="text-amber-600 font-semibold text-[10px]">Creta Service</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickDemoCustomer('Neha Sen', '+91 97123 45678', 'neha.sen@example.com')}
                      className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-left text-[11px] transition"
                    >
                      <span className="font-bold text-slate-800 block">Neha Sen</span>
                      <span className="text-amber-600 font-semibold text-[10px]">RE Hunter 350</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Legal terms disclaimer */}
            <p className="text-[10px] text-slate-400 text-center pt-2">
              By logging in, you agree to ApexAuto's{' '}
              <button
                type="button"
                onClick={() => {
                  closeAuthModal();
                  navigateToView('terms');
                }}
                className="text-[#E53935] underline font-semibold"
              >
                Terms & Conditions
              </button>{' '}
              and{' '}
              <button
                type="button"
                onClick={() => {
                  closeAuthModal();
                  navigateToView('privacy');
                }}
                className="text-[#E53935] underline font-semibold"
              >
                Privacy Policy
              </button>
              .
            </p>

          </form>

        </div>
      </div>
    </div>
  );
};
