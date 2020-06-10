import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./../shopping/shopping.module').then(mod => mod.ShoppingModule),
    },
    {
        path: '**',
        redirectTo: ''
    }
];
