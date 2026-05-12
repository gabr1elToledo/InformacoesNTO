import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MonsterDrop {
  monsterName: string;
  dropChance: number;
  monsterImage?: string;
}

interface Item {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  rarity: string;
  drops: MonsterDrop[];
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.html',
  styleUrl: './items.scss',
})
export class Items {
  searchTerm = '';
  selectedItem: Item | null = null;

  items: Item[] = [
    {
      id: 1,
      name: 'Golden Kunai',
      image: 'assets/items/golden-kunai.png',
      category: 'Weapon',
      description: 'A legendary kunai infused with chakra.',
      rarity: 'Legendary',
      drops: [
        {
          monsterName: 'Madara Uchiha',
          dropChance: 0.8,
        },
        {
          monsterName: 'Obito',
          dropChance: 1.5,
        },
      ],
    },
    {
      id: 2,
      name: 'Chakra Crystal',
      image: 'assets/items/chakra-crystal.png',
      category: 'Material',
      description: 'Used for advanced crafting.',
      rarity: 'Rare',
      drops: [
        {
          monsterName: 'Akatsuki Assassin',
          dropChance: 8.2,
        },
        {
          monsterName: 'Rogue Ninja',
          dropChance: 12.4,
        },
      ],
    },
  ];

  get filteredItems() {
    return this.items.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openItem(item: Item) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }
}