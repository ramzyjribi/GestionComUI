import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeSelectComponent } from './page-commande-select.component';

describe('PageCommandeSelectComponent', () => {
  let component: PageCommandeSelectComponent;
  let fixture: ComponentFixture<PageCommandeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCommandeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCommandeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
