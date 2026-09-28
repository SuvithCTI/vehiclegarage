import React from 'react';
import { useGarage } from '../context/GarageContext';
import { 
  CheckCircle, 
  X, 
  Printer, 
  Calendar, 
  Clock, 
  MapPin, 
  Car, 
  Bike, 
  ShieldCheck, 
  FileText,
  Download,
  Share2,
  MessageCircle
} from 'lucide-react';

export const BookingReceiptModal = () => {
  const { activeBookingReceipt, setActiveBookingReceipt, setActiveView, showToast, garageInfo } = useGarage();

  if (!activeBookingReceipt) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleTrackBooking = () => {
    setActiveBookingReceipt(null);
    setActiveView('my-bookings');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with success celebration */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white text-center relative">
          <button
            onClick={() => setActiveBookingReceipt(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-3 shadow-lg">
            <CheckCircle className="w-9 h-9 text-white" />
          </div>

          <h3 className="text-2xl font-black">Booking Confirmed!</h3>
          <p className="text-emerald-100 text-xs mt-1">
            Your vehicle service slot is reserved at ApexAuto Garage.
          </p>
          <div className="mt-3 inline-block bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono font-bold tracking-wider">
            Booking ID: {activeBookingReceipt.id}
          </div>
        </div>

        {/* Printable Ticket Receipt Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-600 print:text-black">
          
          {/* Customer & Vehicle Grid */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <div>
              <p className="text-slate-500 text-[11px] font-medium">Customer Name</p>
              <p className="text-slate-900 font-bold text-sm mt-0.5">{activeBookingReceipt.customerName}</p>
              <p className="text-slate-600 mt-1">{activeBookingReceipt.phone}</p>
            </div>
            <div>
              <p className="text-slate-500 text-[11px] font-medium">Vehicle Details</p>
              <p className="text-slate-900 font-bold text-sm mt-0.5">
                {activeBookingReceipt.brand} {activeBookingReceipt.model}
              </p>
              <p className="text-amber-700 font-mono font-bold mt-1">
                {activeBookingReceipt.regNumber} ({activeBookingReceipt.fuelType})
              </p>
            </div>
          </div>

          {/* Service & Slot info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Service Inclusions</h4>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-800">
                <span className="font-bold text-slate-900 text-sm">{activeBookingReceipt.serviceName}</span>
                <span className="font-bold text-slate-900 text-sm">₹{activeBookingReceipt.basePrice}</span>
              </div>
              
              {activeBookingReceipt.discountAmount > 0 && (
                <div className="flex justify-between items-center text-emerald-600">
                  <span>Applied Coupon ({activeBookingReceipt.couponCode || 'PROMO'})</span>
                  <span>- ₹{activeBookingReceipt.discountAmount}</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                <span className="font-bold text-slate-700">Total Payable Amount</span>
                <span className="text-xl font-black text-[#E53935]">₹{activeBookingReceipt.finalTotal}</span>
              </div>
            </div>
          </div>

          {/* Date, Time & Drop-off info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center space-x-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E53935] flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-slate-500 text-[10px]">Service Date & Time</p>
                <p className="text-slate-900 font-bold">{activeBookingReceipt.serviceDate} at {activeBookingReceipt.serviceTime}</p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center space-x-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-slate-500 text-[10px]">Turnaround Guarantee</p>
                <p className="text-slate-900 font-bold">Same Day / Express Ready</p>
              </div>
            </div>
          </div>

          {/* Garage Address for dropoff */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">ApexAuto Garage Drop-Off Location</p>
              <p className="text-slate-600 text-[11px] mt-0.5">{garageInfo.address}</p>
              <p className="text-amber-700 font-semibold text-[11px] mt-1">Helpline: {garageInfo.phone}</p>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={() => {
                const msg = encodeURIComponent(`Hi ApexAuto, here is my confirmed booking:
• Booking ID: #${activeBookingReceipt.bookingId}
• Customer: ${activeBookingReceipt.customerName} (${activeBookingReceipt.phone})
• Vehicle: ${activeBookingReceipt.vehicleModel} (${activeBookingReceipt.vehicleType.toUpperCase()})
• Package: ${activeBookingReceipt.serviceName}
• Date & Time: ${activeBookingReceipt.serviceDate} at ${activeBookingReceipt.serviceTime}
• Total: ₹${activeBookingReceipt.finalTotal}

Please send live inspection and workshop updates to my WhatsApp!`);
                window.open(`https://wa.me/${garageInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
              }}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Updates</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleTrackBooking}
              className="px-5 py-2 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 transition active:scale-95"
            >
              View in My Bookings
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
