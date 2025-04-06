import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PizzasService, PizzaView } from '@dominos/core';
import { map } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { tableGlobalFilter } from '../../core/utils/table.utils';

interface TablePizzaRecord {
  original: PizzaView;
  name: string;
  price: number;
  size: number;
}

@Component({
  selector: 'app-pizzas',
  imports: [CommonModule, TableModule, InputTextModule],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasComponent {
  private pizzasService = inject(PizzasService);

  pizzas = rxResource({
    loader: () => this.pizzasService.fetchPizzas()
      .pipe(map((response) => response.result.map((item) => this.transformRecord(item)))),
  });

  globalFilter = tableGlobalFilter;

  cols = signal([
    { field: 'name', header: 'Назва', sortable: true },
    { field: 'price', header: 'Ціна', sortable: true },
    { field: 'size', header: 'Розмір', sortable: true },
    { field: 'options', header: '', width: '100px' }
  ]);

  private transformRecord(pizza: PizzaView): TablePizzaRecord {
    return {
      original: pizza,
      name: pizza.name.uk,
      price: pizza.price.small,
      size: pizza.size.small,
    }
  }
}
