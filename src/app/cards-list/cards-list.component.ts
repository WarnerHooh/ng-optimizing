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
  @Output('create') create = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onEnter(event) {
    const title = event.target.value
    event.target.value = '';
    this.create.emit(title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
