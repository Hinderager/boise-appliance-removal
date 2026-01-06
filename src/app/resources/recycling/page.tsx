import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import { Phone, Recycle, Leaf, Factory, Trash2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appliance Recycling | Boise Appliance Removal',
  description: 'Learn how we recycle appliances in Boise. Eco-friendly disposal practices, metal recycling, and keeping appliances out of landfills.',
  alternates: { canonical: 'https://boise-appliance-removal.com/resources/recycling' },
}

export default function RecyclingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Appliance Recycling & Disposal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We recycle when we can, dispose responsibly when we can't.</p>
        </div>
      </section>
      <VisibleBreadcrumb />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Most old appliances don't belong in a landfill.</p>
              <p>Refrigerators, washers, stoves, and water heaters are made of steel, copper, and other recyclable materials. When we haul them away, we take them to local recycling facilities whenever possible.</p>
              <p>It's better for the environment, and honestly, it just makes sense.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark-blue mb-6">How We Handle Different Appliances</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Recycle className="w-10 h-10 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-dark-blue mb-2">Metal-Heavy Appliances</h3>
                      <p className="text-gray-600 mb-2">Refrigerators, freezers, washers, dryers, stoves, dishwashers, and water heaters.</p>
                      <p className="text-gray-600"><strong>What we do:</strong> These go to local scrap metal recyclers where they're broken down and the metal is reused. Steel, copper, and aluminum get melted down and turned into new products.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Factory className="w-10 h-10 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-dark-blue mb-2">Refrigerators & Air Conditioners</h3>
                      <p className="text-gray-600 mb-2">Anything with coolant or refrigerant.</p>
                      <p className="text-gray-600"><strong>What we do:</strong> These require special handling because of the refrigerants (Freon and similar chemicals). We work with certified facilities that safely extract and dispose of these substances before recycling the rest.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Leaf className="w-10 h-10 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-dark-blue mb-2">Working Appliances</h3>
                      <p className="text-gray-600 mb-2">Appliances that still work but aren't needed anymore.</p>
                      <p className="text-gray-600"><strong>What we do:</strong> If an appliance is in good condition, we'll donate it to local charities or resale organizations when possible. Someone else might need a working fridge or washer.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Trash2 className="w-10 h-10 text-[#FFC845] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-dark-blue mb-2">Non-Recyclable Items</h3>
                      <p className="text-gray-600 mb-2">Appliances that can't be recycled or donated.</p>
                      <p className="text-gray-600"><strong>What we do:</strong> If something truly can't be recycled or reused (damaged beyond repair, contaminated, etc.), we dispose of it properly at licensed facilities that meet Idaho regulations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Recycling Matters</h2>
            <p className="text-gray-200 mb-6 text-center text-lg">It's not just about being eco-friendly (though that's part of it).</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-[#FFC845]">Less Landfill Waste</h4>
                <p className="text-gray-300 text-sm">Appliances take up a ton of space in landfills. Recycling keeps them out and reduces waste.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-[#FFC845]">Conserves Resources</h4>
                <p className="text-gray-300 text-sm">Recycling metal means less mining for new materials. It's more efficient.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-[#FFC845]">Protects the Environment</h4>
                <p className="text-gray-300 text-sm">Properly disposing of refrigerants and hazardous materials prevents contamination.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2 text-[#FFC845]">Helps the Local Economy</h4>
                <p className="text-gray-300 text-sm">We work with local recycling centers and donation organizations right here in the Treasure Valley.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-blue mb-4">Ready to Get Rid of That Old Appliance?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">We'll haul it away and make sure it gets recycled or disposed of the right way.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
