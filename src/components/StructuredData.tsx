// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  {
    question: 'How much does appliance removal cost in Boise?',
    answer: 'Most single appliances run between $75-$125. Refrigerators and larger items might be a bit more. We provide free quotes with no hidden fees. Call (208) 505-9352 for pricing.',
  },
  {
    question: 'What types of appliances do you remove?',
    answer: 'We remove all types of household appliances including refrigerators, freezers, washers, dryers, stoves, ovens, dishwashers, microwaves, water heaters, air conditioners, and more. If it plugs in or runs on gas, we can haul it away.',
  },
  {
    question: 'Do you offer same-day appliance removal?',
    answer: 'Yes! We offer same-day appliance removal service in the Boise and Treasure Valley area. Call us in the morning and we can usually be there by afternoon. For urgent situations, call (208) 505-9352.',
  },
  {
    question: 'Do you disconnect appliances before removal?',
    answer: 'We can unplug and disconnect most electric appliances. For gas appliances like stoves or water heaters, we recommend having a licensed technician disconnect the gas line before we arrive for safety reasons.',
  },
  {
    question: 'What happens to the old appliances?',
    answer: 'We recycle appliances responsibly. Metals, plastics, and other materials are sorted and sent to recycling facilities. Refrigerants are properly recovered. Working appliances may be donated. Very little ends up in landfills.',
  },
  {
    question: 'What areas do you serve for appliance removal?',
    answer: 'We provide appliance removal services throughout the Treasure Valley including Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Garden City, and surrounding areas. Call to confirm service in your location.',
  },
  {
    question: 'Do I need to move the appliance outside before pickup?',
    answer: 'No, you don\'t need to move anything. Our team handles all the heavy lifting from wherever the appliance is located—basement, upstairs, garage, anywhere. Just clear a path and we\'ll handle the rest.',
  },
  {
    question: 'Can you remove multiple appliances at once?',
    answer: 'Yes, we can remove multiple appliances in one trip. This is often more cost-effective than separate pickups. We offer bundled pricing for multiple appliance removals.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Appliance Removal - ${city}`,
    "description": `Professional appliance removal and hauling services in ${city}, Idaho. Same-day pickup available. We remove refrigerators, washers, dryers, stoves, and all types of appliances.`,
    "url": "https://boise-appliance-removal.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-appliance-removal.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": [
      "Appliance Removal",
      "Refrigerator Removal",
      "Freezer Removal",
      "Washer Removal",
      "Dryer Removal",
      "Stove Removal",
      "Oven Removal",
      "Dishwasher Removal",
      "Water Heater Removal",
      "AC Unit Removal",
      "Appliance Hauling",
      "Appliance Recycling"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Appliance Removal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Boise Appliance Removal"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional appliance removal and hauling services in ${city} and the Treasure Valley. We remove refrigerators, washers, dryers, stoves, and all types of appliances with same-day service available.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
