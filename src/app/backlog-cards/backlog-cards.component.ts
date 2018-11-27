import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-backlog-cards',
  templateUrl: './backlog-cards.component.html',
  styleUrls: ['./backlog-cards.component.scss']
})
export class BacklogCardsComponent implements OnInit {
  cards = Array.from({
    length: 100
  }).map((it, i) => `backlog - ${i + 1}`);

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
