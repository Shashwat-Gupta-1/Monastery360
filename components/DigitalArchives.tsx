export function DigitalArchives() {
  const archives = [
    {
      id: 1,
      title: 'Ancient Manuscripts',
      count: '1,247 documents',
      category: 'Texts & Scripts',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'Buddhist Artifacts',
      count: '892 items',
      category: 'Religious Objects',
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      title: 'Historical Photographs',
      count: '2,156 images',
      category: 'Photography',
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      title: 'Ritual Instruments',
      count: '341 items',
      category: 'Musical & Ceremonial',
      lastUpdated: '5 days ago'
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Digital Archives
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our comprehensive collection of digitally preserved monastery treasures
          </p>
        </div>
        
        <div className="mt-12">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="relative mb-4 sm:mb-0">
              <input
                type="text"
                placeholder="Search archives..."
                className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Categories</option>
                <option>Manuscripts</option>
                <option>Artifacts</option>
                <option>Photographs</option>
                <option>Audio</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {archives.map((archive) => (
              <div key={archive.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{archive.title}</h3>
                    <p className="text-indigo-600 font-medium">{archive.count}</p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {archive.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Updated {archive.lastUpdated}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                    Browse Collection →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 text-indigo-600 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manuscript Library</h3>
              <p className="text-gray-600">Access thousands of digitized Buddhist texts and scriptures</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 text-purple-600 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visual Archives</h3>
              <p className="text-gray-600">Explore historical photographs and artistic treasures</p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 text-green-600 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio Collection</h3>
              <p className="text-gray-600">Listen to traditional chants and ceremonial recordings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}