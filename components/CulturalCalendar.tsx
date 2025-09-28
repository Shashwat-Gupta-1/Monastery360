export function CulturalCalendar() {
  const events = [
    {
      id: 1,
      title: 'Losar Festival',
      date: 'February 10-12, 2025',
      monastery: 'Rumtek Monastery',
      type: 'Cultural Festival',
      description: 'Tibetan New Year celebration with traditional dances and ceremonies'
    },
    {
      id: 2,
      title: 'Buddha Jayanti',
      date: 'May 12, 2025',
      monastery: 'All Monasteries',
      type: 'Religious Observance',
      description: 'Celebration of Buddha\'s birth, enlightenment, and death'
    },
    {
      id: 3,
      title: 'Hemis Festival',
      date: 'July 15-16, 2025',
      monastery: 'Pemayangtse Monastery',
      type: 'Cultural Festival',
      description: 'Colorful mask dances and traditional music performances'
    },
    {
      id: 4,
      title: 'Diwali Celebrations',
      date: 'October 31, 2025',
      monastery: 'Enchey Monastery',
      type: 'Festival of Lights',
      description: 'Special lighting ceremony and evening prayers'
    },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cultural Calendar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover festivals, ceremonies, and special events at Sikkim's monasteries
          </p>
        </div>
        
        <div className="mt-12">
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Months</option>
                {months.map((month) => (
                  <option key={month}>{month}</option>
                ))}
              </select>
            </div>
            
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
                All Events
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                Festivals
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                Ceremonies
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-indigo-600 font-medium text-sm">{event.date}</p>
                    <p className="text-gray-600 text-sm">{event.monastery}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                    {event.type}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                    Learn More →
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 text-sm">
                    Add to Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Annual Festivals</h3>
              <p className="text-gray-600">Major celebrations throughout the year</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Ceremonies</h3>
              <p className="text-gray-600">Regular prayer sessions and rituals</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM9.06 17.192a3.001 3.001 0 11-2.122-2.122L12 10l5.06 5.06a3.001 3.001 0 11-2.121 2.122L12 14.06l-2.94 3.132z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Events</h3>
              <p className="text-gray-600">Unique celebrations and observances</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}