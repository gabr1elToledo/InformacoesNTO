import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ALL_CHARACTERS } from '../../data/characters';

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './wiki.html',
  styleUrl: './wiki.scss',
})
export class Wiki {
  characters = ALL_CHARACTERS;

  searchTerm = '';
  selectedBuild = 'todos';
  sortOption = 'az';

  selectedPveTiers: string[] = [];
  selectedPvpTiers: string[] = [];
  selectedDifficulties: string[] = [];

  filtersCollapsed = false;

  tierOrder: Record<string, number> = {
    S: 7,
    A: 6,
    B: 5,
    C: 4,
    D: 3,
    E: 2,
    F: 1,
    '?': 0
  };

  toggleFilters() {
    this.filtersCollapsed = !this.filtersCollapsed;
  }

  get filteredCharacters() {
    let filtered = this.characters.filter((character) => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      const matchesBuild =
        this.selectedBuild === 'todos' ||
        character.buildTypes.includes(
          this.selectedBuild as 'luvas' | 'espada' | 'distancia'
        );

      const matchesPve =
        this.selectedPveTiers.length === 0 ||
        this.selectedPveTiers.includes(character.tierPve);

      const matchesPvp =
        this.selectedPvpTiers.length === 0 ||
        this.selectedPvpTiers.includes(character.tierPvp);

      const matchesDifficulty =
        this.selectedDifficulties.length === 0 ||
        this.selectedDifficulties.includes(character.difficulty);

      return (
        matchesSearch &&
        matchesBuild &&
        matchesPve &&
        matchesPvp &&
        matchesDifficulty
      );
    });

    switch (this.sortOption) {
      case 'az':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'za':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case 'pve':
        filtered.sort(
          (a, b) => this.tierOrder[b.tierPve] - this.tierOrder[a.tierPve]
        );
        break;

      case 'pvp':
        filtered.sort(
          (a, b) => this.tierOrder[b.tierPvp] - this.tierOrder[a.tierPvp]
        );
        break;
    }

    return filtered;
  }

  setBuildFilter(build: string) {
    this.selectedBuild = build;
  }

  toggleSelection(array: string[], value: string) {
    const index = array.indexOf(value);

    if (index > -1) {
      array.splice(index, 1);
    } else {
      array.push(value);
    }
  }
}