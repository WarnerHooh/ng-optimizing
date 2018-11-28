import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Card } from '../../card-item/card-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input() cards: List<Card>;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
