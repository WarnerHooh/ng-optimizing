import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Card } from '../card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() cards: Card[];
  @Input() type: string;
  @Output('careate') careate = new EventEmitter<Card>();

  @ViewChild('cardInput') cardInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onEnter(title: string) {
    console.log(title);
    this.cardInput.nativeElement.value = '';

    this.careate.emit({
      title,
      point: 20 + this.cards.length % 3
    });
  }

}
