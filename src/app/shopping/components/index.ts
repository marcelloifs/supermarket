import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';

export const components: Array<any> = [
  ButtonComponent,
  ItemComponent,
  GroceriesComponent,
  ModalContainerComponent,
  ProductDetailComponent,
  SearchComponent,
];

export * from './product-detail/product-detail.component';
export * from './groceries/groceries.component';
export * from './item/item.component';
export * from './button/button.component';
export * from './search/search.component';
export * from './modal-container/modal-container.component';
