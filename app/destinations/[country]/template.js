// app/destinations/[country]/template.js - TEMPLATE COMPONENT FOR ANIMATIONS
// This demonstrates the key difference between layouts and templates in Next.js 14
// Key concepts demonstrated:
// 1. Templates REMOUNT on every navigation (unlike layouts which persist)
// 2. Perfect for animations and transitions between routes
// 3. Wraps the page content with animation effects
// 4. Shows the template.js file convention in App Router

'use client' // Template components must be Client Components for animations

import { motion } from 'framer-motion'
import { useEffect } from 'react'

// TEMPLATE COMPONENT
// This component wraps the CountryPage and remounts on every navigation
export default function Template({ children }) {
  // LOG TEMPLATE MOUNTING BEHAVIOR
  // This demonstrates that templates remount on every navigation
  // Check the browser console to see this in action
  useEffect(() => {
    console.log('🔄 Template mounted! This happens on EVERY navigation to a country page.')
    console.log('📝 Key difference: Layouts persist, Templates remount')
    
    // Cleanup function to show unmounting
    return () => {
      console.log('🗑️ Template unmounting... (happens when navigating away)')
    }
  }, [])

  return (
    <>
      {/* 
        FRAMER MOTION ANIMATION WRAPPER
        This creates a fade-in effect every time a user navigates to a country page
        
        Animation Properties:
        - initial: Starting state (invisible)
        - animate: End state (visible)
        - exit: State when leaving (fade out)
        - transition: Animation timing and easing
      */}
      <motion.div
        initial={{ 
          opacity: 0,           // Start invisible
          y: 20                 // Start slightly below
        }}
        animate={{ 
          opacity: 1,           // Fade to visible
          y: 0                  // Move to normal position
        }}
        exit={{ 
          opacity: 0,           // Fade out when leaving
          y: -20                // Move slightly up
        }}
        transition={{
          duration: 0.4,        // Animation duration in seconds
          ease: "easeOut"       // Smooth easing function
        }}
        className="w-full h-full"
      >
        {/* 
          CHILDREN CONTENT
          This is where the actual CountryPage content gets rendered
          The animation wrapper applies to all the page content
          
          Template Hierarchy:
          DestinationsLayout (persists)
          └── Template (remounts on every navigation)
              └── CountryPage (the actual page content)
        */}
        {children}
      </motion.div>

      {/* 
        TEMPLATE BEHAVIOR INDICATOR
        Visual indicator to help users understand template behavior
        This appears briefly to show the template is working
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50"
      >
        <div className="flex items-center space-x-2">
          <span className="animate-pulse">🎭</span>
          <span>Template Animation Active</span>
        </div>
      </motion.div>
    </>
  )
}

/*
TEMPLATE.JS CONCEPTS EXPLAINED:

1. TEMPLATE VS LAYOUT BEHAVIOR:
   - Layouts: Persist across navigations, maintain state, don't remount
   - Templates: Remount on every navigation, perfect for animations
   - Templates wrap pages, layouts wrap route segments

2. REMOUNTING BEHAVIOR:
   - Every time you navigate to /destinations/france, /destinations/japan, etc.
   - This template component completely remounts (useEffect runs again)
   - Enables fresh animations and state reset on each navigation

3. ANIMATION PATTERNS:
   - Fade-in effect: opacity 0 → 1
   - Slide effect: y offset → 0
   - Smooth transitions with easing
   - Exit animations when navigating away

4. CLIENT COMPONENT REQUIREMENT:
   - Templates must be Client Components ('use client')
   - Needed for Framer Motion animations and useEffect
   - Runs in the browser for interactive features

5. FRAMER MOTION INTEGRATION:
   - motion.div creates animated wrapper
   - initial/animate/exit define animation states
   - transition controls timing and easing
   - Provides smooth, professional animations

6. PERFORMANCE CONSIDERATIONS:
   - Templates remount completely on navigation
   - More expensive than layout persistence
   - Use sparingly and only when animations are needed
   - Consider the trade-off between UX and performance

7. USE CASES FOR TEMPLATES:
   - Page transition animations
   - Resetting component state between routes
   - Route-specific effects or behaviors
   - Analytics tracking for page views

8. DEBUGGING AND LOGGING:
   - Console logs demonstrate mounting behavior
   - Visual indicator shows template is active
   - Helps developers understand the difference from layouts

WHEN TO USE TEMPLATES VS LAYOUTS:

Use Layouts when:
- You want UI to persist across navigations
- Maintaining component state is important
- Performance is a priority
- Providing consistent navigation/structure

Use Templates when:
- You need animations between route changes
- You want to reset state on navigation
- You need route-specific effects
- Creating page transition experiences

HIERARCHY COMPARISON:

With Layout Only:
DestinationsLayout (persists)
└── CountryPage (may or may not remount)

With Template:
DestinationsLayout (persists)
└── Template (always remounts)
    └── CountryPage (always remounts with template)

The template ensures the page always gets a fresh start with animations,
while the layout maintains the consistent structure and navigation.
*/