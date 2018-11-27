import { Component, ElementRef, ViewChild } from '@angular/core';
import { Card } from './card-item/card-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeCards: Card[] = Array.from({
    length: 100
  }).map((it, i) => ({
    title: `active - ${i + 1}`,
    point: 20 + i % 3
  }));

  backlogCards: Card[] = Array.from({
    length: 100
  }).map((it, i) => ({
    title: `backlog - ${i + 1}`,
    point: 20 + i % 3
  }));

  onCreateActiveCard(card) {
    this.activeCards.unshift(card);
  }

  onCreateBacklogCard(card) {
    this.backlogCards.unshift(card);
  }
}
