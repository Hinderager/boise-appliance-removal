import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Appliance Removal in Nampa, Idaho | Boise Appliance Removal',
  description: 'Professional appliance removal in Nampa, ID. Same-day service, eco-friendly disposal, upfront pricing. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-appliance-removal.com/nampa' },
}

export default function NampaPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal in Nampa</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, professional appliance removal service for Nampa residents.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide appliance removal throughout Nampa and the surrounding Treasure Valley.</p>
              <p>Whether you're upgrading your kitchen, clearing out a rental, or getting rid of an old water heater, we'll handle the heavy lifting.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">Services in Nampa</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/nampa/refrigerator-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Refrigerator Removal</h3>
                <p className="text-sm text-gray-600">Professional refrigerator removal in Nampa</p>
              </Link>
              <Link href="/nampa/washer-dryer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Washer & Dryer Removal</h3>
                <p className="text-sm text-gray-600">Professional washer & dryer removal in Nampa</p>
              </Link>
              <Link href="/nampa/stove-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Stove Removal</h3>
                <p className="text-sm text-gray-600">Professional stove removal in Nampa</p>
              </Link>
              <Link href="/nampa/dishwasher-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Dishwasher Removal</h3>
                <p className="text-sm text-gray-600">Professional dishwasher removal in Nampa</p>
              </Link>
              <Link href="/nampa/water-heater-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Water Heater Removal</h3>
                <p className="text-sm text-gray-600">Professional water heater removal in Nampa</p>
              </Link>
              <Link href="/nampa/freezer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Freezer Removal</h3>
                <p className="text-sm text-gray-600">Professional freezer removal in Nampa</p>
              </Link>
              <Link href="/nampa/microwave-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Microwave Removal</h3>
                <p className="text-sm text-gray-600">Professional microwave removal in Nampa</p>
              </Link>
              <Link href="/nampa/commercial-equipment-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Commercial Equipment</h3>
                <p className="text-sm text-gray-600">Professional commercial equipment in Nampa</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Nampa and Surrounding Areas</h2>
            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Nampa Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <Link
                  href="/cities-served/nampa/downtown-nampa"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Downtown Nampa</span>
                </Link>
                <Link
                  href="/cities-served/nampa/karcher"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Karcher</span>
                </Link>
                <Link
                  href="/cities-served/nampa/lake-lowell"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Lake Lowell</span>
                </Link>
                <Link
                  href="/cities-served/nampa/midway"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Midway</span>
                </Link>
              </div>
            </div>

          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
