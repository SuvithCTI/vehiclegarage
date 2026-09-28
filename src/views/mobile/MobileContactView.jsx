import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { MapPin, PhoneCall, Mail, MessageCircle, Send, Zap, CheckCircle2, HelpCircle, ChevronDown, Search } from 'lucide-react';
import { faqsData } from '../../data/offersData';

export const MobileContactView = () => {
  const { addEnquiry, garageInfo, initiateBooking } = useGarage();
  const [form, setForm] = useState({ name: '', phone: '', vehicleType: 'Car', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    addEnquiry(form);
    setSent(true);
    setForm({ name: '', phone: '', vehicleType: 'Car', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((current) => (current === index ? null : index));
  };

  const filteredFaqs = faqsData.filter(faq =>
    faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-slate-900 font-['Outfit']">Contact & Consultation</h1>
        <p className="text-xs text-slate-600">Get a fast quotation or technical support</p>
      </div>

      {/* 2-Column Info & Action Boxes */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {/* Box 1: WhatsApp */}
        <a
          href={`https://wa.me/${garageInfo.whatsapp.replace('+', '')}`}
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl flex flex-col justify-between shadow-sm space-y-2 transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="text-xs font-bold">WhatsApp Us</h4>
            <p className="text-[10px] text-emerald-100">Instant chat & estimates</p>
          </div>
        </a>

        {/* Box 2: 24/7 SOS Call */}
        <a
          href={`tel:${garageInfo.emergencyPhone}`}
          className="p-3.5 bg-[#E53935] hover:bg-[#d32f2f] text-white rounded-2xl flex flex-col justify-between shadow-sm space-y-2 transition active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold">24/7 SOS Helpline</h4>
            <p className="text-[10px] text-red-100">Rapid breakdown support</p>
          </div>
        </a>

        {/* Box 3: Workshop Hub */}
        <div className="p-3.5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-[#E53935]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Workshop Location</h4>
            <p className="text-[10px] text-slate-500 line-clamp-2">{garageInfo.address}</p>
          </div>
        </div>

        {/* Box 4: Timings & Support */}
        <div className="p-3.5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center">
            <PhoneCall className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Working Hours</h4>
            <p className="text-[10px] text-slate-500">{garageInfo.workingHours.weekdays}</p>
            <p className="text-[9px] text-amber-700 font-bold mt-0.5">{garageInfo.phone}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900">Send Service Inquiry</h3>
        
        {sent ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
            <p className="text-xs font-bold text-slate-900">Enquiry Sent Successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
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

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Vehicle Type</label>
              <select
                value={form.vehicleType}
                onChange={e => setForm({ ...form, vehicleType: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
              >
                <option value="Car">Car</option>
                <option value="Bike">Bike / Motorcycle</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Requirements / Issues *</label>
              <textarea
                required
                rows={3}
                placeholder="Describe your issue or custom service requirement..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md transition"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </div>

      {/* Frequently Asked Questions */}
      <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#E53935]">
            <HelpCircle className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-wide">Got Questions?</span>
          </div>
        </div>

        <h2 className="text-xl font-black text-slate-900 font-['Outfit']">Frequently Asked Questions</h2>

        {/* FAQ Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
          />
        </div>

        <div className="space-y-2.5 pt-1">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="flex w-full items-center justify-between gap-3 px-3.5 py-3 text-left text-slate-900"
              >
                <span className="text-xs font-bold leading-relaxed">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-[#E53935]' : ''}`} />
              </button>
              {openFaqIndex === idx && (
                <div className="border-t border-slate-200 bg-white px-3.5 py-3 text-[11px] leading-relaxed text-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
