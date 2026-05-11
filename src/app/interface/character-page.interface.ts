import { Character } from './character.interface';
import { Build } from './build.interface';

export interface CharacterPage {
  character: Character;

  builds: Build[];

  pveGuide: {
    strengths: string[];
    weaknesses: string[];
    bestFarms: string[];
    tips: string[];
  };

  pvpGuide: {
    strengths: string[];
    weaknesses: string[];
    combos: string[];
    matchups: string[];
  };

  items: string[];

  cards: string[];

  macros: string[];
}