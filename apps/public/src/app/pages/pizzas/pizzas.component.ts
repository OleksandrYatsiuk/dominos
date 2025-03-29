import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PizzasApiService } from '../../core/services/pizzas/pizzas.service';
import { PizzasCardComponent } from '../../ui/cards/pizzas/pizzas.component';

@Component({
  selector: 'app-pizzas',
  imports: [PizzasCardComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasComponent {
  private pizzasApiService = inject(PizzasApiService);

  pizzas = rxResource({
    loader: () => this.pizzasApiService.fetchPizzasList().pipe(map((payload) => payload.result)),
  });
}
