import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'pizzas',
        loadComponent: () => import('./pages/pizzas/pizzas.component').then((c) => c.PizzasComponent),
    },
    {
        path: 'promotions',
        loadComponent: () => import('./pages/promotions/promotions.component').then((c) => c.PromotionsComponent),
    },
    {
        path: '**',
        redirectTo: '/'
    },
];
