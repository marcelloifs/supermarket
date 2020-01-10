import { Injectable } from '@angular/core';
import { Product } from '../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProductApiService {
  private endpoint = `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<Product>> {
    return this.http
      .get<any>(`${this.endpoint}/list`)
      .pipe(map((data) => {
        const products: Array<Product> = data.products;
        return products.map((product: Product) => new Product(product));
      }));
  }

  getProduct(productId: string): Observable<Product> {
    return this.http
      .get<Product>(`${this.endpoint}/${productId}/detail`)
      .pipe(map((product: Product) => new Product(product)));
  }
}
