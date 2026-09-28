import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  Wrench, 
  Car, 
  Bike, 
  Sparkles, 
  Cpu, 
  ShieldAlert, 
  CheckCircle, 
  Search, 
  Filter, 
  Check, 
  X, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { packageCategories } from '../../data/servicesData';

export const DesktopServicesView = () => {
  const { services, initiateBooking } = useGarage();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicleFilter, setVehicleFilter] = useState('all'); // 'all', 'car', 'bike'

  const filteredServices = services.filter((srv) => {
    const matchesCategory = 
      activeCategory === 'all' || 
      srv.category === activeCategory || 
      (activeCategory === 'car' && srv.vehicleType === 'car') ||
      (activeCategory === 'bike' && srv.vehicleType === 'bike') ||
      (activeCategory === 'emergency' && srv.category === 'emergency');

    const matchesVehicle = 
      vehicleFilter === 'all' || 
      srv.vehicleType === vehicleFilter || 
      srv.vehicleType === 'all';

    const matchesSearch = 
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesVehicle && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search services (e.g. AC refill, Ceramic, Brake, Motul)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Car / Bike vehicle toggle */}
          <div className="flex items-center space-x-2 w-full md:w-auto">
            <span className="text-xs text-slate-600 font-semibold">Vehicle:</span>
            <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setVehicleFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  vehicleFilter === 'all' ? 'bg-[#E53935] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setVehicleFilter('car')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  vehicleFilter === 'car' ? 'bg-[#E53935] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Car className="w-3 h-3" />
                <span>Cars</span>
              </button>
              <button
                onClick={() => setVehicleFilter('bike')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  vehicleFilter === 'bike' ? 'bg-[#E53935] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Bike className="w-3 h-3" />
                <span>Bikes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          {packageCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeCategory === cat.id
                  ? 'bg-[#E53935] text-white shadow-sm font-bold'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-slate-600">
            Showing <strong className="text-slate-900">{filteredServices.length}</strong> available service packages
          </p>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No services found matching your search</h3>
            <p className="text-xs text-slate-500">Try changing the category filter or searching with different keywords.</p>
            <button
              onClick={() => { setActiveCategory('all'); setVehicleFilter('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#E53935] hover:bg-[#d32f2f] text-white text-xs font-bold rounded-xl transition shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Package Comparison Matrix */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6 shadow-sm">
        <div>
          <div className="flex items-center space-x-2 text-[#E53935] text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-[#E53935]" />
            <span>Package Comparison Matrix</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-['Outfit']">
            Compare Our Service Tiers
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Choose the perfect depth of servicing matching your vehicle's current odometer reading.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                <th className="py-3.5 px-4 font-bold rounded-l-xl">Service Inclusions</th>
                <th className="py-3.5 px-4 font-bold text-slate-900">Basic Periodic</th>
                <th className="py-3.5 px-4 font-bold text-amber-700">Standard Service</th>
                <th className="py-3.5 px-4 font-bold text-[#E53935] rounded-r-xl">Master Comprehensive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Engine Oil Grade</td>
                <td className="py-3.5 px-4 text-slate-600">Semi-Synthetic</td>
                <td className="py-3.5 px-4 text-slate-600">100% Full Synthetic</td>
                <td className="py-3.5 px-4 text-amber-700 font-bold">Motul / Mobil 1 Racing Grade</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Oil & Air Filter Service</td>
                <td className="py-3.5 px-4"><Check className="w-4 h-4 text-emerald-600" /></td>
                <td className="py-3.5 px-4"><Check className="w-4 h-4 text-emerald-600" /></td>
                <td className="py-3.5 px-4"><Check className="w-4 h-4 text-emerald-600" /></td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Brake Caliper Deep Overhaul</td>
                <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-300" /></td>
                <td className="py-3.5 px-4"><Check className="w-4 h-4 text-emerald-600" /></td>
                <td className="py-3.5 px-4"><Check className="w-4 h-4 text-emerald-600" /></td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Bosch OBD-II Computer Diagnostics</td>
                <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-300" /></td>
                <td className="py-3.5 px-4 text-slate-700 font-medium">Basic Scan</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">Full 50-Sensor Diagnostic</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Wheel Alignment & Dynamic Balance</td>
                <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-300" /></td>
                <td className="py-3.5 px-4"><X className="w-4 h-4 text-slate-300" /></td>
                <td className="py-3.5 px-4"><Check className="w-4 h-4 text-emerald-600" /></td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Exterior Wash & Interior Vacuum</td>
                <td className="py-3.5 px-4 text-slate-600">Quick Wash</td>
                <td className="py-3.5 px-4 text-slate-700">Foam Wash + Vacuum</td>
                <td className="py-3.5 px-4 text-amber-700 font-bold">Deep Foam + Wax Polish</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Doorstep Pick & Drop</td>
                <td className="py-3.5 px-4 text-slate-500">Optional (₹250)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">Free</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">Free Express</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Warranty Coverage</td>
                <td className="py-3.5 px-4 text-slate-600">1 Month / 1,000 Km</td>
                <td className="py-3.5 px-4 text-slate-600">3 Months / 3,000 Km</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">6 Months / 5,000 Km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
