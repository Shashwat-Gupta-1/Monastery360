interface SimpleInteractiveMapProps {
  onMonasterySelect: (monastery: any) => void;
}

export function SimpleInteractiveMap({ onMonasterySelect }: SimpleInteractiveMapProps) {
  const monasteries = [
    { id: 1, name: 'Rumtek Monastery', location: 'East Sikkim', lat: 27.3, lng: 88.55 },
    { id: 2, name: 'Pemayangtse Monastery', location: 'West Sikkim', lat: 27.2, lng: 88.2 },
    { id: 3, name: 'Enchey Monastery', location: 'Gangtok', lat: 27.34, lng: 88.61 },
    { id: 4, name: 'Tashiding Monastery', location: 'West Sikkim', lat: 27.3, lng: 88.3 },
  ];

  const handleMonasteryClick = (monastery: any) => {
    onMonasterySelect(monastery);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Interactive Monastery Map
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore Sikkim's monasteries on our interactive map
          </p>
        </div>
        
        <div className="mt-12">
          <div className="bg-gray-100 rounded-lg p-8 min-h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Map Loading...</h3>
              <p className="text-gray-600 mb-6">Full map functionality coming soon</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monasteries.map((monastery) => (
              <button
                key={monastery.id}
                onClick={() => handleMonasteryClick(monastery)}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-left"
              >
                <h3 className="font-semibold text-gray-900">{monastery.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{monastery.location}</p>
                <p className="text-xs text-indigo-600 mt-2">Click to explore →</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}