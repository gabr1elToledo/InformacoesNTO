export interface Build {
  id: string;

  characterId: string;

  type: 'luvas' | 'espada' | 'distancia';

  title: string;

  pveTier: string;
  pvpTier: string;

  recommendedFor: string[];

  strengths: string[];
  weaknesses: string[];

  combo: string[];

  recommendedItems: string[];
  recommendedCards: string[];
  recommendedMacros: string[];
}