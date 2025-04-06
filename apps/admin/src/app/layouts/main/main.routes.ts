import { Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { provideStates } from "@ngxs/store";
import { ProfileState } from "../../core/states/profile/profile.state";

export default [
    {
        path: '',
        component: MainComponent,
        providers: [provideStates([ProfileState])],
        children: [
            {
                path: 'profile',
                loadChildren: () => import('../../features/profile/profile.routes'),
            },
            {
                path: 'pizzas',
                loadChildren: () => import('../../features/pizzas/pizzas.routes'),
            },
            {
                path: 'promotions',
                loadChildren: () => import('../../features/promotions/promotions.routes'),
            },
            {
                path: 'drinks',
                loadChildren: () => import('../../features/drinks/drinks.routes'),
            },
            {
                path: 'users',
                loadChildren: () => import('../../features/users/users.routes'),
            },
            {
                path: 'ingredients',
                loadChildren: () => import('../../features/ingredients/ingredients.routes'),
            }
        ]
    }
] as Routes;