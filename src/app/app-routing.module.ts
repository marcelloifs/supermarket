import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './shopping/components/product-detail/product-detail.component';
import { GroceriesComponent } from './shopping/components';

const routes: Routes = [
  {
    path: '',
    component: GroceriesComponent
  },
  {
    path: 'list/:productId',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
