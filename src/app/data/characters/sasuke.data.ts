import { CharacterPage } from '../../interface/character-page.interface';

const SASUKE_DATA: CharacterPage = {
  character: {
    id: 'sasuke',
    name: 'Sasuke',
    slug: 'sasuke',
    image: 'characters/sasuke.jpg',
    difficulty: 'Alta',
    tierPve: 'A',
    tierPvp: 'S',
    specialty: 'Burst / Mobilidade',
    description: 'Especialista em dano explosivo e mobilidade.',
    buildTypes: ['espada', 'distancia']
  },

  builds: [
    {
      id: 'sasuke-espada',
      characterId: 'sasuke',
      type: 'espada',
      title: 'Build Espada',

      pveTier: 'A',
      pvpTier: 'S',

      recommendedFor: ['PvP', 'Burst', 'Duelo'],

      strengths: [
        'Alta mobilidade',
        'Burst explosivo',
        'Bom engage'
      ],

      weaknesses: [
        'Baixa resistência',
        'Dependente de combo'
      ],

      combo: [
        'Dash',
        'Stun',
        'Burst combo'
      ],

      recommendedItems: [
        'Espada lendária'
      ],

      recommendedCards: [
        'Carta de burst'
      ],

      recommendedMacros: [
        'Combo PvP'
      ]
    },
    {
      id: 'sasuke-distancia',
      characterId: 'sasuke',
      type: 'distancia',
      title: 'Build Distância',

      pveTier: 'A',
      pvpTier: 'A',

      recommendedFor: [
        'PvE',
        'Farm',
        'Controle'
      ],

      strengths: [
        'Range seguro',
        'Boa pressão'
      ],

      weaknesses: [
        'Menor burst'
      ],

      combo: [
        'Skill 1',
        'Skill 2',
        'Burst'
      ],

      recommendedItems: ['Set ranged'],
      recommendedCards: ['Carta ranged'],
      recommendedMacros: ['Macro farm']
    }
  ],

  pveGuide: {
    strengths: ['Farm rápido'],
    weaknesses: ['Squishy'],
    bestFarms: ['Hunt X'],
    tips: ['Evite overpull']
  },

  pvpGuide: {
    strengths: ['Burst alto'],
    weaknesses: ['Glass cannon'],
    combos: ['Dash > stun > burst'],
    matchups: ['Bom contra ranged']
  },

  items: [
    'Armadura X'
  ],

  cards: [
    'Carta crítica'
  ],

  macros: [
    'Auto combo'
  ]
};

export default SASUKE_DATA;