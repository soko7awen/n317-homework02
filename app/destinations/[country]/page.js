// app/destinations/[country]/page.js - DYNAMIC COUNTRY PAGE
// This is a DYNAMIC ROUTE that handles URLs like /destinations/france, /destinations/japan, etc.
// Key concepts demonstrated:
// 1. Dynamic route segments using [country] folder name
// 2. Accessing route parameters through params prop
// 3. Error handling for invalid routes
// 4. Data fetching and display patterns
// 5. Integration with nested layouts

import Link from 'next/link'
import { getCountryData, isValidCountry } from './data'
import { notFound } from 'next/navigation'

// DYNAMIC COUNTRY PAGE COMPONENT
// This component receives the dynamic route parameter and displays country details
export default function CountryPage({ params }) {
  // EXTRACT ROUTE PARAMETER
  // The [country] folder name becomes available as params.country
  // For URL /destinations/france, params.country will be "france"
  const { country } = params
  
  // VALIDATE AND FETCH COUNTRY DATA
  // Check if the country exists in our data before trying to display it
  if (!isValidCountry(country)) {
    // Next.js 14 App Router way to trigger 404 page
    notFound()
  }
  
  // Get the country data using our helper function
  const countryInfo = getCountryData(country)
  
  // Additional safety check (though isValidCountry should catch this)
  if (!countryInfo) {
    notFound()
  }

  return (
    <div className="p-8">
      {/* 
        COUNTRY HEADER SECTION
        Displays the main country information with flag and key details
      */}
      <div className="mb-8">
        {/* Back navigation link */}
        <Link 
          href="/destinations" 
          className="inline-flex items-center text-travel-blue-600 hover:text-travel-blue-700 mb-6 transition-colors"
        >
          ← Back to Destinations
        </Link>
        
        {/* Country title with flag */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-6xl">{countryInfo.flag}</span>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{countryInfo.name}</h1>
            <p className="text-xl text-gray-600">Capital: {countryInfo.capital}</p>
          </div>
        </div>
        
        {/* Country description */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
          {countryInfo.description}
        </p>
      </div>

      {/* 
        COUNTRY STATISTICS GRID
        Displays key facts about the country in a responsive grid
      */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-1">Population</h3>
          <p className="text-blue-700">{countryInfo.population}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-1">Currency</h3>
          <p className="text-green-700">{countryInfo.currency}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-purple-800 mb-1">Language</h3>
          <p className="text-purple-700">{countryInfo.language}</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-800 mb-1">Best Time to Visit</h3>
          <p className="text-orange-700">{countryInfo.bestTimeToVisit}</p>
        </div>
      </div>

      {/* 
        TRAVEL TIP SECTION
        Highlights practical advice for travelers
      */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center">
          💡 Travel Tip
        </h2>
        <p className="text-yellow-700 text-lg leading-relaxed">
          {countryInfo.travelTip}
        </p>
      </div>

      {/* 
        MAIN CONTENT GRID
        Two-column layout for attractions and culture information
      */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* TOP ATTRACTIONS SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🏛️ Top Attractions</h2>
          <div className="space-y-4">
            {countryInfo.attractions.map((attraction, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 mb-2">{attraction.description}</p>
                <p className="text-sm text-travel-blue-600 font-medium">
                  📍 {attraction.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CULTURE & LIFESTYLE SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🎭 Culture & Lifestyle</h2>
          
          {/* Cuisine */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
              🍽️ Cuisine
            </h3>
            <p className="text-gray-600">{countryInfo.culture.cuisine}</p>
          </div>
          
          {/* Traditions */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
              🎨 Traditions
            </h3>
            <p className="text-gray-600">{countryInfo.culture.traditions}</p>
          </div>
          
          {/* Etiquette */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
              🤝 Etiquette
            </h3>
            <p className="text-gray-600">{countryInfo.culture.etiquette}</p>
          </div>
        </div>
      </div>

      {/* 
        LAYOUT LEARNING SECTION
        Educational content about Next.js concepts being demonstrated
      */}
      <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          🎓 Next.js Concepts Demonstrated
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <strong>Dynamic Routing:</strong> This page uses <code className="bg-gray-200 px-1 rounded">[country]</code> 
            to handle multiple country URLs with a single component.
          </div>
          <div>
            <strong>Layout Persistence:</strong> The blue banner above stays mounted while you navigate 
            between different countries.
          </div>
          <div>
            <strong>Error Handling:</strong> Invalid country URLs automatically trigger a 404 page 
            using Next.js <code className="bg-gray-200 px-1 rounded">notFound()</code> function.
          </div>
          <div>
            <strong>Data Fetching:</strong> Country data is fetched from a local data file, 
            demonstrating how to structure and access data in App Router.
          </div>
        </div>
      </div>
    </div>
  )
}

/*
DYNAMIC ROUTE CONCEPTS EXPLAINED:

1. DYNAMIC ROUTE SEGMENTS:
   - [country] folder creates a dynamic route parameter
   - Accessible via params.country in the component
   - Matches any URL segment: /destinations/france, /destinations/xyz, etc.

2. PARAMS OBJECT:
   - Contains all dynamic route parameters
   - For nested dynamic routes: params.country, params.city, etc.
   - Always strings, even if they look like numbers

3. ERROR HANDLING PATTERNS:
   - notFound() triggers Next.js 404 page
   - Validate params before using them
   - Graceful degradation for missing data

4. LAYOUT INTEGRATION:
   - This page renders inside DestinationsLayout
   - DestinationsLayout renders inside RootLayout
   - Creates: RootLayout > DestinationsLayout > CountryPage hierarchy

5. DATA FETCHING STRATEGIES:
   - Static data: Imported from local files (this example)
   - API routes: fetch('/api/countries/' + country)
   - Database: Direct database queries in Server Components
   - External APIs: fetch() calls to third-party services

6. PERFORMANCE CONSIDERATIONS:
   - Server Components: This runs on server, reducing client bundle
   - Static Generation: Could be pre-generated for known countries
   - Caching: Data could be cached for better performance

7. SEO BENEFITS:
   - Each country gets its own URL
   - Server-side rendering for better SEO
   - Dynamic metadata possible with generateMetadata()

8. USER EXPERIENCE:
   - Direct URLs: Users can bookmark specific countries
   - Back navigation: Clear path back to destinations list
   - Error handling: Invalid URLs show proper 404 pages

ROUTING HIERARCHY VISUALIZATION:
/destinations (DestinationsLayout + DestinationsPage)
├── /destinations/france (DestinationsLayout + CountryPage)
├── /destinations/japan (DestinationsLayout + CountryPage)
├── /destinations/italy (DestinationsLayout + CountryPage)
└── /destinations/brazil (DestinationsLayout + CountryPage)

All share the same DestinationsLayout (blue banner persists)
but each has unique CountryPage content.
*/