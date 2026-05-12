import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bot-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bot-setup.html',
  styleUrl: './bot-setup.scss',
})
export class BotSetup {
  abaSelecionada = 'hp';

  selecionarAba(aba: string) {
    this.abaSelecionada = aba;
  }
}