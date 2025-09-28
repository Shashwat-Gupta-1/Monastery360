export function AIItineraryPlanner() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            AI Itinerary Planner
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Let AI create the perfect monastery pilgrimage itinerary for you
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Plan Your Journey</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trip Duration
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Half Day (4 hours)</option>
                  <option>Full Day (8 hours)</option>
                  <option>2-3 Days</option>
                  <option>1 Week</option>
                  <option>2 Weeks</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interests
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Spiritual & Meditation</option>
                  <option>History & Culture</option>
                  <option>Architecture & Art</option>
                  <option>Photography</option>
                  <option>All of the above</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Physical Activity Level
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Easy (minimal walking)</option>
                  <option>Moderate (some hiking)</option>
                  <option>Challenging (mountain treks)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travel Season
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Spring (March-May)</option>
                  <option>Summer (June-August)</option>
                  <option>Autumn (September-November)</option>
                  <option>Winter (December-February)</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Preferences (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Any specific monasteries you want to visit, dietary requirements, accessibility needs, etc."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="mt-8">
              <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors font-medium">
                Generate AI Itinerary
              </button>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample AI-Generated Itinerary</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h5 className="font-medium text-gray-900">Day 1: Spiritual Foundation</h5>
                <p className="text-gray-600 text-sm">Morning: Rumtek Monastery meditation session</p>
                <p className="text-gray-600 text-sm">Afternoon: Enchey Monastery exploration</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-medium text-gray-900">Day 2: Cultural Immersion</h5>
                <p className="text-gray-600 text-sm">Full day: Pemayangtse Monastery complex</p>
                <p className="text-gray-600 text-sm">Evening: Traditional monastery dinner</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-medium text-gray-900">Day 3: Mountain Pilgrimage</h5>
                <p className="text-gray-600 text-sm">Trek to Tashiding Monastery</p>
                <p className="text-gray-600 text-sm">Sunset meditation and return</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>AI Tip:</strong> This itinerary is optimized for your spiritual interests and moderate activity level, 
                with weather considerations for spring season.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}