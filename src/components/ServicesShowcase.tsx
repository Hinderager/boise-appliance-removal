import Image from 'next/image'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Refrigerator & Freezer Removal',
    description: 'Getting a new fridge? We\'ll haul away your old one. Refrigerators and freezers are bulky, heavy, and contain refrigerants that need proper disposal. We handle all of that for you—just point to the old appliance and we\'ll take it from there. Same-day pickup available.',
    image: '/generated/refrigerator-removal.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Washer & Dryer Removal',
    description: 'Old washers and dryers are awkward to move and heavy as can be. We disconnect them (if needed), carry them out, and haul them away. Doesn\'t matter if they\'re in the basement, upstairs, or wedged into a tight laundry room—we\'ll get them out without damaging your home.',
    image: '/generated/washer-dryer-removal.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Stove & Oven Removal',
    description: 'Upgrading your kitchen? We remove old stoves, ranges, and wall ovens—gas or electric. Our team handles the heavy lifting and makes sure your old appliance is disposed of properly. Quick, clean, and no hassle on your end.',
    image: '/generated/oven-removal.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
  {
    title: 'Appliance Recycling',
    description: 'Old appliances don\'t belong in landfills. We partner with local recyclers to ensure your old refrigerators, washers, dryers, and other appliances are recycled responsibly. Metals get reclaimed, refrigerants get properly disposed of, and you get peace of mind knowing you did the right thing.',
    image: '/generated/dishwasher-removal.webp',
    link: 'tel:2085059352',
    buttonText: 'Call Now',
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Serving Boise and Surrounding Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Boise to the scenic stretches of the Treasure Valley, we provide fast and affordable appliance removal services for homes and businesses!
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Title - Mobile/Tablet only */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] lg:hidden w-full">
                {service.title}
              </h3>

              {/* Image - Second on mobile, alternates on desktop */}
              <div className={`relative w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                </div>
              </div>

              {/* Text Content - Alternates on desktop */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                {/* Title - Desktop only */}
                <h3 className="hidden lg:block text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-block bg-[#FFC845] hover:bg-[#e5b13d] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-16">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
