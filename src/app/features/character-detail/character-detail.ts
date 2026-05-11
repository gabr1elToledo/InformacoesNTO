import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALL_CHARACTER_PAGES } from '../../data/characters/index';
import { Build } from '../../interface/build.interface';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  route = inject(ActivatedRoute);

  slug = this.route.snapshot.paramMap.get('slug');

  characterPage = ALL_CHARACTER_PAGES.find(
    (page) => page.character.slug === this.slug
  );

  activeTab = 'overview';

  selectedBuild: Build | null =
    this.characterPage?.builds?.[0] ?? null;

  setTab(tab: string) {
    this.activeTab = tab;
  }

  selectBuild(build: Build) {
    this.selectedBuild = build;
  }

  getBuildLabel(type: string) {
    switch (type) {
      case 'luvas':
        return '🥊 Luvas';
      case 'espada':
        return '⚔️ Espada';
      case 'distancia':
        return '🏹 Distância';
      default:
        return type;
    }
  }
}