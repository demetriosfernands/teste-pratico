import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSorteioComponent } from './cards-sorteio.component';

describe('TodoComponent', () => {
  let component: CardsSorteioComponent;
  let fixture: ComponentFixture<CardsSorteioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsSorteioComponent]
    });
    fixture = TestBed.createComponent(CardsSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
