import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsGroupeComponent } from './boutons-groupe.component';

describe('BoutonsGroupeComponent', () => {
  let component: BoutonsGroupeComponent;
  let fixture: ComponentFixture<BoutonsGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoutonsGroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonsGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
