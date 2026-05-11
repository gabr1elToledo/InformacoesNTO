
import { CharacterPage } from '../../interface/character-page.interface';

const DATA: CharacterPage = {
  character: {
    id: 'kakashi',
    name: 'Kakashi',
    slug: 'kakashi',
    image: 'characters/kakashi.jpg',
    difficulty: 'Média',
    tierPve: '?',
    tierPvp: '?',
    specialty: 'A definir',
    description: 'Descrição pendente.',
    buildTypes: ["espada"]
  },

  builds: [
    {
      id: 'kakashi-build',
      characterId: 'kakashi',
      type: 'espada',
      title: 'Build Principal',
      pveTier: '?',
      pvpTier: '?',
      recommendedFor: [],
      strengths: [],
      weaknesses: [],
      combo: [],
      recommendedItems: [],
      recommendedCards: [],
      recommendedMacros: []
    }
  ],

  pveGuide: {
    strengths: [],
    weaknesses: [],
    bestFarms: [],
    tips: []
  },

  pvpGuide: {
    strengths: [],
    weaknesses: [],
    combos: [],
    matchups: []
  },

  items: [],
  cards: [],
  macros: []
};

export default DATA;
