import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatChipsModule, MatInputModule
} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CardItemComponent } from './card-item/card-item.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsService } from './cards-service/cards.service';
import { FormsModule } from '@angular/forms';
import { CardInputComponent } from './cards-list/card-input/card-input.component';
import { ListComponent } from './cards-list/list/list.component';
import { FibonacciPipe } from './pipe/fibonacci.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CardItemComponent,
    CardsListComponent,
    CardInputComponent,
    ListComponent,
    FibonacciPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatChipsModule, MatInputModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
