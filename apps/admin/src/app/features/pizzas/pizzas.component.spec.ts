import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzasComponent } from './pizzas.component';
import { provideHttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

describe('PizzasComponent', () => {
  let component: PizzasComponent;
  let fixture: ComponentFixture<PizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzasComponent, TableModule, InputTextModule],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
