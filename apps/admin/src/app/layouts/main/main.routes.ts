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
            }
        ]
    }
] as Routes;