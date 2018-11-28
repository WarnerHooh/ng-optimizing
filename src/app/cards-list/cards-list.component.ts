import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card-item/card-item.component';
import { List } from 'immutable';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {

  title: string;
  @Input() cards: List<Card>;
  @Input() type: string;
  @Output('create') create = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onEnter() {
    this.create.emit(this.title);
    this.title = '';
  }

}
