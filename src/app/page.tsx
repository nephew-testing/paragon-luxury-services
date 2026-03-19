import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Paragon Luxury Services | Luxury Restroom & Portable Toilet Rentals | Stamford, CT',
  description: 'Fairfield County\'s leading provider of luxury restroom trailer rentals, portable toilet rentals, and emergency restroom solutions. Premium comfort for weddings, events, and construction sites.',
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.82787-15%2F587810408_17916489567214198_8185247393187243925_n.jpg%3Fstp%3Ddst-jpegr_e35_p1080x1080_tt6%26_nc_cat%3D100%26ig_cache_key%3DMzc3MTAzNDA5MTIxMDc5NzgxNw%253D%253D.3-ccb7-5%26ccb%3D7-5%26_nc_sid%3D58cdad%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%253D%253D%26_nc_ohc%3D2QJa_2LtJRMQ7kNvwGvrda5%26_nc_oc%3DAdmIxT_sVaObA0UvzurKzl1cs7U6ptpwJw638aiBhM3RERgLLV3f4ocz0KjnjtpO8W4%26_nc_ad%3Dz-m%26_nc_cid%3D0%26_nc_zt%3D23%26se%3D-1%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_gid%3DuRFx5QCPqdbGuAb3qAEyIg%26oh%3D00_Afjn5JYBxlrAqSQ56TIwfEzUU-2q9wT5WJdHzDzE2Kn4tA%26oe%3D69291EEE')`
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              🎉 Booking Now for 2026! | 2025 Dates Going Fast – Don't Miss Out!
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium <span className="text-blue-400">Luxury</span><br />
            Restroom Rentals
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Elevating comfort, redefining restrooms – premium luxury restroom trailer rentals, 
            porta potty rentals, and emergency restroom solutions for events, job sites, and urgent needs 
            across Fairfield County CT, Westchester County NY, and Bergen County NJ.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              GET A FAST & FREE QUOTE
            </Link>
            <a 
              href="tel:(203) 703-1921" 
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Call (203) 703-1921
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Restroom Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to large-scale events, we provide the perfect restroom solution 
              for every occasion with unmatched cleanliness, reliability, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.82787-15%2F561085813_17911859403214198_2775158203794234017_n.jpg%3Fstp%3Ddst-jpegr_e35_p1080x1080_tt6%26_nc_cat%3D102%26ig_cache_key%3DMzczNzY0Mzg3NzU4Nzg1MDE2MA%253D%253D.3-ccb1-7%26ccb%3D1-7%26_nc_sid%3D58cdad%26efg%3DeyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%253D%253D%26_nc_ohc%3DTguXDnZMdMwQ7kNvwFsPLh7%26_nc_oc%3DAdkc-IdgAJ53vbU-bEFuYsv-fY9ccplGQjA30mONDmIwg8iTTssslIPJkiCFHKsGRro%26_nc_ad%3Dz-m%26_nc_cid%3D0%26_nc_zt%3D23%26se%3D-1%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_gid%3D2Kwmct-3fOzwoavhlLe8OQ%26oh%3D00_Afe68SIXCT4n4qAY41XKe77bOxCSbYGPtxDd8854jUuWcw%26oe%3D68EB3EDA"
                  alt="Luxury Restroom Trailer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">VIP Restroom Trailers</h3>
                <p className="text-gray-600 mb-6">
                  Our luxury restroom trailers feature flushing toilets, running water, climate control, 
                  and upscale interiors perfect for weddings and premium events.
                </p>
                <Link 
                  href="/luxury-restroom-trailers" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 bg-gray-200">
                <img 
                  src="https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Fscontent-vie1-1.cdninstagram.com%2Fv%2Ft51.2885-15%2F557248616_17910988011214198_3180405275067807197_n.jpg%3Fse%3D7%26stp%3Ddst-jpg_e35_tt6%26efg%3DeyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwMjR4MTM2NS5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ%26_nc_ht%3Dscontent-vie1-1.cdninstagram.com%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QGaU6VGboUWoHStKtKhbSs7jrDDl2gpdqcHv6LjMsOe3cyCqbf9XnL-zkOsMm1N0oc%26_nc_ohc%3D6e1WFEVlJhcQ7kNvwG3cYzB%26_nc_gid%3DzpP-Ql1wpuj-XBI9q3_nHw%26edm%3DABmJApABAAAA%26ccb%3D7-5%26ig_cache_key%3DMzczMjAxNTc4NzE5NzQ0MDg1NA%253D%253D.3-ccb7-5%26oh%3D00_AfZApeOukfOzrcbq9hzjGNzqHL26hkDbWS25eJPk02Yn_g%26oe%3D68E0257E%26_nc_sid%3Db41fef"
                  alt="Portable Toilet Rental"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Portable Toilets</h3>
                <p className="text-gray-600 mb-6">
                  Clean, reliable, and well-maintained portable toilets perfect for construction sites, 
                  outdoor events, and temporary needs.
                </p>
                <Link 
                  href="/portable-toilet-rentals" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="h-16 w-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.882 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h4 className="text-xl font-bold">24/7 Emergency</h4>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Rapid response emergency restroom solutions for urgent situations, natural disasters, 
                  and unexpected needs. Available 24/7.
                </p>
                <Link 
                  href="/emergency-restroom-solutions" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fairfield County's Premier Restroom Rental Company
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Paragon Luxury Services, we understand that comfort and cleanliness are essential, 
                whether you're planning an elegant wedding, managing a construction site, or hosting a 
                corporate event. Our commitment to excellence has made us the trusted choice throughout 
                Connecticut, New York, and New Jersey.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From luxury restroom trailers with all the amenities to reliable portable toilets, 
                we deliver solutions that exceed expectations. Every rental includes professional 
                service, timely delivery, and meticulous maintenance.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn About Our Story
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-xl shadow-2xl h-96 flex items-center justify-center">
                <p className="text-gray-600 text-center">Stamford, CT Service Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Proudly Serving the Tri-State Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Connecticut</h3>
              <p className="text-gray-600">
                Fairfield County including Stamford, Greenwich, Darien, New Canaan, 
                Westport, and surrounding areas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">New York</h3>
              <p className="text-gray-600">
                Westchester County including White Plains, Rye, Scarsdale, 
                and the greater New York metropolitan area.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">New Jersey</h3>
              <p className="text-gray-600">
                Bergen County and northern New Jersey, serving communities 
                throughout the region with premium restroom solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your fast and free quote today. Our team is standing by to help you 
            find the perfect restroom solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Your Free Quote
            </Link>
            <a 
              href="tel:(203) 703-1921" 
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call (203) 703-1921
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}