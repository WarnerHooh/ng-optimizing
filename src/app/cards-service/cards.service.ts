import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  generatePoint() {
    return 25 + Math.floor(Math.random() * 5);
  }
}
