// app/destinations/page.js - DESTINATIONS PAGE COMPONENT
// This page shows a grid of countries and demonstrates:
// 1. How pages work within nested layouts
// 2. Navigation to dynamic routes ([country])
// 3. Grid layouts with Tailwind CSS
// 4. Interactive cards with hover effects

import Link from 'next/link'

// DESTINATIONS PAGE COMPONENT
// This component renders inside the DestinationsLayout
export default function DestinationsPage() {
  // COUNTRIES DATA
  // In a real app, this might come from an API or database
  // Here we use static data to focus on layout concepts
  const countries = [
    {
      id: 'france',
      name: 'France',
      flag: '🇫🇷',
      description: 'Experience the romance of Paris, the beauty of Provence, and world-class cuisine.',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'French Riviera'],
      image: '🏰'
    },
    {
      id: 'japan',
      name: 'Japan',
      flag: '🇯🇵',
      description: 'Discover ancient traditions, modern technology, and incredible natural beauty.',
      highlights: ['Mount Fuji', 'Tokyo Skyline', 'Cherry Blossoms'],
      image: '🗾'
    },
    {
      id: 'italy',
      name: 'Italy',
      flag: '🇮🇹',
      description: 'Explore historic Rome, romantic Venice, and the stunning Amalfi Coast.',
      highlights: ['Colosseum', 'Venice Canals', 'Tuscany Hills'],
      image: '🏛️'
    },
    {
      id: 'brazil',
      name: 'Brazil',
      flag: '🇧🇷',
      description: 'Experience vibrant culture, beautiful beaches, and the Amazon rainforest.',
      highlights: ['Christ the Redeemer', 'Copacabana Beach', 'Amazon River'],
      image: '🏖️'
    }
  ]

  return (
    <div className="p-8">
      {/* 
        PAGE HEADER
        This header is specific to the destinations listing page
        It won't appear on individual country pages
      */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Choose Your Next Adventure
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Click on any country below to explore detailed information. 
          Notice how the layout banner stays in place while the content changes!
        </p>
      </div>

      {/* 
        COUNTRIES GRID
        This grid demonstrates responsive design and navigation to dynamic routes
        Each card links to /destinations/[country] where [country] is the country ID
      */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {countries.map((country) => (
          <Link 
            key={country.id}
            href={`/destinations/${country.id}`}
            className="group block"
          >
            {/* 
              COUNTRY CARD
              Each card is a clickable link that navigates to the country detail page
              The hover effects provide visual feedback for interactivity
            */}
            <div className="card group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
              {/* Country header with flag and name */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{country.flag}</span>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-travel-blue-600 transition-colors">
                    {country.name}
                  </h3>
                </div>
                <span className="text-3xl">{country.image}</span>
              </div>
              
              {/* Country description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {country.description}
              </p>
              
              {/* Highlights list */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Top Highlights:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {country.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-travel-blue-500 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Call to action */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-travel-blue-600 font-medium group-hover:text-travel-blue-700">
                  Explore {country.name}
                </span>
                <span className="text-travel-blue-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 
        LAYOUT LEARNING TIP
        This section helps users understand what they're seeing
      */}
      <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            🎓 Layout Learning Tip
          </h3>
          <p className="text-blue-700">
            When you click on a country, you'll navigate to <code className="bg-blue-100 px-2 py-1 rounded">/destinations/[country]</code>. 
            Notice how the blue banner above stays in place - that's the nested layout in action! 
            The banner is part of <code className="bg-blue-100 px-2 py-1 rounded">DestinationsLayout</code> and persists across all destination routes.
          </p>
        </div>
      </div>
    </div>
  )
}

/*
PAGE COMPONENT CONCEPTS EXPLAINED:

1. NESTED PAGE STRUCTURE:
   - This page renders inside DestinationsLayout
   - DestinationsLayout renders inside RootLayout
   - Creates hierarchy: RootLayout > DestinationsLayout > DestinationsPage

2. DYNAMIC ROUTE NAVIGATION:
   - Links use /destinations/${country.id} format
   - This navigates to the [country] dynamic route
   - Next.js automatically handles the routing

3. COMPONENT STATE AND REMOUNTING:
   - When navigating away from this page and back, it may remount
   - Unlike layouts, pages don't guarantee persistence
   - This is different from layout behavior

4. RESPONSIVE GRID DESIGN:
   - Uses Tailwind's grid system for responsive layout
   - md:grid-cols-2 lg:grid-cols-2 creates responsive columns
   - Cards adapt to different screen sizes

5. INTERACTIVE DESIGN PATTERNS:
   - Hover effects using group utilities
   - Transform animations for visual feedback
   - Color transitions for better UX

6. DATA STRUCTURE:
   - Static data array demonstrates typical data patterns
   - In real apps, this might come from APIs or databases
   - Shows how to structure country information

7. ACCESSIBILITY CONSIDERATIONS:
   - Semantic HTML structure with proper headings
   - Keyboard navigation support through Link components
   - Clear visual hierarchy and readable text

8. LAYOUT INTEGRATION:
   - This page content appears in DestinationsLayout's {children}
   - Inherits the gray background and white card styling
   - Demonstrates how pages work within layout constraints
*/