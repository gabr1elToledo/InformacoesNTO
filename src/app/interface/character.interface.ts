export type TierRank =
  | 'S'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | '?';

export interface Character {
  id: string;
  name: string;
  slug: string;
  image: string;

  difficulty: 'Baixa' | 'Média' | 'Alta';

  tierPve: TierRank;
  tierPvp: TierRank;

  specialty: string;
  description: string;

  buildTypes: ('luvas' | 'espada' | 'distancia')[];
}