import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Appliance Removal in Eagle, Idaho | Boise Appliance Removal',
  description: 'Professional appliance removal in Eagle, ID. Same-day service, eco-friendly disposal, upfront pricing. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-appliance-removal.com/eagle' },
}

export default function EaglePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal in Eagle</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fast, professional appliance removal service for Eagle residents.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide appliance removal throughout Eagle and the surrounding Treasure Valley.</p>
              <p>Whether you're upgrading your kitchen, clearing out a rental, or getting rid of an old water heater, we'll handle the heavy lifting.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">Services in Eagle</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/eagle/refrigerator-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Refrigerator Removal</h3>
                <p className="text-sm text-gray-600">Professional refrigerator removal in Eagle</p>
              </Link>
              <Link href="/eagle/washer-dryer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Washer & Dryer Removal</h3>
                <p className="text-sm text-gray-600">Professional washer & dryer removal in Eagle</p>
              </Link>
              <Link href="/eagle/stove-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Stove Removal</h3>
                <p className="text-sm text-gray-600">Professional stove removal in Eagle</p>
              </Link>
              <Link href="/eagle/dishwasher-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Dishwasher Removal</h3>
                <p className="text-sm text-gray-600">Professional dishwasher removal in Eagle</p>
              </Link>
              <Link href="/eagle/water-heater-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Water Heater Removal</h3>
                <p className="text-sm text-gray-600">Professional water heater removal in Eagle</p>
              </Link>
              <Link href="/eagle/freezer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Freezer Removal</h3>
                <p className="text-sm text-gray-600">Professional freezer removal in Eagle</p>
              </Link>
              <Link href="/eagle/microwave-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Microwave Removal</h3>
                <p className="text-sm text-gray-600">Professional microwave removal in Eagle</p>
              </Link>
              <Link href="/eagle/commercial-equipment-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue">Commercial Equipment</h3>
                <p className="text-sm text-gray-600">Professional commercial equipment in Eagle</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving Eagle and Surrounding Areas</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
