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
        path: 'forum',
        loadComponent: () =>
          import('./features/forum/forum').then((m) => m.Forum),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./features/news/news').then((m) => m.News),
      },
      {
        path: 'builds',
        loadComponent: () =>
          import('./features/builds/builds').then((m) => m.Builds),
      },
      {
        path: 'tools',
        loadComponent: () =>
          import('./features/tools/tools').then((m) => m.Tools),
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./features/admin/admin').then((m) => m.Admin),
      },
    ],
  },
];