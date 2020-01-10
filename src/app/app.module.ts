import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import * as fromComponents from './shopping/components';
import * as fromServices from './shopping/services';
import { AppComponent } from './app.component';
import { ModalContainerComponent } from './shopping/components';

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components
  ],
  exports: [
    ...fromComponents.components
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [...fromServices.services],
  entryComponents:[ModalContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
