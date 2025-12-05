// app/page.js - HOME PAGE COMPONENT
// This is the root page of our Next.js 14 App Router application
// Key concepts demonstrated:
// 1. This page.js file corresponds to the "/" route
// 2. It gets rendered inside the RootLayout's {children} prop
// 3. When users navigate away and back, this component may remount (unlike layouts)
// 4. Page components are Server Components by default in App Router

import Link from 'next/link'

// HOME PAGE COMPONENT
// This component renders the main landing page content
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 
        HERO SECTION
        This section provides a welcoming introduction to the app
        It demonstrates responsive design with Tailwind CSS classes
      */}
      <section className="bg-gradient-to-br from-travel-blue-50 to-white py-20">
        <div className="page-container text-center">
          {/* Main heading with gradient text effect */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Welcome to</span>
            <br />
            <span className="text-travel-blue-600">NextTravel Explorer</span>
          </h1>
          
          {/* Subtitle explaining the purpose */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the world while learning Next.js 14 App Router concepts like 
            <span className="font-semibold text-travel-blue-600"> layouts</span>, 
            <span className="font-semibold text-travel-blue-600"> nested routing</span>, and 
            <span className="font-semibold text-travel-blue-600"> component persistence</span>.
          </p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/destinations" 
              className="btn btn-primary text-lg px-8 py-3 inline-block"
            >
              🌎 Explore Destinations
            </Link>
            <Link 
              href="/guides" 
              className="btn btn-secondary text-lg px-8 py-3 inline-block"
            >
              🧭 Read Travel Guides
            </Link>
          </div>
        </div>
      </section>

      {/* 
        FEATURES SECTION
        This section highlights what users will learn about Next.js layouts
      */}
      <section className="py-16 bg-white">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Learn Next.js 14 App Router Concepts
          </h2>
          
          {/* Feature grid showcasing layout concepts */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Layout Persistence Feature */}
            <div className="card text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Layout Persistence</h3>
              <p className="text-gray-600">
                See how layouts stay mounted while you navigate between pages. 
                The navbar and footer never re-render, maintaining their state.
              </p>
            </div>
            
            {/* Nested Layouts Feature */}
            <div className="card text-center">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Nested Layouts</h3>
              <p className="text-gray-600">
                Explore how nested layouts work in the destinations and guides sections. 
                Each section has its own layout wrapping the content.
              </p>
            </div>
            
            {/* Error Boundaries Feature */}
            <div className="card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Error Handling</h3>
              <p className="text-gray-600">
                Learn about error boundaries, loading states, and how Next.js 14 
                handles errors at different route levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        GETTING STARTED SECTION
        Provides clear next steps for users
      */}
      <section className="py-16 bg-gray-50">
        <div className="page-container text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Ready to Explore?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start by visiting the Destinations section to see nested layouts in action, 
            or check out the Guides section to see a different layout pattern.
          </p>
          
          {/* Navigation cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/destinations" className="card hover:shadow-lg transition-all duration-200 block">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold mb-2">Visit Destinations</h3>
              <p className="text-gray-600 text-sm">
                Explore countries with dynamic routing and see how nested layouts work
              </p>
            </Link>
            
            <Link href="/guides" className="card hover:shadow-lg transition-all duration-200 block">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">Read Guides</h3>
              <p className="text-gray-600 text-sm">
                Check out travel guides with a sidebar layout pattern
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/*
PAGE COMPONENT CONCEPTS EXPLAINED:

1. SERVER COMPONENTS (Default):
   - This page component runs on the server by default
   - It can fetch data directly without useEffect or useState
   - Smaller JavaScript bundle sent to client
   - Better SEO and initial page load performance

2. FILE-BASED ROUTING:
   - This page.js file automatically creates the "/" route
   - No need to configure routes manually like in other frameworks
   - The file structure determines the URL structure

3. LAYOUT INTEGRATION:
   - This page content gets rendered inside RootLayout's {children}
   - The navbar and footer from RootLayout wrap this content
   - When navigating to other pages, RootLayout persists but this page unmounts

4. RESPONSIVE DESIGN:
   - Uses Tailwind's responsive prefixes (sm:, md:, lg:)
   - Mobile-first approach with progressive enhancement
   - Flexible grid layouts that adapt to screen size

5. COMPONENT COMPOSITION:
   - Demonstrates how pages work with layouts
   - Shows proper semantic HTML structure
   - Uses consistent styling patterns from globals.css

6. NAVIGATION:
   - Uses Next.js Link component for client-side navigation
   - Links to other routes that will demonstrate different layout patterns
   - Maintains the SPA experience while showing layout concepts
*/