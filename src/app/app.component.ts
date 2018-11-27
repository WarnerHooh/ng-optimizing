import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-sample';

  activeCards = Array.from({
    length: 200
  }).map((it, i) => `active - ${i}`);

  backlogCards = Array.from({
    length: 200
  }).map((it, i) => `backlog - ${i}`);
}
