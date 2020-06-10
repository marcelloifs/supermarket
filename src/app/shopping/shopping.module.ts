import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import * as fromComponents from './components';
import * as fromServices from './services';
import { ModalContainerComponent } from './components';
import { RouterModule } from '@angular/router';
import { ROUTES } from './shopping.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  exports: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: [...fromServices.services],
  entryComponents: [ModalContainerComponent]
})
export class ShoppingModule { }
