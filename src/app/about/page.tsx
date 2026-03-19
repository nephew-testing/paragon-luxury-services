import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Paragon Luxury Services | Premium Restroom Rentals in Stamford, CT',
  description: 'Learn about Paragon Luxury Services, Fairfield County\'s trusted provider of luxury restroom trailers and portable toilet rentals. Our commitment to excellence and customer service.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About Paragon Luxury Services
          </h1>
          <p className="text-xl text-blue-100">
            Fairfield County's leading provider of premium restroom solutions since our founding. 
            Committed to excellence, reliability, and unmatched customer service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Paragon Luxury Services was founded with a simple mission: to elevate the standard 
                of portable restroom rentals in the tri-state area. We recognized that whether it's 
                a wedding, corporate event, or construction project, people deserve clean, comfortable, 
                and reliable restroom facilities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Based in Stamford, Connecticut, we've built our reputation on delivering exceptional 
                service throughout Fairfield County, Westchester County, and Bergen County. Every 
                rental reflects our commitment to quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                From luxury restroom trailers that rival hotel facilities to dependable portable 
                toilets for construction sites, we provide solutions that meet and exceed expectations.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://lirp.cdn-website.com/9a77bc82/dms3rep/multi/opt/Adobe+Express+-+file-1920w.png"
                alt="Paragon Luxury Services Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Paragon Luxury Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in equipment quality, cleanliness, and service delivery. 
                Every rental undergoes thorough inspection and preparation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable Service</h3>
              <p className="text-gray-600">
                Punctual delivery, professional setup, and responsive support. When you book with us, 
                you can count on us to be there when you need us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and work tirelessly to 
                provide solutions that make your event or project a success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-xl text-gray-600">
              Proudly serving communities throughout the tri-state area
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connecticut</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li>• Stamford (Our Home Base)</li>
                <li>• Greenwich</li>
                <li>• Darien</li>
                <li>• New Canaan</li>
                <li>• Westport</li>
                <li>• Norwalk</li>
                <li>• Fairfield</li>
                <li>• And surrounding Fairfield County communities</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">New York & New Jersey</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Westchester County, NY</li>
                <li>• Bergen County, NJ</li>
                <li>• White Plains</li>
                <li>• Rye</li>
                <li>• Scarsdale</li>
                <li>• And surrounding metropolitan areas</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-center">
                <svg className="h-24 w-24 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Headquarters</h4>
                <p className="text-gray-600">
                  <strong>Stamford, CT 06902</strong><br />
                  Centrally located to serve the entire tri-state area with fast, 
                  reliable delivery and pickup service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Paragon Luxury Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Service</h3>
                <p className="text-gray-600">Expert consultation, timely delivery, and professional setup and pickup services.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Equipment</h3>
                <p className="text-gray-600">Top-quality restroom trailers and portable toilets maintained to the highest standards.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Response</h3>
                <p className="text-gray-600">24/7 emergency services for urgent restroom needs and unexpected situations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">Deep knowledge of local regulations, venues, and requirements throughout our service area.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Solutions</h3>
                <p className="text-gray-600">Custom packages and flexible rental periods to meet your specific needs and budget.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Fair, transparent pricing with no hidden fees and flexible payment options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Paragon Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free quote and discover why we're Fairfield County's 
            trusted choice for luxury restroom rentals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a 
              href="tel:(203) 703-1921" 
              className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call (203) 703-1921
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}