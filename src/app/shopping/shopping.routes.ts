import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { GroceriesComponent } from './components';

export const ROUTES: Routes = [
  {
    path: '',
    component: GroceriesComponent
  },
  {
    path: 'list/:productId',
    component: ProductDetailComponent
  },
];
