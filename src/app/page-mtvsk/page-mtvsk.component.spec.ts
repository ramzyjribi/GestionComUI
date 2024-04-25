import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMtvskComponent } from './page-mtvsk.component';

describe('PageMtvskComponent', () => {
  let component: PageMtvskComponent;
  let fixture: ComponentFixture<PageMtvskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageMtvskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMtvskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
