import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PizzasCardComponent } from '../../ui/cards/pizzas/pizzas.component';
import { PizzasApiService } from '../../core/services/pizzas/pizzas.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PizzasCardComponent],
})
export class HomeComponent {
  private pizzasApiService = inject(PizzasApiService);

  pizzas = rxResource({
    loader: () => this.pizzasApiService.fetchPizzasList().pipe(map((payload) => payload.result)),
  });
}
