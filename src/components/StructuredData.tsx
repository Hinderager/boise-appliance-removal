// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Boise Appliance Removal",
    "description": `Professional appliance removal and hauling services in ${city}, Idaho. Same-day pickup available. We remove refrigerators, washers, dryers, stoves, and all types of appliances.`,
    "url": "https://boise-appliance-removal.com",
    "telephone": "+1-208-943-5231",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "392"
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
    "description": `Professional appliance removal and hauling services in ${city} and the Treasure Valley. We remove refrigerators, washers, dryers, stoves, and all types of appliances with same-day service available.`
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
    </>
  )
}
