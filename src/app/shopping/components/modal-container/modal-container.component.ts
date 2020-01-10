import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models';
import { ProductApiService, ModalService } from '../../services';

@Component({
    selector: 'app-modal-container',
    styleUrls: ['./modal-container.component.scss'],
    templateUrl: './modal-container.component.html'
})
export class ModalContainerComponent implements AfterViewInit {
  product$?: Observable<Product>;
  @ViewChild('modalWrapper', {static: false}) modal: ElementRef | null = null;
  

  constructor(private productService: ProductApiService,
              private modalService: ModalService,
              private renderer: Renderer2) {
    const productId = this.modalService.inputs ? this.modalService.inputs.productId : null;
    this.product$ = this.productService.getProduct(productId);
  }

  ngAfterViewInit(): void {
    this.setModalPosition();
}

public close() {
  this.modalService.destroy();
}

setModalPosition(): void {
  if (this.modal) {
      const offsetY = -Math.round((this.modal.nativeElement.offsetTop -
          ((window.innerHeight / 2) - (this.modal.nativeElement.clientHeight / 2))));
      const offsetX = -Math.round((this.modal.nativeElement.offsetLeft -
          ((window.innerWidth / 2) - (this.modal.nativeElement.clientWidth / 2))));
      this.renderer.setStyle(this.modal.nativeElement, 'transform', `translate(${offsetX}px, ${offsetY}px)`);
  }
}

}
