import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { TestingComponent } from './components/testing/testing.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from './shared/services/auth/login.service';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChatsViewComponent } from './components/chatsView/chatsView.component';
import { ChatComponent } from './components/chat/chat.component';
import { ComplainsComponent } from './components/complains/complains.component';
import { AddComplainComponent } from './components/addComplain/addComplain.component';
import { DateConvertorPipe } from './components/dateConvertor.pipe';
import { TypePipe } from './pipes/type.pipe';
import { UserViewComponent } from './components/userView/userView.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AddBookingComponent } from './components/bookings/addBooking/addBooking.component';
import { ViewBookingComponent } from './components/bookings/viewBooking/viewBooking.component';
import { ExtensionDataService } from './shared/services/extensionData.service';
import { MatVideoModule } from 'mat-video';
import { OwnerComplainsComponent } from './components/complains/ownerComplains/ownerComplains.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddContractorComponent } from './components/contractors/addContractor/addContractor.component';
import { ViewContractorsComponent } from './components/contractors/viewContractors/viewContractors.component';
import { CreateNotificationComponent } from './components/notification/createNotification/createNotification.component';
import { ViewnotificationComponent } from './components/notification/viewnotification/viewnotification.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent,
    LoginComponent,
    TestingComponent,
    RegisterComponent,
    ChatsViewComponent,
    ChatComponent,
    ComplainsComponent,
    AddComplainComponent,
    UserViewComponent,
    DateConvertorPipe,
    TypePipe,
    AddBookingComponent,
    ViewBookingComponent,
    OwnerComplainsComponent,
    AddContractorComponent,
    ViewContractorsComponent,
    CreateNotificationComponent,
    ViewnotificationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    ToastrModule.forRoot({
      maxOpened: 4,
    }),
    BsDatepickerModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatVideoModule,
    ModalModule.forRoot(),
  ],
  providers: [LoginService,ExtensionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
