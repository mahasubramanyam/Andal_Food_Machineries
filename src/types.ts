export interface ProductVariant {
  capacity: string;
  motorPower: string;
  throughput: string;
  dimensions: string;
  electrical: string;
}

export interface Product {
  id: string;
  name: string;
  tamilName?: string;
  category: 'grinders' | 'kneading' | 'processing' | 'foodprep';
  shortDesc: string;
  capacitySummary: string;
  motorSummary: string;
  materialSummary: string;
  warranty: string;
  specs: {
    label: string;
    value: string;
  }[];
  variants?: ProductVariant[];
  applications: string[];
  schematicType: 'wet-grinder' | 'mixer-grinder' | 'feather-cleaner' | 'atta-kneader' | 'murukku-maker' | 'coconut-scraper' | 'vegetable-cutter';
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  specs: string;
  type: 'workshop' | 'assembly' | 'testing' | 'dispatch';
}

export interface TrustStat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}
