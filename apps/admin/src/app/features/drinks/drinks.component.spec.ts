import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinksComponent } from './drinks.component';
import { provideHttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

describe('DrinksComponent', () => {
  let component: DrinksComponent;
  let fixture: ComponentFixture<DrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksComponent, TableModule, InputTextModule],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
