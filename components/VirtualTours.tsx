export function VirtualTours() {
  const tours = [
    {
      id: 1,
      title: 'Rumtek Monastery',
      subtitle: 'Seat of the Karmapa',
      description: 'Explore the magnificent golden stupa and sacred halls of this premier Tibetan Buddhist monastery.',
      duration: '45 min',
      difficulty: 'Easy',
      rating: 4.9,
      reviews: 234,
      featured: true
    },
    {
      id: 2,
      title: 'Pemayangtse Monastery',
      subtitle: 'Three-Story Wonder',
      description: 'Journey through the ancient three-story monastery complex with intricate woodwork and sacred artifacts.',
      duration: '60 min',
      difficulty: 'Moderate',
      rating: 4.8,
      reviews: 186,
      featured: true
    },
    {
      id: 3,
      title: 'Enchey Monastery',
      subtitle: 'Gangtok\'s Sacred Heart',
      description: 'Experience peaceful meditation halls and beautiful prayer gardens in Sikkim\'s capital.',
      duration: '30 min',
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 142,
      featured: false
    },
    {
      id: 4,
      title: 'Tashiding Monastery',
      subtitle: 'Mountain Pilgrimage',
      description: 'Embark on a spiritual journey to this sacred site perched high in the mountains.',
      duration: '75 min',
      difficulty: 'Challenging',
      rating: 4.9,
      reviews: 98,
      featured: false
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Immersive Virtual Tours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Sikkim's monasteries like never before with our cutting-edge 360° virtual tours
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mb-12">
          {tours.filter(tour => tour.featured).map((tour) => (
            <div key={tour.id} className="card">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-lg font-medium">
                      FEATURED
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span className="font-medium">{tour.rating}</span>
                      <span>({tour.reviews} reviews)</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-lg text-primary font-medium mb-3">{tour.subtitle}</p>
                  <p className="text-gray-600 mb-6">{tour.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      Duration: {tour.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
                        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                      </svg>
                      Level: {tour.difficulty}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="btn btn-primary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                      Start Tour
                    </button>
                    <button className="btn btn-secondary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>
                      </svg>
                      Preview
                    </button>
                  </div>
                </div>
                
                <div className="lg:w-96">
                  <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl h-64 lg:h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z"/>
                        </svg>
                      </div>
                      <p className="text-sm opacity-90">360° Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tours.filter(tour => !tour.featured).map((tour) => (
            <div key={tour.id} className="card">
              <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Virtual Tour</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-2 text-sm text-gray-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="font-medium">{tour.rating}</span>
                <span>({tour.reviews})</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.title}</h3>
              <p className="text-primary font-medium mb-2">{tour.subtitle}</p>
              <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>{tour.duration}</span>
                <span>{tour.difficulty}</span>
              </div>
              
              <button className="btn btn-primary w-full">
                Start Virtual Tour
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}