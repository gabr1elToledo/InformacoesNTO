import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell').then((m) => m.Shell),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'wiki',
        loadComponent: () =>
          import('./features/wiki/wiki').then((m) => m.Wiki),
      },
      {
        path: 'wiki/:slug',
        loadComponent: () =>
          import('./features/character-detail/character-detail').then(
            (m) => m.CharacterDetail
          ),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./features/news/news').then((m) => m.News),
      },
      {
        path: 'tools',
        loadComponent: () =>
          import('./features/tools/tools').then((m) => m.Tools),
      },
      {
        path: 'tools/mapa',
        loadComponent: () =>
          import('./features/tools/map-guide/map-guide').then(
            (m) => m.MapGuide
          ),
      },
      {
        path: 'tools/cards',
        loadComponent: () =>
          import('./features/tools/cards-guide/cards-guide').then(
            (m) => m.CardsGuide
          ),
      },
      {
        path: 'tools/bot-setup',
        loadComponent: () =>
          import('./features/tools/bot-setup/bot-setup').then(
            (m) => m.BotSetup
          ),
      },
      {
        path: 'items',
        loadComponent: () =>
          import('./features/items/items').then((m) => m.Items),
      },
      {
        path: 'quests',
        loadComponent: () =>
          import('./features/quests/quests').then((m) => m.Quests),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./features/admin/admin').then((m) => m.Admin),
      },
    ],
  },
];