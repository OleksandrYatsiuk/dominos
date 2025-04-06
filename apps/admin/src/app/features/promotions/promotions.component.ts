import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PromotionView, PromotionsService } from '@dominos/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TableModule } from 'primeng/table';
import { tableGlobalFilter } from '../../core/utils/table.utils';
import { InputTextModule } from 'primeng/inputtext';

export interface PromotionTableRecord {
  original: PromotionView;
  name: string;
  description: string;
}


@Component({
  selector: 'app-promotions',
  imports: [TableModule, InputTextModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromotionsComponent {
  promotionsService = inject(PromotionsService);

  globalFilter = tableGlobalFilter;

  pizzas = rxResource({
    loader: () => this.promotionsService.fetchPromotions()
      .pipe(map((response) => response.result.map((item) => this.transformRecord(item)))),
  });

  cols = signal([
    { field: 'name', header: 'Назва', sortable: true },
    { field: 'description', header: 'Деталі', sortable: false },
    { field: 'options', header: '', width: '100px' }
  ]);


  private transformRecord(promotion: PromotionView): PromotionTableRecord {
    return {
      original: promotion,
      name: promotion.name.uk,
      description: promotion.description.uk,
    }
  }

}
