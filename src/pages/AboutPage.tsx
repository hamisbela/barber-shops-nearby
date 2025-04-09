import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Star, Scissors, Info, MapPin, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Barbershops Nearby | Our Mission & Services</title>
        <meta name="description" content="Learn about BarbershopsNearby.com, the premier resource for finding professional barbers, traditional shaves, and men's grooming specialists in your local area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900">About BarbershopsNearby.com</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding quality barbershops, barbers, and men's grooming specialists in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At BarbershopsNearby.com, our mission is to connect individuals seeking quality cuts, shaves, and grooming services with professional barbershops in their local area. We believe everyone deserves access to skilled barbers who can help them look and feel their best.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of men's grooming providers, making it easy to find the right barbershop near you. Our platform allows you to browse listings by location, read detailed business profiles, and make informed decisions about where to get your next haircut, beard trim, or traditional straight razor shave.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-blue-800 mb-4">For Customers</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Find quality barbershops and barbers in your local area</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Access detailed profiles with services, pricing, and contact information</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient options near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with grooming professionals</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-blue-800 mb-4">For Businesses</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential customers</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Showcase your services, specialties, and business details</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Grow your client base with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-blue-600 mt-1 mr-3" size={20} />
                  <span>Stand out in a specialized, niche directory</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Professional Barbershops Matter</h2>
            <p className="text-gray-700 mb-4">
              A good barbershop experience is more than just a haircut—it's a tradition that combines skilled craftsmanship with relaxing atmosphere. Professional barbers have the training, skills, and expertise to create looks that enhance your features and suit your style.
            </p>
            <p className="text-gray-700 mb-4">
              Professional barbershops offer personalized services that take into account your hair type, face shape, personal style, and grooming preferences. They provide expert advice on products and styling techniques that help you maintain your look between visits.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Professional Barbershops</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Scissors className="text-blue-500 mt-1 mr-2" size={16} />
                    <span>Skilled, licensed professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-blue-500 mt-1 mr-2" size={16} />
                    <span>Traditional techniques & modern styles</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-blue-500 mt-1 mr-2" size={16} />
                    <span>Quality, professional products</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-blue-500 mt-1 mr-2" size={16} />
                    <span>Authentic barbershop experience</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">DIY Haircuts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited expertise and technique</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Difficulty with precise fades and blending</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Consumer-grade tools</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Often requires professional correction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              BarbershopsNearby.com was founded by a team of digital marketing specialists who recognized the need for a specialized platform connecting barbers with customers seeking quality grooming services in their local communities.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both barbers and clients, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on barbershops. Many quality establishments were difficult to find online, and customers struggled to identify which shops specialized in their preferred styles or offered traditional services like hot towel shaves.
            </p>
            <p className="text-gray-700">
              Today, BarbershopsNearby.com is the premier online resource for men's grooming providers across the United States. We continue to expand our listings and improve our platform to better serve both businesses and their clients.
            </p>
          </div>
          
          <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you a barbershop owner? Add your business to our directory and connect with potential customers in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;