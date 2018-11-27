import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogCardsComponent } from './backlog-cards.component';

describe('BacklogCardsComponent', () => {
  let component: BacklogCardsComponent;
  let fixture: ComponentFixture<BacklogCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklogCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
