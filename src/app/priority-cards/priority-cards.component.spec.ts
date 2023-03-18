import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityCardsComponent } from './priority-cards.component';

describe('PriorityCardsComponent', () => {
  let component: PriorityCardsComponent;
  let fixture: ComponentFixture<PriorityCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
