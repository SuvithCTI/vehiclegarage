import React, { useState } from 'react';
import { useGarage } from '../../context/GarageContext';
import { 
  BarChart3, 
  Calendar, 
  Wrench, 
  Car, 
  Bike, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  Trash2, 
  Search, 
  Filter, 
  DollarSign, 
  UserCheck, 
  Mail, 
  PhoneCall, 
  Eye, 
  X,
  FileText,
  Lock,
  LogIn,
  Sparkles
} from 'lucide-react';

export const DesktopAdminDashboard = () => {
  const { 
    bookings, 
    updateBookingStatus, 
    cancelBooking,
    enquiries, 
    updateEnquiryStatus,
    services, 
    addService, 
    deleteService,
    showToast,
    setActiveBookingReceipt,
    currentUser,
    openAuthModal,
    garageInfo
  } = useGarage();

  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings', 'services', 'enquiries'
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // New service modal state
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    vehicleType: 'car',
    category: 'maintenance',
    price: 1999,
    originalPrice: 2499,
    duration: '2 Hours',
    shortDesc: '',
    warranty: '1 Month / 1000 Kms',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/g2b9p2eC6qM',
    features: 'Synthetic Oil Change, 25-Point Inspection, Foam Wash'
  });

  // Admin Guard: If user is not logged in or role is not admin
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-amber-600 shadow-lg">
          <Lock className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-amber-700 tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Restricted Operational Area
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
            Admin Authentication Required
          </h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Please log in with your administrator credentials to manage workshop appointments, adjust package pricing, and review customer inquiries.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => openAuthModal('admin', 'admin')}
            className="w-full sm:w-auto px-6 py-3 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl shadow-md shadow-[#E53935]/25 flex items-center justify-center space-x-2 transition"
          >
            <LogIn className="w-4 h-4" />
            <span>Admin Portal Login</span>
          </button>
        </div>
      </div>
    );
  }

  // Filter bookings
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = statusFilter === 'all' || b.status.toLowerCase() === statusFilter.toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesQuery = 
      b.id.toLowerCase().includes(query) ||
      b.customerName.toLowerCase().includes(query) ||
      b.phone.toLowerCase().includes(query) ||
      (b.regNumber && b.regNumber.toLowerCase().includes(query)) ||
      b.model.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  // Calculate Metrics
  const totalRevenue = bookings.reduce((sum, b) => b.status !== 'Cancelled' ? sum + b.finalTotal : sum, 0);
  const inServiceCount = bookings.filter(b => b.status === 'In Service').length;
  const pendingCount = bookings.filter(b => b.status === 'Pending' || b.status === 'Confirmed').length;
  const completedCount = bookings.filter(b => b.status === 'Completed').length;

  const handleCreateService = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.price) {
      showToast('Please fill in service name and price', 'error');
      return;
    }

    addService({
      ...newService,
      price: Number(newService.price),
      originalPrice: Number(newService.originalPrice),
      features: newService.features.split(',').map(f => f.trim())
    });

    setShowAddServiceModal(false);
    setNewService({
      name: '',
      vehicleType: 'car',
      category: 'maintenance',
      price: 1999,
      originalPrice: 2499,
      duration: '2 Hours',
      shortDesc: '',
      warranty: '1 Month / 1000 Kms',
      badge: 'New',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/g2b9p2eC6qM',
      features: 'Synthetic Oil Change, 25-Point Inspection, Foam Wash'
    });
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Admin Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center space-x-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4 text-[#E53935]" />
            <span>Master Garage Management Console</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
            Admin Operations Dashboard
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Logged in as <strong className="text-amber-700">{currentUser.name}</strong>. Real-time control for appointments, repair queues, and service catalogue.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'bookings' ? 'bg-[#E53935] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'services' ? 'bg-[#E53935] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Services ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'enquiries' ? 'bg-[#E53935] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Enquiries ({enquiries.length})
          </button>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Bookings</span>
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E53935] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900">{bookings.length}</h3>
          <p className="text-[11px] text-emerald-600 font-semibold">All vehicle types logged</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Revenue Projected</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900">₹{totalRevenue.toLocaleString()}</h3>
          <p className="text-[11px] text-slate-500">Total active service value</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">In Bay Servicing</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Wrench className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900">{inServiceCount}</h3>
          <p className="text-[11px] text-blue-600 font-semibold">Under active mechanic care</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Completed Jobs</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-black text-slate-900">{completedCount}</h3>
          <p className="text-[11px] text-emerald-600 font-semibold">Delivered to customers</p>
        </div>

      </div>

      {/* TAB 1: BOOKINGS MANAGEMENT */}
      {activeTab === 'bookings' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-6 shadow-sm">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by ID, Name, Plate No..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#E53935] focus:bg-white"
              />
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
              {['all', 'confirmed', 'in service', 'ready for pickup', 'completed', 'cancelled'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition ${
                    statusFilter === st
                      ? 'bg-[#E53935] text-white shadow-sm font-bold'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Bookings Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 bg-slate-50">
                  <th className="py-3 px-4 font-bold rounded-l-xl">Ref ID & Vehicle</th>
                  <th className="py-3 px-4 font-bold">Customer Details</th>
                  <th className="py-3 px-4 font-bold">Service Package</th>
                  <th className="py-3 px-4 font-bold">Date & Slot</th>
                  <th className="py-3 px-4 font-bold">Amount</th>
                  <th className="py-3 px-4 font-bold">Live Status</th>
                  <th className="py-3 px-4 font-bold text-right rounded-r-xl">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/80 transition">
                    
                    {/* ID & Vehicle */}
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {b.vehicleType === 'bike' ? (
                          <Bike className="w-4 h-4 text-amber-600 shrink-0" />
                        ) : (
                          <Car className="w-4 h-4 text-[#E53935] shrink-0" />
                        )}
                        <div>
                          <span className="font-mono font-bold text-slate-900 block">{b.id}</span>
                          <span className="text-[11px] text-slate-600">{b.brand} {b.model}</span>
                          {b.regNumber && (
                            <span className="text-[10px] text-amber-700 font-mono block">{b.regNumber}</span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Customer */}
                    <td className="py-4 px-4">
                      <p className="font-bold text-slate-900">{b.customerName}</p>
                      <p className="text-[11px] text-slate-500">{b.phone}</p>
                      {b.pickupRequired && (
                        <span className="text-[10px] text-emerald-600 font-semibold">Doorstep Pickup Req.</span>
                      )}
                    </td>

                    {/* Service */}
                    <td className="py-4 px-4">
                      <p className="font-medium text-slate-900">{b.serviceName}</p>
                      {b.notes && (
                        <p className="text-[10px] text-slate-500 italic line-clamp-1">Note: {b.notes}</p>
                      )}
                    </td>

                    {/* Schedule */}
                    <td className="py-4 px-4">
                      <p className="font-medium text-slate-900">{b.date}</p>
                      <p className="text-[10px] text-slate-500">{b.timeSlot}</p>
                    </td>

                    {/* Total */}
                    <td className="py-4 px-4">
                      <span className="font-black text-[#E53935] text-sm">₹{b.finalTotal}</span>
                      <p className="text-[10px] text-slate-400">{b.paymentMethod}</p>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-4">
                      <select
                        value={b.status}
                        onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border ${
                          b.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                            : b.status === 'In Service'
                              ? 'bg-blue-50 text-blue-700 border-blue-300'
                              : b.status === 'Cancelled'
                                ? 'bg-rose-50 text-rose-700 border-rose-300'
                                : 'bg-amber-50 text-amber-800 border-amber-300'
                        }`}
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="In Service">In Service</option>
                        <option value="Ready for Pickup">Ready for Pickup</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => setActiveBookingReceipt(b)}
                          title="View Printable Receipt"
                          className="p-1.5 rounded-lg bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 transition shadow-sm"
                        >
                          <FileText className="w-4 h-4 text-amber-600" />
                        </button>
                        {b.status !== 'Cancelled' && (
                          <button
                            onClick={() => cancelBooking(b.id)}
                            title="Cancel Booking"
                            className="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-[#E53935] hover:text-white border border-red-200 transition shadow-sm"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-xs">
              No service bookings found matching current filters.
            </div>
          )}

        </div>
      )}

      {/* TAB 2: SERVICES CATALOGUE MANAGEMENT */}
      {activeTab === 'services' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Garage Service Packages</h3>
              <p className="text-xs text-slate-500">Add, edit pricing, or remove service offerings</p>
            </div>
            <button
              onClick={() => setShowAddServiceModal(true)}
              className="px-4 py-2 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold text-xs rounded-xl flex items-center space-x-1.5 shadow-md shadow-[#E53935]/20 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Service Package</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((srv) => (
              <div key={srv.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-3 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={srv.image} alt={srv.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{srv.name}</h4>
                      <span className="text-[11px] text-amber-700 font-bold uppercase">{srv.vehicleType} • {srv.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteService(srv.id)}
                    className="text-slate-400 hover:text-red-600 p-1 transition"
                    title="Delete Service"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2">{srv.shortDesc}</p>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-base font-black text-slate-900">₹{srv.price}</span>
                  <span className="text-[11px] text-slate-500">{srv.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CUSTOMER ENQUIRIES */}
      {activeTab === 'enquiries' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Customer Inquiries & Custom Quotes</h3>
          
          <div className="space-y-3">
            {enquiries.map((enq) => (
              <div key={enq.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-bold text-amber-700">{enq.id}</span>
                      <span className="text-slate-900 font-bold text-sm">{enq.name}</span>
                      <span className="text-xs text-slate-500 font-mono">({enq.phone})</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Vehicle: {enq.vehicleType} {enq.subject ? `• Subject: ${enq.subject}` : ''}
                    </p>
                  </div>

                  <select
                    value={enq.status}
                    onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                      enq.status === 'Contacted'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                        : 'bg-amber-50 text-amber-800 border-amber-300'
                    }`}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                  </select>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                  {enq.message}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>Logged: {enq.date}</span>
                  <a
                    href={`tel:${enq.phone}`}
                    className="text-[#E53935] font-bold hover:underline flex items-center space-x-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Customer</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add New Service Modal */}
      {showAddServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900">Create New Service Package</h3>
              <button onClick={() => setShowAddServiceModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateService} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Service Package Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stage 2 Performance Remap"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Vehicle Type</label>
                  <select
                    value={newService.vehicleType}
                    onChange={(e) => setNewService({ ...newService, vehicleType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  >
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="all">Car & Bike</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Category</label>
                  <select
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  >
                    <option value="maintenance">Maintenance</option>
                    <option value="detailing">Detailing & Wash</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Offer Price (₹) *</label>
                  <input
                    type="number"
                    required
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Duration</label>
                  <input
                    type="text"
                    value={newService.duration}
                    onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={newService.shortDesc}
                  onChange={(e) => setNewService({ ...newService, shortDesc: e.target.value })}
                  placeholder="Summary of service benefits..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                ></textarea>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Features (Comma separated)</label>
                <input
                  type="text"
                  value={newService.features}
                  onChange={(e) => setNewService({ ...newService, features: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#E53935] focus:bg-white"
                />
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddServiceModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#E53935] hover:bg-[#d32f2f] text-white font-bold rounded-xl shadow-md transition"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
