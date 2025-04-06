import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IngredientView } from '../../interfaces/index';

@Injectable({ providedIn: 'root' })
export class IngredientsService {
  http = inject(HttpClient);

  fetchIngredients() {
    return this.http.get<IngredientView[]>('/ingredients');
  }
}
