// app/guides/page.js - GUIDES PAGE COMPONENT
// This page demonstrates how content works within a sidebar layout
// Key concepts demonstrated:
// 1. Page content within a sidebar layout pattern
// 2. Card-based content organization
// 3. Different content structure compared to destinations
// 4. How pages adapt to their layout constraints

// GUIDES PAGE COMPONENT
// This component renders inside the GuidesLayout sidebar structure
export default function GuidesPage() {
  // TRAVEL GUIDES DATA
  // Static data representing travel experts and their specialties
  const guides = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'European Travel Expert',
      avatar: '👩‍🦰',
      specialties: ['Budget Travel', 'Solo Female Travel', 'Cultural Immersion'],
      experience: '8 years',
      countries: 35,
      description: 'Sarah specializes in budget-friendly European adventures and has extensive experience helping solo female travelers navigate Europe safely and affordably.',
      topTip: 'Book accommodations in advance during peak season, but leave room for spontaneous discoveries!',
      languages: ['English', 'French', 'Spanish'],
      rating: 4.9
    },
    {
      id: 2,
      name: 'Marcus Chen',
      title: 'Asian Adventure Specialist',
      avatar: '👨‍🦱',
      specialties: ['Adventure Travel', 'Food Tourism', 'Photography'],
      experience: '12 years',
      countries: 28,
      description: 'Marcus is passionate about Asian cultures and outdoor adventures. He combines his love for photography with travel to capture authentic experiences.',
      topTip: 'Always try street food - it\'s where you\'ll find the most authentic flavors and connect with locals!',
      languages: ['English', 'Mandarin', 'Japanese'],
      rating: 4.8
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      title: 'Luxury & Wellness Travel Curator',
      avatar: '👩‍🦳',
      specialties: ['Luxury Travel', 'Wellness Retreats', 'Sustainable Tourism'],
      experience: '15 years',
      countries: 42,
      description: 'Elena curates high-end travel experiences with a focus on wellness and sustainability. She believes luxury travel can be both indulgent and responsible.',
      topTip: 'Invest in experiences over things - a cooking class or spa treatment creates lasting memories!',
      languages: ['English', 'Spanish', 'Portuguese'],
      rating: 5.0
    }
  ]

  return (
    <div className="p-8">
      {/* 
        PAGE HEADER
        Introduction to the guides section
      */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Meet Our Travel Experts
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our team of experienced travelers shares their knowledge, tips, and insider secrets 
          to help you make the most of your adventures. Each expert brings unique perspectives 
          and specialized knowledge from years of exploration.
        </p>
      </div>

      {/* 
        GUIDES GRID
        Display expert profiles in a responsive grid
        Note: This grid adapts to the sidebar layout constraints
      */}
      <div className="space-y-8">
        {guides.map((guide) => (
          <div key={guide.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            {/* Guide header with avatar and basic info */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6 mb-6">
              {/* Avatar and rating */}
              <div className="flex-shrink-0 text-center sm:text-left mb-4 sm:mb-0">
                <div className="text-6xl mb-2">{guide.avatar}</div>
                <div className="flex items-center justify-center sm:justify-start space-x-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-sm font-medium text-gray-700">{guide.rating}</span>
                </div>
              </div>
              
              {/* Guide details */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{guide.name}</h3>
                <p className="text-lg text-green-600 font-medium mb-3">{guide.title}</p>
                
                {/* Experience stats */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <span>🗓️</span>
                    <span>{guide.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🌍</span>
                    <span>{guide.countries} countries visited</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🗣️</span>
                    <span>{guide.languages.join(', ')}</span>
                  </div>
                </div>
                
                {/* Specialties tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border border-green-200"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Guide description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {guide.description}
              </p>
            </div>
            
            {/* Top tip section */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                💡 {guide.name.split(' ')[0]}'s Top Tip
              </h4>
              <p className="text-yellow-700 italic">
                "{guide.topTip}"
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn btn-primary flex-1 sm:flex-none">
                📧 Contact {guide.name.split(' ')[0]}
              </button>
              <button className="btn btn-secondary flex-1 sm:flex-none">
                📖 View All Guides
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 
        CALL TO ACTION SECTION
        Encourages user engagement
      */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Ready to Start Your Adventure?
        </h3>
        <p className="text-green-700 mb-6 max-w-2xl mx-auto">
          Our experts are here to help you plan the perfect trip. Whether you're looking for 
          budget tips, luxury experiences, or adventure recommendations, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary">
            🗨️ Ask Our Experts
          </button>
          <button className="btn btn-secondary">
            📚 Browse All Guides
          </button>
        </div>
      </div>

      {/* 
        LAYOUT LEARNING SECTION
        Educational content about sidebar layouts
      */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          🎓 Sidebar Layout Concepts
        </h3>
        <div className="text-blue-700 text-sm space-y-2">
          <p>
            <strong>Sidebar Layout:</strong> This page demonstrates how content adapts to a sidebar layout. 
            The sidebar on the left provides navigation and supplementary information, while this main 
            content area focuses on the primary information.
          </p>
          <p>
            <strong>Responsive Design:</strong> On mobile devices, the sidebar stacks above the content. 
            On larger screens, they sit side by side, making efficient use of screen space.
          </p>
          <p>
            <strong>Layout Persistence:</strong> Just like the destinations section, the sidebar and 
            header persist when navigating within the guides section, maintaining context and navigation.
          </p>
        </div>
      </div>
    </div>
  )
}

/*
GUIDES PAGE CONCEPTS EXPLAINED:

1. SIDEBAR LAYOUT ADAPTATION:
   - Content is designed to work within the sidebar layout constraints
   - Uses vertical stacking instead of wide grids due to narrower content area
   - Responsive design adapts to available space

2. CONTENT ORGANIZATION:
   - Expert profiles with comprehensive information
   - Card-based layout for easy scanning
   - Consistent information hierarchy across cards

3. LAYOUT INTEGRATION:
   - This page renders in the main content area of GuidesLayout
   - Sidebar navigation and tips remain visible and accessible
   - Demonstrates how pages work within layout constraints

4. RESPONSIVE CONSIDERATIONS:
   - Content adapts to both sidebar presence and screen size
   - Mobile-first approach with progressive enhancement
   - Flexible layouts that work in narrow and wide contexts

5. INTERACTIVE ELEMENTS:
   - Contact buttons for each expert
   - Call-to-action sections for engagement
   - Hover effects and transitions for better UX

6. DATA STRUCTURE:
   - Comprehensive expert profiles with multiple data points
   - Structured information that's easy to display and filter
   - Demonstrates realistic content patterns

7. VISUAL HIERARCHY:
   - Clear information hierarchy with headings and sections
   - Color coding for different types of information
   - Consistent spacing and typography

8. ACCESSIBILITY FEATURES:
   - Semantic HTML structure with proper headings
   - Color contrast for readability
   - Keyboard navigation support

LAYOUT COMPARISON WITH DESTINATIONS:
Destinations Page:
- Wide grid layout (2x2 country cards)
- Full-width content area
- Horizontal card arrangement

Guides Page:
- Vertical stacking layout
- Sidebar-constrained content area
- Detailed vertical cards

Both demonstrate how the same app can use different layout patterns
for different types of content while maintaining consistency.
*/