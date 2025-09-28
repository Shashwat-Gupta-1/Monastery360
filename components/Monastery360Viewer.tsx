interface Monastery360ViewerProps {
  monastery: any;
  onClose: () => void;
}

export function Monastery360Viewer({ monastery, onClose }: Monastery360ViewerProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            {monastery?.name || '360° Virtual Tour'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg h-96 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="mx-auto w-16 h-16 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">360° Experience</h3>
              <p className="text-lg mb-4">Immersive virtual tour loading...</p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-sm">Full 360° viewer integration coming soon</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">History</h4>
              <p className="text-sm text-gray-600">
                Learn about the rich history and cultural significance of {monastery?.name || 'this monastery'}.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Architecture</h4>
              <p className="text-sm text-gray-600">
                Explore the unique architectural features and traditional design elements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Artifacts</h4>
              <p className="text-sm text-gray-600">
                Discover ancient artifacts, manuscripts, and religious objects.
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}