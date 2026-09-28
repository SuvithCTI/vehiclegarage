import React from 'react';
import { GarageProvider, useGarage } from './context/GarageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingReceiptModal } from './components/BookingReceiptModal';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Desktop Views
import { DesktopHomeView } from './views/desktop/DesktopHomeView';
import { DesktopServicesView } from './views/desktop/DesktopServicesView';
import { DesktopGalleryView } from './views/desktop/DesktopGalleryView';
import { DesktopContactView } from './views/desktop/DesktopContactView';
import { DesktopBookingView } from './views/desktop/DesktopBookingView';
import { DesktopAdminDashboard } from './views/desktop/DesktopAdminDashboard';

// Mobile Views
import { MobileHomeView } from './views/mobile/MobileHomeView';
import { MobileServicesView } from './views/mobile/MobileServicesView';
import { MobileGalleryView } from './views/mobile/MobileGalleryView';
import { MobileContactView } from './views/mobile/MobileContactView';
import { MobileBookingView } from './views/mobile/MobileBookingView';
import { MobileAdminDashboard } from './views/mobile/MobileAdminDashboard';

// Common Views
import { MyBookingsView } from './views/MyBookingsView';
import { AboutUsView } from './views/AboutUsView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';
import { TermsConditionsView } from './views/TermsConditionsView';

const MainContent = () => {
  const { activeView } = useGarage();

  const renderCurrentView = () => {
    return (
      <>
        {/* Desktop View container (Large Screens) */}
        <div className="hidden lg:block animate-fadeIn">
          {activeView === 'home' && <DesktopHomeView />}
          {activeView === 'services' && <DesktopServicesView />}
          {activeView === 'gallery' && <DesktopGalleryView />}
          {activeView === 'contact' && <DesktopContactView />}
          {activeView === 'booking' && <DesktopBookingView />}
          {activeView === 'my-bookings' && <MyBookingsView />}
          {activeView === 'about' && <AboutUsView />}
          {activeView === 'privacy' && <PrivacyPolicyView />}
          {activeView === 'terms' && <TermsConditionsView />}
          {activeView === 'admin' && <DesktopAdminDashboard />}
        </div>

        {/* Mobile View container (Mobile/Tablet Screens) */}
        <div className="block lg:hidden animate-fadeIn">
          {activeView === 'home' && <MobileHomeView />}
          {activeView === 'services' && <MobileServicesView />}
          {activeView === 'gallery' && <MobileGalleryView />}
          {activeView === 'contact' && <MobileContactView />}
          {activeView === 'booking' && <MobileBookingView />}
          {activeView === 'my-bookings' && <MyBookingsView />}
          {activeView === 'about' && <AboutUsView />}
          {activeView === 'privacy' && <PrivacyPolicyView />}
          {activeView === 'terms' && <TermsConditionsView />}
          {activeView === 'admin' && <MobileAdminDashboard />}
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-[#E53935] selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-6">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Notification Popups */}
      <BookingReceiptModal />
      <AuthModal />
      <Toast />
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <GarageProvider>
      <MainContent />
    </GarageProvider>
  );
}
