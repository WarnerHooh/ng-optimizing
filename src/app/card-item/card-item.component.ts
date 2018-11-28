import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

export interface Card {
  title: string;
  point: number;
}

const fibonacci = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    return fibonacci(this.card.point);
  }

}
