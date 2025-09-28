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
      <LoginPage
        onLogin={handleLogin}
        onBack={handleBackToSite}
      />
    );
  }

  if (currentPage === 'reviews') {
    return (
      <div className="min-h-screen bg-background">
        <Navigation 
          user={user} 
          onLogin={handleShowLogin} 
          onLogout={handleLogout}
        />
        <div className="pt-16">
          <ReviewsPage user={user} />
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
          onLogin={handleShowLogin} 
          onLogout={handleLogout}
        />
        <div className="pt-16">
          <ManuscriptScanner 
            user={user} 
            onBack={() => {
              window.location.hash = '';
              setCurrentPage('home');
            }}
          />
        </div>
      </div>
    );
  }

  // Show 360° viewer if monastery is selected
  if (selected360Monastery) {
    return (
      <Monastery360Viewer
        monastery={selected360Monastery}
        onBack={() => setSelected360Monastery(null)}
        user={user}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        user={user} 
        onLogin={handleShowLogin} 
        onLogout={handleLogout}
      />
      
      <main>
        <HeroSection user={user} />
        <SimpleInteractiveMap onStart360Tour={setSelected360Monastery} />
        <VirtualTours user={user} onStart360Tour={setSelected360Monastery} />
        <DigitalArchives />
        <AIItineraryPlanner />
        <CulturalCalendar />
      </main>
      
      <Footer />
    </div>
  );
}