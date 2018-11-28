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

  activeCards: Card[] = this.cardsService.getActiveCards();

  backlogCards: Card[] = this.cardsService.getBacklogCards();

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
