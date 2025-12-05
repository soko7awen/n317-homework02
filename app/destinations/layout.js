// app/destinations/layout.js
import Link from 'next/link'

export default function DestinationsLayout({ children }) {
  return (
    <div>
      <div style={{ background: '#0070f3', color: 'white', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1>Destinations</h1>
          <div>
            <Link href="/destinations" style={{ marginRight: '1rem', color: 'white' }}>All</Link>
            <Link href="/destinations/france" style={{ marginRight: '1rem', color: 'white' }}>France</Link>
            <Link href="/destinations/japan" style={{ marginRight: '1rem', color: 'white' }}>Japan</Link>
            <Link href="/destinations/italy" style={{ marginRight: '1rem', color: 'white' }}>Italy</Link>
            <Link href="/destinations/brazil" style={{ marginRight: '1rem', color: 'white' }}>Brazil</Link>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '1rem auto', padding: '0 1rem' }}>
        <div style={{ background: 'white', padding: '1rem' }}>
          {children}
        </div>
      </div>
    </div>
  )
}