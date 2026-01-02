import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Laundry Appliances Removal | Boise Appliance Removal',
  description: 'Laundry appliance removal in Boise. Professional removal and disposal throughout the Treasure Valley.',
  alternates: { canonical: 'https://boise-appliance-removal.com/services/laundry-appliances' },
}

export default function LaundryAppliancesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Laundry Appliances Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional laundry appliances removal in Boise and the Treasure Valley.</p>
        </div>
      </section>
      <QuickQuoteBar />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We specialize in removing laundry appliances from homes and businesses across the Boise area.</p>
              <p>Our team handles everything from disconnection to hauling, and we'll recycle when possible.</p>
            </div>
            <h2 className="text-2xl font-bold text-dark-blue mb-6">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <Link href="/services/laundry-appliances/washer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue mb-1">Washing Machine Removal</h3>
                <p className="text-sm text-gray-600">Washer disconnection and removal</p>
              </Link>
              <Link href="/services/laundry-appliances/dryer-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue mb-1">Dryer Removal</h3>
                <p className="text-sm text-gray-600">Electric and gas dryer removal</p>
              </Link>
              <Link href="/services/laundry-appliances/washer-dryer-combo-removal" className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue mb-1">Washer/Dryer Combo Removal</h3>
                <p className="text-sm text-gray-600">Combo unit removal</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Laundry Appliances Removed?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
