import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Card } from '../card-item/card-item.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit, OnChanges {

  @Input() cards: Card[];
  @Input() type: string;
  @Output('create') create = new EventEmitter<Card>();

  @ViewChild('cardInput') cardInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onEnter(title: string) {
    console.log(title);
    this.cardInput.nativeElement.value = '';

    this.create.emit({
      title,
      point: 20 + this.cards.length % 3
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
