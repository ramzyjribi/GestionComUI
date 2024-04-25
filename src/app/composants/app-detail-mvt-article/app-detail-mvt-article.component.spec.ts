import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailMvtArticleComponent } from './app-detail-mvt-article.component';

describe('AppDetailMvtArticleComponent', () => {
  let component: AppDetailMvtArticleComponent;
  let fixture: ComponentFixture<AppDetailMvtArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppDetailMvtArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDetailMvtArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
