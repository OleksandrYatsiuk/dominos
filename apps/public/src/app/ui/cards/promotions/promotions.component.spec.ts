import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromotionsCardComponent } from './promotions.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PromotionsCardComponent', () => {
  let component: PromotionsCardComponent;
  let fixture: ComponentFixture<PromotionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionsCardComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
