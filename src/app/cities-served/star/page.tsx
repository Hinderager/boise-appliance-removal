import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appliance Removal in Star, Idaho | Boise Appliance Removal',
  description: 'Professional appliance removal in Star, ID. Same-day service, eco-friendly disposal, upfront pricing. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-appliance-removal.com/star' },
}

export default function StarPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal in Star</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, professional appliance removal service for Star residents.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide appliance removal throughout Star and the surrounding Treasure Valley.</p>
              <p>Whether you're upgrading your kitchen, clearing out a rental, or getting rid of an old water heater, we'll handle the heavy lifting.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">Services in Star</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/star/refrigerator-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Refrigerator Removal</h3>
                <p className="text-sm text-gray-600">Professional refrigerator removal in Star</p>
              </Link>
              <Link href="/star/washer-dryer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Washer & Dryer Removal</h3>
                <p className="text-sm text-gray-600">Professional washer & dryer removal in Star</p>
              </Link>
              <Link href="/star/stove-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Stove Removal</h3>
                <p className="text-sm text-gray-600">Professional stove removal in Star</p>
              </Link>
              <Link href="/star/dishwasher-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Dishwasher Removal</h3>
                <p className="text-sm text-gray-600">Professional dishwasher removal in Star</p>
              </Link>
              <Link href="/star/water-heater-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Water Heater Removal</h3>
                <p className="text-sm text-gray-600">Professional water heater removal in Star</p>
              </Link>
              <Link href="/star/freezer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Freezer Removal</h3>
                <p className="text-sm text-gray-600">Professional freezer removal in Star</p>
              </Link>
              <Link href="/star/microwave-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Microwave Removal</h3>
                <p className="text-sm text-gray-600">Professional microwave removal in Star</p>
              </Link>
              <Link href="/star/commercial-equipment-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Commercial Equipment</h3>
                <p className="text-sm text-gray-600">Professional commercial equipment in Star</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Star and Surrounding Areas</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
