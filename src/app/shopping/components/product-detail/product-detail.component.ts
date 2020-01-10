import { Component, AfterViewInit } from '@angular/core';
import { ProductApiService } from 'src/app/shopping/services/product-api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shopping/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {

  product$?: Observable<Product>;

  constructor(private productService: ProductApiService,
              private activatedRoute: ActivatedRoute) {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const productId = paramMap.get('productId');
    this.product$ = this.productService.getProduct(productId);
  }

}
