import React, { useState, useEffect } from 'react';
import { useGarage } from '../../context/GarageContext';
import { Calendar, Car, Bike, Wrench, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const MobileBookingView = () => {
  const { services, selectedServiceForBooking, addBooking, showToast } = useGarage();

  const [form, setForm] = useState({
    vehicleType: 'car',
    brand: 'Hyundai',
    model: '',
    fuelType: 'Petrol',
    serviceId: '',
    serviceName: '',
    basePrice: 0,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    pickupRequired: false,
    pickupAddress: '',
    customerName: '',
    phone: '',
    couponCode: '',
    paymentMethod: 'Pay at Garage'
  });

  useEffect(() => {
    if (selectedServiceForBooking) {
      setForm(prev => ({
        ...prev,
        vehicleType: selectedServiceForBooking.vehicleType === 'all' ? 'car' : selectedServiceForBooking.vehicleType,
        serviceId: selectedServiceForBooking.id,
        serviceName: selectedServiceForBooking.name,
        basePrice: selectedServiceForBooking.price
      }));
    } else if (services.length > 0) {
      const defaultService = services[0];
      setForm(prev => ({
        ...prev,
        serviceId: defaultService.id,
        serviceName: defaultService.name,
        basePrice: defaultService.price
      }));
    }
  }, [selectedServiceForBooking, services]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.customerName || !form.phone || !form.model) {
      showToast('Please fill all required fields', 'error');
      return;
    }

    addBooking({
      ...form,
      discountAmount: 0,
      finalTotal: form.basePrice,
      addOns: []
    });
  };

  const availableServices = services.filter(s => s.vehicleType === form.vehicleType || s.vehicleType === 'all');

  return (
    <div className="space-y-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-slate-900 font-['Outfit']">Book Service</h1>
        <p className="text-xs text-slate-600">Schedule your vehicle maintenance</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 border border-slate-200 space-y-4 text-xs shadow-sm">
        
        {/* Vehicle type */}
        <div>
          <label className="block text-slate-700 font-bold mb-1">Vehicle Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setForm({ ...form, vehicleType: 'car' })}
              className={`py-2.5 rounded-xl border font-bold flex items-center justify-center space-x-1.5 transition ${
                form.vehicleType === 'car' ? 'bg-[#E53935] text-white' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Car</span>
            </button>
            <button
              type="button"
              onClick={() => setForm({ ...form, vehicleType: 'bike' })}
              className={`py-2.5 rounded-xl border font-bold flex items-center justify-center space-x-1.5 transition ${
                form.vehicleType === 'bike' ? 'bg-[#E53935] text-white' : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Bike className="w-4 h-4" />
              <span>Bike</span>
            </button>
          </div>
        </div>

        {/* Model */}
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Vehicle Model & Make *</label>
          <input
            type="text"
            required
            placeholder="e.g. Swift VXI / RE Classic 350"
            value={form.model}
            onChange={e => setForm({ ...form, model: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
          />
        </div>

        {/* Service Package */}
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Service Package</label>
          <select
            value={form.serviceId}
            onChange={e => {
              const selected = services.find(s => s.id === e.target.value);
              if (selected) {
                setForm({
                  ...form,
                  serviceId: selected.id,
                  serviceName: selected.name,
                  basePrice: selected.price
                });
              }
            }}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
          >
            {availableServices.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} - ₹{s.price}
              </option>
            ))}
          </select>
        </div>

        {/* Date & Slot */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-slate-700 font-semibold mb-1">Date *</label>
            <input
              type="date"
              value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
            />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-1">Time Slot</label>
            <select
              value={form.timeSlot}
              onChange={e => setForm({ ...form, timeSlot: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
            >
              <option value="Morning (09:00 AM - 12:00 PM)">Morning</option>
              <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon</option>
              <option value="Evening (04:00 PM - 07:00 PM)">Evening</option>
            </select>
          </div>
        </div>

        {/* Customer info */}
        <div>
          <label className="block text-slate-700 font-semibold mb-1">Your Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Sumanth Hegde"
            value={form.customerName}
            onChange={e => setForm({ ...form, customerName: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-1">Mobile Phone *</label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98450 12345"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
          />
        </div>

        {/* Price & Submit */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 block">Total Payable</span>
            <span className="text-xl font-black text-[#E53935]">₹{form.basePrice}</span>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold rounded-xl shadow-md transition"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};
