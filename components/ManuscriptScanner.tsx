export function ManuscriptScanner() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Manuscript Scanner
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Digitize and preserve ancient manuscripts using AI-powered scanning
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="mx-auto w-16 h-16 text-gray-400 mb-4">
                <svg fill="none" stroke="currentColor" viewBox="0 0 48 48">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Manuscript</h3>
              <p className="text-gray-600 mb-4">Drop your manuscript images here or click to browse</p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Choose Files
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">AI Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Text recognition and extraction</li>
                  <li>• Language identification</li>
                  <li>• Image enhancement</li>
                  <li>• Metadata generation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Supported Formats</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• JPEG, PNG, TIFF</li>
                  <li>• PDF documents</li>
                  <li>• RAW camera files</li>
                  <li>• High-resolution scans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}