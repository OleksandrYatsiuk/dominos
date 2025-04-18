import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../../card/card.component';
import { PromotionView } from '../../../core/interfaces/promotions.interface';

@Component({
  selector: 'app-promotions-card',
  imports: [CardComponent, TranslateModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionsCardComponent {
  promotion = input<PromotionView>();
}
