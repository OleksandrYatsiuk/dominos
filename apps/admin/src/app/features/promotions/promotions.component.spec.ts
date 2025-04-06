import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromotionsComponent } from './promotions.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { provideHttpClient } from '@angular/common/http';

describe('PromotionsComponent', () => {
  let component: PromotionsComponent;
  let fixture: ComponentFixture<PromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionsComponent, TableModule, InputTextModule],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
