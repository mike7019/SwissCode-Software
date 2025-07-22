import Head from 'next/head'

const SEO = ({
  title = 'SwissCode - Empresa Suiza de Software y Ciberseguridad | Desarrollo Digital Premium',
  description = 'SwissCode: Empresa líder suiza especializada en desarrollo de software de alta calidad, ciberseguridad avanzada y transformación digital para el mercado suizo.',
  keywords = 'empresa software suiza, ciberseguridad Suiza, desarrollo software Zurich, transformación digital Suiza, seguridad informática Swiss, software premium Ginebra, consultoría TI Suiza',
  image = '/swisscode-logo.svg',
  url = 'https://swisscode.ch',
  type = 'website',
  schemaData = null
}) => {
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SwissCode Software & Cybersecurity",
    "description": description,
    "url": url,
    "logo": `${url}${image}`,
    "foundingDate": "2024",
    "industry": "Software Development & Cybersecurity",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CH",
      "addressRegion": "Zurich",
      "addressLocality": "Zurich"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["German", "French", "Italian", "English", "Spanish"],
      "areaServed": ["CH", "EU"]
    },
    "sameAs": [
      "https://linkedin.com/company/swisscode-software",
      "https://github.com/swisscode"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Software Development",
          "description": "Desarrollo de software premium con estándares suizos de calidad"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Advanced Cybersecurity",
          "description": "Servicios avanzados de ciberseguridad empresarial"
        }
      }
    ],
    "knowsAbout": [
      "Software Development Switzerland",
      "Swiss Cybersecurity Market", 
      "Digital Transformation",
      "ISO 27001 Compliance",
      "GDPR Data Protection",
      "Cloud Computing Switzerland",
      "Swiss Banking Security",
      "Machine Learning",
      "Artificial Intelligence"
    ]
  }

  return (
    <Head>
      {/* Basic Meta Tags optimized for Swiss market */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="SwissCode Software & Cybersecurity" />
      <meta name="language" content="es" />
      <meta name="geo.region" content="CH" />
      <meta name="geo.country" content="Switzerland" />
      <meta name="geo.placename" content="Zurich, Geneva" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Swiss market specific meta tags */}
      <meta name="target-country" content="CH" />
      <meta name="target-language" content="de, fr, it, en, es" />
      <meta name="business-category" content="Software Development, Cybersecurity" />
      <meta name="service-area" content="Switzerland, European Union" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:alt" content="SwissCode - Premium Software & Cybersecurity" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="SwissCode Software" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="de_CH" />
      <meta property="og:locale:alternate" content="fr_CH" />
      <meta property="og:locale:alternate" content="it_CH" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:image:alt" content="SwissCode - Software Development & Cybersecurity" />
      <meta name="twitter:site" content="@SwissCode" />
      <meta name="twitter:creator" content="@SwissCode" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="es" href={url} />
      <link rel="alternate" hrefLang="de" href={url.replace('.ch', '.ch/de')} />
      <link rel="alternate" hrefLang="fr" href={url.replace('.ch', '.ch/fr')} />
      <link rel="alternate" hrefLang="it" href={url.replace('.ch', '.ch/it')} />
      <link rel="alternate" hrefLang="en" href={url.replace('.ch', '.ch/en')} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/swisscode-logo.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/swisscode-logo.svg" />
      <link rel="icon" type="image/svg+xml" href="/swisscode-logo.svg" />
      <link rel="shortcut icon" href="/swisscode-logo.svg" />
      
      {/* Additional SEO and branding */}
      <meta name="theme-color" content="#DC143C" />
      <meta name="msapplication-TileColor" content="#DC143C" />
      <meta name="application-name" content="SwissCode" />
      <meta name="apple-mobile-web-app-title" content="SwissCode" />
      
      {/* Swiss business specific tags */}
      <meta name="business-type" content="Technology Consulting" />
      <meta name="industry" content="Software Development, Cybersecurity" />
      <meta name="company-size" content="Boutique Consulting" />
      <meta name="expertise" content="Premium Software Development, Advanced Cybersecurity" />
      
      {/* Schema.org JSON-LD for Swiss market */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData || defaultSchemaData)
        }}
      />
      
      {/* Additional Swiss market schema for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SwissCode Software & Cybersecurity",
            "description": "Premium software development and cybersecurity services in Switzerland",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CH",
              "addressRegion": "Zurich"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.3769",
              "longitude": "8.5417"
            },
            "url": url,
            "priceRange": "Premium",
            "areaServed": {
              "@type": "Country",
              "name": "Switzerland"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "47.3769",
                "longitude": "8.5417"
              },
              "geoRadius": "100000"
            }
          })
        }}
      />
    </Head>
  )
}

export default SEO
