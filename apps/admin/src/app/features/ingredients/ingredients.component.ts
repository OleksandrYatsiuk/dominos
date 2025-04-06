import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { IngredientsService, IngredientView } from '@dominos/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { tableGlobalFilter } from '../../core/utils/table.utils';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


interface TableIngredientRecord {
  original: IngredientView;
  name: string;
}

@Component({
  selector: 'app-ingredients',
  imports: [TableModule, InputTextModule],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientsComponent {
  private ingredientsService = inject(IngredientsService);

  pizzas = rxResource({
    loader: () => this.ingredientsService.fetchIngredients()
      .pipe(map((response) => response.map((item) => this.transformRecord(item)))),
  });

  globalFilter = tableGlobalFilter;

  cols = signal([
    { field: 'name', header: 'Назва', sortable: true },
    { field: 'options', header: '', width: '100px' }
  ]);


  private transformRecord(ingredient: IngredientView): TableIngredientRecord {
    return {
      original: ingredient,
      name: ingredient.name.uk,
    }
  }
}
