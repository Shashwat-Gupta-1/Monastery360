export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="text-center">
          <h1 className="animate-fade-in-up">
            Discover Sikkim's Sacred Monasteries
          </h1>
          <p className="animate-fade-in-up">
            Experience the spiritual heritage of Sikkim through immersive virtual tours, 
            AI-powered itineraries, and digital archives preserving centuries of Buddhist wisdom.
          </p>
          <div className="hero-actions animate-fade-in-up">
            <button className="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              Start Virtual Tour
            </button>
            <button className="btn btn-secondary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              Explore Map
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}