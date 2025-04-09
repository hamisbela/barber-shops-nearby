import { BeautySalon, State, Category } from '../models.js';
import { pageWrapper, getStateUrl, getCategoryUrl } from './layout.js';

export function generateIndexPage(states: State[], categories: Category[], featuredSalons: BeautySalon[]): string {
  // Sort states alphabetically
  const sortedStates = [...states].sort((a, b) => a.state.localeCompare(b.state));
  
  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.category.localeCompare(b.category));

  // Build meta description
  const metaDescription = "Find professional barbershops nearby. Our comprehensive directory features quality barbers, traditional shaves, and men's grooming specialists across the United States.";

  // Format the main content
  const content = `
  <main>
    <!-- Hero Section -->
    <section class="bg-blue-900 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Find Barbershops Nearby</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Discover quality barbers, traditional shaves, and men's grooming specialists in your area with our comprehensive directory.</p>
        
        <!-- Search Form -->
        <div class="max-w-2xl mx-auto bg-white rounded-lg p-1 flex flex-col md:flex-row">
          <select class="flex-grow p-3 rounded-lg md:rounded-r-none mb-2 md:mb-0 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">All Categories</option>
            ${sortedCategories.map(category => `<option value="${category.id}">${category.category}</option>`).join('')}
          </select>
          <div class="flex-grow flex">
            <input type="text" placeholder="Search by location..." class="flex-grow p-3 rounded-l-lg border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <button class="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition-colors">
              <i class="fas fa-search mr-2"></i> Search
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Listings Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-blue-900">Featured Barbershops</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuredSalons.slice(0, 6).map(salon => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <a href="/salon/${salon.slug}/">
                ${salon.images && salon.images.length > 0 
                  ? `<img src="${salon.images[0].path}" alt="${salon.title}" class="w-full h-56 object-cover">`
                  : `<div class="w-full h-56 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-4xl">
                      <i class="fas fa-cut"></i>
                    </div>`
                }
              </a>
              <div class="p-6">
                <a href="/salon/${salon.slug}/" class="block">
                  <h3 class="text-xl font-bold text-blue-800 mb-2 hover:text-blue-600">${salon.title}</h3>
                </a>
                <p class="text-gray-600 mb-3">
                  <i class="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                  ${salon.city?.city || ''}, ${salon.state?.state || ''}
                </p>
                ${salon.categories && salon.categories.length > 0 
                  ? `<p class="text-gray-600 mb-4">
                      <i class="fas fa-tag text-blue-500 mr-2"></i>
                      ${salon.categories.map(cat => cat.category).join(', ')}
                    </p>`
                  : ''
                }
                <a href="/salon/${salon.slug}/" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  View Details
                </a>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="text-center mt-10">
          <a href="/browse/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Browse All Listings
          </a>
        </div>
      </div>
    </section>

    <!-- Browse by State Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-blue-900">Browse by State</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${sortedStates.map(state => `
            <a href="${getStateUrl(state.slug || '')}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="font-semibold text-blue-700 hover:text-blue-500">${state.state}</h3>
              <p class="text-sm text-gray-500 mt-1">${state.salons?.length || 0} listing${state.salons?.length !== 1 ? 's' : ''}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-blue-900">Browse by Category</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${sortedCategories.map(category => `
            <a href="${getCategoryUrl(category.slug || '')}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="font-semibold text-blue-700 hover:text-blue-500">${category.category}</h3>
              <p class="text-sm text-gray-500 mt-1">${category.salons?.length || 0} listing${category.salons?.length !== 1 ? 's' : ''}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Barbershops Nearby Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8 text-blue-900">About Barbershops Nearby</h2>
          
          <div class="bg-white p-8 rounded-lg shadow-md">
            <p class="text-gray-700 mb-4">
              Looking for <strong>barbershops nearby</strong>? Our directory helps you find local barbers who offer professional haircuts, beard trims, straight razor shaves, and men's grooming services.
            </p>
            
            <p class="text-gray-700 mb-4">
              Professional barbers provide expert services that combine traditional techniques with modern styles. Whether you need a classic cut, a precision fade, beard shaping, or a relaxing hot towel shave, our directory connects you with nearby specialists who can meet your grooming needs.
            </p>
            
            <p class="text-gray-700 mb-6">
              <strong>Barbershops nearby</strong> searches are the first step to finding quality men's grooming locally. Our comprehensive directory features detailed listings with service offerings, pricing information, business hours, contact details, and customer reviews to help you make informed decisions about your next visit.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-blue-800">What You'll Find</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Precision haircuts & fades</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Beard trims & shaping</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Hot lather straight razor shaves</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Men's grooming & styling products</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-blue-800">Benefits of Professional Barbers</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Expert advice for your face shape & style</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Relaxing traditional barbershop experience</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Precision tools & classic techniques</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-blue-500 mt-1 mr-2"></i>
                    <span>Support skilled local barbers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-blue-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Do You Own a Barbershop?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">Add your business to our directory and reach potential customers searching for barbershops in their area.</p>
        <a href="/add-a-listing/" class="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
          Add Your Listing
        </a>
      </div>
    </section>
  </main>`;

  return pageWrapper("Barbershops Nearby - Find Local Barbers & Men's Grooming Services", metaDescription, content);
}