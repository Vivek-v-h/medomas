export type ProductDivision = "MEDDENT" | "AYUMED";

export type ProductCategory =
  | "Pain Management & Anti-inflammatory Products"
  | "Antibiotic Product"
  | "Gastrointestinal Care"
  | "Oral Care"
  | "Other Healthcare Products";

export interface Product {
  id: string;
  slug: string;
  name: string;
  genericName: string;
  composition: string;
  division: ProductDivision;
  category: ProductCategory;
  dosageForm: "Tablet" | "DT Tablet" | "Injection" | "Mouthwash / Gargle" | "Syrup" | "Enema" | "Herbal Formulation";
  tagline?: string;
  featured?: boolean;
  image: string;
  packSize: string;
  storageCondition: string;
  prescriptionRequired: boolean;
  therapeuticClass: string;
  description: string;
}

export interface CompanyValue {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ManufacturingPartnerInfo {
  count: number;
  states: string[];
  rndConsultant: string;
}
