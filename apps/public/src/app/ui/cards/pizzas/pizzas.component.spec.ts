import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzasCardComponent } from './pizzas.component';
import { provideTranslateService } from '@ngx-translate/core';

describe('PizzasCardComponent', () => {
  let component: PizzasCardComponent;
  let fixture: ComponentFixture<PizzasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzasCardComponent],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzasCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('pizza', { price: {}, name: { uk: 'Name' } });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
