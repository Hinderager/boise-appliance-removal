import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Recycle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Can You Recycle Old Refrigerators in Boise? Idaho Guide | Appliance Removal Pros',
  description: 'Yes, you can recycle old fridges in Boise - and it\'s required in most cases. Here\'s how refrigerator recycling works in the Treasure Valley and your best options.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/blogs/can-you-recycle-old-refrigerators',
  },
}

export default function CanYouRecycleOldRefrigerators() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/refrigerator-recycling-boise.webp"
          alt="Recycling Old Refrigerators in Boise Idaho"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Can You Recycle Old Refrigerators in Boise?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Short answer: yes, you can—and you probably should. In most cases, it's actually required.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Old refrigerators contain refrigerant chemicals that must be properly recovered before disposal. This isn't optional—it's federal law under the Clean Air Act. Beyond the legal requirements, recycling makes sense for environmental and practical reasons.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's how refrigerator recycling works in Boise and what options are available to Treasure Valley residents.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What's Inside That Old Fridge?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              A typical refrigerator contains a surprising mix of recyclable materials. About 80% of a fridge can actually be recycled—there's around 120 pounds of steel alone in an average unit.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Steel:</strong> The case and internal components. This is the most valuable recyclable material.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Copper:</strong> Found in the tubing and wiring. Copper has significant recycling value.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Aluminum:</strong> Used in heat exchangers. Also valuable as scrap.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Plastic and Glass:</strong> Liners, shelves, and drawers can often be recycled separately.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Refrigerant and Foam:</strong> These require special handling. The refrigerant must be recovered by certified technicians, and the foam insulation often contains blowing agents that need to be captured.
            </p>
          </div>
        </div>
      </section>

      {/* The Refrigerant Issue */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Why Refrigerant Recovery Matters
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is the critical part that makes DIY refrigerator disposal problematic.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Old refrigerators contain refrigerant chemicals—CFCs, HCFCs, or HFCs depending on when the fridge was made. These chemicals damage the ozone layer and contribute significantly to climate change. The refrigerant in one old fridge, if released, can have the same climate impact as driving a car for several months.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              It's illegal to release these chemicals into the atmosphere. Before any refrigerator can be scrapped or recycled, the refrigerant must be recovered by a certified technician using specialized equipment.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This isn't something you can do yourself—you need EPA Section 608 certification and recovery equipment. That's why proper disposal channels matter.
            </p>
          </div>
        </div>
      </section>

      {/* Recycling Options */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Your Recycling Options in the Treasure Valley
            </h2>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Idaho Power Rebate Program</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is genuinely the best deal if you qualify. Idaho Power will pick up your old refrigerator or freezer from your home for free and pay you $30-50 for the unit. They handle all the recycling properly. The catch: the unit must be between 10 and 30 cubic feet, plugged in and working, and you need to be an Idaho Power customer. They don't take commercial units or units with broken seals. But if you qualify? Free pickup plus cash in your pocket.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Scrap Metal Recyclers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Facilities like Pacific Steel & Recycling in Boise accept refrigerators. However, you'll need to either have the refrigerant removed first or use a facility that's certified to handle it. Some scrap yards charge a processing fee because of the refrigerant handling requirement. Others might give you a small payment for the metal value. Call ahead to confirm their policy and what condition they require.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Professional Removal Services</h3>
            <p className="text-gray-600 leading-relaxed">
              We pick up refrigerators throughout Boise, Meridian, Nampa, and the Treasure Valley and ensure they're recycled properly. The refrigerant gets recovered, the components get sorted, and the materials find new life. This option makes sense when you don't qualify for the utility rebate, when you have multiple items to remove, or when you simply want the problem handled without any hassle.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What Happens During Proper Recycling?
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Here's the typical process at a legitimate recycling facility:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Refrigerant Recovery:</strong> A certified tech connects equipment to extract the refrigerant safely for proper disposal or reclamation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Oil Removal:</strong> The compressor contains oil that also needs to be drained and processed</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Foam Processing:</strong> Specialized equipment captures blowing agents from the insulation foam</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Material Sorting:</strong> Steel, copper, aluminum, and plastic get separated for their respective recycling streams</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Metal Shredding:</strong> Steel and other metals get shredded and sent to mills for melting and reuse</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              This process ensures maximum material recovery while preventing harmful chemicals from entering the atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* What Not to Do */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What You Shouldn't Do
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Don't cut refrigerant lines yourself.</strong> Releasing refrigerant is illegal and harmful. You need proper certification and equipment.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Don't leave a fridge at the curb.</strong> It's illegal in most areas of Ada County, and regular trash pickup won't take it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Don't dump it anywhere.</strong> Illegal dumping of refrigerators carries serious fines—we're talking hundreds to thousands of dollars.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Don't sell a non-working fridge to someone who says they'll "fix it up"</strong> unless you know they're actually qualified. Often these end up improperly disposed of anyway.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Environmental Impact of Proper Recycling
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Getting old refrigerators properly recycled matters more than you might think.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              An old fridge uses 3-4 times more electricity than a new Energy Star model. By recycling old units—especially through utility programs—you're helping get energy hogs out of circulation. That benefits the grid and reduces overall energy demand in the Treasure Valley.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The materials themselves also matter. The steel in one refrigerator, when recycled, saves enough energy to power a home for about a month. Multiply that by thousands of fridges recycled each year in Idaho, and the impact adds up significantly.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Refrigerator recycling in Boise is straightforward if you use the right channels.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Use the Idaho Power program if you qualify—it's literally free money. If you don't qualify or want immediate removal, call us or another legitimate removal service to make sure it's handled right.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whatever you do, make sure the refrigerant gets recovered properly. It's the law, and it's the right thing to do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need a Refrigerator Removed?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle refrigerator recycling properly throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free quote.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Appliance Removal Tips
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
