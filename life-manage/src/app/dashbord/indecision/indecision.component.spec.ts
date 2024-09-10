import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndecisionComponent } from './indecision.component';

describe('IndecisionComponent', () => {
  let component: IndecisionComponent;
  let fixture: ComponentFixture<IndecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndecisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
