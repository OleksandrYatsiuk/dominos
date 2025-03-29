import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PizzaView } from '../../../core/interfaces/pizzas.interface';
import { BasketButtonComponent } from '../../basket-button/basket-button.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-pizzas-card',
  imports: [CardComponent, BasketButtonComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasCardComponent {

  pizza = input.required<PizzaView>();
}
