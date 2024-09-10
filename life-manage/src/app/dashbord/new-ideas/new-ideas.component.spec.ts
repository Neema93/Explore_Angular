import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIdeasComponent } from './new-ideas.component';

describe('NewIdeasComponent', () => {
  let component: NewIdeasComponent;
  let fixture: ComponentFixture<NewIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
