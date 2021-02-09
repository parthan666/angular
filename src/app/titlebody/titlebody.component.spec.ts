import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlebodyComponent } from './titlebody.component';

describe('TitlebodyComponent', () => {
  let component: TitlebodyComponent;
  let fixture: ComponentFixture<TitlebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
