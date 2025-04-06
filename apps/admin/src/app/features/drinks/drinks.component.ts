import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DrinksService, DrinkView } from '@dominos/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { tableGlobalFilter } from '../../core/utils/table.utils';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

interface DrinkTableView {
  original: DrinkView;
  name: string;
  size: number;
  price: number;
}

@Component({
  selector: 'app-drinks',
  imports: [TableModule, InputTextModule],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinksComponent {
  private drinksService = inject(DrinksService);

  pizzas = rxResource({
    loader: () => this.drinksService.fetchDrinks()
      .pipe(map((response) => response.result.map((item) => this.transformRecord(item)))),
  });

  globalFilter = tableGlobalFilter;

  cols = signal([
    { field: 'name', header: 'Назва', sortable: true },
    { field: 'price', header: 'Ціна', sortable: true },
    { field: 'size', header: 'Розмір', sortable: true },
    { field: 'options', header: '', width: '100px' }
  ]);

  private transformRecord(drink: DrinkView): DrinkTableView {
    return {
      original: drink,
      name: drink.name.uk,
      size: drink.size.small,
      price: drink.price.small,
    }
  }
}
