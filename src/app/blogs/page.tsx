import { Metadata } from 'next'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Appliance Removal Pros Blog | Tips & Guides for Appliance removal',
  description: 'Expert tips, guides, and insights about appliance removal in Boise and the Treasure Valley. Learn from the pros at Appliance Removal Pros.',
  alternates: {
    canonical: 'https://boise-appliance-removal.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "what-to-do-with-old-appliances-boise",
    "title": "What to Do With Old Appliances in Boise (Your Complete Guide)",
    "excerpt": "Not sure what to do with that old fridge or washer? Here are your best options for getting rid of appliances in the Treasure Valley.",
    "image": "/generated/old-appliances-boise-options.webp"
  },
  {
    "slug": "how-much-does-appliance-removal-cost",
    "title": "How Much Does Appliance Removal Cost in Boise?",
    "excerpt": "Wondering what you'll pay to haul away that old washer or fridge? Here's the real breakdown of appliance removal pricing.",
    "image": "/generated/appliance-removal-cost.webp"
  },
  {
    "slug": "can-you-recycle-old-refrigerators",
    "title": "Can You Recycle Old Refrigerators in Idaho?",
    "excerpt": "Yes, you can recycle old fridges - and it's actually required in many cases. Here's how refrigerator recycling works in the Boise area.",
    "image": "/generated/refrigerator-recycling-boise.webp"
  },
  {
    "slug": "preparing-appliances-for-removal",
    "title": "How to Prepare Appliances for Pickup (Quick Checklist)",
    "excerpt": "A few simple steps before your appliance removal appointment can save you time and hassle. Here's what to do.",
    "image": "/generated/preparing-appliances-removal.webp"
  },
  {
    "slug": "why-diy-appliance-removal-is-risky",
    "title": "Why DIY Appliance Removal Can Be Risky (And When It Makes Sense)",
    "excerpt": "Thinking about hauling that old fridge yourself? Here's what you should consider before you grab your dolly.",
    "image": "/generated/diy-appliance-removal-risks.webp"
  }
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Appliance Removal Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about appliance removal in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your appliance removal project.
          </p>
          <a
            href="tel:2083611982"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 361-1982
          </a>
        </div>
      </section>
    </main>
  )
}
