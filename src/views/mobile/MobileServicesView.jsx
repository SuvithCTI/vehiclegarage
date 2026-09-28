import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { Search, Filter, Car, Bike, Wrench } from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { packageCategories } from '../../data/servicesData';

export const MobileServicesView = () => {
  const { services } = useGarage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [vehicleFilter, setVehicleFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = services.filter(s => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory;
    const matchVeh = vehicleFilter === 'all' || s.vehicleType === vehicleFilter || s.vehicleType === 'all';
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchVeh && matchSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-2xl font-black text-slate-900 font-['Outfit']">Service Packages</h1>
        <p className="text-xs text-slate-600">Fixed upfront pricing for cars & bikes</p>
      </div>

      {/* Search & filters */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search packages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
          />
        </div>

        {/* Vehicle Switcher */}
        <div className="grid grid-cols-3 gap-2">
          {['all', 'car', 'bike'].map(v => (
            <button
              key={v}
              onClick={() => setVehicleFilter(v)}
              className={`py-2 rounded-xl text-xs font-bold capitalize transition ${
                vehicleFilter === v ? 'bg-[#E53935] text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              {v === 'all' ? 'All Vehicles' : v === 'car' ? 'Cars Only' : 'Bikes Only'}
            </button>
          ))}
        </div>

        {/* Categories scrollable */}
        <div className="flex overflow-x-auto space-x-2 py-1 scrollbar-none">
          {packageCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition ${
                activeCategory === cat.id ? 'bg-[#E53935] text-white shadow' : 'bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards list in 2-Column Grid */}
      {filtered.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
          <Wrench className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="text-xs font-bold text-slate-800">No packages match your search</p>
          <button
            onClick={() => { setActiveCategory('all'); setVehicleFilter('all'); setSearch(''); }}
            className="text-xs text-[#E53935] font-bold underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {filtered.map(s => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      )}
    </div>
  );
};
