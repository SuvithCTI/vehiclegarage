import React, { useState } from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  Search, 
  Calendar, 
  Car, 
  Bike, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  MapPin, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Wrench,
  Sparkles,
  LogIn,
  User
} from 'lucide-react';

export const MyBookingsView = () => {
  const { 
    bookings, 
    currentUser, 
    openAuthModal, 
    setActiveBookingReceipt, 
    initiateBooking, 
    garageInfo 
  } = useGarage();

  const [searchFilter, setSearchFilter] = useState('');

  // If user is not logged in
  if (!currentUser) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 rounded-3xl bg-red-50 border border-red-200 flex items-center justify-center mx-auto text-[#E53935] shadow-lg">
          <Calendar className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
            Customer Login Required
          </h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Please log in with your account credentials to view your active vehicle service orders, timeline status, and invoice summaries.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => openAuthModal('customer', 'my-bookings')}
            className="w-full sm:w-auto px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/25 flex items-center justify-center space-x-2 transition"
          >
            <LogIn className="w-4 h-4" />
            <span>Log In As Customer</span>
          </button>
        </div>
      </div>
    );
  }

  // Filter bookings for the logged-in customer (or all if admin)
  const userBookings = currentUser.role === 'admin'
    ? bookings
    : bookings.filter(b => 
        b.customerId === currentUser.id ||
        b.phone === currentUser.phone ||
        b.email === currentUser.email ||
        b.customerName.toLowerCase() === currentUser.name.toLowerCase()
      );

  const displayedBookings = userBookings.filter(b => {
    if (!searchFilter) return true;
    const q = searchFilter.toLowerCase();
    return (
      b.id.toLowerCase().includes(q) ||
      b.phone.toLowerCase().includes(q) ||
      b.customerName.toLowerCase().includes(q) ||
      (b.regNumber && b.regNumber.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-10 pb-16 w-full max-w-6xl mx-auto">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full text-xs font-bold text-[#E53935]">
            <Clock className="w-3.5 h-3.5 text-[#E53935]" />
            <span>Live Vehicle Tracking & Service History</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Outfit']">
            My Service Appointments
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Logged in as <strong className="text-[#E53935]">{currentUser.name}</strong> ({currentUser.phone || currentUser.email}). Track real-time inspection stages and download tax invoice receipts.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search by Booking ID (e.g. BK-89210) or Vehicle Plate..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
          />
        </div>

        <button
          onClick={() => initiateBooking()}
          className="w-full sm:w-auto px-5 py-2.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 flex items-center justify-center space-x-2 transition"
        >
          <Calendar className="w-4 h-4" />
          <span>Book New Service</span>
        </button>
      </div>

      {/* Bookings List */}
      <div className="space-y-6">
        {displayedBookings.length > 0 ? (
          displayedBookings.map((b) => {
            const isCompleted = b.status === 'Completed';
            const isCancelled = b.status === 'Cancelled';
            const isInService = b.status === 'In Service';

            return (
              <div
                key={b.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm hover:border-[#E53935]/50 transition"
              >
                {/* Top Row: Ref ID, Status, and Vehicle Badge */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#E53935] shrink-0">
                      {b.vehicleType === 'bike' ? <Bike className="w-6 h-6" /> : <Car className="w-6 h-6" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-sm font-black text-slate-900">{b.id}</span>
                        <span className="text-[11px] text-slate-500">• Booked on {new Date(b.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-0.5">
                        {b.brand} {b.model} {b.regNumber ? `(${b.regNumber})` : ''}
                      </h3>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                        : isCancelled
                          ? 'bg-rose-50 text-rose-700 border-rose-300'
                          : isInService
                            ? 'bg-blue-50 text-blue-700 border-blue-300 animate-pulse'
                            : 'bg-amber-50 text-amber-800 border-amber-300'
                    }`}>
                      {b.status}
                    </span>

                    <button
                      onClick={() => setActiveBookingReceipt(b)}
                      className="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl text-xs font-semibold border border-slate-200 flex items-center space-x-1.5 transition shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-600" />
                      <span>Invoice Receipt</span>
                    </button>
                  </div>
                </div>

                {/* Service Details & Schedule Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <p className="text-slate-500 text-[11px] font-medium">Selected Package</p>
                    <p className="text-slate-900 font-bold text-sm">{b.serviceName}</p>
                    <p className="text-[#E53935] font-bold text-sm mt-1">₹{b.finalTotal}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <p className="text-slate-500 text-[11px] font-medium">Appointment Schedule</p>
                    <p className="text-slate-900 font-semibold">{b.date}</p>
                    <p className="text-slate-600">{b.timeSlot}</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <p className="text-slate-500 text-[11px] font-medium">Customer Contact</p>
                    <p className="text-slate-900 font-semibold">{b.customerName}</p>
                    <p className="text-slate-600">{b.phone}</p>
                  </div>
                </div>

                {/* Live Progress Tracker Timeline */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                    Live Workshop Service Timeline
                  </h4>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {b.timeline.map((step, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-2xl border flex flex-col justify-between space-y-2 text-xs transition ${
                          step.done
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                            : 'bg-slate-50 border-slate-200 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[11px]">Step {idx + 1}</span>
                          {step.done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                        </div>
                        <div>
                          <p className={`font-semibold text-xs ${step.done ? 'text-slate-900' : 'text-slate-500'}`}>
                            {step.status}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pickup Address Alert if applicable */}
                {b.pickupRequired && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs flex items-center space-x-2 text-amber-800">
                    <MapPin className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Doorstep Pickup Address: <strong className="text-slate-900">{b.pickupAddress}</strong></span>
                  </div>
                )}

              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No active bookings under your profile</h3>
            <p className="text-xs text-slate-500">
              Schedule your first car or bike maintenance service today with coupon code <strong className="text-[#E53935]">FIRST20</strong>.
            </p>
            <button
              onClick={() => initiateBooking()}
              className="px-5 py-2.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md transition"
            >
              Book A Vehicle Service Now
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
