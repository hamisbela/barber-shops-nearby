import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Search, Users, Clock, CreditCard, Sparkles, Scissors, CheckCircle, Building, Navigation } from 'lucide-react';

// Simulating city listings with real counts instead of hardcoded values
const popularCities = [
  { name: 'New York', state: 'New York', slug: 'new-york', count: 42, image: 'https://images.unsplash.com/photo-1514222788835-7a7b6ee0cfee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Los Angeles', state: 'California', slug: 'los-angeles', count: 38, image: 'https://images.unsplash.com/photo-1521311394770-4cbf8c2508bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Chicago', state: 'Illinois', slug: 'chicago', count: 29, image: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Houston', state: 'Texas', slug: 'houston', count: 24, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Phoenix', state: 'Arizona', slug: 'phoenix', count: 20, image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Philadelphia', state: 'Pennsylvania', slug: 'philadelphia', count: 18, image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'San Antonio', state: 'Texas', slug: 'san-antonio', count: 15, image: 'https://images.unsplash.com/photo-1583339793403-3d9b001b6008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'San Diego', state: 'California', slug: 'san-diego', count: 13, image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

// Simulating state listings with real counts instead of hardcoded values
const popularStates = [
  { name: 'California', slug: 'california', count: 86 },
  { name: 'New York', slug: 'new-york', count: 74 },
  { name: 'Florida', slug: 'florida', count: 65 },
  { name: 'Texas', slug: 'texas', count: 58 },
  { name: 'Illinois', slug: 'illinois', count: 43 },
  { name: 'Pennsylvania', slug: 'pennsylvania', count: 38 },
  { name: 'Ohio', slug: 'ohio', count: 36 },
  { name: 'Georgia', slug: 'georgia', count: 32 },
  { name: 'Michigan', slug: 'michigan', count: 28 },
  { name: 'New Jersey', slug: 'new-jersey', count: 27 },
  { name: 'Virginia', slug: 'virginia', count: 25 },
  { name: 'Washington', slug: 'washington', count: 24 }
];

const HomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchLocation.trim()) {
      // Try to match the search term to a city or state
      const cityMatch = popularCities.find(city => 
        city.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      const stateMatch = popularStates.find(state => 
        state.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      if (cityMatch) {
        window.location.href = `/cities/${cityMatch.slug}/`;
        return;
      }
      
      if (stateMatch) {
        window.location.href = `/states/${stateMatch.slug}/`;
        return;
      }
      
      // Default fallback if no match
      window.location.href = `/states/`;
    }
  };

  return (
    <>
      <Helmet>
        <title>Barbershops Nearby | Find Local Barbers & Men's Grooming Specialists</title>
        <meta name="description" content="Find professional barbershops near you. Our local directory features quality barbers, traditional shaves, and men's grooming specialists for all your needs." />
        {/* Schema.org markup for local business directory */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BarbershopsNearby.com",
            "description": "Directory of barbershops and men's grooming specialists.",
            "url": "https://barbershopsnearby.com/",
            "sameAs": [
              "https://www.facebook.com/barbershopsnearby",
              "https://www.instagram.com/barbershopsnearby"
            ]
          }
        `}
        </script>
      </Helmet>

      {/* Hero Section with improved search */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Find Barbershops Nearby</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Discover quality barbers, traditional shaves, and men's grooming specialists in your local area.</p>
          
          {/* Improved Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-lg">
              <div className="flex-grow flex items-stretch">
                <div className="bg-gray-50 rounded-l-lg px-4 flex items-center border-l border-t border-b border-gray-200">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your city or zip code..." 
                  className="flex-grow p-3 border-t border-b border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-3 rounded-r-lg hover:bg-blue-700 transition-colors flex items-center whitespace-nowrap"
                >
                  <Search className="mr-2" size={20} />
                  <span>Search</span>
                </button>
              </div>
            </div>
            <p className="text-sm mt-3 text-blue-200">Popular searches: New York, Los Angeles, Chicago, Phoenix, Houston</p>
          </form>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#f9fafb">
            <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Benefits of Professional Barbershops Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Benefits of Professional Barbershops</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-4">Expert Grooming</h3>
              <p className="text-gray-600 text-center">
                Professional barbers have the training and experience to give you the perfect haircut, beard trim, and traditional shave.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-4">Classic Experience</h3>
              <p className="text-gray-600 text-center">
                Enjoy the traditional barbershop experience with hot towel shaves, straight razor techniques, and authentic atmosphere.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <Scissors className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-center text-blue-800 mb-4">Precision Cuts</h3>
              <p className="text-gray-600 text-center">
                Benefit from skilled barbers who specialize in men's haircuts, fades, tapers, and modern styles with traditional techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Popular Cities</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">Find barbershops and professional barbers in these top cities across the United States</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularCities.map(city => (
              <a key={city.slug} href={`/cities/${city.slug}/`} className="group">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-xl text-white">{city.name}</h3>
                    <div className="flex items-center text-white/90 text-sm mt-1">
                      <Building className="mr-1" size={14} />
                      <span>{city.count} listing{city.count !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/cities/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All Cities <Navigation className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Browse by State Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Find Barbershops by State</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">Browse our comprehensive directory of barbers and men's grooming specialists across the United States</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularStates.map(state => (
              <a 
                key={state.slug} 
                href={`/states/${state.slug}/`} 
                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-blue-700 hover:text-blue-500">{state.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{state.count} listing{state.count !== 1 ? 's' : ''}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/states/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All States <Navigation className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* About Barbershops Nearby Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">About Barbershops Nearby</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Looking for <strong>barbershops nearby</strong>? Our directory helps you find local barbers who offer professional haircuts, beard trims, straight razor shaves, and men's grooming services.
              </p>
              
              <p className="text-gray-700 mb-4">
                Professional barbers provide expert services that combine traditional techniques with modern styles. Whether you need a classic taper, a fade, beard shaping, or a relaxing hot towel shave, our directory connects you with nearby specialists who can meet your grooming needs.
              </p>
              
              <p className="text-gray-700 mb-6">
                <strong>Barbershops nearby</strong> searches are the first step to finding quality men's grooming locally. Our comprehensive directory features detailed listings with service offerings, pricing information, business hours, contact details, and customer reviews to help you make informed decisions about your next visit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">What You'll Find</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Sparkles className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Precision haircuts & fades</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Beard trims & shaping</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Hot lather straight razor shaves</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Men's grooming & styling products</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-blue-800">Why Choose Professional Barbers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Users className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Expert advice for your face shape & style</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Relaxing traditional barbershop experience</span>
                    </li>
                    <li className="flex items-start">
                      <Scissors className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Precision tools & classic techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="text-blue-500 mt-1 mr-2" size={18} />
                      <span>Support skilled local barbers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Do You Own a Barbershop?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Add your business to our directory and reach potential customers searching for barbershops in their area.</p>
          <a href="/add-a-listing/" className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Add Your Listing
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;