import {
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  collapsed = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const savedState = localStorage.getItem(
        'mainSidebarCollapsed'
      );

      if (savedState) {
        this.collapsed = savedState === 'true';
      }
    }
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(
        'mainSidebarCollapsed',
        String(this.collapsed)
      );
    }
  }
}