// app/destinations/[country]/data.js - MOCK COUNTRY DATA
// This file contains static data for our country pages
// In a real application, this data would typically come from:
// - A database (PostgreSQL, MongoDB, etc.)
// - An API endpoint
// - A CMS (Content Management System)
// - Static files (JSON, Markdown, etc.)

// COUNTRY DATA OBJECT
// Each country has detailed information including travel tips and statistics
export const countryData = {
  // FRANCE DATA
  france: {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    capital: 'Paris',
    population: '67.4 million',
    currency: 'Euro (EUR)',
    language: 'French',
    timezone: 'Central European Time (CET)',
    bestTimeToVisit: 'April-June, September-October',
    
    // Travel tip with practical advice
    travelTip: 'Visit during shoulder season (April-May, September-October) for fewer crowds and pleasant weather. Book restaurants in advance, especially in Paris!',
    
    // Detailed description
    description: 'France captivates visitors with its rich history, world-renowned cuisine, and diverse landscapes. From the romantic streets of Paris to the lavender fields of Provence, France offers experiences for every type of traveler.',
    
    // Top attractions with descriptions
    attractions: [
      {
        name: 'Eiffel Tower',
        description: 'Iconic iron lattice tower and symbol of Paris',
        location: 'Paris'
      },
      {
        name: 'Louvre Museum',
        description: 'World\'s largest art museum, home to the Mona Lisa',
        location: 'Paris'
      },
      {
        name: 'Palace of Versailles',
        description: 'Opulent royal château with magnificent gardens',
        location: 'Versailles'
      },
      {
        name: 'French Riviera',
        description: 'Glamorous Mediterranean coastline',
        location: 'Southern France'
      }
    ],
    
    // Cultural insights
    culture: {
      cuisine: 'World-famous for wine, cheese, pastries, and fine dining',
      traditions: 'Art de vivre (art of living), café culture, fashion',
      etiquette: 'Greet with "Bonjour/Bonsoir", dress elegantly, appreciate good food'
    }
  },

  // JAPAN DATA
  japan: {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    capital: 'Tokyo',
    population: '125.8 million',
    currency: 'Japanese Yen (JPY)',
    language: 'Japanese',
    timezone: 'Japan Standard Time (JST)',
    bestTimeToVisit: 'March-May (cherry blossoms), September-November',
    
    travelTip: 'Get a JR Pass for unlimited train travel. Learn basic bowing etiquette and always carry cash as many places don\'t accept cards.',
    
    description: 'Japan seamlessly blends ancient traditions with cutting-edge technology. Experience serene temples, bustling cities, exquisite cuisine, and the famous Japanese hospitality known as "omotenashi".',
    
    attractions: [
      {
        name: 'Mount Fuji',
        description: 'Sacred mountain and iconic symbol of Japan',
        location: 'Honshu Island'
      },
      {
        name: 'Senso-ji Temple',
        description: 'Ancient Buddhist temple in historic Asakusa',
        location: 'Tokyo'
      },
      {
        name: 'Arashiyama Bamboo Grove',
        description: 'Enchanting bamboo forest walkway',
        location: 'Kyoto'
      },
      {
        name: 'Hiroshima Peace Memorial',
        description: 'Moving memorial and museum for peace',
        location: 'Hiroshima'
      }
    ],
    
    culture: {
      cuisine: 'Sushi, ramen, tempura, wagyu beef, and seasonal kaiseki dining',
      traditions: 'Tea ceremony, cherry blossom viewing, respect and harmony',
      etiquette: 'Bow when greeting, remove shoes indoors, quiet on public transport'
    }
  },

  // ITALY DATA
  italy: {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    capital: 'Rome',
    population: '59.1 million',
    currency: 'Euro (EUR)',
    language: 'Italian',
    timezone: 'Central European Time (CET)',
    bestTimeToVisit: 'April-June, September-October',
    
    travelTip: 'Eat like a local: cappuccino only in the morning, dinner after 8 PM. Book tickets in advance for popular attractions like the Colosseum and Uffizi Gallery.',
    
    description: 'Italy is a treasure trove of art, history, and culinary delights. From ancient Roman ruins to Renaissance masterpieces, from rolling Tuscan hills to dramatic coastal cliffs, Italy enchants at every turn.',
    
    attractions: [
      {
        name: 'Colosseum',
        description: 'Ancient Roman amphitheater and architectural marvel',
        location: 'Rome'
      },
      {
        name: 'Venice Canals',
        description: 'Romantic waterways and historic palaces',
        location: 'Venice'
      },
      {
        name: 'Leaning Tower of Pisa',
        description: 'Famous tilted bell tower',
        location: 'Pisa'
      },
      {
        name: 'Amalfi Coast',
        description: 'Stunning coastal scenery and charming villages',
        location: 'Southern Italy'
      }
    ],
    
    culture: {
      cuisine: 'Pasta, pizza, gelato, wine, and regional specialties',
      traditions: 'Family gatherings, passionate conversations, art appreciation',
      etiquette: 'Dress well, greet warmly, enjoy long meals with family and friends'
    }
  },

  // BRAZIL DATA
  brazil: {
    id: 'brazil',
    name: 'Brazil',
    flag: '🇧🇷',
    capital: 'Brasília',
    population: '215.3 million',
    currency: 'Brazilian Real (BRL)',
    language: 'Portuguese',
    timezone: 'Multiple (UTC-2 to UTC-5)',
    bestTimeToVisit: 'December-March (summer), May-September (dry season)',
    
    travelTip: 'Learn basic Portuguese phrases as English isn\'t widely spoken. Stay hydrated, use sunscreen, and be aware of your surroundings in tourist areas.',
    
    description: 'Brazil dazzles with its vibrant culture, stunning natural beauty, and infectious energy. From the Amazon rainforest to beautiful beaches, from carnival celebrations to world-class football, Brazil is a country of superlatives.',
    
    attractions: [
      {
        name: 'Christ the Redeemer',
        description: 'Iconic statue overlooking Rio de Janeiro',
        location: 'Rio de Janeiro'
      },
      {
        name: 'Copacabana Beach',
        description: 'World-famous beach with vibrant atmosphere',
        location: 'Rio de Janeiro'
      },
      {
        name: 'Amazon Rainforest',
        description: 'World\'s largest tropical rainforest',
        location: 'Northern Brazil'
      },
      {
        name: 'Iguazu Falls',
        description: 'Spectacular waterfalls on the border with Argentina',
        location: 'Southern Brazil'
      }
    ],
    
    culture: {
      cuisine: 'Feijoada, churrasco, açaí, caipirinhas, and tropical fruits',
      traditions: 'Carnival, samba, football (soccer), beach culture',
      etiquette: 'Warm greetings with kisses, casual dress, enjoy music and dance'
    }
  }
}

// HELPER FUNCTION: Get country data by ID
// This function safely retrieves country data and handles invalid country IDs
export function getCountryData(countryId) {
  // Convert to lowercase to handle case variations
  const normalizedId = countryId?.toLowerCase()
  
  // Return the country data if it exists, otherwise return null
  return countryData[normalizedId] || null
}

// HELPER FUNCTION: Get all available country IDs
// Useful for generating static paths or validation
export function getAllCountryIds() {
  return Object.keys(countryData)
}

// HELPER FUNCTION: Check if a country exists
// Returns boolean for quick validation
export function isValidCountry(countryId) {
  const normalizedId = countryId?.toLowerCase()
  return normalizedId in countryData
}

/*
DATA STRUCTURE CONCEPTS EXPLAINED:

1. STATIC DATA APPROACH:
   - This demonstrates how to structure and organize data
   - In production, you'd typically fetch this from an API or database
   - Static data is perfect for demos and prototypes

2. DATA NORMALIZATION:
   - Each country has a consistent structure
   - Makes it easy to render components dynamically
   - Enables type safety if using TypeScript

3. HELPER FUNCTIONS:
   - getCountryData(): Safe data retrieval with error handling
   - getAllCountryIds(): Useful for static generation
   - isValidCountry(): Quick validation for route parameters

4. ERROR HANDLING:
   - Functions handle invalid country IDs gracefully
   - Return null for missing data instead of throwing errors
   - Enables proper 404 handling in components

5. SCALABILITY CONSIDERATIONS:
   - Structure supports easy addition of new countries
   - Consistent schema makes maintenance easier
   - Could be easily migrated to a database or CMS

6. REAL-WORLD USAGE:
   - In production, this might be:
     * API endpoints: /api/countries/[id]
     * Database queries: SELECT * FROM countries WHERE id = ?
     * CMS content: Strapi, Contentful, etc.
     * Static files: JSON or Markdown files

7. PERFORMANCE NOTES:
   - Static data loads instantly
   - Could be cached or pre-generated for better performance
   - Consider lazy loading for large datasets
*/