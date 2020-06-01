import { AddContractorComponent } from './../../components/contractors/addContractor/addContractor.component';
import { ChatComponent } from './../../components/chat/chat.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ChatsViewComponent } from 'src/app/components/chatsView/chatsView.component';
import { ComplainsComponent } from 'src/app/components/complains/complains.component';
import { AddComplainComponent } from 'src/app/components/addComplain/addComplain.component';
import { UserViewComponent } from 'src/app/components/userView/userView.component';
import { AddBookingComponent } from 'src/app/components/bookings/addBooking/addBooking.component';
import { ViewBookingComponent } from 'src/app/components/bookings/viewBooking/viewBooking.component';
import { OwnerComplainsComponent } from 'src/app/components/complains/ownerComplains/ownerComplains.component';
import { ViewContractorsComponent } from 'src/app/components/contractors/viewContractors/viewContractors.component';
import { CreateNotificationComponent } from 'src/app/components/notification/createNotification/createNotification.component';
import { ViewnotificationComponent } from 'src/app/components/notification/viewnotification/viewnotification.component';

export const content: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'chat', component: ChatsViewComponent
  },
  {
    path: 'chat/:type/:id', component: ChatComponent
  },
  {
    path:'complain', component: ComplainsComponent
  },
  {
    path:'complain/add', component: AddComplainComponent
  },
  {
    path:'userView/:id', component: UserViewComponent
  },
  {
    path: 'building',
    loadChildren: () => import('../../components/building/building.module').then(m => m.BuildingModule)
  },
  {
    path: 'room',
    loadChildren: () => import('../../components/room/room.module').then(m => m.RoomModule)
  },
  {
    path:'addbooking', component:AddBookingComponent
  },
  {
    path:'booking', component:ViewBookingComponent
  },
  { path:'ownercomplain',component:OwnerComplainsComponent},
  { path:'addcontractor',component:AddContractorComponent},
  { path:'viewcontractor',component:ViewContractorsComponent},
  { path:'viewcontractor/:id',component:ViewContractorsComponent},
  { path:'createnotification',component:CreateNotificationComponent},
  { path:'viewnotification',component:ViewnotificationComponent},
  {path: 'request',loadChildren: () => import('../../components/requests/requests.module').then(m => m.RequestsModule)}
];