import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Card } from '../card-item/card-item.component';

@Component({
  selector: 'app-backlog-cards',
  templateUrl: './backlog-cards.component.html',
  styleUrls: ['./backlog-cards.component.scss']
})
export class BacklogCardsComponent implements OnInit {
  cards: Card[] = Array.from({
    length: 100
  }).map((it, i) => ({
    title: `backlog - ${i + 1}`,
    point: 20 + i % 3
  }));

  @ViewChild('cardInput') cardInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onEnter(title: string) {
    console.log(title);
    this.cardInput.nativeElement.value = '';

    this.cards.unshift({
      title,
      point: 20 + this.cards.length % 3
    });
  }

}
