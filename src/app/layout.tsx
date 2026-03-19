import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Link from 'next/link'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Paragon Luxury Services | Luxury Restroom & Portable Toilet Rentals | Stamford, CT',
  description: 'Fairfield County\'s leading provider of luxury restroom trailer rentals, portable toilet rentals, and emergency restroom solutions. Serving Stamford, CT and surrounding areas.',
  keywords: 'luxury restroom rentals, portable toilet rentals, restroom trailers, Stamford CT, Fairfield County, emergency restrooms',
  openGraph: {
    title: 'Paragon Luxury Services - Luxury Restroom Rentals',
    description: 'Premium restroom trailer and portable toilet rentals for events, construction, and emergencies.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style>{`
          :root {
            --primary: #197BFF;
            --secondary: #1E293B;
            --accent: #0095F6;
            --background: #EEEEEE;
            --text: #000000;
            --white: #FFFFFF;
            --gray-50: #F9FAFB;
            --gray-100: #F3F4F6;
            --gray-200: #E5E7EB;
            --gray-300: #D1D5DB;
            --gray-600: #4B5563;
            --gray-700: #374151;
            --gray-800: #1F2937;
            --gray-900: #111827;
          }
        `}</style>
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-3">
                <img 
                  src="https://lirp.cdn-website.com/9a77bc82/dms3rep/multi/opt/Adobe+Express+-+file-1920w.png" 
                  alt="Paragon Luxury Services"
                  className="h-12 w-auto"
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">Paragon Luxury Services</h1>
                  <p className="text-sm text-blue-600">Luxury Restroom Rentals</p>
                </div>
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                    Services
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link href="/luxury-restroom-trailers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Luxury Restroom Trailers</Link>
                      <Link href="/portable-toilet-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Portable Toilet Rentals</Link>
                      <Link href="/emergency-restroom-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Emergency Restroom Solutions</Link>
                      <Link href="/event-restroom-rentals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Event Restroom Rentals</Link>
                      <Link href="/climate-controlled-restrooms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Climate-Controlled Restrooms</Link>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
                <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">FAQ</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
              </nav>

              <div className="flex items-center space-x-4">
                <a href="tel:(203) 703-1921" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  (203) 703-1921
                </a>
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <img 
                  src="https://lirp.cdn-website.com/9a77bc82/dms3rep/multi/opt/Paragon-Luxury-Services-logowhite-4eca7c25-1920w.png" 
                  alt="Paragon Luxury Services"
                  className="h-16 w-auto mb-4"
                />
                <p className="text-gray-300 mb-4 max-w-md">
                  Fairfield County's leading provider of luxury restroom trailer rentals, portable toilet rentals, 
                  and emergency restroom solutions. Elevating comfort and redefining restrooms for every occasion.
                </p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Stamford, CT 06902
                  </p>
                  <p className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:(203) 703-1921" className="hover:text-blue-400 transition-colors">(203) 703-1921</a>
                  </p>
                  <p className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contact@paragonluxuryservices.com" className="hover:text-blue-400 transition-colors">
                      contact@paragonluxuryservices.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/luxury-restroom-trailers" className="text-gray-300 hover:text-blue-400 transition-colors">Luxury Restroom Trailers</Link></li>
                  <li><Link href="/portable-toilet-rentals" className="text-gray-300 hover:text-blue-400 transition-colors">Portable Toilet Rentals</Link></li>
                  <li><Link href="/emergency-restroom-solutions" className="text-gray-300 hover:text-blue-400 transition-colors">Emergency Solutions</Link></li>
                  <li><Link href="/event-restroom-rentals" className="text-gray-300 hover:text-blue-400 transition-colors">Event Restrooms</Link></li>
                  <li><Link href="/climate-controlled-restrooms" className="text-gray-300 hover:text-blue-400 transition-colors">Climate-Controlled</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Hours</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Monday - Saturday:</p>
                  <p className="font-medium">7:00 am - 9:00 pm</p>
                  <p>Sunday:</p>
                  <p className="font-medium">7:00 am - 5:00 pm</p>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Paragon Luxury Services. All rights reserved.
                Serving Fairfield County CT, Westchester County NY, and Bergen County NJ.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}