import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-active-cards',
  templateUrl: './active-cards.component.html',
  styleUrls: ['./active-cards.component.scss']
})
export class ActiveCardsComponent implements OnInit {
  cards = Array.from({
    length: 100
  }).map((it, i) => `active - ${i + 1}`);
  @ViewChild('cardInput') cardInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  onEnter(cardTitle: string) {
    console.log(cardTitle);
    this.cardInput.nativeElement.value = '';

    this.cards.unshift(cardTitle);
  }

}
