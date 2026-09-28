import React from 'react';
import { useGarage } from '../context/GarageContext';
import { FileText, Award, ShieldCheck, Wrench, ArrowLeft, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

export const TermsConditionsView = () => {
  const { setActiveView, garageInfo, initiateBooking } = useGarage();

  return (
    <div className="space-y-10 pb-16 max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => {
          setActiveView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-[#E53935] transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 p-8 sm:p-12 shadow-xl min-h-[200px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-header-bg.jpg"
            alt="ApexAuto Facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-md border border-red-400/40">
            <FileText className="w-3.5 h-3.5 text-white" />
            <span>Service Terms & Quality Guarantees</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] drop-shadow-md">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow">
            Effective Date: September 2026 • Governing vehicle appointments, genuine parts warranty, doorstep logistics, and garage billing.
          </p>
        </div>
      </div>

      {/* Terms Body */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm">
        
        {/* Term 1 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <Wrench className="w-5 h-5 text-[#E53935]" />
            <h3>1. Service Bookings & Estimates</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            All appointments booked through the ApexAuto website or phone line are automatically confirmed upon slot availability. The initial estimate provided by our Quick Cost Estimator reflects standard manufacturer service specifications.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-slate-600">
            <li>Any additional parts or complex repairs discovered during the initial 25-Point Comprehensive Inspection will require explicit customer approval before commencement.</li>
            <li>Customers receive real-time video/photo WhatsApp walkthroughs detailing the condition of wear-and-tear items (e.g. brake pads, suspension bushings, drive belts).</li>
          </ul>
        </div>

        {/* Term 2 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <Award className="w-5 h-5 text-amber-600" />
            <h3>2. 100% Genuine OEM Spares & Warranty Policy</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            ApexAuto strictly utilizes 100% factory-sealed OEM parts and fluids from certified manufacturers (Bosch, Castrol EDGE, Mobil 1, Motul, Brembo, NGK).
          </p>
          <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Standard Service Warranty Terms:</span>
            </div>
            <p className="text-xs text-amber-800">
              Comprehensive Master Services are backed by our <strong>6 Months or 5,000 Kilometers Workshop Warranty</strong> (whichever occurs first). Warranty covers labour defect rectification and replacement of covered components.
            </p>
          </div>
        </div>

        {/* Term 3 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3>3. Free Doorstep Pick & Drop Logistics</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Free doorstep pickup and delivery is available across Bangalore city limits for all booked periodic maintenance and major repair packages.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-slate-600">
            <li>Our verified drivers carry company identification and perform a joint digital vehicle intake checklist (odometer, fuel level, existing scratches) before pickup.</li>
            <li>Real-time GPS vehicle tracking is shared with customers while in transit to and from the workshop.</li>
          </ul>
        </div>

        {/* Term 4 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <AlertCircle className="w-5 h-5 text-blue-600" />
            <h3>4. 24/7 Roadside Emergency Breakdown Assistance SLA</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Our 24/7 emergency mobile vans are dispatched with an average 30-minute arrival SLA for on-spot battery jumpstarts, flat tyre repairs, and emergency fuel delivery. In the event of catastrophic mechanical failure, flatbed towing support is coordinated directly to our garage hub.
          </p>
        </div>

        {/* Term 5 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3>5. Transparent Invoicing & Payments</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            ApexAuto operates on a transparent, upfront pricing policy. We accept UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and Pay at Garage / Post-Delivery. Detailed GST invoices with itemized part breakdown and barcode serial numbers are generated for all completed services.
          </p>
        </div>

        {/* Booking CTA Footer */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-white font-['Outfit']">Ready to experience certified multi-brand service?</h4>
            <p className="text-xs text-slate-300">Book your slot online with transparent upfront pricing and doorstep pickup.</p>
          </div>
          <button
            onClick={() => initiateBooking()}
            className="px-5 py-2.5 bg-[#E53935] hover:bg-red-600 text-white rounded-xl text-xs font-bold transition shrink-0"
          >
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};
