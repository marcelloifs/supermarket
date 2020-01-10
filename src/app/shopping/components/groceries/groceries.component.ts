import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductApiService } from 'src/app/shopping/services/product-api.service';
import { Product } from '../../models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  products: Array<Product> = [];
  productsFiltered: Array<Product> = [];
  products$: Observable<Array<Product>>;

  constructor(private productService: ProductApiService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.subscriptions.add(
      this.products$.subscribe((products: Array<Product>) => {
      this.products = products;
      this.productsFiltered = products;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  searchProducts(searchText: string): void {
    if (searchText.length > 0) {
      this.productsFiltered = this.products.filter((product: Product) => (product.name.toUpperCase()).startsWith(searchText.toUpperCase()));
    } else {
      this.productsFiltered = this.products;
    }
    }
}
