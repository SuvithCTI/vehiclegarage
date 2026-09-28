import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  MessageCircle, 
  Car, 
  Bike, 
  ShieldCheck,
  Zap,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles
} from 'lucide-react';
import { faqsData } from '../../data/offersData';

export const DesktopContactView = () => {
  const { addEnquiry, garageInfo, initiateBooking } = useGarage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleType: 'Car',
    vehicleModel: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in your name, phone number, and service requirements.');
      return;
    }

    addEnquiry({
      ...formData,
      vehicleType: `${formData.vehicleType} (${formData.vehicleModel || 'Not Specified'})`
    });

    setSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleType: 'Car',
      vehicleModel: '',
      subject: '',
      message: ''
    });

    setTimeout(() => setSubmitted(false), 6000);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredFaqs = faqsData.filter(faq => 
    faq.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 px-3 py-1 rounded-full text-xs font-bold text-[#E53935]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Our Workshop Masters</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Outfit']">
            Contact & Service Enquiry
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Have a custom engine issue, seeking an estimate for accidental repair, or looking for superbike upgrades? Reach our master technicians directly.
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Cards & Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Workshop Hub Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Central Garage Workshop</h3>
                <p className="text-xs text-[#E53935] font-semibold">Flagship Service Hub</p>
              </div>
              <div className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open Today</span>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3 text-slate-600">
                <MapPin className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Address</p>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{garageInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-600">
                <PhoneCall className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Booking & Consultation</p>
                  <p className="text-slate-900 mt-0.5 font-mono font-bold">{garageInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-600">
                <Mail className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Official Email</p>
                  <p className="text-slate-600 mt-0.5">{garageInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-slate-600">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">Operating Hours</p>
                  <p className="text-slate-600 mt-0.5">{garageInfo.workingHours.weekdays}</p>
                  <p className="text-slate-600">{garageInfo.workingHours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${garageInfo.whatsapp.replace('+', '')}?text=Hi%20ApexAuto,%20I%20need%20a%20service%20quote`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Garage</span>
              </a>

              <a
                href={`tel:${garageInfo.emergencyPhone}`}
                className="flex-1 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 transition shadow-md shadow-[#E53935]/20"
              >
                <Zap className="w-4 h-4" />
                <span>24/7 Breakdown</span>
              </a>
            </div>
          </div>

          {/* Map Preview Box */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 h-64 relative shadow-sm">
            <iframe
              title="Garage Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124414.28823908865!2d77.55837648369138!3d12.975427181773095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 contrast-105"
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 flex items-center justify-between text-xs shadow-md">
              <div>
                <span className="font-bold text-slate-900">ApexAuto Main Workshop</span>
                <p className="text-[10px] text-slate-500">Electronic City / Koramangala Access</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#E53935] font-bold hover:underline flex items-center space-x-1"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-1">
                <Send className="w-4 h-4 text-[#E53935]" />
                <span>Instant Consultation Form</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-['Outfit']">Send A Service Enquiry</h3>
              <p className="text-xs text-slate-600 mt-1">
                Receive a direct callback with custom estimate within 15 minutes during operating hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Enquiry Received Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Our head technician will contact you on your provided phone number shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Vehicle Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">Select Vehicle Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: 'Car' })}
                      className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition ${
                        formData.vehicleType === 'Car'
                          ? 'bg-[#E53935]/10 border-[#E53935] text-[#E53935] shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Car className="w-4 h-4" />
                      <span>Car Inquiry</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, vehicleType: 'Bike' })}
                      className={`py-3 px-4 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition ${
                        formData.vehicleType === 'Bike'
                          ? 'bg-[#E53935]/10 border-[#E53935] text-[#E53935] shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Bike className="w-4 h-4" />
                      <span>Bike Inquiry</span>
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Email & Vehicle Model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Vehicle Make & Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Hyundai i20 / KTM Duke 390"
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Issue Category</label>
                  <input
                    type="text"
                    placeholder="e.g. Engine noise during cold start / AC cooling low"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Describe Requirements or Symptoms *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please explain the symptoms or specific custom modifications you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#E53935] hover:bg-[#d32f2f] text-white font-black text-sm rounded-2xl shadow-lg shadow-[#E53935]/25 flex items-center justify-center space-x-2 transition transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Service Enquiry</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="flex items-center space-x-2 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Customer Help & Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Answers to common queries regarding turnaround times, genuine parts, doorstep pick-up, and warranties.
            </p>
          </div>

          {/* FAQ Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. pickup, warranty, insurance)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
            />
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-100/80 transition"
                >
                  <span className="text-sm font-bold text-slate-900 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#E53935] text-xs font-black flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-180 text-[#E53935]' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                    <div className="p-3.5 bg-slate-50 rounded-xl text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-slate-500 text-xs">
              No matching questions found for "{faqSearch}". Please send us an enquiry above!
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Still have questions or need a customized quote?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Speak with our certified service advisors directly for instant advice.</p>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={`tel:${garageInfo.phone}`}
              className="px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl flex items-center space-x-1.5 transition shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>{garageInfo.phone}</span>
            </a>
            <button
              onClick={() => initiateBooking()}
              className="px-5 py-2.5 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/20 transition"
            >
              Book Service Slot
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
