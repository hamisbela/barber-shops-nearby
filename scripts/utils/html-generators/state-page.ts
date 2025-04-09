import { State } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid, getCityUrl } from './layout.js';

export function generateStatePage(state: State): string {
  const cities = state.cities || [];
  const salons = state.salons || [];
  const salonCount = state.salonCount || salons.length;
  
  // Sort cities alphabetically
  cities.sort((a, b) => a.city.localeCompare(b.city));
  
  // Build meta description
  const metaDescription = `Find barbershops in ${state.state}. Browse our directory of professional barbers and men's grooming specialists by city.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: state.state }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-blue-900">
        Barbershops in ${state.state}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional barbers and men's grooming specialists across ${state.state}. Browse by city or view all listings.
      </p>
      <div class="mt-2 text-blue-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} across ${cities.length} cities
        </span>
      </div>
    </header>

    <!-- Cities List -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-blue-800 mb-6">Cities in ${state.state}</h2>
      
      ${cities.length > 0 ? `
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${cities.map(city => {
          // Make sure we have a valid slug
          const citySlug = city.slug || '';
          const citySalonCount = city.salonCount || (city.salons ? city.salons.length : 0);
          return `
          <a href="${getCityUrl(citySlug)}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="font-semibold text-blue-700 hover:text-blue-500">${city.city}</h3>
            <p class="text-sm text-gray-500 mt-1">${citySalonCount} listing${citySalonCount !== 1 ? 's' : ''}</p>
          </a>
        `}).join('')}
      </div>
      ` : `
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <p class="text-gray-600">No cities found in ${state.state}.</p>
      </div>
      `}
    </section>

    <!-- Featured Listings -->
    ${salons.length > 0 ? `
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-blue-800 mb-6">Featured Barbershops in ${state.state}</h2>
      ${generateListingsGrid(salons.slice(0, 6))}
      
      ${salons.length > 6 ? `
      <div class="text-center mt-8">
        <a href="#" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          View All ${salons.length} Listings
        </a>
      </div>
      ` : ''}
    </section>
    ` : ''}

    <!-- About Section -->
    <section class="bg-blue-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">About Barbershops in ${state.state}</h2>
      <p class="text-gray-700 mb-4">
        Barbershops offer a comprehensive range of men's grooming services from classic haircuts to hot towel shaves. In ${state.state}, you'll find quality shops that combine traditional techniques with modern styles.
      </p>
      <p class="text-gray-700 mb-4">
        These specialized shops offer skilled barbers who can provide personalized services based on your face shape and style preferences. From precision fades and tapers to beard trims and straight razor shaves, barbershops in ${state.state} have you covered for all your grooming needs.
      </p>
      <p class="text-gray-700">
        Browse our directory to find barbershops near you in ${state.state}. Visit them directly to experience their traditional techniques, atmosphere, and to find a barber who understands your personal style.
      </p>
    </section>
  </main>`;

  return pageWrapper(`Barbershops in ${state.state} - Directory by City`, metaDescription, content);
}