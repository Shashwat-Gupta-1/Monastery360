interface NavigationProps {
  user: any;
  onShowLogin: () => void;
  onLogout: () => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ user, onShowLogin, onLogout, currentPage, setCurrentPage }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Monastery360</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'home'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('tours')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'tours'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Virtual Tours
            </button>
            <button
              onClick={() => setCurrentPage('archives')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'archives'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Archives
            </button>
            {user ? (
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={onShowLogin}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}