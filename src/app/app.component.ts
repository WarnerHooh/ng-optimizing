import { Component, ElementRef, ViewChild } from '@angular/core';
import { Card } from './card-item/card-item.component';
import { CardsService } from './cards-service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cardsService: CardsService) {
  }

  activeCards: Card[] = Array.from({
    length: 100
  }).map((it, i) => ({
    title: `active - ${i + 1}`,
    point: this.cardsService.generatePoint()
  }));

  backlogCards: Card[] = Array.from({
    length: 100
  }).map((it, i) => ({
    title: `backlog - ${i + 1}`,
    point: this.cardsService.generatePoint()
  }));

  onCreateActiveCard(title) {
    this.activeCards.unshift({
      title,
      point: this.cardsService.generatePoint()
    });
  }

  onCreateBacklogCard(card) {
    this.backlogCards.unshift(card);
  }
}
