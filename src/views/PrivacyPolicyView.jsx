import React from 'react';
import { useGarage } from '../context/GarageContext';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowLeft, Mail, Phone } from 'lucide-react';

export const PrivacyPolicyView = () => {
  const { setActiveView, garageInfo } = useGarage();

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
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>ApexAuto Trust & Data Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-['Outfit'] drop-shadow-md">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium drop-shadow">
            Last Updated: September 2026 • Your privacy, vehicle data, and digital service logs are guarded with enterprise-grade security.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm">
        
        {/* Section 1 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <Eye className="w-5 h-5 text-[#E53935]" />
            <h3>1. Information We Collect</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            To deliver precise automotive engineering services, accurate digital diagnostics, and doorstep pickup, we collect the following details when you book an appointment or request an estimate:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm pl-4 list-disc text-slate-600">
            <li><strong>Personal Contact Data:</strong> Name, phone number, email address, and pickup/drop residential address.</li>
            <li><strong>Vehicle Information:</strong> Make, model, registration number (e.g. KA-01-XX-1234), fuel type (Petrol/Diesel/EV), odometer reading, and maintenance history.</li>
            <li><strong>Live Logistics Data:</strong> Real-time GPS location coordinates when opting for doorstep vehicle pickup or 24/7 roadside emergency breakdown rescue.</li>
            <li><strong>Service Records & WhatsApp Media:</strong> Video walkarounds, digital OBD-II diagnostic error reports, and barcode serial numbers of replaced OEM spares.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <Lock className="w-5 h-5 text-amber-600" />
            <h3>2. How We Use & Protect Your Information</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            We adhere to strict zero-spam and zero-data-monetization standards. We never sell or lease your personal information to third-party telemarketers. Your data is used exclusively to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-xs text-slate-900">Service Confirmation & Updates</span>
              <p className="text-xs text-slate-600">Automated SMS/WhatsApp booking confirmation and stage-by-stage service progress alerts.</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-xs text-slate-900">Warranty Records</span>
              <p className="text-xs text-slate-600">6-Month warranty validation for all genuine parts and labour performed at our workshop.</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-xs text-slate-900">Doorstep Driver Tracking</span>
              <p className="text-xs text-slate-600">Connecting you with our verified garage pickup drivers via real-time live GPS maps.</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
              <span className="font-bold text-xs text-slate-900">Encrypted Digital Invoices</span>
              <p className="text-xs text-slate-600">Secure digital GST invoices with transparent itemized part pricing and warranty seals.</p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3>3. Payment & Transaction Security</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Online payment transactions processed via UPI, Credit/Debit cards, or Net Banking are routed through 256-bit SSL encrypted PCI-DSS certified payment gateways. ApexAuto never stores your raw card CVV or banking credentials.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-lg font-['Outfit']">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3>4. Contact Our Data & Privacy Officer</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            For questions regarding this privacy policy or to request data deletion/export of your vehicle service history, please contact our support desk:
          </p>
          <div className="p-4 bg-red-50/50 rounded-2xl border border-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-bold text-xs text-slate-900">ApexAuto Customer Care & Privacy Desk</p>
              <p className="text-xs text-slate-600">{garageInfo.address}</p>
            </div>
            <div className="flex items-center space-x-3 text-xs font-bold text-[#E53935]">
              <a href={`tel:${garageInfo.phone}`} className="hover:underline flex items-center space-x-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{garageInfo.phone}</span>
              </a>
              <a href={`mailto:${garageInfo.email}`} className="hover:underline flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{garageInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
