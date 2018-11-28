import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent implements OnInit {

  title: string;
  @Output('create') create = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEnter() {
    this.create.emit(this.title);
    this.title = '';
  }
}
