import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { PizzasCardComponent } from '../../ui/cards/pizzas/pizzas.component';
import { PizzasApiService } from '../../core/services/pizzas/pizzas.service';
import { map } from 'rxjs';
import { PromotionsApiService } from '../../core/services/promotions/promotions.service';
import { SliderComponent } from '../../ui/slider/slider.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PizzasCardComponent, SliderComponent, RouterModule, TranslateModule],
})
export class HomeComponent {
  private pizzasApiService = inject(PizzasApiService);
  private promotionsApiService = inject(PromotionsApiService);

  pizzas = rxResource({
    loader: () => this.pizzasApiService.fetchPizzasList().pipe(map((payload) => payload.result)),
  });

  promotions = rxResource({
    loader: () => this.promotionsApiService.fetchPromotionsList().pipe(map((payload) => payload.result)),
  });
}
