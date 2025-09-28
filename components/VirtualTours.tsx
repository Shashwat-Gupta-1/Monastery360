export function VirtualTours() {
  const tours = [
    {
      id: 1,
      title: 'Rumtek Monastery Tour',
      description: 'Explore the seat of the Karmapa and its golden stupa',
      duration: '45 minutes',
      difficulty: 'Easy',
      image: 'rumtek-preview'
    },
    {
      id: 2,
      title: 'Pemayangtse Sacred Halls',
      description: 'Journey through the three-story monastery complex',
      duration: '60 minutes',
      difficulty: 'Moderate',
      image: 'pemayangtse-preview'
    },
    {
      id: 3,
      title: 'Enchey Monastery Gardens',
      description: 'Peaceful walk through monastery grounds and prayer halls',
      duration: '30 minutes',
      difficulty: 'Easy',
      image: 'enchey-preview'
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Virtual Tours
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Take guided virtual tours of Sikkim's most sacred monasteries
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="mx-auto w-12 h-12 mb-2">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">Preview</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {tour.duration}</span>
                  <span>Difficulty: {tour.difficulty}</span>
                </div>
                
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Start Virtual Tour
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Premium VR Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Get the most immersive experience with VR headset support and spatial audio
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors">
              Try VR Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}