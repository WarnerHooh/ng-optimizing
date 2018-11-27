import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('cardInput') cardInput: ElementRef;

  activeCards = Array.from({
    length: 100
  }).map((it, i) => `active - ${i + 1}`);

  backlogCards = Array.from({
    length: 100
  }).map((it, i) => `backlog - ${i + 1}`);

  onEnter(cardTitle: string) {
    console.log(cardTitle);
    this.cardInput.nativeElement.value = '';

    this.backlogCards.unshift(cardTitle);
  }
}
