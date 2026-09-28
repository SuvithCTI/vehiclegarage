import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { Calendar, UserCheck, Wrench, Search, FileText, CheckCircle2, Lock, LogIn } from 'lucide-react';

export const MobileAdminDashboard = () => {
  const { bookings, updateBookingStatus, setActiveBookingReceipt, services, enquiries, currentUser, openAuthModal } = useGarage();
  const [tab, setTab] = useState('bookings');
  const [search, setSearch] = useState('');

  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="py-12 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
          <Lock className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Admin Login Required</h2>
        <p className="text-xs text-slate-600">Please authenticate to access the admin portal.</p>
        <button
          onClick={() => openAuthModal('admin', 'admin')}
          className="px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-black text-xs rounded-xl shadow-md transition"
        >
          Login As Admin
        </button>
      </div>
    );
  }

  const filtered = bookings.filter(b => 
    b.id.toLowerCase().includes(search.toLowerCase()) ||
    b.customerName.toLowerCase().includes(search.toLowerCase()) ||
    b.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-slate-900 font-['Outfit']">Admin Portal</h1>
        <p className="text-xs text-slate-600">Logged in as <span className="text-amber-700 font-semibold">{currentUser.name}</span></p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 text-xs font-bold">
        <button
          onClick={() => setTab('bookings')}
          className={`py-2 rounded-xl transition ${tab === 'bookings' ? 'bg-[#E53935] text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}
        >
          Bookings ({bookings.length})
        </button>
        <button
          onClick={() => setTab('services')}
          className={`py-2 rounded-xl transition ${tab === 'services' ? 'bg-[#E53935] text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}
        >
          Services ({services.length})
        </button>
        <button
          onClick={() => setTab('enquiries')}
          className={`py-2 rounded-xl transition ${tab === 'enquiries' ? 'bg-[#E53935] text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}
        >
          Enquiries ({enquiries.length})
        </button>
      </div>

      {tab === 'bookings' && (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
          />

          <div className="space-y-3">
            {filtered.map(b => (
              <div key={b.id} className="bg-white rounded-2xl p-4 border border-slate-200 space-y-3 text-xs shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-amber-700">{b.id}</span>
                  <select
                    value={b.status}
                    onChange={e => updateBookingStatus(b.id, e.target.value)}
                    className="px-2 py-1 bg-slate-50 border border-slate-300 rounded text-xs font-bold text-slate-900"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="In Service">In Service</option>
                    <option value="Ready for Pickup">Ready for Pickup</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{b.customerName} ({b.phone})</h4>
                  <p className="text-slate-600">{b.brand} {b.model} • {b.serviceName}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-black text-[#E53935]">₹{b.finalTotal}</span>
                  <button
                    onClick={() => setActiveBookingReceipt(b)}
                    className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs border border-slate-200 font-semibold"
                  >
                    Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'services' && (
        <div className="space-y-3">
          {services.map(s => (
            <div key={s.id} className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center justify-between text-xs shadow-sm">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{s.name}</h4>
                <p className="text-slate-500">{s.duration} • {s.vehicleType}</p>
              </div>
              <span className="font-black text-slate-900 text-sm">₹{s.price}</span>
            </div>
          ))}
        </div>
      )}

      {tab === 'enquiries' && (
        <div className="space-y-3">
          {enquiries.map(enq => (
            <div key={enq.id} className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2 text-xs shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">{enq.name} ({enq.phone})</span>
                <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">{enq.status}</span>
              </div>
              <p className="text-slate-600">{enq.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
