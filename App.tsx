import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { LoginPage } from './components/LoginPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ManuscriptScanner } from './components/ManuscriptScanner';
import { HeroSection } from './components/HeroSection';
import { SimpleInteractiveMap } from './components/SimpleInteractiveMap';
import { Monastery360Viewer } from './components/Monastery360Viewer';
import { VirtualTours } from './components/VirtualTours';
import { DigitalArchives } from './components/DigitalArchives';
import { AIItineraryPlanner } from './components/AIItineraryPlanner';
import { CulturalCalendar } from './components/CulturalCalendar';
import { Footer } from './components/Footer';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selected360Monastery, setSelected360Monastery] = useState<any>(null);

  // Debug: Add console log to check if App is rendering
  console.log('App component is rendering:', { currentPage, user, showLogin });

  // Check for saved user session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('monastery360_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('monastery360_user');
      }
    }
  }, []);

  const handleLogin = (userData: any) => {
    setUser(userData);
    localStorage.setItem('monastery360_user', JSON.stringify(userData));
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('monastery360_user');
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleBackToSite = () => {
    setShowLogin(false);
  };

  // Handle navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'reviews') {
        setCurrentPage('reviews');
      } else if (hash === 'scanner') {
        setCurrentPage('scanner');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange(); // Check initial hash
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showLogin) {
    return (
      <div style={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f9fafb' }}>
        <LoginPage
          onLogin={handleLogin}
          onBack={handleBackToSite}
        />
      </div>
    );
  }

  if (currentPage === 'reviews') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation 
          user={user} 
          onShowLogin={handleShowLogin} 
          onLogout={handleLogout}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="pt-16">
          <ReviewsPage />
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'scanner') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation 
          user={user} 
          onShowLogin={handleShowLogin} 
          onLogout={handleLogout}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="pt-16">
          <ManuscriptScanner />
        </div>
      </div>
    );
  }

  // Show 360° viewer if monastery is selected
  if (selected360Monastery) {
    return (
      <Monastery360Viewer
        monastery={selected360Monastery}
        onClose={() => setSelected360Monastery(null)}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdfcf8' }}>
      <Navigation 
        user={user} 
        onShowLogin={handleShowLogin} 
        onLogout={handleLogout}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <main>
        <HeroSection />
        <SimpleInteractiveMap onMonasterySelect={setSelected360Monastery} />
        <VirtualTours />
        <DigitalArchives />
        <AIItineraryPlanner />
        <CulturalCalendar />
      </main>
      
      <Footer />
    </div>
  );
}