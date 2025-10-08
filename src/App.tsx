import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import type { StyledService } from './types/services';

type PageKey = 'home' | 'about' | 'services' | 'clients' | 'contact' | 'service-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [selectedService, setSelectedService] = useState<StyledService | null>(null);

  const handleNavigation = (page: PageKey) => {
    setCurrentPage(page);
    setSelectedService(null);
  };

  const handleServiceClick = (service: StyledService) => {
    setSelectedService(service);
    setCurrentPage('service-detail');
  };

  const renderCurrentPage = () => {
    if (currentPage === 'service-detail' && selectedService) {
      return <ServiceDetail service={selectedService} onBack={() => setCurrentPage('services')} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Services onServiceClick={handleServiceClick} />
            <About />
            <Clients />
          </>
        );
      case 'about':
        return <About />;
      case 'services':
        return <Services onServiceClick={handleServiceClick} />;
      case 'clients':
        return <Clients />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Services onServiceClick={handleServiceClick} />
            <About />
            <Clients />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>{renderCurrentPage()}</main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
