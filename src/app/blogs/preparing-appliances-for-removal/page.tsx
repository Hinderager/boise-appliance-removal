import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import { ClipboardList, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Prepare Appliances for Pickup in Boise | Appliance Removal Pros',
  description: 'A few simple prep steps before your appliance removal appointment saves time and hassle. Here\'s the quick checklist for Boise and Treasure Valley residents.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/blogs/preparing-appliances-for-removal',
  },
}

export default function PreparingAppliancesForRemoval() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/preparing-appliances-removal.webp"
          alt="Preparing Appliances for Removal in Boise"
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
            How to Prepare Appliances for Pickup
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A little prep work before your appliance removal appointment makes everything go smoother—for you and for us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're not asking you to do our job. But a few simple steps can speed up the removal, prevent surprises, and sometimes save you money.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a quick checklist organized by appliance type for Boise and Treasure Valley residents.
            </p>
          </div>
        </div>
      </section>

      {/* Refrigerators and Freezers */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Refrigerators and Freezers
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Empty it out.</strong> This seems obvious, but you'd be surprised. Remove all food, ice trays, and anything stored inside. Check the back of the freezer too—there's always something hiding back there.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Defrost if needed.</strong> If there's significant ice buildup, start defrosting 24 hours before pickup. Put towels down to catch the water. A frozen-solid freezer adds weight and makes a mess during transport.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Unplug it.</strong> Pull the plug at least a few hours before pickup. This lets any remaining ice melt and the compressor oil settle.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clean up water.</strong> There will be some water from melting ice and condensation. Mop it up so we're not tracking it through your house.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Leave the doors slightly open.</strong> This prevents mold and mildew from developing before pickup, especially if there's a delay.
            </p>
          </div>
        </div>
      </section>

      {/* Washers and Dryers */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Washers and Dryers
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disconnect water lines.</strong> For washers, turn off the water valves and disconnect the hoses. Have a bucket and towels ready—water will drain out. If you're not comfortable doing this, let us know when you schedule and we can handle it.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Unplug from power.</strong> Electric dryers especially—make sure they're unplugged. Some dryers use 240-volt outlets that are different from standard plugs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>For gas dryers:</strong> Don't disconnect the gas line yourself unless you know what you're doing. We can handle this, or you can have a plumber disconnect it beforehand if you prefer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clean out the lint trap.</strong> Not required, but appreciated. Also check behind the dryer—lint buildup back there can be a fire hazard anyway.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Check the drum.</strong> Remove any items from inside. We've found everything from socks to car keys to important documents in washer drums.
            </p>
          </div>
        </div>
      </section>

      {/* Stoves and Ovens */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Stoves and Ovens
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Electric stoves:</strong> Just unplug them. If your stove is hardwired rather than plugged in, let us know when you schedule—we can handle the disconnection.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Gas stoves:</strong> Have the gas line disconnected by a professional, or let us know you need help with this. Never try to disconnect gas yourself if you're not trained—this is a safety issue.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clean out the oven.</strong> Remove any pans, racks, or stored items from inside and the storage drawer below.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Pull it out from the wall if possible.</strong> If you can safely slide the stove out a few inches, it makes access easier. But don't force it—we have the equipment to move it safely.
            </p>
          </div>
        </div>
      </section>

      {/* Dishwashers */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Dishwashers
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Dishwashers require a bit more prep than other appliances:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Turn off water supply.</strong> There's usually a valve under the sink that controls water to the dishwasher</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Disconnect water line.</strong> Have towels ready for dripping water—there's always some in the line</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Unplug or turn off the breaker.</strong> Some dishwashers are hardwired rather than plugged in</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Run a drain cycle.</strong> Run the dishwasher empty one last time to clear out standing water</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Leave the door slightly open.</strong> This prevents musty smells from developing before removal</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              If the dishwasher is still mounted under the counter, we can remove it—just let us know the situation when you call.
            </p>
          </div>
        </div>
      </section>

      {/* Window AC Units */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Window AC Units
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Turn off and unplug.</strong> Let it sit for a few hours so condensation can drain from inside the unit.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Remove from window if possible.</strong> If it's a small unit you can handle safely, take it out and set it nearby. Otherwise, we'll remove it—just let us know it's still in the window.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Tell us the floor level.</strong> A window unit on the third floor of an apartment building takes more work than one at ground level in a house. This affects scheduling and sometimes pricing.
            </p>
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              General Tips for All Appliances
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clear a path.</strong> Make sure we can get from the appliance to our truck without obstacles. Move furniture, rugs, or other items that are in the way. The easier the access, the faster the job goes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Measure doorways if you're unsure.</strong> If you're not sure your appliance will fit through a door, measure it. Some fridges barely fit through standard doorways. Let us know if there might be access challenges—tight hallways, narrow doors, stairs.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Protect your floors.</strong> For heavy items on hardwood or tile, consider putting down cardboard or old towels. We use moving equipment that minimizes floor contact, but extra protection never hurts.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Secure pets.</strong> Dogs especially get excited when strangers come in. Put them in another room during the removal—it's safer for everyone and makes the job go faster.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Point out existing damage.</strong> If there's already damage to walls or floors near the appliance, show us before we start. This avoids any confusion about what was already there.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Be home or have someone there.</strong> We need access to the appliance and someone to confirm the job is done. If you can't be there, arrange for someone to let us in.
            </p>
          </div>
        </div>
      </section>

      {/* What If You Can't Prep */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What If You Can't Do the Prep?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you're unable to do this prep work—maybe you're elderly, have physical limitations, or simply don't have time—that's okay.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Let us know when you schedule, and we can discuss handling the disconnection and prep as part of the service. There may be an additional charge for disconnection work, but we'd rather know upfront than discover an unexpected situation when we arrive.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The goal is a smooth removal with no surprises. A few minutes of preparation helps make that happen—but if you can't do it, we'll figure it out together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Ready to Schedule Appliance Removal?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle appliance removal throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free quote.
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
