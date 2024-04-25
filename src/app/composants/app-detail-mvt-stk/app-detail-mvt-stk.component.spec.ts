import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailMvtStkComponent } from './app-detail-mvt-stk.component';

describe('AppDetailMvtStkComponent', () => {
  let component: AppDetailMvtStkComponent;
  let fixture: ComponentFixture<AppDetailMvtStkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDetailMvtStkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDetailMvtStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
