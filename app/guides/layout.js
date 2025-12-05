// app/guides/layout.js
import Link from 'next/link'

export default function GuidesLayout({ children }) {
  return (
    <div>
      <div style={{ background: '#10b981', color: 'white', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1>Travel Guides</h1>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '1rem auto', padding: '0 1rem', display: 'flex', gap: '1rem' }}>
        <div style={{ width: '200px' }}>
          <div style={{ padding: '1rem', background: '#f3f4f6' }}>
            <div><Link href="/guides">Experts</Link></div>
            <div><Link href="#">Tips</Link></div>
            <div><Link href="#">Packing</Link></div>
            <div><Link href="#">Budget</Link></div>
          </div>
        </div>
        <div style={{ flex: 1, background: 'white', padding: '1rem' }}>
          {children}
        </div>
      </div>
    </div>
  )
}