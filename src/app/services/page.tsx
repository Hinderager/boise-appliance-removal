import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, UtensilsCrossed, WashingMachine, Flame, Building2 } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Appliance Removal Services | Boise Appliance Removal',
  description: 'Complete appliance removal services in Boise. Kitchen appliances, laundry equipment, water heaters, furnaces, and commercial equipment.',
  alternates: { canonical: 'https://boise-appliance-removal.com/services' },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional appliance removal for homes and businesses in the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We remove all types of appliances, from kitchen equipment to commercial-grade machinery.</p>
              <p>Every job includes hauling, loading, and responsible disposal or recycling.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services/kitchen-appliances" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <UtensilsCrossed className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Kitchen Appliances</h3>
                <p className="text-gray-600">Refrigerators, freezers, stoves, ovens, dishwashers, and microwaves.</p>
              </Link>
              <Link href="/services/laundry-appliances" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <WashingMachine className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Laundry Appliances</h3>
                <p className="text-gray-600">Washers, dryers, and combo units. We handle the disconnection and hauling.</p>
              </Link>
              <Link href="/services/large-appliances" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Flame className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Large Appliances</h3>
                <p className="text-gray-600">Water heaters, furnaces, AC units, and boilers.</p>
              </Link>
              <Link href="/services/commercial-appliances" className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Building2 className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Commercial Equipment</h3>
                <p className="text-gray-600">Restaurant equipment, commercial refrigeration, and industrial appliances.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Something Removed?</h2>
          <p className="text-gray-200 mb-6">Call us for a free quote.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
