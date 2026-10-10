import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { EnquiryButton } from './components/layout/EnquiryButton';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BackToTop } from './components/layout/BackToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { MandatoryDocumentsPage } from './pages/MandatoryDocumentsPage';
import { SEO } from './components/SEO';
import { getCurrentPath } from './utils/navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(getCurrentPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/mandatory-documents':
        return <MandatoryDocumentsPage />;
      case '/curriculum':
        return <CurriculumPage />;
      case '/facilities':
        return <FacilitiesPage />;
      case '/activities':
        return <ActivitiesPage />;
      case '/academics':
        return <AcademicsPage />;
      case '/contact':
        return <ContactPage />;
      case '/gallery':
        return <GalleryPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO path={currentPage} />
      <ScrollProgress />
      <Header />
      <main>{renderPage()}</main>
      <Footer />
      <EnquiryButton />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default App;
