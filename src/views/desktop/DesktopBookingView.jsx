import React, { useState, useEffect } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  Calendar, 
  Car, 
  Bike, 
  Wrench, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Tag, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  Plus,
  Check
} from 'lucide-react';
import { offersData } from '../../data/offersData';

export const DesktopBookingView = () => {
  const { 
    currentUser,
    services, 
    selectedServiceForBooking, 
    setSelectedServiceForBooking, 
    addBooking,
    showToast
  } = useGarage();

  // Multi-step state (1: Vehicle, 2: Service & Addons, 3: Date & Slot, 4: Summary & Confirm)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [bookingForm, setBookingForm] = useState({
    vehicleType: 'car', // 'car' | 'bike'
    brand: 'Hyundai',
    model: '',
    fuelType: 'Petrol',
    regNumber: '',
    serviceId: '',
    serviceName: '',
    basePrice: 0,
    addOns: [],
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    pickupRequired: false,
    pickupAddress: '',
    customerName: currentUser ? currentUser.name : '',
    phone: currentUser ? currentUser.phone : '',
    email: currentUser ? currentUser.email : '',
    couponCode: '',
    notes: '',
    paymentMethod: 'Pay at Garage / Upon Delivery'
  });

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponInput, setCouponInput] = useState('');

  // Update customer info when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setBookingForm(prev => ({
        ...prev,
        customerName: prev.customerName || currentUser.name,
        phone: prev.phone || currentUser.phone,
        email: prev.email || currentUser.email
      }));
    }
  }, [currentUser]);

  // Pre-fill selected service if passed via context
  useEffect(() => {
    if (selectedServiceForBooking) {
      setBookingForm(prev => ({
        ...prev,
        vehicleType: selectedServiceForBooking.vehicleType === 'all' ? 'car' : selectedServiceForBooking.vehicleType,
        serviceId: selectedServiceForBooking.id,
        serviceName: selectedServiceForBooking.name,
        basePrice: selectedServiceForBooking.price
      }));
    } else if (services.length > 0) {
      const defaultService = services[0];
      setBookingForm(prev => ({
        ...prev,
        serviceId: defaultService.id,
        serviceName: defaultService.name,
        basePrice: defaultService.price
      }));
    }
  }, [selectedServiceForBooking, services]);

  // Common vehicle brands
  const carBrands = ['Hyundai', 'Maruti Suzuki', 'Tata Motors', 'Honda', 'Toyota', 'Mahindra', 'Volkswagen', 'Kia', 'Skoda', 'BMW', 'Mercedes-Benz'];
  const bikeBrands = ['Royal Enfield', 'KTM', 'Yamaha', 'Honda 2-Wheelers', 'Bajaj Auto', 'TVS Motors', 'Kawasaki', 'Hero MotoCorp', 'Suzuki 2-Wheelers', 'BMW Motorrad'];

  const addOnOptions = [
    { id: 'ad-wash', name: 'Premium Hydrophobic Windshield Polish', price: 299, type: 'car' },
    { id: 'ad-nitro', name: 'Nitrogen Gas Fill for All Tyres', price: 149, type: 'all' },
    { id: 'ad-engine-flush', name: 'Liqui Moly Engine Oil Flush & Cleaner', price: 499, type: 'all' },
    { id: 'ad-chain-care', name: 'Motul Heavy Duty O-Ring Chain Lube Can', price: 349, type: 'bike' },
    { id: 'ad-anti-rust', name: 'Underbody Rubberized Anti-Rust Coat', price: 999, type: 'car' }
  ];

  const filteredAddOns = addOnOptions.filter(ad => ad.type === 'all' || ad.type === bookingForm.vehicleType);

  const toggleAddOn = (addon) => {
    setBookingForm(prev => {
      const exists = prev.addOns.find(a => a.id === addon.id);
      if (exists) {
        return { ...prev, addOns: prev.addOns.filter(a => a.id !== addon.id) };
      } else {
        return { ...prev, addOns: [...prev.addOns, addon] };
      }
    });
  };

  const handleServiceSelect = (srv) => {
    setBookingForm(prev => ({
      ...prev,
      serviceId: srv.id,
      serviceName: srv.name,
      basePrice: srv.price
    }));
  };

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    const found = offersData.find(o => o.code.toUpperCase() === code);
    if (!found) {
      showToast('Invalid coupon code', 'error');
      return;
    }

    if (totalBeforeDiscount < found.minBill) {
      showToast(`Coupon requires minimum service total of ₹${found.minBill}`, 'error');
      return;
    }

    setAppliedCoupon(found);
    showToast(`Coupon ${found.code} applied successfully!`, 'success');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput('');
  };

  // Calculations
  const addOnsTotal = bookingForm.addOns.reduce((sum, item) => sum + item.price, 0);
  const totalBeforeDiscount = bookingForm.basePrice + addOnsTotal;
  
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = Math.round((totalBeforeDiscount * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.discountAmount) {
      discountAmount = appliedCoupon.discountAmount;
    }
  }

  const finalPayable = Math.max(0, totalBeforeDiscount - discountAmount);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.customerName || !bookingForm.phone) {
      showToast('Please enter your name and phone number', 'error');
      return;
    }
    if (!bookingForm.model) {
      showToast('Please enter your vehicle model', 'error');
      return;
    }

    addBooking({
      ...bookingForm,
      discountAmount,
      couponCode: appliedCoupon ? appliedCoupon.code : '',
      finalTotal: finalPayable
    });
  };

  return (
    <div className="space-y-10 pb-16 w-full max-w-6xl mx-auto">
      
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#E53935]">
          <Calendar className="w-3.5 h-3.5 text-[#E53935]" />
          <span>Instant Online Appointment Scheduler</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Outfit']">
          Book Your Vehicle Service
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Reserve your slot in under 2 minutes. Free cancellation & 100% upfront quote guarantee.
        </p>
      </div>

      {/* Step Progress Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between shadow-sm">
        {[
          { num: 1, title: 'Vehicle' },
          { num: 2, title: 'Package' },
          { num: 3, title: 'Date & Slot' },
          { num: 4, title: 'Confirm' }
        ].map((st, idx) => (
          <div key={st.num} className="flex items-center flex-1">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition ${
                currentStep === st.num
                  ? 'bg-[#E53935] text-white ring-4 ring-red-100'
                  : currentStep > st.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-500'
              }`}>
                {currentStep > st.num ? <Check className="w-4 h-4" /> : st.num}
              </div>
              <span className={`text-xs font-bold hidden sm:inline ${
                currentStep >= st.num ? 'text-slate-900' : 'text-slate-400'
              }`}>
                {st.title}
              </span>
            </div>
            {idx < 3 && (
              <div className={`flex-1 h-0.5 mx-3 ${currentStep > st.num ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Main Booking Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Step Form Column */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* STEP 1: VEHICLE DETAILS */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 animate-fadeIn shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Car className="w-5 h-5 text-[#E53935]" />
                <span>Step 1: Vehicle Information</span>
              </h3>

              {/* Vehicle Type Car/Bike */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Select Vehicle Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setBookingForm({ ...bookingForm, vehicleType: 'car', brand: carBrands[0] })}
                    className={`p-4 rounded-2xl border flex items-center justify-center space-x-3 text-sm font-bold transition ${
                      bookingForm.vehicleType === 'car'
                        ? 'bg-[#E53935]/10 border-[#E53935] text-[#E53935] shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Car className="w-6 h-6" />
                    <span>Four Wheeler (Car)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBookingForm({ ...bookingForm, vehicleType: 'bike', brand: bikeBrands[0] })}
                    className={`p-4 rounded-2xl border flex items-center justify-center space-x-3 text-sm font-bold transition ${
                      bookingForm.vehicleType === 'bike'
                        ? 'bg-[#E53935]/10 border-[#E53935] text-[#E53935] shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <Bike className="w-6 h-6" />
                    <span>Two Wheeler (Bike / Scooter)</span>
                  </button>
                </div>
              </div>

              {/* Brand & Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Vehicle Brand / Make *</label>
                  <select
                    value={bookingForm.brand}
                    onChange={(e) => setBookingForm({ ...bookingForm, brand: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  >
                    {(bookingForm.vehicleType === 'car' ? carBrands : bikeBrands).map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Model Name / Variant *</label>
                  <input
                    type="text"
                    required
                    placeholder={bookingForm.vehicleType === 'car' ? 'e.g. Creta 1.5 SX / Swift VDi' : 'e.g. Classic 350 / Duke 390 / Activa 6G'}
                    value={bookingForm.model}
                    onChange={(e) => setBookingForm({ ...bookingForm, model: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>
              </div>

              {/* Registration & Fuel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Registration Number (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. KA-01-MJ-4521"
                    value={bookingForm.regNumber}
                    onChange={(e) => setBookingForm({ ...bookingForm, regNumber: e.target.value.toUpperCase() })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 font-mono placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Fuel Type</label>
                  <select
                    value={bookingForm.fuelType}
                    onChange={(e) => setBookingForm({ ...bookingForm, fuelType: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric (EV)">Electric (EV)</option>
                    <option value="CNG / Hybrid">CNG / Hybrid</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!bookingForm.model) {
                      showToast('Please enter your vehicle model to proceed', 'error');
                      return;
                    }
                    setCurrentStep(2);
                  }}
                  className="px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 flex items-center space-x-2 transition"
                >
                  <span>Continue to Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: SERVICE PACKAGE & ADDONS */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 animate-fadeIn shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-[#E53935]" />
                <span>Step 2: Choose Service Package</span>
              </h3>

              {/* Service Selection List */}
              <div className="space-y-3">
                {services
                  .filter(s => s.vehicleType === bookingForm.vehicleType || s.vehicleType === 'all')
                  .map((srv) => {
                    const isSelected = bookingForm.serviceId === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => handleServiceSelect(srv)}
                        className={`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#E53935]/10 border-[#E53935] shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <img src={srv.image} alt={srv.name} className="w-14 h-14 rounded-xl object-cover" />
                          <div>
                            <h4 className={`text-sm font-bold ${isSelected ? 'text-[#E53935]' : 'text-slate-900'}`}>
                              {srv.name}
                            </h4>
                            <p className="text-xs text-slate-500">{srv.duration} • {srv.warranty}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-base font-black text-slate-900">₹{srv.price}</span>
                          <div className="mt-1">
                            {isSelected ? (
                              <span className="text-[10px] font-bold bg-[#E53935] text-white px-2 py-0.5 rounded">Selected</span>
                            ) : (
                              <span className="text-[10px] text-slate-400">Click to pick</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Add-ons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Optional Value Add-ons
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredAddOns.map((ad) => {
                    const isAdded = bookingForm.addOns.some(a => a.id === ad.id);
                    return (
                      <div
                        key={ad.id}
                        onClick={() => toggleAddOn(ad)}
                        className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition ${
                          isAdded
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-5 h-5 rounded flex items-center justify-center ${isAdded ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>
                            {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5 text-slate-500" />}
                          </div>
                          <span>{ad.name}</span>
                        </div>
                        <span className="font-bold text-slate-900">+₹{ad.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center space-x-2 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 flex items-center space-x-2 transition"
                >
                  <span>Select Date & Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: DATE, TIME SLOT & PICKUP */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 animate-fadeIn shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#E53935]" />
                <span>Step 3: Appointment Date & Time</span>
              </h3>

              {/* Date picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Select Service Date *</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingForm.date}
                  onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                />
              </div>

              {/* Slot Chooser */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Choose Service Slot</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Morning (09:00 AM - 12:00 PM)',
                    'Afternoon (01:00 PM - 04:00 PM)',
                    'Evening (04:00 PM - 07:00 PM)'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setBookingForm({ ...bookingForm, timeSlot: slot })}
                      className={`p-3 rounded-xl border text-xs font-bold transition text-left ${
                        bookingForm.timeSlot === slot
                          ? 'bg-[#E53935]/10 border-[#E53935] text-[#E53935]'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pickup & Drop Toggle */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-[#E53935]" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Doorstep Pick & Drop Service</h4>
                      <p className="text-[11px] text-slate-500">Trained driver will collect vehicle from your address</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={bookingForm.pickupRequired}
                    onChange={(e) => setBookingForm({ ...bookingForm, pickupRequired: e.target.checked })}
                    className="w-5 h-5 accent-[#E53935] rounded cursor-pointer"
                  />
                </div>

                {bookingForm.pickupRequired && (
                  <div className="pt-2 animate-fadeIn">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Enter Pickup Address *</label>
                    <textarea
                      rows={2}
                      placeholder="Apartment, Street name, Landmark, Pincode"
                      value={bookingForm.pickupAddress}
                      onChange={(e) => setBookingForm({ ...bookingForm, pickupAddress: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935]"
                    ></textarea>
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center space-x-2 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (bookingForm.pickupRequired && !bookingForm.pickupAddress) {
                      showToast('Please specify pickup address', 'error');
                      return;
                    }
                    setCurrentStep(4);
                  }}
                  className="px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 flex items-center space-x-2 transition"
                >
                  <span>Review & Customer Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & SUMMARY */}
          {currentStep === 4 && (
            <form onSubmit={handleFinalSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 animate-fadeIn shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-[#E53935]" />
                <span>Step 4: Customer Details & Payment Preference</span>
              </h3>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sumanth Hegde"
                    value={bookingForm.customerName}
                    onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98450 12345"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>
              </div>

              {/* Email & Special instructions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email (For Instant Invoice Copy)</label>
                  <input
                    type="email"
                    placeholder="e.g. sumanth@gmail.com"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Payment Preference</label>
                  <select
                    value={bookingForm.paymentMethod}
                    onChange={(e) => setBookingForm({ ...bookingForm, paymentMethod: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  >
                    <option value="Pay at Garage / Upon Delivery">Pay at Garage / Upon Delivery (Cash/UPI/Card)</option>
                    <option value="Online UPI / NetBanking">Online UPI / NetBanking</option>
                    <option value="Credit / Debit Card">Credit / Debit Card</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Vehicle Complaints / Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Unusual squeaking sound during high rpm / AC cooling low in stop-and-go traffic"
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center space-x-2 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-black text-sm rounded-xl shadow-lg shadow-[#E53935]/25 flex items-center space-x-2 transform active:scale-95 transition"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm & Schedule Service</span>
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Right Column: Live Order Breakdown & Coupon */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-5 sticky top-24 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center justify-between">
              <span>Service Summary</span>
              <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold uppercase">{bookingForm.vehicleType}</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-slate-900">{bookingForm.serviceName || 'Selected Package'}</p>
                  <p className="text-[11px] text-slate-500">{bookingForm.brand} {bookingForm.model || 'Model TBD'}</p>
                </div>
                <span className="font-bold text-slate-900">₹{bookingForm.basePrice}</span>
              </div>

              {bookingForm.addOns.length > 0 && (
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <p className="text-[11px] font-semibold text-slate-600">Add-on Services:</p>
                  {bookingForm.addOns.map(ad => (
                    <div key={ad.id} className="flex justify-between text-slate-600 text-[11px]">
                      <span>+ {ad.name}</span>
                      <span>₹{ad.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Coupon Code input */}
              <div className="pt-3 border-t border-slate-100">
                {appliedCoupon ? (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-bold text-emerald-800">{appliedCoupon.code}</span>
                      <p className="text-[10px] text-emerald-600">Savings: ₹{discountAmount}</p>
                    </div>
                    <button onClick={removeCoupon} className="text-slate-500 hover:text-slate-800 text-xs font-bold">Remove</button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Coupon (e.g. FIRST20)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 uppercase focus:outline-none focus:border-[#E53935]"
                    />
                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="px-3 py-2 bg-slate-800 hover:bg-[#E53935] text-white font-bold text-xs rounded-xl transition"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Final Totals */}
              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{totalBeforeDiscount}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Promo Discount</span>
                    <span>- ₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Pick & Drop Fee</span>
                  <span className="text-emerald-600 font-bold">{bookingForm.pickupRequired ? 'FREE' : 'N/A'}</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 text-sm">Estimated Total</span>
                  <span className="text-2xl font-black text-[#E53935]">₹{finalPayable}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <p className="flex items-center space-x-1 text-emerald-700 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Cancellation Charges</span>
              </p>
              <p>Pay only after service completion and test drive.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
