import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingDecisionComponent } from './cooking-decision.component';

describe('CookingDecisionComponent', () => {
  let component: CookingDecisionComponent;
  let fixture: ComponentFixture<CookingDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingDecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
