import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tools.html',
  styleUrl: './tools.scss',
})
export class Tools {}