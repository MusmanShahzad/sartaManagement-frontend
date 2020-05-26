import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { RequestRoutingModule } from './request-routing.module';
import { MyRequestsComponent } from './myRequests/myRequests.component';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  declarations: [RequestsComponent,MyRequestsComponent]
})
export class RequestsModule { }
