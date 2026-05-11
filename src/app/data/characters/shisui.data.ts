
import { CharacterPage } from '../../interface/character-page.interface';

const DATA: CharacterPage = {
  character: {
    id: 'shisui',
    name: 'Shisui',
    slug: 'shisui',
    image: 'characters/shisui.jpg',
    difficulty: 'Média',
    tierPve: '?',
    tierPvp: '?',
    specialty: 'A definir',
    description: 'Descrição pendente.',
    buildTypes: ["luvas"]
  },

  builds: [
    {
      id: 'shisui-build',
      characterId: 'shisui',
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
