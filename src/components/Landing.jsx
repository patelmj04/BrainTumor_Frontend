import { useState, useEffect } from 'react'

const Landing = () => {

  const [currentCard, setCurrentCard] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cards = [
    {
      title: 'Advanced AI Detection',
      description: 'State-of-the-art algorithms for accurate and rapid brain tumor detection.',
      image: '/images/Shinchan.jpg?height=600&width=600',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Intuitive platform designed for medical professionals and patients alike.',
      image: '/images/Shinchan.jpg?height=600&width=600',
    },
    {
      title: 'Secure and Confidential',
      description: 'Enterprise-grade security and encryption to protect your data.',
      image: '/images/Shinchan.jpg?height=600&width=600',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length)
    }, 5000)
    return () =>  clearInterval(timer)
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <img src="/ .svg?height=32&width=32" alt="NeuroInsight Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold">NeuroInsight</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {/* <a href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">About</a>
              <a href="/features" className="text-sm font-medium hover:text-gray-600 transition-colors">Features</a> */}
              {/* <a href="/pricing" className="text-sm font-medium hover:text-gray-600 transition-colors">Pricing</a> */}
              <a href="/signin" className="text-sm font-medium hover:text-gray-600 transition-colors">Sign In</a>
              <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Get Started</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/about" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors">About</a>
              <a href="/features" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors">Features</a>
              <a href="/pricing" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors">Pricing</a>
              <a href="/signin" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 transition-colors">Sign In</a>
              <a href="/register" className="block px-3 py-2 text-base font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Revolutionizing Brain Tumor Detection
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-12">
            Advanced AI-powered analysis for early and accurate diagnosis
          </p>
          <a href="/demo" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center">
            Try Demo
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose NeuroInsight?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {cards.map((card, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
                <img src={card.image} alt={card.title} width={600} height={600} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <a href="/learn-more" className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Brain Tumor Detection?</h2>
          <p className="text-xl mb-12">Join the future of medical imaging with NeuroInsight's AI-powered platform.</p>
          <a href="/register" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center">
            Get Started Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-x-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">aedIn</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul>
                <li><a href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                <li><a href="/help" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Sign up for updates on product features and AI research breakthroughs.</p>
              <form>
                <input type="email" className="p-3 rounded-lg text-gray-900 w-full mb-4" placeholder="Enter your email" />
                <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-full text-lg w-full">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing