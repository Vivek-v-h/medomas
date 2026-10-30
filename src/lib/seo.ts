import { companyInfo } from "@/data/company";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: "https://www.medomas.com",
    logo: "https://www.medomas.com/logo/medomas-logo.png",
    description: companyInfo.shortDescription,
    telephone: companyInfo.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyInfo.address.doorNo}, ${companyInfo.address.locality}, ${companyInfo.address.postOffice}`,
      addressLocality: companyInfo.address.city,
      addressRegion: companyInfo.address.state,
      postalCode: companyInfo.address.pincode,
      addressCountry: "IN",
    },
    slogan: companyInfo.tagline,
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: "https://www.medomas.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.medomas.com/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

