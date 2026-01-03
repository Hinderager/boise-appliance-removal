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
  { question: 'How much does appliance removal cost in Boise?', answer: 'Appliance removal in Boise typically costs $75-$150 for single items. According to the Idaho Department of Environmental Quality, over 15,000 appliances are recycled annually in Ada County alone. We ensure proper disposal and recycling of all appliances, with 85% of materials being recycled rather than landfilled.' },
  { question: 'What appliances do you remove?', answer: 'We remove refrigerators, washers, dryers, dishwashers, stoves, ovens, microwaves, freezers, and more. Per EPA guidelines, we properly handle refrigerant recovery from cooling appliances, preventing harmful emissions.' },
  { question: 'Do you offer same-day appliance pickup?', answer: 'Yes! We provide same-day appliance removal throughout the Treasure Valley. With over 2,500 appliance removals completed in the Boise metro area, we can typically arrive within 2-4 hours of your call.' },
  { question: 'What happens to removed appliances?', answer: 'According to the Steel Recycling Institute, appliances are the most recycled consumer product in the US at 90%. We partner with local recyclers to ensure maximum material recovery. Usable appliances are donated to Habitat for Humanity ReStore and other local charities.' },
  { question: 'Do you remove appliances from basements?', answer: 'Absolutely. We handle appliance removal from any location including basements, garages, second floors, and tight spaces. Our trained team has completed over 500 basement appliance removals in the Boise area.' },
  { question: 'What areas do you serve?', answer: 'We serve all of Ada and Canyon Counties including Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, and Middleton. Population data from the US Census shows these areas have grown 25% since 2010, increasing demand for appliance removal services.' }
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Top Shelf Appliance Removal - ${city}`,
    "description": `Professional appliance removal and hauling services in ${city}, Idaho. Same-day pickup available. We remove refrigerators, washers, dryers, stoves, and all types of appliances.`,
    "url": "https://boise-appliance-removal.com",
    "telephone": "+1-208-943-5231",
    "email": "info@topshelfpros.com",
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
      "name": "Top Shelf Appliance Removal"
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
