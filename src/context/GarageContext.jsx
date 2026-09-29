import React, { createContext, useContext, useState, useEffect } from 'react';
import { servicesData as initialServices } from '../data/servicesData';
import { garageInfo } from '../data/garageInfo';
import { 
  sanitizePlain, 
  sanitizePhone, 
  sanitizeEmail, 
  sanitizeObject, 
  safeJsonParse, 
  isRateLimited 
} from '../utils/security';

const GarageContext = createContext();

const INITIAL_BOOKINGS = [
  {
    id: 'BK-89210',
    customerId: 'cust-1',
    customerName: 'Aditya Roy',
    phone: '+91 98451 23456',
    email: 'aditya.roy@example.com',
    vehicleType: 'car',
    brand: 'Hyundai',
    model: 'Creta 1.5 Diesel',
    regNumber: 'KA-01-MJ-4521',
    fuelType: 'Diesel',
    serviceId: 'car-comprehensive-master',
    serviceName: 'Comprehensive Master Service',
    basePrice: 4999,
    discountAmount: 1000,
    couponCode: 'FIRST20',
    finalTotal: 3999,
    date: '2026-09-29',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    pickupRequired: true,
    pickupAddress: 'Apt 402, Sunrise Residency, Koramangala, Bangalore',
    status: 'In Service',
    paymentMethod: 'Pay at Garage / Pickup',
    notes: 'Please check slight screeching noise during high speed braking.',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    timeline: [
      { status: 'Booked', time: 'Yesterday 10:30 AM', done: true },
      { status: 'Confirmed', time: 'Yesterday 11:15 AM', done: true },
      { status: 'Vehicle Inspected', time: 'Today 09:15 AM', done: true },
      { status: 'Service in Progress', time: 'Today 10:00 AM', done: true },
      { status: 'Ready for Pickup', time: 'Pending', done: false },
      { status: 'Completed', time: 'Pending', done: false }
    ]
  },
  {
    id: 'BK-89211',
    customerId: 'cust-2',
    customerName: 'Neha Sen',
    phone: '+91 97123 45678',
    email: 'neha.sen@example.com',
    vehicleType: 'bike',
    brand: 'Royal Enfield',
    model: 'Hunter 350',
    regNumber: 'KA-05-EX-7890',
    fuelType: 'Petrol',
    serviceId: 'bike-periodic-general',
    serviceName: 'Standard Bike General Service',
    basePrice: 799,
    discountAmount: 0,
    couponCode: '',
    finalTotal: 799,
    date: '2026-09-30',
    timeSlot: 'Afternoon (01:00 PM - 04:00 PM)',
    pickupRequired: false,
    pickupAddress: '',
    status: 'Confirmed',
    paymentMethod: 'UPI / Online',
    notes: 'Chain cleaning and oil replacement needed.',
    createdAt: new Date(Date.now() - 43200000).toISOString(),
    timeline: [
      { status: 'Booked', time: 'Yesterday 04:20 PM', done: true },
      { status: 'Confirmed', time: 'Yesterday 05:00 PM', done: true },
      { status: 'Vehicle Inspected', time: 'Scheduled for Tomorrow', done: false },
      { status: 'Service in Progress', time: 'Pending', done: false },
      { status: 'Ready for Pickup', time: 'Pending', done: false },
      { status: 'Completed', time: 'Pending', done: false }
    ]
  },
  {
    id: 'BK-89212',
    customerId: 'cust-1',
    customerName: 'Aditya Roy',
    phone: '+91 98451 23456',
    email: 'aditya.roy@example.com',
    vehicleType: 'car',
    brand: 'Honda',
    model: 'City ZX',
    regNumber: 'KA-03-NB-1122',
    fuelType: 'Petrol',
    serviceId: 'car-ceramic-detailing',
    serviceName: '9H Ceramic Coating & Deep Detailing',
    basePrice: 8999,
    discountAmount: 500,
    couponCode: '',
    finalTotal: 8499,
    date: '2026-09-28',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    pickupRequired: true,
    pickupAddress: 'Villa 18, Palm Meadows, Whitefield',
    status: 'Completed',
    paymentMethod: 'Credit Card',
    notes: 'Mirror shine finish requested.',
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    timeline: [
      { status: 'Booked', time: '2 days ago', done: true },
      { status: 'Confirmed', time: '2 days ago', done: true },
      { status: 'Vehicle Inspected', time: 'Yesterday 09:00 AM', done: true },
      { status: 'Service in Progress', time: 'Yesterday 11:30 AM', done: true },
      { status: 'Ready for Pickup', time: 'Yesterday 05:00 PM', done: true },
      { status: 'Completed', time: 'Today 10:00 AM', done: true }
    ]
  }
];

const INITIAL_ENQUIRIES = [
  {
    id: 'ENQ-101',
    name: 'Suresh Menon',
    phone: '+91 94481 99882',
    email: 'suresh.m@gmail.com',
    vehicleType: 'Car (BMW 3 Series)',
    subject: 'Brake Disc Skimming & Pad Replacement Cost',
    message: 'Looking for genuine Brembo brake pads for my 2021 BMW 320d. Can you provide an estimate with installation?',
    date: '2026-09-28 09:40 AM',
    status: 'New'
  },
  {
    id: 'ENQ-102',
    name: 'Praveen Nair',
    phone: '+91 98860 11223',
    email: 'praveen.nair@hotmail.com',
    vehicleType: 'Bike (KTM Duke 390)',
    subject: 'ECU Remap & Quickshifter Tuning',
    message: 'Do you tune KTM Duke 390 ECUs for better low-end torque response?',
    date: '2026-09-27 04:15 PM',
    status: 'Contacted'
  }
];

export const GarageProvider = ({ children }) => {
  // Navigation & View states
  const [activeView, setActiveView] = useState('home');
  const [viewDeviceMode, setViewDeviceMode] = useState('responsive');

  // User Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_garage_user');
      return safeJsonParse(saved, null);
    } catch (e) {
      return null;
    }
  });

  const [authModal, setAuthModal] = useState({
    isOpen: false,
    initialTab: 'customer',
    redirectView: null
  });

  // Core Data with safe schema fallback
  const [services, setServices] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_garage_services_v4');
      if (saved) {
        const parsed = safeJsonParse(saved, null);
        if (Array.isArray(parsed) && parsed.length === initialServices.length) return parsed;
      }
    } catch (e) {
      console.warn('[GarageContext] Service load error fallback:', e);
    }
    return initialServices;
  });

  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_garage_bookings');
      const parsed = safeJsonParse(saved, null);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn('[GarageContext] Bookings load error fallback:', e);
    }
    return INITIAL_BOOKINGS;
  });

  const [enquiries, setEnquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_garage_enquiries');
      const parsed = safeJsonParse(saved, null);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn('[GarageContext] Enquiries load error fallback:', e);
    }
    return INITIAL_ENQUIRIES;
  });

  // Selected for booking flow
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeBookingReceipt, setActiveBookingReceipt] = useState(null);

  // Filter states
  const [serviceFilter, setServiceFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Toast notifications
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    const cleanMsg = typeof message === 'string' ? sanitizePlain(message, 300) : 'Notification';
    setToast({ message: cleanMsg, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('apex_garage_services_v4', JSON.stringify(services));
    } catch (e) {
      console.error('Failed to sync services to storage', e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem('apex_garage_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to sync bookings to storage', e);
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem('apex_garage_enquiries', JSON.stringify(enquiries));
    } catch (e) {
      console.error('Failed to sync enquiries to storage', e);
    }
  }, [enquiries]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('apex_garage_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('apex_garage_user');
      }
    } catch (e) {
      console.error('Failed to sync user to storage', e);
    }
  }, [currentUser]);

  // Auth Functions
  const loginUser = (userObj, targetView = null) => {
    const cleanUser = sanitizeObject(userObj);
    setCurrentUser(cleanUser);
    setAuthModal({ isOpen: false, initialTab: 'customer', redirectView: null });
    showToast(`Welcome back, ${cleanUser.name || 'User'}!`, 'success');
    
    if (targetView) {
      setActiveView(targetView);
    } else if (cleanUser.role === 'admin') {
      setActiveView('admin');
    } else if (activeView === 'home' || !['services', 'about', 'gallery', 'contact'].includes(activeView)) {
      setActiveView('my-bookings');
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    showToast('You have been logged out successfully.', 'info');
    if (activeView === 'my-bookings' || activeView === 'admin') {
      setActiveView('home');
    }
  };

  const openAuthModal = (initialTab = 'customer', redirectView = null) => {
    setAuthModal({ isOpen: true, initialTab, redirectView });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, initialTab: 'customer', redirectView: null });
  };

  // Safe navigation handler enforcing login for 'my-bookings' and 'admin'
  const navigateToView = (viewId) => {
    if (viewId === 'my-bookings') {
      if (!currentUser) {
        openAuthModal('customer', 'my-bookings');
        return;
      }
    } else if (viewId === 'admin') {
      if (!currentUser) {
        openAuthModal('admin', 'admin');
        return;
      }
      if (currentUser.role !== 'admin') {
        showToast('Admin role credentials required for Admin Portal', 'error');
        openAuthModal('admin', 'admin');
        return;
      }
    }
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Booking Actions with rate limiting and input sanitization
  const addBooking = (newBookingData) => {
    if (isRateLimited('addBooking', 2000)) {
      showToast('Please wait a moment before submitting another booking request.', 'error');
      return null;
    }

    const sanitizedData = sanitizeObject(newBookingData);
    const id = `BK-${Math.floor(10000 + Math.random() * 90000)}`;
    
    const fullBooking = {
      ...sanitizedData,
      id,
      customerName: sanitizePlain(sanitizedData.customerName || 'Valued Customer', 80),
      phone: sanitizePhone(sanitizedData.phone || ''),
      email: sanitizeEmail(sanitizedData.email || 'customer@apexauto.com') || 'customer@apexauto.com',
      brand: sanitizePlain(sanitizedData.brand || 'Vehicle', 50),
      model: sanitizePlain(sanitizedData.model || '', 60),
      regNumber: sanitizePlain(sanitizedData.regNumber || 'Not Provided', 30),
      pickupAddress: sanitizePlain(sanitizedData.pickupAddress || '', 250),
      notes: sanitizePlain(sanitizedData.notes || '', 500),
      customerId: currentUser ? currentUser.id : `guest-${Date.now()}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      timeline: [
        { status: 'Booked', time: 'Just now', done: true },
        { status: 'Confirmed', time: 'Auto-Confirmed', done: true },
        { status: 'Vehicle Inspection', time: 'Pending', done: false },
        { status: 'Service in Progress', time: 'Pending', done: false },
        { status: 'Ready for Pickup', time: 'Pending', done: false },
        { status: 'Completed', time: 'Pending', done: false }
      ]
    };

    setBookings(prev => [fullBooking, ...prev]);
    setActiveBookingReceipt(fullBooking);
    showToast(`Appointment booked successfully! Ref: ${id}`, 'success');

    // Auto-login user as customer if not logged in
    if (!currentUser) {
      setCurrentUser({
        id: fullBooking.customerId,
        name: fullBooking.customerName,
        phone: fullBooking.phone,
        email: fullBooking.email,
        role: 'customer',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
      });
    }

    return fullBooking;
  };

  const updateBookingStatus = (bookingId, newStatus) => {
    // Role check: Only admin or authenticated staff can update workshop status
    if (!currentUser || currentUser.role !== 'admin') {
      showToast('Unauthorized: Admin credentials required to modify service status', 'error');
      return;
    }

    const cleanStatus = sanitizePlain(newStatus, 50);
    setBookings(prev => prev.map(item => {
      if (item.id === bookingId) {
        const nowFormatted = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const updatedTimeline = item.timeline.map(step => {
          if (step.status.toLowerCase().includes(cleanStatus.toLowerCase().replace('in service', 'service in progress'))) {
            return { ...step, done: true, time: `Updated ${nowFormatted}` };
          }
          return step;
        });

        return {
          ...item,
          status: cleanStatus,
          timeline: updatedTimeline
        };
      }
      return item;
    }));
    showToast(`Booking ${bookingId} status updated to ${cleanStatus}`, 'info');
  };

  const cancelBooking = (bookingId) => {
    // Ensure the booking exists and user is owner or admin
    const targetBooking = bookings.find(b => b.id === bookingId);
    if (!targetBooking) {
      showToast('Booking record not found', 'error');
      return;
    }

    if (currentUser && currentUser.role !== 'admin' && targetBooking.customerId !== currentUser.id && targetBooking.phone !== currentUser.phone) {
      showToast('Unauthorized: You can only cancel your own bookings', 'error');
      return;
    }

    setBookings(prev => prev.map(item => {
      if (item.id === bookingId) {
        return {
          ...item,
          status: 'Cancelled',
          timeline: [...item.timeline, { status: 'Cancelled', time: 'Cancelled by customer/admin', done: true }]
        };
      }
      return item;
    }));
    showToast(`Booking ${bookingId} has been cancelled`, 'info');
  };

  const addEnquiry = (enquiryData) => {
    if (isRateLimited('addEnquiry', 2500)) {
      showToast('Please wait a moment before sending another enquiry.', 'error');
      return null;
    }

    const cleanEnquiry = {
      id: `ENQ-${Math.floor(100 + Math.random() * 900)}`,
      name: sanitizePlain(enquiryData.name || 'Anonymous', 80),
      phone: sanitizePhone(enquiryData.phone || ''),
      email: sanitizeEmail(enquiryData.email || '') || 'customer@apexauto.com',
      vehicleType: sanitizePlain(enquiryData.vehicleType || 'Car', 60),
      subject: sanitizePlain(enquiryData.subject || 'Service Enquiry', 120),
      message: sanitizePlain(enquiryData.message || '', 1000),
      date: new Date().toLocaleString(),
      status: 'New'
    };

    setEnquiries(prev => [cleanEnquiry, ...prev]);
    showToast('Enquiry sent! Our master technician will call you shortly.', 'success');
    return cleanEnquiry;
  };

  const updateEnquiryStatus = (id, newStatus) => {
    if (!currentUser || currentUser.role !== 'admin') {
      showToast('Unauthorized: Admin access required', 'error');
      return;
    }
    const cleanStatus = sanitizePlain(newStatus, 40);
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: cleanStatus } : e));
    showToast(`Enquiry ${id} marked as ${cleanStatus}`, 'info');
  };

  const addService = (newService) => {
    if (!currentUser || currentUser.role !== 'admin') {
      showToast('Unauthorized: Admin credentials required to add services', 'error');
      return;
    }

    const cleanService = sanitizeObject(newService);
    const serviceWithId = {
      ...cleanService,
      id: `custom-${Date.now()}`,
      name: sanitizePlain(cleanService.name || 'New Service', 80),
      price: Number(cleanService.price) || 999,
      originalPrice: Number(cleanService.originalPrice) || 1499,
      rating: 5.0,
      reviewsCount: 1
    };
    setServices(prev => [serviceWithId, ...prev]);
    showToast(`Service "${serviceWithId.name}" added successfully!`, 'success');
  };

  const deleteService = (serviceId) => {
    if (!currentUser || currentUser.role !== 'admin') {
      showToast('Unauthorized: Admin credentials required to delete services', 'error');
      return;
    }
    setServices(prev => prev.filter(s => s.id !== serviceId));
    showToast('Service package removed from catalogue', 'info');
  };

  const initiateBooking = (service = null, vehicleType = 'car') => {
    setSelectedServiceForBooking(service);
    if (vehicleType) {
      setServiceFilter(vehicleType);
    }
    setActiveView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <GarageContext.Provider
      value={{
        activeView,
        setActiveView,
        navigateToView,
        viewDeviceMode,
        setViewDeviceMode,
        currentUser,
        loginUser,
        logoutUser,
        authModal,
        openAuthModal,
        closeAuthModal,
        services,
        bookings,
        enquiries,
        selectedServiceForBooking,
        setSelectedServiceForBooking,
        activeVideoModal,
        setActiveVideoModal,
        activeBookingReceipt,
        setActiveBookingReceipt,
        serviceFilter,
        setServiceFilter,
        searchQuery,
        setSearchQuery,
        toast,
        showToast,
        addBooking,
        updateBookingStatus,
        cancelBooking,
        addEnquiry,
        updateEnquiryStatus,
        addService,
        deleteService,
        initiateBooking,
        garageInfo
      }}
    >
      {children}
    </GarageContext.Provider>
  );
};

export const useGarage = () => {
  const context = useContext(GarageContext);
  if (!context) {
    throw new Error('useGarage must be used within a GarageProvider');
  }
  return context;
};

