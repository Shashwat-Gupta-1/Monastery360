interface NavigationProps {
  user: any;
  onShowLogin: () => void;
  onLogout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ user, onShowLogin, onLogout, currentPage, setCurrentPage }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>
            🏛️ Monastery360
          </a>
          
          <ul className="nav-menu">
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'home' ? 'text-primary font-semibold' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'tours' ? 'text-primary font-semibold' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('tours'); }}
              >
                Virtual Tours
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'archives' ? 'text-primary font-semibold' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('archives'); }}
              >
                Archives
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'planner' ? 'text-primary font-semibold' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('planner'); }}
              >
                AI Planner
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`nav-link ${currentPage === 'calendar' ? 'text-primary font-semibold' : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrentPage('calendar'); }}
              >
                Events
              </a>
            </li>
          </ul>
          
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Welcome, {user.name}</span>
                <button
                  onClick={onLogout}
                  className="btn btn-secondary"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onShowLogin}
                className="btn btn-primary"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}