// app/destinations/[country]/loading.js - LOADING UI COMPONENT
// This is a special Next.js 14 App Router file that shows loading states
// Key concepts demonstrated:
// 1. loading.js files automatically wrap route segments with Suspense
// 2. Shows immediately while the page.js component is loading/rendering
// 3. Scoped to the specific route segment (only [country] pages)
// 4. Provides instant feedback for better user experience

// LOADING COMPONENT
// This component displays while CountryPage is loading
export default function Loading() {
  return (
    <div className="p-8">
      {/* 
        LOADING HEADER
        Mimics the structure of the actual country page for smooth transition
      */}
      <div className="mb-8">
        {/* Back link skeleton */}
        <div className="mb-6">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
        
        {/* Country header skeleton */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Flag placeholder */}
          <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-2xl">🌍</span>
          </div>
          
          <div className="space-y-2">
            {/* Country name skeleton */}
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
            {/* Capital skeleton */}
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2 max-w-4xl">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* 
        LOADING MESSAGE WITH SPINNER
        Clear indication that content is loading
      */}
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          {/* Animated loading spinner */}
          <div className="loading-spinner mx-auto mb-4"></div>
          
          {/* Loading text */}
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Loading country details...
          </h2>
          <p className="text-gray-500">
            Preparing your travel information
          </p>
        </div>
      </div>

      {/* 
        SKELETON CONTENT GRID
        Placeholder for the main content sections
      */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Statistics cards skeletons */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* 
        TRAVEL TIP SKELETON
        Placeholder for the travel tip section
      */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2">💡</span>
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* 
        MAIN CONTENT SKELETONS
        Placeholders for attractions and culture sections
      */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Attractions skeleton */}
        <div>
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">🏛️</span>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture skeleton */}
        <div>
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-2">🎭</span>
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        EDUCATIONAL NOTE ABOUT LOADING STATES
        Helps users understand what they're seeing
      */}
      <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          🎓 Loading State Concepts
        </h3>
        <p className="text-blue-700 text-sm">
          This loading UI is defined in <code className="bg-blue-100 px-1 rounded">loading.js</code> and 
          automatically wraps the country page with React Suspense. It shows instantly while the page 
          component is rendering, providing immediate feedback to users.
        </p>
      </div>
    </div>
  )
}

/*
LOADING.JS CONCEPTS EXPLAINED:

1. AUTOMATIC SUSPENSE WRAPPING:
   - Next.js automatically wraps the route segment with React Suspense
   - loading.js becomes the fallback UI for the Suspense boundary
   - Shows immediately while page.js is loading/rendering

2. ROUTE SEGMENT SCOPING:
   - This loading.js only affects /destinations/[country]/* routes
   - Other routes (like /destinations) won't show this loading UI
   - Creates granular loading states for different parts of the app

3. LOADING UI BEST PRACTICES:
   - Skeleton screens that match the actual content structure
   - Immediate visual feedback (no blank screens)
   - Consistent with the overall design system
   - Clear indication that content is loading

4. PERFORMANCE BENEFITS:
   - Users see something immediately instead of a blank screen
   - Perceived performance improvement
   - Smooth transition from loading to actual content
   - Reduces bounce rate from slow-loading pages

5. ACCESSIBILITY CONSIDERATIONS:
   - Screen readers can announce loading state
   - Visual indicators for users with different needs
   - Maintains focus and navigation context

6. WHEN LOADING.JS TRIGGERS:
   - Server Components: While rendering on the server
   - Data fetching: During async operations
   - Code splitting: While loading JavaScript bundles
   - Navigation: When navigating to the route

7. LAYOUT INTEGRATION:
   - Loading UI renders inside the DestinationsLayout
   - The blue banner and layout structure remain visible
   - Only the page content area shows the loading state

8. SKELETON DESIGN PATTERNS:
   - Match the structure of the actual content
   - Use consistent spacing and proportions
   - Animate with pulse effects for better UX
   - Include recognizable elements (icons, shapes)

SUSPENSE BOUNDARY HIERARCHY:
RootLayout
└── DestinationsLayout (persists)
    └── Suspense Boundary (created by loading.js)
        ├── Loading Component (this file) - shows while loading
        └── CountryPage - shows when loaded

This creates smooth loading experiences while maintaining layout persistence.
*/