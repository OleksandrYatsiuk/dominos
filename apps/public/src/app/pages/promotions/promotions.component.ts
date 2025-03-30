import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PromotionsApiService } from '../../core/services/promotions/promotions.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PromotionsCardComponent } from '../../ui/cards/promotions/promotions.component';

@Component({
  selector: 'app-promotions',
  imports: [PromotionsCardComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionsComponent {
  private promotionsApiService = inject(PromotionsApiService);

  promotions = rxResource({
    loader: () => this.promotionsApiService.fetchPromotionsList().pipe(map((payload) => payload.result)),
  });
}
