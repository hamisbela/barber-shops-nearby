import { State } from '../models.js';
import { pageWrapper, getStateUrl } from './layout.js';

export function generateAllStatesPage(states: State[]): string {
  // Sort states alphabetically
  const sortedStates = [...states].sort((a, b) => a.state.localeCompare(b.state));
  
  // Build meta description
  const metaDescription = "Browse barbershops by state. Find professional barbers, traditional shaves, and men's grooming specialists across the United States.";

  // Calculate total listings
  const totalListings = states.reduce((sum, state) => sum + (state.salonCount || 0), 0);

  // Format the main content
  const content = `
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-blue-900">
        Browse Barbershops by State
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional barbers and men's grooming specialists across the United States. Browse by state to discover barbershops in your area.
      </p>
      <div class="mt-2 text-blue-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${totalListings} listing${totalListings !== 1 ? 's' : ''} across ${states.length} states
        </span>
      </div>
    </header>

    <div class="bg-white p-8 rounded-lg shadow-md mb-12">
      <h2 class="text-2xl font-bold text-blue-800 mb-6">All States</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${sortedStates.map(state => {
          const stateSlug = state.slug || '';
          const citiesCount = state.cities?.length || 0;
          const listingsCount = state.salonCount || 0;
          
          return `
          <a href="${getStateUrl(stateSlug)}" class="block bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100">
            <h3 class="font-bold text-lg text-blue-700">${state.state}</h3>
            <p class="text-sm text-gray-600 mt-1">${listingsCount} listing${listingsCount !== 1 ? 's' : ''}</p>
            <p class="text-xs text-gray-500 mt-1">${citiesCount} cit${citiesCount !== 1 ? 'ies' : 'y'}</p>
          </a>
        `}).join('')}
      </div>
    </div>

    <div class="bg-blue-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">About Our Barbershop Directory</h2>
      <p class="text-gray-700 mb-4">
        Our nationwide directory of barbershops helps you find professional barbers and men's grooming specialists in your state. These shops offer a comprehensive range of services from classic haircuts to hot towel shaves and beard trims.
      </p>
      <p class="text-gray-700 mb-4">
        Professional barbershops offer traditional techniques and specialized services that combine old-school craftsmanship with modern styles. Whether you're looking for a precision fade, a classic pompadour, or a straight razor shave, these skilled professionals have the expertise to deliver exceptional results.
      </p>
      <p class="text-gray-700">
        Browse our listings by state to find quality barbershops in your area. Most shops offer a wide range of men's grooming services, with skilled barbers who can help you achieve your desired look.
      </p>
    </div>
  </main>`;

  return pageWrapper("Browse Barbershops by State - National Directory", metaDescription, content);
}