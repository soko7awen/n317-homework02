// app/layout.js
import './globals.css'

export const metadata = {
  title: 'NextTravel Explorer',
  description: 'Travel website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <a href="/" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              🌎 NextTravel
            </a>
            <div style={{ float: 'right' }}>
              <a href="/" style={{ margin: '0 0.5rem' }}>Home</a>
              <a href="/destinations" style={{ margin: '0 0.5rem' }}>Destinations</a>
              <a href="/guides" style={{ margin: '0 0.5rem' }}>Guides</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}