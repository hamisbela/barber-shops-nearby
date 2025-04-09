import { City } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid, getStateUrl } from './layout.js';

export function generateCityPage(city: City): string {
  const stateName = city.state?.state || 'Unknown State';
  const stateSlug = city.state?.slug || '';
  const salons = city.salons || [];
  const salonCount = city.salonCount || salons.length;
  
  // Build meta description
  const metaDescription = `Find barbershops in ${city.city}, ${stateName}. Browse our listings of top-rated barbers, traditional shaves, and men's grooming specialists.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: stateName, url: getStateUrl(stateSlug) },
    { label: city.city }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-blue-900">
        Barbershops in ${city.city}, ${stateName}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional barbers in ${city.city}. Browse our comprehensive directory of local barbershops and men's grooming specialists.
      </p>
      <div class="mt-2 text-blue-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} found
        </span>
      </div>
    </header>

    ${salons.length > 0 
      ? generateListingsGrid(salons, `Barbershops in ${city.city}`)
      : `
        <div class="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">No Listings Found</h2>
          <p class="text-gray-600 mb-6">We couldn't find any barbershops in ${city.city} at this time.</p>
          <a href="/add-a-listing/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Add Your Business
          </a>
        </div>
      `
    }

    <div class="mt-16 bg-blue-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">About Barbershops in ${city.city}</h2>
      <p class="text-gray-700 mb-4">
        Barbershops offer a comprehensive range of men's grooming services from classic haircuts to hot towel shaves. ${city.city}, ${stateName} is home to a range of quality barbers ready to help you look your best.
      </p>
      <p class="text-gray-700 mb-4">
        Professional barbershops in ${city.city} combine traditional techniques with modern styles. Their skilled barbers can provide personalized recommendations based on your face shape and style preferences, whether you're looking for a classic cut, a precision fade, or a beard trim.
      </p>
      <p class="text-gray-700">
        Browse our listings to find barbershops in ${city.city}. Visit them directly to experience their traditional techniques, atmosphere, and to find a barber who understands your personal style.
      </p>
    </div>
  </main>`;

  return pageWrapper(`Barbershops in ${city.city}, ${stateName} - Directory`, metaDescription, content);
}