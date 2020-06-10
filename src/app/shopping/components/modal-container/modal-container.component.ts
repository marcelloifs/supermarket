import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models';
import { ProductApiService, ModalService } from '../../services';

@Component({
    selector: 'app-modal-container',
    styleUrls: ['./modal-container.component.scss'],
    templateUrl: './modal-container.component.html'
})
export class ModalContainerComponent {
  product$?: Observable<Product>;
  @ViewChild('modalWrapper') modal: ElementRef | null = null;

  constructor(private productService: ProductApiService,
              private modalService: ModalService) {
    const productId = this.modalService.inputs ? this.modalService.inputs.productId : null;
    this.product$ = this.productService.getProduct(productId);
  }


public close() {
  this.modalService.destroy();
}

}
