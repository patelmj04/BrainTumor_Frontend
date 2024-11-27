import { useState } from 'react'
import { Link } from 'react-router-dom'

const Demo = () => {
    const [file, setFile] = useState(null)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [result, setResult] = useState(null)
  
    const handleFileChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setFile(e.target.files[0])
      }
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      if (!file) return
  
      setIsAnalyzing(true)
      setResult(null)
  
      // Simulating file upload and analysis
      await new Promise(resolve => setTimeout(resolve, 3000))
  
      // Mock result - in a real app, this would come from your AI model
      setResult("Based on the analysis of the uploaded scan, no significant abnormalities were detected. However, we recommend consulting with a healthcare professional for a comprehensive evaluation.")
  
      setIsAnalyzing(false)
    }
  
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img src="/placeholder.svg" alt="NeuroInsight Logo" width={32} height={32} className="h-8 w-auto" />
                </Link>
                <Link to="/" className="ml-2 text-xl font-semibold text-gray-900">NeuroInsight</Link>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl w-full space-y-8">
            <div>
              <h1 className="text-center text-3xl font-extrabold text-gray-900">
                NeuroInsight Demo
              </h1>
              <p className="mt-2 text-center text-sm text-gray-600">
                Upload your medical scan for AI-powered analysis
              </p>
            </div>
  
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                      Upload scan
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*,.pdf" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  {file && (
                    <p className="text-sm text-gray-500">
                      Selected file: {file.name}
                    </p>
                  )}
                  <div>
                    <button
                      type="submit"
                      disabled={!file || isAnalyzing}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Scan'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
  
            {result && (
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Analysis Result</h2>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>{result}</p>
                  </div>
                  <div className="mt-3 text-sm">
                    <Link to="#" className="font-medium text-blue-600 hover:text-blue-500">
                      Learn more about our analysis process <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
  
            <div className="text-center">
              <p className="text-xs text-gray-500">
                This is a demo version. For actual medical advice, please consult with a healthcare professional.
              </p>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">&copy; 2023 NeuroInsight. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
}

export default Demo