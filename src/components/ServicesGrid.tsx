'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Refrigerator, WashingMachine, CookingPot, Fan } from 'lucide-react'
import { useQuoteForm } from '@/context/QuoteFormContext'

const services = [
  {
    icon: Refrigerator,
    title: 'Refrigerator & Freezer Removal',
    description: 'We remove and haul away old refrigerators, freezers, and mini-fridges. Proper disposal and recycling included.',
  },
  {
    icon: WashingMachine,
    title: 'Washer & Dryer Removal',
    description: 'Old washers and dryers hauled away fast. We disconnect and remove them from wherever they sit.',
  },
  {
    icon: CookingPot,
    title: 'Stove & Oven Removal',
    description: 'Gas or electric stoves, ranges, and wall ovens. We handle the heavy lifting and proper disposal.',
  },
  {
    icon: Fan,
    title: 'Other Appliance Removal',
    description: 'Dishwashers, microwaves, AC units, water heaters, and more. If it plugs in, we can haul it away.',
  },
]

export function ServicesGrid() {
  const { mobileFormExpanded, desktopFormExpanded } = useQuoteForm()

  return (
    <section id="services" className={`${mobileFormExpanded ? 'mt-0 pt-[4.5rem]' : '-mt-14 pt-[4.5rem]'} ${desktopFormExpanded ? 'md:mt-0 md:pt-36' : 'md:mt-0 md:pt-12'} pb-20 bg-gradient-to-b from-transparent via-blue-50/30 to-slate-100/50 relative overflow-hidden`}>
      {/* Gradient dot pattern background */}
      <div className="absolute inset-0 hidden md:block" style={{
        backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 10%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 10%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />
      {/* Mobile dot pattern */}
      <div className="absolute inset-0 md:hidden" style={{
        backgroundImage: `radial-gradient(circle, #10477d 3px, transparent 3px)`,
        backgroundSize: '16px 16px',
        maskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        WebkitMaskImage: `radial-gradient(ellipse 85% 65% at 0% 0%, black, transparent 60%), radial-gradient(ellipse 85% 65% at 100% 100%, black, transparent 60%)`,
        maskComposite: 'add',
        WebkitMaskComposite: 'source-over',
        opacity: 0.2
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-blue mb-4 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional appliance removal and hauling services for the Treasure Valley
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group shadow-2xl hover:shadow-[0_20px_50px_rgba(16,_71,_125,_0.7)] hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-dark-blue flex flex-col"
                style={{
                  boxShadow: '0 10px 30px rgba(16, 71, 125, 0.3), 0 5px 15px rgba(16, 71, 125, 0.2)'
                }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-dark-blue to-[#2064aa] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-dark-blue mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow">
                  <CardDescription className="text-base text-gray-600 flex-grow">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
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
