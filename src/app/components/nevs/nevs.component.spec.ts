import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevsComponent } from './nevs.component';

describe('NevsComponent', () => {
  let component: NevsComponent;
  let fixture: ComponentFixture<NevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
