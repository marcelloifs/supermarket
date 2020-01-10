import { DomService } from './dom.service';
import { ModalService } from './modal.service';
import {ProductApiService} from './product-api.service';

export const services: Array<any> = [
  DomService,
  ModalService,
  ProductApiService
];

export * from './dom.service';
export * from './modal.service';
export * from './product-api.service';
