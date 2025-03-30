import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzasCardComponent } from './pizzas.component';

describe('PizzasCardComponent', () => {
  let component: PizzasCardComponent;
  let fixture: ComponentFixture<PizzasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzasCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
