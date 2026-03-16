
export enum PartCategory {
  CPU = 'CPU',
  GPU = 'GPU',
  Motherboard = 'Motherboard',
  RAM = 'RAM',
  Storage = 'Storage',
  PSU = 'PSU',
  Case = 'Case',
  Cooler = 'Cooler',
  CaseFan = 'CaseFan'
}

export interface PCPart {
  category: PartCategory;
  name: string;
  wattage: number;
  price?: string;
  notes?: string;
}

export interface PartPriceInfo {
  category: PartCategory;
  name: string;
  priceNew: string;
  priceUsed: string;
  status: 'ok' | 'warning' | 'error';
  amazonUrl?: string;
}

export interface BenchmarkScore {
  name: string;
  score: string;
  description: string;
}

export interface GamePerformance {
  gameTitle: string;
  fps1080p: string;
  fps1440p: string;
  fps4k: string;
  settings: string;
}

export interface CompatibilityCheck {
  item: string;
  status: 'ok' | 'warning' | 'error';
  message: string;
}

export interface BuildSummary {
  totalWattage: number;
  compatibilityScore: number;
  issues: string[];
  recommendations: string[];
  sources: { title: string; uri: string }[];
  partsWithPrices: PartPriceInfo[];
  benchmarks: BenchmarkScore[];
  detailedChecks: CompatibilityCheck[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SavedBuild {
  id: string;
  name: string;
  parts: Record<PartCategory, string>;
  timestamp: number;
}
