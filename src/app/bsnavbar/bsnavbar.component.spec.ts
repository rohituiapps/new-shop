import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsnavbarComponent } from './bsnavbar.component';

describe('BsnavbarComponent', () => {
  let component: BsnavbarComponent;
  let fixture: ComponentFixture<BsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
