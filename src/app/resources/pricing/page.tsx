import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Guide | Boise Appliance Removal',
  description: 'How does appliance removal pricing work in Boise? Learn what affects the cost and how to get a free, honest quote.',
  alternates: { canonical: 'https://boise-appliance-removal.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Removal Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Straight pricing. No hidden fees. Call for an honest quote.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Here's the truth: every appliance removal job is a little different.</p>
              <p>A fridge in a garage is easier than a fridge in a basement. A single washing machine is less work than hauling out an entire kitchen's worth of appliances.</p>
              <p>That's why we don't list flat rates. Instead, here's what we look at when putting together your quote.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">What Affects Your Price</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Type &amp; Size of Appliance</h3>
                  <p className="text-gray-600 text-sm">A microwave or window AC unit is one thing. A full-size refrigerator, water heater, or commercial freezer is another. Bigger and heavier means more time and crew.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Number of Items</h3>
                  <p className="text-gray-600 text-sm">One appliance is straightforward. A full kitchen set, laundry room cleanout, or multi-unit haul gets bundled.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Location &amp; Access</h3>
                  <p className="text-gray-600 text-sm">Garage with a wide door is easy. Basement with narrow stairs, a second-floor walk-up, or tight turns takes more effort.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Disposal Requirements</h3>
                  <p className="text-gray-600 text-sm">Refrigerators and freezers need certified refrigerant recovery. Gas appliances need different handling than electric. That shapes the disposal side of the job.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Commercial Equipment</h3>
                  <p className="text-gray-600 text-sm">Restaurant equipment, industrial freezers, and built-in commercial units are case-by-case. Give us a call with the details.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-dark-blue mb-2">Same-Day vs. Scheduled</h3>
                  <p className="text-gray-600 text-sm">Standard scheduling is the easiest on cost. Rush or same-day jobs may run a little higher depending on availability.</p>
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
