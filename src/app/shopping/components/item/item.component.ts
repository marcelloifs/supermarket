import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import { Product } from '../../models';
import { Router, NavigationExtras } from '@angular/router';
import { ModalService } from '../../services';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ModalContainerComponent } from '../modal-container/modal-container.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements AfterViewInit {
  @ViewChild('productContainer', { static: false }) productContainer: ElementRef | null = null;
  @Input() product?: Product;
  @Input() showDescription = false;
  @Input() enableLinks = true;
  @Input() setWidth = false;

  constructor(private router: Router,
              private modalService: ModalService,
              private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    if (this.setWidth && this.productContainer) {
      this.renderer.setStyle(this.productContainer.nativeElement, 'width', '180px');
    }
  }

  openProductDetails(productId: string): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { productId }
    };
    if (this.isMobileDevice()) {
      this.router.navigate(['/list/', productId, navigationExtras]);
    } else {
      const inputs = {
        productId
      };
      this.modalService.init(ModalContainerComponent, inputs, {});
    }
  }

  isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

}

