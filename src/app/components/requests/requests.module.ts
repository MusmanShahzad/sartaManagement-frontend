import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { RequestRoutingModule } from './request-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  declarations: [RequestsComponent]
})
export class RequestsModule { }
