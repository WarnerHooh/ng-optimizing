import { Injectable } from '@angular/core';
import { Card } from '../card-item/card-item.component';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  generatePoint() {
    return 25 + Math.floor(Math.random() * 5);
  }

  getBacklogCards(): Card[] {
    return Array.from({
      length: 50
    }).map((it, i) => ({
      title: `card backlog - ${i + 1}`,
      point: this.generatePoint()
    }));
  }

  getActiveCards(): Card[] {
    return Array.from({
      length: 50
    }).map((it, i) => ({
      title: `card active - ${i + 1}`,
      point: this.generatePoint()
    }));
  }
}
