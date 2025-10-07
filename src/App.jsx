import { useState } from 'react';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();
    
    if (!longUrl) {
      setError('Please enter a URL');
      return;
    }

    if (!/^https?:\/\/.+/.test(longUrl)) {
      setError('Please enter a valid URL starting with http:// or https://');
      return;
    }

    setLoading(true);
    setError('');
    setShortUrl('');
    setCopied(false);

    try {
      // Using is.gd API - completely free with no auth required
      const encodedUrl = encodeURIComponent(longUrl);
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodedUrl}`,
        {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      
      if (data.errorcode) {
        throw new Error(data.errormessage || 'Failed to shorten URL');
      }
      
      setShortUrl(data.shorturl);
    } catch (err) {
      // Fallback to TinyURL API if is.gd fails
      try {
        const tinyResponse = await fetch(
          `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
        );
        
        if (!tinyResponse.ok) {
          throw new Error('Both services failed');
        }
        
        const tinyUrl = await tinyResponse.text();
        setShortUrl(tinyUrl);
      } catch (fallbackErr) {
        setError('Failed to shorten URL. Please check your internet connection and try again.');
        console.error('Both APIs failed:', err, fallbackErr);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setLongUrl('');
    setShortUrl('');
    setError('');
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              URL Shortener
            </h1>
            <p className="text-gray-600 text-lg">
              Transform long URLs into short, shareable links
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleShorten} className="space-y-4">
            <div>
              <label 
                htmlFor="longUrl" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your long URL
              </label>
              <input
                id="longUrl"
                type="text"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="https://example.com/very-long-url-here"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      fill="none"
                    />
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Shortening...
                </>
              ) : (
                'Shorten URL'
              )}
            </button>
          </form>

          {/* Result */}
          {shortUrl && (
            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Your shortened URL:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white px-4 py-3 rounded-lg text-indigo-600 font-medium hover:text-indigo-800 transition break-all"
                >
                  {shortUrl}
                </a>
                <button
                  onClick={handleCopy}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 whitespace-nowrap"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Shorten another URL
              </button>
            </div>
          )}

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Fast</h3>
              <p className="text-sm text-gray-600 mt-1">Instant URL shortening</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Secure</h3>
              <p className="text-sm text-gray-600 mt-1">Safe and reliable</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Easy Sharing</h3>
              <p className="text-sm text-gray-600 mt-1">Share anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
