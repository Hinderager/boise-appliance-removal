import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, DollarSign, Home, ArrowUpDown, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Guide | Boise Appliance Removal',
  description: 'How much does appliance removal cost in Boise? Learn about our pricing, what affects the cost, and how to get a free quote.',
  alternates: { canonical: 'https://boise-appliance-removal.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Transparent pricing with no hidden fees.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Here's the truth: every appliance removal job is a little different.</p>
              <p>A fridge in a garage is easier than a fridge in a basement. A single washing machine costs less than hauling out an entire kitchen's worth of appliances.</p>
              <p>That said, here's how we price things and what you can expect to pay.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">Typical Price Ranges</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Single Appliance</h3>
                  <p className="text-3xl font-bold text-[#FFC845] mb-3">$75 - $150</p>
                  <p className="text-gray-600 text-sm">Refrigerator, washer, dryer, stove, dishwasher, or similar-sized appliance.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Multiple Appliances</h3>
                  <p className="text-3xl font-bold text-[#FFC845] mb-3">$200 - $400</p>
                  <p className="text-gray-600 text-sm">Full kitchen set, laundry room cleanout, or multiple large appliances.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Water Heater</h3>
                  <p className="text-3xl font-bold text-[#FFC845] mb-3">$100 - $175</p>
                  <p className="text-gray-600 text-sm">Includes disconnection assistance if needed and proper disposal.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Commercial Equipment</h3>
                  <p className="text-3xl font-bold text-[#FFC845] mb-3">Call for Quote</p>
                  <p className="text-gray-600 text-sm">Restaurant equipment, industrial freezers, and other commercial appliances.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Affects the Price</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-lg">
                  <Home className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-dark-blue mb-1">Location in Your Home</h4>
                    <p className="text-gray-600">A fridge in the garage is easy. A fridge in a basement with narrow stairs? That takes more time and effort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-lg">
                  <ArrowUpDown className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-dark-blue mb-1">ArrowUpDown and Access</h4>
                    <p className="text-gray-600">Ground floor with wide doorways? Easy. Third floor walk-up with tight turns? That's harder.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-lg">
                  <DollarSign className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-dark-blue mb-1">Number of Appliances</h4>
                    <p className="text-gray-600">One appliance is straightforward. Multiple items get bundled pricing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gradient-to-br from-slate-50 to-blue-50 p-5 rounded-lg">
                  <Truck className="w-8 h-8 text-[#FFC845] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-dark-blue mb-1">Disposal Fees</h4>
                    <p className="text-gray-600">Most appliances are recyclable, but some require special disposal (like refrigerators with coolant).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">No Hidden Fees</h2>
            <p className="text-gray-200 mb-4 text-lg">We'll give you a price before we start. That's what you'll pay.</p>
            <p className="text-gray-300">No surprise charges for stairs, disposal, fuel, or anything else. If the job ends up being easier than expected, we'll adjust the price down. If it's harder, we eat the difference.</p>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Get Your Free Quote</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Call us with details about what you need removed and we'll give you an honest price.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
