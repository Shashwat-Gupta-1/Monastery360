export function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Monastery Reviews
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Read reviews and experiences from visitors to Sikkim's monasteries
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rumtek Monastery</h3>
            <p className="text-gray-600 mb-4">"An incredible spiritual experience. The architecture is breathtaking and the monks are very welcoming."</p>
            <div className="flex items-center">
              <div className="text-yellow-400">★★★★★</div>
              <span className="ml-2 text-sm text-gray-500">- Sarah M.</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pemayangtse Monastery</h3>
            <p className="text-gray-600 mb-4">"The views from here are absolutely stunning. Rich history and peaceful atmosphere."</p>
            <div className="flex items-center">
              <div className="text-yellow-400">★★★★★</div>
              <span className="ml-2 text-sm text-gray-500">- John D.</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enchey Monastery</h3>
            <p className="text-gray-600 mb-4">"A hidden gem in Gangtok. Perfect for meditation and spiritual reflection."</p>
            <div className="flex items-center">
              <div className="text-yellow-400">★★★★☆</div>
              <span className="ml-2 text-sm text-gray-500">- Maria L.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}