import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from './card-item/card-item.component';
import { CardsService } from './cards-service/cards.service';
import { List } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private cardsService: CardsService) {
  }

  activeCards: List<Card> = List(this.cardsService.getActiveCards());

  backlogCards: List<Card> = List(this.cardsService.getBacklogCards());

  onCreateCard(title: string, cards: List<Card>) {
    return cards.unshift({
      title,
      point: this.cardsService.generatePoint()
    });
  }
}
