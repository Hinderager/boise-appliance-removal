import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appliance Removal in Meridian, Idaho | Boise Appliance Removal',
  description: 'Professional appliance removal in Meridian, ID. Same-day service, eco-friendly disposal, upfront pricing. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-appliance-removal.com/meridian' },
}

export default function MeridianPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal in Meridian</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, professional appliance removal service for Meridian residents.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide appliance removal throughout Meridian and the surrounding Treasure Valley.</p>
              <p>Whether you're upgrading your kitchen, clearing out a rental, or getting rid of an old water heater, we'll handle the heavy lifting.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">Services in Meridian</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/meridian/refrigerator-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Refrigerator Removal</h3>
                <p className="text-sm text-gray-600">Professional refrigerator removal in Meridian</p>
              </Link>
              <Link href="/meridian/washer-dryer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Washer & Dryer Removal</h3>
                <p className="text-sm text-gray-600">Professional washer & dryer removal in Meridian</p>
              </Link>
              <Link href="/meridian/stove-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Stove Removal</h3>
                <p className="text-sm text-gray-600">Professional stove removal in Meridian</p>
              </Link>
              <Link href="/meridian/dishwasher-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Dishwasher Removal</h3>
                <p className="text-sm text-gray-600">Professional dishwasher removal in Meridian</p>
              </Link>
              <Link href="/meridian/water-heater-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Water Heater Removal</h3>
                <p className="text-sm text-gray-600">Professional water heater removal in Meridian</p>
              </Link>
              <Link href="/meridian/freezer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Freezer Removal</h3>
                <p className="text-sm text-gray-600">Professional freezer removal in Meridian</p>
              </Link>
              <Link href="/meridian/microwave-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Microwave Removal</h3>
                <p className="text-sm text-gray-600">Professional microwave removal in Meridian</p>
              </Link>
              <Link href="/meridian/commercial-equipment-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Commercial Equipment</h3>
                <p className="text-sm text-gray-600">Professional commercial equipment in Meridian</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Meridian and Surrounding Areas</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
