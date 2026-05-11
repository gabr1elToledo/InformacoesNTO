
import { CharacterPage } from '../../interface/character-page.interface';

const DATA: CharacterPage = {
  character: {
    id: 'minato',
    name: 'Minato',
    slug: 'minato',
    image: 'characters/minato.jpg',
    difficulty: 'Média',
    tierPve: '?',
    tierPvp: '?',
    specialty: 'A definir',
    description: 'Descrição pendente.',
    buildTypes: ["distancia"]
  },

  builds: [
    {
      id: 'minato-build',
      characterId: 'minato',
      type: 'distancia',
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
