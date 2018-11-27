import { Component, Input, OnInit } from '@angular/core';

export interface Card {
  title: string;
  point: number;
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  fibonacci() {
    console.log('fibonacci');
    return 'fibonacci';
  }

}
