
import { CharacterPage } from '../../interface/character-page.interface';

const DATA: CharacterPage = {
  character: {
    id: 'obito',
    name: 'Obito',
    slug: 'obito',
    image: 'characters/obito.jpg',
    difficulty: 'Média',
    tierPve: '?',
    tierPvp: '?',
    specialty: 'A definir',
    description: 'Descrição pendente.',
    buildTypes: ["luvas"]
  },

  builds: [
    {
      id: 'obito-build',
      characterId: 'obito',
      type: 'luvas',
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
